/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumFuncType } from './EnumFuncType';
import type { EnumState } from './EnumState';

export type FuncItem = {
    /**
     * Backoffice func id
     */
    funcId?: number;
    /**
     * Parent id
     */
    parentId?: number;
    /**
     * Func name
     */
    name?: string | null;
    /**
     * Func code
     */
    code?: string | null;
    type?: EnumFuncType;
    /**
     * Func type name
     */
    readonly typeName?: string | null;
    /**
     * Func position
     */
    position?: number;
    state?: EnumState;
    /**
     * State name
     */
    readonly stateName?: string | null;
    /**
     * Func url
     */
    url?: string | null;
    /**
     * Func icon
     */
    icon?: string | null;
    /**
     * Sub funcs
     */
    subFuncs?: Array<FuncItem> | null;
};
