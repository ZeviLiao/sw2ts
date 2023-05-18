/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OneSignalAppListItem } from './OneSignalAppListItem';
import type { PagingRespBase } from './PagingRespBase';

export type GetOneSignalAppsResp = {
    /**
     * Messaging One Signal Apps
     */
    onesignalApps?: Array<OneSignalAppListItem> | null;
    paging?: PagingRespBase;
};
