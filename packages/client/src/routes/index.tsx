import { Button } from '@suzulabo/solid-base';
import { Title } from 'solid-start';

import Page from '~/components/Page';

export default function Home() {
  return (
    <>
      <Title>index page</Title>
      <Page>
        <Button>neko</Button>
      </Page>
    </>
  );
}
