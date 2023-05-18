/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModGameRegionReq = {
    /**
     * RegionId
     */
    regionId: number;
    /**
     * Region name
     */
    regionName: string;
    /**
     * Game id
     */
    gameId: number;
    /**
     * Country Ids
     */
    countryIds: Array<number>;
};
