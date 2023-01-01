import { Box } from '@suzulabo/solid-base';
import { RouteDataArgs, Title, useRouteData } from 'solid-start';
import { createServerData$, redirect } from 'solid-start/server';

import Page from '~/components/Page';
import fetchJSON from '~/lib/fetchJSON';

const toURL = (path: string | undefined, search: string) => {
  if (!path) {
    return;
  }
  const items = path.split('/');
  const first = items[0];
  const protocol = first === 'http' ? first : 'https';
  if (first === 'http' || first === 'https') {
    items.shift();
  }
  return `${protocol}://${items.join('/')}${search}`;
};

export const routeData = ({ params, location }: RouteDataArgs) => {
  const url = toURL(params['path'], location.search);
  return createServerData$(
    async ([url]) => {
      if (!url) {
        throw redirect('/');
      }
      return await fetchJSON(url);
    },
    {
      key: () => {
        return [url] as const;
      },
    }
  );
};

const Main = () => {
  const data = useRouteData<typeof routeData>();

  return (
    <>
      <Title>viewer</Title>
      <Page>
        <Box>{JSON.stringify(data(), null, 2)}</Box>
      </Page>
    </>
  );
};

export default () => {
  return (
    <>
      <Main />
    </>
  );
};
