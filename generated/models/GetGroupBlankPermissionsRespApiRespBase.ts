/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetGroupBlankPermissionsResp } from './GetGroupBlankPermissionsResp';

export type GetGroupBlankPermissionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetGroupBlankPermissionsResp;
};
