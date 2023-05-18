/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetUsersByGroupResp } from './GetUsersByGroupResp';

export type GetUsersByGroupRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetUsersByGroupResp;
};
