import {
  dateProp,
  optionalStringProp,
  optionalUrlProp,
  urlProp,
} from '../utils';
import { BODY_MAX_LENGTH, TITLE_MAX_LENGTH } from './constants';

import type { OptionalString } from '../../types';
import type { JSONSchemaType } from 'ajv';

export type Post = {
  title?: OptionalString;
  body?: OptionalString;
  publishTime: string;
  img?: OptionalString;
  imgs?: OptionalString[];
  link?: OptionalString;
};

export const postSchema: JSONSchemaType<Post> = {
  type: 'object',
  required: ['publishTime'],
  properties: {
    title: optionalStringProp(TITLE_MAX_LENGTH),
    body: optionalStringProp(BODY_MAX_LENGTH),
    publishTime: dateProp(),
    img: optionalUrlProp(),
    imgs: {
      type: 'array',
      nullable: true,
      maxItems: 10,
      uniqueItems: true,
      items: urlProp(),
    },
    link: optionalUrlProp(),
  },
} as const;
