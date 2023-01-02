import { postSchema } from './Post';

import type { AnnouncingPostsJSON } from '../../../src/AnnouncingJSON/AnnouncingPostsJSON';
import type { JSONSchemaType } from 'ajv';

export const AnnouncingPostsJSONSchema: JSONSchemaType<AnnouncingPostsJSON> = {
  $id: 'AnnouncingPostsJSON',
  type: 'array',
  items: postSchema,
} as const;
