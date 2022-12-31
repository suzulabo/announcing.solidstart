import { compile, dateProp, makeValidator } from '../utils';
import { Info, infoSchema } from './Info';
import { PostsRef, postsRefSchema } from './PostsRef';

import type { JSONSchemaType } from 'ajv';

export type AnnouncingJSON = {
  updated: string;
  info: Info;
  posts: PostsRef[];
};

const schema: JSONSchemaType<AnnouncingJSON> = {
  type: 'object',
  required: ['updated', 'info', 'posts'],
  properties: {
    info: infoSchema,
    posts: {
      type: 'array',
      items: postsRefSchema,
    },
    updated: dateProp(),
  },
} as const;

export const validateAnnouncingJSON = makeValidator(compile(schema));
