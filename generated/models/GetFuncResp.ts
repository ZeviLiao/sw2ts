/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumFuncType } from './EnumFuncType';
import type { EnumState } from './EnumState';

export type GetFuncResp = {
    /**
     * Func id
     */
    funcId?: number;
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
     * Type name
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
     * Created At
     */
    createdAt?: number;
    /**
     * Updated At
     */
    updatedAt?: number;
};
