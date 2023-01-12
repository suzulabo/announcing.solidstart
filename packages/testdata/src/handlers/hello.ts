import { register } from '../handler';

register('/hello.json', () => {
  return {
    updated: '2023-01-03T01:02:03',
    info: {
      name: 'Hello Announcing',
      icon: '/static/hello/icon.jpg',
      header: '/static/hello/header.jpg',
    },
    posts: [
      {
        published: '2023-01-01T01:01:01+09:00',
        title: 'hello 2023',
      },
    ],
  };
});
