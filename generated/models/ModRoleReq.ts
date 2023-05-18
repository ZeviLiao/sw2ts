/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModRoleReq = {
    /**
     * Role id
     */
    roleId: number;
    /**
     * Role name
     */
    name: string;
    /**
     * Remark
     */
    remark: string;
    /**
     * Backoffice Func Ids
     */
    backofficeFuncIds?: Array<number> | null;
    /**
     * Frontend ids
     */
    frontendIds?: Array<number> | null;
};
