/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { UnAssignGroupResp } from './UnAssignGroupResp';

export type UnAssignGroupRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: UnAssignGroupResp;
};
