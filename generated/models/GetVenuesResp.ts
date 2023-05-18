/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetVenues } from './GetVenues';
import type { PagingRespBase } from './PagingRespBase';

export type GetVenuesResp = {
    venues?: Array<GetVenues> | null;
    paging?: PagingRespBase;
};
