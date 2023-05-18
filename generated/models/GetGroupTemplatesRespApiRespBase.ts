/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetGroupTemplatesResp } from './GetGroupTemplatesResp';

export type GetGroupTemplatesRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetGroupTemplatesResp;
};
