import { compile } from '../utils';
import { Post, postSchema } from './Post';

import type { JSONSchemaType } from 'ajv';

export type AnnouncingPostsJSON = Post[];

const schema: JSONSchemaType<AnnouncingPostsJSON> = {
  type: 'array',
  items: postSchema,
} as const;

export const validateAnnouncingPostsJSON = compile(schema);
