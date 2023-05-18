/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetTeamsDetail } from './GetTeamsDetail';
import type { PagingRespBase } from './PagingRespBase';

export type GetTeamsResp = {
    teams?: Array<GetTeamsDetail> | null;
    paging?: PagingRespBase;
};
