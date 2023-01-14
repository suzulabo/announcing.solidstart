import styles from './Page.module.css';

import type { ParentComponent } from 'solid-js';

const Page: ParentComponent = (props) => {
  return <div class={styles.Page}>{props.children}</div>;
};

export default Page;
