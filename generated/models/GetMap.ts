/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetMapTranslation } from './GetMapTranslation';

export type GetMap = {
    /**
     * Map Id
     */
    id?: number;
    name?: string | null;
    gameName?: string | null;
    translations?: Array<GetMapTranslation> | null;
};
