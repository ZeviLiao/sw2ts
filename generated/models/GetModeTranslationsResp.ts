/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetModeTranslation } from './GetModeTranslation';

export type GetModeTranslationsResp = {
    id?: number;
    name?: string | null;
    abbreviation?: string | null;
    translations?: Array<GetModeTranslation> | null;
};
