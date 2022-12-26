import { compile } from '../utils';
import { Info, infoSchema } from './Info';
import { Post, postSchema } from './Post';
import { Ref, refSchema } from './Ref';

import type { JSONSchemaType } from 'ajv';

export type AnnouncingJSON = {
  info: Info;
  posts?: Post[];
  refs?: Ref[];
};

const schema: JSONSchemaType<AnnouncingJSON> = {
  type: 'object',
  required: ['info'],
  properties: {
    info: infoSchema,
    posts: {
      type: 'array',
      nullable: true,
      items: postSchema,
    },
    refs: {
      type: 'array',
      nullable: true,
      items: refSchema,
    },
  },
} as const;

export const validateAnnouncingJSON = compile(schema);
