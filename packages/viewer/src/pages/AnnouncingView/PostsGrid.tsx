import { createVisibilityObserver } from '@solid-primitives/intersection-observer';
import { DotPulse } from '@suzulabo/solid-base';
import {
  For,
  Match,
  Show,
  Switch,
  createMemo,
  createResource,
  createSignal,
} from 'solid-js';

import styles from './PostsGrid.module.css';
import fetchPostsJSON from '~/lib/fetchPostsJSON';

import type { AnnouncingJSON, AnnouncingPostsJSON } from '@announcing/json';

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
        {() => {
          return <DotPulse class="loading" />;
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
  const [refNeeded, setRefNeeded] = createSignal<string[]>([]);
  const [refData] = createResource(
    refNeeded,
    async (refNeeded) => {
      console.log('refData', refNeeded);
      const result = new Map<string, AnnouncingPostsJSON>();
      for (const ref of refNeeded) {
        const url = new URL(ref, props.url);
        const res = await fetchPostsJSON(url.toString());
        if (res.state == 'OK') {
          result.set(ref, res.data);
        } else {
          throw res.errors;
        }
      }
      return result;
    },
    {}
  );

  const items = createMemo(() => {
    const result: PostItem[] = [];
    if (props.posts) {
      for (const post of props.posts) {
        result.push(['loaded', post]);
      }
    }
    if (props.refs) {
      for (const ref of props.refs) {
        const refPosts = refData.latest?.get(ref.href);
        if (refPosts) {
          for (const post of refPosts) {
            result.push(['loaded', post]);
          }
        } else {
          result.push(...new Array(ref.count).fill(['loading', ref.href]));
        }
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
              <div class={`item ${postItem[0]}`} ref={(el) => (ref = el)}>
                <Show when={isVisible()} keyed>
                  {(visible) => {
                    const href = isLoading(postItem);
                    if (visible && href !== false) {
                      console.log(href);
                      setRefNeeded((cur) =>
                        cur.indexOf(href) > 0 ? cur : [...cur, href]
                      );
                    }
                    return <PostContent postItem={postItem} />;
                  }}
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
