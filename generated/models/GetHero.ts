/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetHeroesTranslation } from './GetHeroesTranslation';

export type GetHero = {
    /**
     * Hero Id
     */
    id?: number;
    /**
     * Hero Name
     */
    name?: string | null;
    /**
     * Referred To By
     */
    referredToBy?: number;
    /**
     * Title
     */
    title?: string | null;
    gameName?: string | null;
    translations?: Array<GetHeroesTranslation> | null;
};
