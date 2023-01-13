import { RouteDataArgs, createRouteData, useRouteData } from 'solid-start';
import { redirect } from 'solid-start/server';

import fetchJSON from '~/lib/fetchJSON';
import AnnouncingView from '~/pages/AnnouncingView/AnnouncingView';

import type { RouteData } from '~/pages/AnnouncingView/AnnouncingView';

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
    async ([url]): Promise<RouteData> => {
      if (!url) {
        throw redirect('/');
      }
      const result = await fetchJSON(url);
      if (result.state === 'OK') {
        return { data: result.data, url };
      } else {
        throw new Error();
      }
    },
    {
      key: () => {
        return [url] as const;
      },
    }
  );
};
export default () => {
  const dataResource = useRouteData<typeof routeData>();
  return <AnnouncingView dataResource={dataResource} />;
};
