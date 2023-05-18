/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetRoleBlankPermissionsResp } from './GetRoleBlankPermissionsResp';

export type GetRoleBlankPermissionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetRoleBlankPermissionsResp;
};
