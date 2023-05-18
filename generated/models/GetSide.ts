/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetSideTranslation } from './GetSideTranslation';

export type GetSide = {
    /**
     * Side Id
     */
    id?: number;
    name?: string | null;
    gameName?: string | null;
    translations?: Array<GetSideTranslation> | null;
};
