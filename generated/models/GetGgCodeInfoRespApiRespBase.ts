/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetGgCodeInfoResp } from './GetGgCodeInfoResp';

export type GetGgCodeInfoRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetGgCodeInfoResp;
};
