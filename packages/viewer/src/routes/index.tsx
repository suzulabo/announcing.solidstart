import { Button } from '@suzulabo/solid-base';
import { A, Title } from 'solid-start';

import Page from '~/components/Page';

export default () => {
  return (
    <>
      <Title>index page</Title>
      <Page>
        <Button>neko</Button>
        <A href="/v/http/localhost:3010/hello.json?t=5">Hello</A>
      </Page>
    </>
  );
};
