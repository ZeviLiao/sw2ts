/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddGroupReq = {
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
    /**
     * Save as template
     */
    saveAsTemplate: boolean;
};
