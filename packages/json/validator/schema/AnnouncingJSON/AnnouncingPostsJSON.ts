import { postSchema } from './Post';

import type { AnnouncingPostsJSON } from '../../../src/AnnouncingJSON/AnnouncingPostsJSON';
import type { JSONSchemaType } from 'ajv';

export const AnnouncingPostsJSONSchema: JSONSchemaType<AnnouncingPostsJSON> = {
  $id: 'https://announcing.app/AnnouncingPosts.json',
  $schema: 'http://json-schema.org/draft-07/schema#',
  type: 'array',
  items: postSchema,
} as const;
