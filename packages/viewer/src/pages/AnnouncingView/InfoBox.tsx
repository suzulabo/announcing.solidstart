import { Button } from '@suzulabo/solid-base';

import styles from './InfoBox.module.css';

import type { AnnouncingJSON } from '@announcing/json';

export type RouteData = {
  url: string;
  data: AnnouncingJSON;
};

const InfoBox = (props: { info: AnnouncingJSON['info']; url: string }) => {
  return (
    <>
      <div class={styles['info-box']}>
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
          <Button class="favorite">フォロー</Button>
        </div>
        <div class="name">{props.info.name}</div>
        {props.info.desc && <div class="desc">{props.info.desc}</div>}
      </div>
    </>
  );
};

export default InfoBox;
