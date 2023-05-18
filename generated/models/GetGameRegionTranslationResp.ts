/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Translation } from './Translation';

export type GetGameRegionTranslationResp = {
    /**
     * Region id
     */
    regionId: number;
    /**
     * Region name
     */
    regionName: string;
    /**
     * Translations
     */
    translations: Array<Translation>;
};
