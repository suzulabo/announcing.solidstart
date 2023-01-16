import { Show, Suspense } from 'solid-js';
import { Title } from 'solid-start';

import InfoBox from './InfoBox';
import Loading from './Loading';
import PostsGrid from './PostsGrid';
import Page from '~/components/Page/Page';

import type { AnnouncingJSON } from '@announcing/json';
import type { Resource } from 'solid-js';

export type RouteData = {
  url: string;
  data: AnnouncingJSON;
};

export type RouteDataResource = Resource<RouteData | undefined>;

const AnnouncingView = (props: { dataResource: RouteDataResource }) => {
  return (
    <Page>
      <Suspense fallback={<Loading />}>
        <Show when={props.dataResource()} keyed>
          {({ data, url }) => (
            <>
              <Title>{data.info.name}</Title>
              <InfoBox info={data.info} url={url} />
              <PostsGrid posts={data.posts} refs={data.refs} url={url} />
            </>
          )}
        </Show>
      </Suspense>
    </Page>
  );
};

export default AnnouncingView;
