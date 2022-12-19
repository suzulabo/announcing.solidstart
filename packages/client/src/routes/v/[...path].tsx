import { Show } from 'solid-js';
import { Navigate, Title, useLocation, useParams } from 'solid-start';

import Page from '~/components/Page';

const toURL = (path: string | undefined, search: string) => {
  console.log({ path });
  if (!path) {
    return;
  }
  const items = path.split('/');
  const first = items[0];
  const protocol = first === 'http' ? first : 'https';
  if (first === 'http' || first === 'https') {
    items.shift();
  }
  return `${protocol}://${items.join('/')}${search}`;
};

export default () => {
  const params = useParams();
  const location = useLocation();

  const url = toURL(params['path'], location.search);

  return (
    <>
      <Show when={url} fallback={<Navigate href="/" />}>
        <Title>viewer</Title>
        <Page>{url}</Page>
      </Show>
    </>
  );
};
