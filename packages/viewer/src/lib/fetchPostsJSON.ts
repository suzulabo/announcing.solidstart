import { validateAnnouncingPostsJSON } from '@announcing/json';

const fetchPostsJSON = async (url: string) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 10 * 1000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      cf: {
        cacheEverything: true,
        cacheTtl: 60,
      },
    });

    if (!res.ok) {
      return { state: 'HTTP_ERROR', status: res.status } as const;
    }

    const data = await res.json();

    const valid = validateAnnouncingPostsJSON(data);
    if (!valid.ok) {
      return { state: 'INVALID_JSON', errors: valid.errors } as const;
    }

    return { state: 'OK', data: valid.data } as const;
  } finally {
    clearTimeout(timeout);
  }
};

export default fetchPostsJSON;
