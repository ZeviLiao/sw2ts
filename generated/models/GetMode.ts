/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetModeTranslation } from './GetModeTranslation';

export type GetMode = {
    /**
     * Mode Id
     */
    id?: number;
    name?: string | null;
    abbreviation?: string | null;
    gameName?: string | null;
    translations?: Array<GetModeTranslation> | null;
};
