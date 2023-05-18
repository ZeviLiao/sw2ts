/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModGroupReq = {
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
    remark?: string | null;
    /**
     * Frontend ids
     */
    frontendIds?: Array<number> | null;
    /**
     * Backoffice func ids
     */
    backofficeFuncIds?: Array<number> | null;
};
