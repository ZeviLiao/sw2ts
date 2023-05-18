/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetMapTranslation } from './GetMapTranslation';

export type GetMapTranslationsResp = {
    id?: number;
    name?: string | null;
    translations?: Array<GetMapTranslation> | null;
};
