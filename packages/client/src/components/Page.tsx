import { Box } from '@suzulabo/solid-base';
import { ParentComponent } from 'solid-js';

import styles from './Page.module.css';

const Page: ParentComponent = (props) => {
  return <Box class={styles.Page}>{props.children}</Box>;
};

export default Page;
