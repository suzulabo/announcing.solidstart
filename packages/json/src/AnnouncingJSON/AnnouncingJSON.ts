import type { Info } from './Info';
import type { Post } from './Post';
import type { PostsRef } from './PostsRef';

export type AnnouncingJSON = {
  updated: string;
  info: Info;
  posts?: Post[];
  refs?: PostsRef[];
};
