/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Translation } from './Translation';

export type GameRegionListItem = {
    /**
     * Region id
     */
    regionId: number;
    /**
     * Region name
     */
    regionName: string;
    /**
     * Game name
     */
    gameName: string;
    /**
     * Translations
     */
    translations: Array<Translation>;
};
