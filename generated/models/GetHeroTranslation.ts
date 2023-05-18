/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetHeroLocale } from './GetHeroLocale';

export type GetHeroTranslation = {
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
    status?: string | null;
    locale?: GetHeroLocale;
};
