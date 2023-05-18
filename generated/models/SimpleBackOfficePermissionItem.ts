/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SimpleBackOfficePermissionItem = {
    /**
     * Backoffice func id
     */
    funcId?: number;
    /**
     * Backoffice func name
     */
    name?: string | null;
    /**
     * Checked
     */
    checked?: boolean;
    /**
     * Sub
     */
    subFuncs?: Array<SimpleBackOfficePermissionItem> | null;
};
