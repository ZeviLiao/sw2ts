/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Int16Item } from './Int16Item';
import type { SimpleBackOfficePermissionItem } from './SimpleBackOfficePermissionItem';

export type GetGroupResp = {
    /**
     * Group id
     */
    groupId: number;
    /**
     * User group name
     */
    name: string;
    /**
     * Remark
     */
    remark: string;
    /**
     * Frontend permissions
     */
    frontendPermissions: Array<Int16Item>;
    /**
     * Backoffice permissions
     */
    backofficePermissions: Array<SimpleBackOfficePermissionItem>;
};
