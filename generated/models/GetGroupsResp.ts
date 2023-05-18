/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupListItem } from './GroupListItem';
import type { PagingRespBase } from './PagingRespBase';

export type GetGroupsResp = {
    /**
     * Groups
     */
    groups?: Array<GroupListItem> | null;
    paging?: PagingRespBase;
};
