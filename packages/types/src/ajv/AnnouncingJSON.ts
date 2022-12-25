import {
  compile,
  dateProp,
  numberProp,
  optionalStringProp,
  optionalUrlProp,
  stringProp,
  urlProp,
} from './utils';

import type { OptionalString } from '../types';
import type { JSONSchemaType } from 'ajv';

export const NAME_MAX_LENGTH = 50;
export const DESC_MAX_LENGTH = 500;
export const TITLE_MAX_LENGTH = 100;
export const BODY_MAX_LENGTH = 1000;

export type AnnouncingJSON = {
  info: {
    name: string;
    desc?: OptionalString;
    link?: OptionalString;
    icon?: OptionalString;
  };
  posts: {
    title?: OptionalString;
    body?: OptionalString;
    publishTime: string;
    img?: OptionalString;
    imgs?: OptionalString[];
    link?: OptionalString;
  }[];
  more?: {
    href: string;
    count: number;
  }[];
};

const schema: JSONSchemaType<AnnouncingJSON> = {
  type: 'object',
  required: ['info', 'posts'],
  additionalProperties: false,
  properties: {
    info: {
      type: 'object',
      required: ['name'],
      additionalProperties: false,
      properties: {
        name: stringProp(NAME_MAX_LENGTH),
        desc: optionalStringProp(DESC_MAX_LENGTH),
        link: optionalUrlProp(),
        icon: optionalUrlProp(),
      },
    },
    posts: {
      type: 'array',
      items: {
        type: 'object',
        required: ['publishTime'],
        additionalProperties: false,
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
      },
    },
    more: {
      type: 'array',
      nullable: true,
      items: {
        type: 'object',
        required: ['href', 'count'],
        additionalProperties: false,
        properties: {
          href: urlProp(),
          count: numberProp(),
        },
      },
    },
  },
} as const;

export const AnnouncingJSONValidator = compile(schema);
