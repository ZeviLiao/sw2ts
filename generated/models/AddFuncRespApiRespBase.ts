/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddFuncResp } from './AddFuncResp';
import type { EnumRet } from './EnumRet';

export type AddFuncRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddFuncResp;
};
