import { Blink } from '@suzulabo/solid-base';
import { Show, Suspense } from 'solid-js';
import { Title } from 'solid-start';

import styles from './AnnouncingView.module.css';
import { Logo } from '~/components/Logo/Logo';
import Page from '~/components/Page/Page';

import type { AnnouncingJSON } from '@announcing/json';
import type { Resource } from 'solid-js';

export type RouteData = {
  url: string;
  data: AnnouncingJSON;
};

export type RouteDataResource = Resource<RouteData | undefined>;

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

const AnnouncingView = (props: { dataResource: RouteDataResource }) => {
  return (
    <Page>
      <Suspense fallback={<Loading />}>
        <Show when={props.dataResource()} keyed>
          {({ data, url }) => (
            <>
              <Title>{data.info.name}</Title>
              <div class={styles.info}>
                {data.info.header && (
                  <div class="header">
                    <img src={new URL(data.info.header, url).toString()} />
                  </div>
                )}
                {data.info.icon && (
                  <div class="icon">
                    <img src={new URL(data.info.icon, url).toString()} />
                  </div>
                )}
              </div>
            </>
          )}
        </Show>
      </Suspense>
    </Page>
  );
};

export default AnnouncingView;
