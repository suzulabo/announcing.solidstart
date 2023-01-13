import { dateProp } from '../../utils';
import { infoSchema } from './Info';
import { postSchema } from './Post';
import { postsRefSchema } from './PostsRef';

import type { AnnouncingJSON } from '../../../src/AnnouncingJSON/AnnouncingJSON';
import type { JSONSchemaType } from 'ajv';

export const AnnouncingJSONSchema: JSONSchemaType<AnnouncingJSON> = {
  $id: 'https://announcing.app/Announcing.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'object',
  required: ['updated', 'info'],
  properties: {
    updated: dateProp(),
    info: infoSchema,
    posts: {
      type: 'array',
      nullable: true,
      items: postSchema,
    },
    refs: {
      type: 'array',
      nullable: true,
      items: postsRefSchema,
    },
  },
} as const;
