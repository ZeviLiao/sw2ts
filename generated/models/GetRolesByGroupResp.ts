/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingRespBase } from './PagingRespBase';
import type { RoleListItem } from './RoleListItem';

export type GetRolesByGroupResp = {
    /**
     * Roles
     */
    roles?: Array<RoleListItem> | null;
    paging?: PagingRespBase;
};
