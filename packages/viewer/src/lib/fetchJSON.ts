import { validateAnnouncingJSON } from '@announcing/json';

export const INVALID_JSON = -1;

const fetchJSON = async (url: string) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 10 * 1000);

  try {
    const res = await fetch(url, {
      signal: controller.signal,
      cf: {
        cacheTtl: 60,
      },
    });

    if (!res.ok) {
      return { status: res.status } as const;
    }

    const json = await res.json();

    const valid = validateAnnouncingJSON(json);
    if (!valid.ok) {
      return { status: INVALID_JSON, errors: valid.errors };
    }

    return { json } as const;
  } finally {
    clearTimeout(timeout);
  }
};

export default fetchJSON;
