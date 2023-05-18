/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetPlayersDetail } from './GetPlayersDetail';
import type { PagingRespBase } from './PagingRespBase';

export type GetPlayersResp = {
    players?: Array<GetPlayersDetail> | null;
    paging?: PagingRespBase;
};
