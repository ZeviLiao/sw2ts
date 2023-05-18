/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetUsersByRoleResp } from './GetUsersByRoleResp';

export type GetUsersByRoleRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetUsersByRoleResp;
};
