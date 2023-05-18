/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Int16Item } from './Int16Item';

export type GetGameRegionResp = {
    /**
     * Region id
     */
    regionId: number;
    /**
     * Region name
     */
    regionName: string;
    /**
     * Countries
     */
    countries: Array<Int16Item>;
};
