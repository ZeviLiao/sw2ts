/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetMap } from './GetMap';
import type { PagingRespBase } from './PagingRespBase';

export type GetMapsResp = {
    maps?: Array<GetMap> | null;
    paging?: PagingRespBase;
};
