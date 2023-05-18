/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddRoleReq = {
    /**
     * Group Id
     */
    groupId: number;
    /**
     * Role name
     */
    name: string;
    /**
     * Remark
     */
    remark?: string | null;
    /**
     * Func Ids
     */
    funcIds?: Array<number> | null;
    /**
     * Frontend Ids
     */
    frontendIds?: Array<number> | null;
    /**
     * Save as template
     */
    saveAsTemplate: boolean;
};
