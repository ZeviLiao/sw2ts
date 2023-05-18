/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingRespBase } from './PagingRespBase';
import type { SystemLogListItem } from './SystemLogListItem';

export type GetSystemLogsResp = {
    /**
     * Api Logs
     */
    logs?: Array<SystemLogListItem> | null;
    paging?: PagingRespBase;
};
