/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AssignRoleResp } from './AssignRoleResp';
import type { EnumRet } from './EnumRet';

export type AssignRoleRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AssignRoleResp;
};
