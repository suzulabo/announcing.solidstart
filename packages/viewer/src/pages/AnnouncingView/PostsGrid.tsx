import { For, createMemo } from 'solid-js';

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
        result.push(['loading', ref.href]);
      }
    }
    return result;
  });

  return (
    <>
      <For each={items()}>
        {([state], i) => {
          return (
            <>
              {state}
              {i()}
            </>
          );
        }}
      </For>
    </>
  );
};

export default PostsGrid;
