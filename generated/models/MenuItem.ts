/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MenuItem = {
    /**
     * Backoffice func id
     */
    funcId?: number;
    /**
     * Backoffice func name
     */
    name?: string | null;
    /**
     * Parent func id
     */
    parentId?: number;
    /**
     * Func level
     */
    level?: number;
    /**
     * Func position
     */
    position?: number;
    /**
     * Api url
     */
    url?: string | null;
    /**
     * Sub Menus
     */
    subMenus?: Array<MenuItem> | null;
};
