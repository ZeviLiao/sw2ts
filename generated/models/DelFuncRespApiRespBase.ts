/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelFuncResp } from './DelFuncResp';
import type { EnumRet } from './EnumRet';

export type DelFuncRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelFuncResp;
};
