import { Blink } from '@suzulabo/solid-base';
import { Show, Suspense } from 'solid-js';
import {
  RouteDataArgs,
  Title,
  createRouteData,
  useRouteData,
} from 'solid-start';
import { redirect } from 'solid-start/server';

import { Logo } from '~/components/Logo/Logo';
import Page from '~/components/Page/Page';
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
      const result = await fetchJSON(url);
      if (result.state === 'OK') {
        return { data: result.data, url };
      }
      return;
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
    <>
      <Title>Loading...</Title>
      <Blink style={{ margin: 'auto' }}>
        <Logo />
      </Blink>
    </>
  );
};

const Main = () => {
  const dataResult = useRouteData<typeof routeData>();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Title>Announcing♪</Title>
        <Show when={dataResult()} keyed>
          {({ data, url }) => (
            <>
              <Title>{data.info.name}</Title>
              {data}
              {url}
            </>
          )}
        </Show>
      </Suspense>
    </>
  );
};

export default () => {
  return (
    <>
      <Page>
        <Main />
      </Page>
    </>
  );
};
