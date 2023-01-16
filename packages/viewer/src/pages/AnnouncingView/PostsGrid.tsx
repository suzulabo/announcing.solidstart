import { createVisibilityObserver } from '@solid-primitives/intersection-observer';
import { For, Match, Show, Switch, createMemo } from 'solid-js';

import styles from './PostsGrid.module.css';

import type { AnnouncingJSON } from '@announcing/json';

type PostItem =
  | [state: 'loaded', post: Exclude<AnnouncingJSON['posts'], undefined>[number]]
  | [state: 'loading', href: string]
  | [state: 'error', count: number];

const isLoaded = (postItem: PostItem) => {
  if (postItem[0] === 'loaded') {
    return postItem[1];
  }
  return false;
};

const isLoading = (postItem: PostItem) => {
  if (postItem[0] === 'loading') {
    return postItem[1];
  }
  return false;
};

const isError = (postItem: PostItem) => {
  if (postItem[0] === 'error') {
    return postItem[1];
  }
  return false;
};

const PostContent = (props: { postItem: PostItem }) => {
  return (
    <Switch>
      <Match when={isLoaded(props.postItem)} keyed>
        {(post) => {
          return <>{post.title}</>;
        }}
      </Match>
      <Match when={isLoading(props.postItem)} keyed>
        {(href) => {
          return <>Loading {href}</>;
        }}
      </Match>
      <Match when={isError(props.postItem)} keyed>
        {(count) => {
          return <>Error {count}</>;
        }}
      </Match>
    </Switch>
  );
};

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
          {(postItem) => {
            let ref: HTMLDivElement | undefined;
            const isVisible = createVisibilityObserver({})(() => ref);
            return (
              <div class="item" ref={(el) => (ref = el)}>
                <Show when={isVisible()}>
                  <PostContent postItem={postItem} />
                </Show>
              </div>
            );
          }}
        </For>
      </div>
    </>
  );
};

export default PostsGrid;
