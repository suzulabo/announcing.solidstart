import { optionalStringProp, optionalUrlProp, stringProp } from '../utils';
import { DESC_MAX_LENGTH, NAME_MAX_LENGTH } from './constants';

import type { OptionalString } from '../../types';
import type { JSONSchemaType } from 'ajv';

export type Info = {
  name: string;
  desc?: OptionalString;
  link?: OptionalString;
  icon?: OptionalString;
};

export const infoSchema: JSONSchemaType<Info> = {
  type: 'object',
  required: ['name'],
  properties: {
    name: stringProp(NAME_MAX_LENGTH),
    desc: optionalStringProp(DESC_MAX_LENGTH),
    link: optionalUrlProp(),
    icon: optionalUrlProp(),
  },
} as const;
