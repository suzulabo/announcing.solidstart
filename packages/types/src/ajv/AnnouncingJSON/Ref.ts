import { numberProp, urlProp } from '../utils';

import type { JSONSchemaType } from 'ajv';

export type Ref = {
  href: string;
  count: number;
};

export const refSchema: JSONSchemaType<Ref> = {
  type: 'object',
  required: ['href', 'count'],
  properties: {
    href: urlProp(),
    count: numberProp(),
  },
} as const;
