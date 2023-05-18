/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RoleListItem = {
    /**
     * Role id
     */
    roleId?: number;
    /**
     * Role name
     */
    name?: string | null;
    /**
     * Group id
     */
    groupId?: number;
    /**
     * Group Name
     */
    groupName?: string | null;
    /**
     * Remark
     */
    remark?: string | null;
    /**
     * Updated At
     */
    updatedAt?: number;
    /**
     * User name
     */
    updatedUserName?: string | null;
    /**
     * Frontend names
     */
    frontendNames?: Array<string> | null;
};
