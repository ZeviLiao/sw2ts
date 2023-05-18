/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetUsers } from './GetUsers';
import type { PagingRespBase } from './PagingRespBase';

export type GetUsersResp = {
    users?: Array<GetUsers> | null;
    paging?: PagingRespBase;
};
