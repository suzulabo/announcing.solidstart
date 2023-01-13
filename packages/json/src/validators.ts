import {
  AnnouncingJSONValidator,
  AnnouncingPostsJSONValidator,
} from './validators.mjs';

import type { AnnouncingJSON } from './AnnouncingJSON/AnnouncingJSON';
import type { AnnouncingPostsJSON } from './AnnouncingJSON/AnnouncingPostsJSON';
import type { ValidateFunction } from 'ajv';

const makeValidator = <T>(f: ValidateFunction<T>) => {
  return (data: unknown) => {
    const valid = f(data);
    if (valid) {
      return { ok: true, data } as const;
    } else {
      return {
        ok: false,
        errors: { ...f.errors },
      } as const;
    }
  };
};

export const validateAnnouncingJSON = makeValidator(
  AnnouncingJSONValidator as ValidateFunction<AnnouncingJSON>
);
export const validateAnnouncingPostsJSON = makeValidator(
  AnnouncingPostsJSONValidator as ValidateFunction<AnnouncingPostsJSON>
);
