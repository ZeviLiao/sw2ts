/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Int16Item } from './Int16Item';
import type { SimpleBackOfficePermissionItem } from './SimpleBackOfficePermissionItem';

export type GetRoleResp = {
    /**
     * Group id
     */
    groupId: number;
    /**
     * Role id
     */
    roleId: number;
    /**
     * Role name
     */
    name: string;
    /**
     * Group Name
     */
    groupName: string;
    /**
     * Remark
     */
    remark: string;
    /**
     * Role frontend permissions
     */
    frontendPermissions: Array<Int16Item>;
    /**
     * Role backoffice permissions
     */
    backofficePermissions: Array<SimpleBackOfficePermissionItem>;
};
