/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetHeroTranslation } from './GetHeroTranslation';

export type GetHeroTranslationsResp = {
    /**
     * Hero Id
     */
    id?: number;
    /**
     * Hero Name
     */
    name?: string | null;
    /**
     * Title
     */
    title?: string | null;
    /**
     * Tagline
     */
    tagline?: string | null;
    /**
     * Description
     */
    description?: string | null;
    translations?: Array<GetHeroTranslation> | null;
};
