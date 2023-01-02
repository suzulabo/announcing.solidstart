import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import standaloneCode from 'ajv/dist/standalone';

import { AnnouncingJSONSchema } from './schema/AnnouncingJSON/AnnouncingJSON';
import { AnnouncingPostsJSONSchema } from './schema/AnnouncingJSON/AnnouncingPostsJSON';

const ajv = new Ajv({
  schemas: [AnnouncingJSONSchema, AnnouncingPostsJSONSchema],
  code: { source: true, esm: true },
});
addFormats(ajv);

const code = standaloneCode(ajv);

console.log(code);
