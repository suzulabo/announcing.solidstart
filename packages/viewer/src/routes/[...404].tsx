import { Box } from '@suzulabo/solid-base';
import { Title } from 'solid-start';
import { HttpStatusCode } from 'solid-start/server';

export default function NotFound() {
  return (
    <>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <Box>
        <Box>Page Not Found</Box>
      </Box>
    </>
  );
}
