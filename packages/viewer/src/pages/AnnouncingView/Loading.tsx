import { Blink } from '@suzulabo/solid-base';
import { Title } from 'solid-start';

import { Logo } from '~/components/Logo/Logo';

const Loading = () => {
  return (
    <>
      <Title>Loading...</Title>
      <Blink style={{ margin: 'auto' }}>
        <Logo />
      </Blink>
    </>
  );
};

export default Loading;
