import { register } from '../handler';

register('/hello.json', () => {
  return {
    updated: '2023-01-03T01:02:03',
    info: {
      name: 'Hello Announcing',
      desc: 'こんにちは\n世界',
      icon: '/static/hello/icon.jpg',
      header: '/static/hello/header.jpg',
    },
    posts: [
      {
        published: '2023-01-01T01:01:01+09:00',
        title: 'hello 2023',
      },
    ],
    refs: [...Array(10)].map((_, i) => {
      return {
        count: 10,
        href: `./hello.${i + 1}.json`,
      };
    }),
  };
});

[...Array(10)].forEach((_, i) => {
  register(`/hello.${i + 1}.json`, () => {
    return [...Array(10)].map((_, o) => {
      return {
        published: '2023-01-01T01:01:01+09:00',
        title: `hello ${i + 1} - ${o + 1}`,
      };
    });
  });
});
