/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddRoleResp } from './AddRoleResp';
import type { EnumRet } from './EnumRet';

export type AddRoleRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddRoleResp;
};
