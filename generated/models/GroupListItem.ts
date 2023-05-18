/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GroupListItem = {
    /**
     * Group id
     */
    groupId?: number;
    /**
     * User group name
     */
    name?: string | null;
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
