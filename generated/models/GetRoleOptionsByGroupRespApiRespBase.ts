/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetRoleOptionsByGroupResp } from './GetRoleOptionsByGroupResp';

export type GetRoleOptionsByGroupRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetRoleOptionsByGroupResp;
};
