import { Blink, Button } from '@suzulabo/solid-base';
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

const InfoBox = (props: { info: AnnouncingJSON['info']; url: string }) => {
  return (
    <>
      <div class={styles.info}>
        <div class="header">
          {props.info.header && (
            <img src={new URL(props.info.header, props.url).toString()} />
          )}
        </div>
        <div class="icon-bar">
          <div class="icon">
            {props.info.icon && (
              <img src={new URL(props.info.icon, props.url).toString()} />
            )}
          </div>
          <Button class="follow">フォロー</Button>
        </div>
        <div class="name">{props.info.name}</div>
      </div>
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
              <InfoBox info={data.info} url={url} />
            </>
          )}
        </Show>
      </Suspense>
    </Page>
  );
};

export default AnnouncingView;
