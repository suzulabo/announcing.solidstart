import { For, createMemo } from 'solid-js';

import styles from './PostsGrid.module.css';

import type { AnnouncingJSON } from '@announcing/json';

type PostItem =
  | [state: 'loaded', post: Exclude<AnnouncingJSON['posts'], undefined>[number]]
  | [state: 'loading', href: string]
  | [state: 'error', count: number];

const PostsGrid = (props: {
  posts: AnnouncingJSON['posts'];
  refs: AnnouncingJSON['refs'];
  url: string;
}) => {
  const items = createMemo(() => {
    const result: PostItem[] = [];
    if (props.posts) {
      for (const post of props.posts) {
        result.push(['loaded', post]);
      }
    }
    if (props.refs) {
      for (const ref of props.refs) {
        result.push(...new Array(ref.count).fill(['loading', ref.href]));
      }
    }
    return result;
  });

  return (
    <>
      <div class={styles.PostsGrid}>
        <For each={items()}>
          {([state], i) => {
            return (
              <div class="item">
                {state}
                {i()}
              </div>
            );
          }}
        </For>
      </div>
    </>
  );
};

export default PostsGrid;
