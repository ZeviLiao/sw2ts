/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ApiLogListItem } from './ApiLogListItem';
import type { PagingRespBase } from './PagingRespBase';

export type GetApiLogsResp = {
    /**
     * Api Logs
     */
    logs?: Array<ApiLogListItem> | null;
    paging?: PagingRespBase;
};
