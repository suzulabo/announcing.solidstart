import { Box } from '@suzulabo/solid-base';

import styles from './Page.module.css';

import type { ParentComponent } from 'solid-js';

const Page: ParentComponent = (props) => {
  return <Box class={styles.Page}>{props.children}</Box>;
};

export default Page;
