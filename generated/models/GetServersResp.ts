/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetServers } from './GetServers';
import type { PagingRespBase } from './PagingRespBase';

export type GetServersResp = {
    servers?: Array<GetServers> | null;
    paging?: PagingRespBase;
};
