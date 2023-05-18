/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelRoleResp } from './DelRoleResp';
import type { EnumRet } from './EnumRet';

export type DelRoleRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelRoleResp;
};
