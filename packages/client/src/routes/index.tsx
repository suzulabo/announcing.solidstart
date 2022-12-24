import { Button } from '@suzulabo/solid-base';
import { A, Title } from 'solid-start';

import Page from '~/components/Page';

export default () => {
  return (
    <>
      <Title>index page</Title>
      <Page>
        <Button>neko</Button>
        <A href="/v/www.dazn.com/icons/manifest.json">DAZN manifest</A>
      </Page>
    </>
  );
};
