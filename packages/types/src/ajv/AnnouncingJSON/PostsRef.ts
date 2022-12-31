import { numberProp, urlProp } from '../utils';

import type { JSONSchemaType } from 'ajv';

export type PostsRef = {
  href: string;
  count: number;
};

export const postsRefSchema: JSONSchemaType<PostsRef> = {
  type: 'object',
  required: ['href', 'count'],
  properties: {
    href: urlProp(),
    count: numberProp(),
  },
} as const;
