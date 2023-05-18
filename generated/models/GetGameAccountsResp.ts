/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetGameAccountDetail } from './GetGameAccountDetail';
import type { PagingRespBase } from './PagingRespBase';

export type GetGameAccountsResp = {
    gameAccounts?: Array<GetGameAccountDetail> | null;
    paging?: PagingRespBase;
};
