import { Title } from 'solid-start';
import { HttpStatusCode } from 'solid-start/server';

export default function NotFound() {
  return (
    <>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <div>
        <div>Page Not Found</div>
      </div>
    </>
  );
}
