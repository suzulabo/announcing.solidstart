import { Blink, Box } from '@suzulabo/solid-base';
import { Suspense } from 'solid-js';
import {
  RouteDataArgs,
  Title,
  createRouteData,
  useRouteData,
} from 'solid-start';
import { redirect } from 'solid-start/server';

import { Logo } from '~/components/Logo/Logo';
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
  return createRouteData(
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

const Loading = () => {
  return (
    <Blink style={{ margin: 'auto' }}>
      <Logo />
    </Blink>
  );
};

const Main = () => {
  const data = useRouteData<typeof routeData>();

  return (
    <>
      <Title>viewer</Title>
      <Page>
        <Suspense fallback={<Loading />}>
          <Box>{JSON.stringify(data(), null, 2)}</Box>
        </Suspense>
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
