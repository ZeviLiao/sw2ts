/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignGroupResp } from './AssignGroupResp';
import type { EnumRet } from './EnumRet';

export type AssignGroupRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AssignGroupResp;
};
