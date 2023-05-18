/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GameRegionListItem } from './GameRegionListItem';
import type { PagingRespBase } from './PagingRespBase';

export type GetGameRegionsResp = {
    /**
     * Game regions
     */
    gameRegions?: Array<GameRegionListItem> | null;
    paging?: PagingRespBase;
};
