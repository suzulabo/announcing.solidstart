export const INVALID_JSON = -1;

const fetchJSON = async (url: string) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => {
    controller.abort();
  }, 10 * 1000);

  try {
    console.log('fetchJSON', { url });
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

    return { json } as const;
  } finally {
    clearTimeout(timeout);
  }
};

export default fetchJSON;
