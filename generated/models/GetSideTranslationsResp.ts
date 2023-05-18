/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetSideTranslation } from './GetSideTranslation';

export type GetSideTranslationsResp = {
    id?: number;
    name?: string | null;
    translations?: Array<GetSideTranslation> | null;
};
