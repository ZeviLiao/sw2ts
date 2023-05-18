/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetMapsResp } from './GetMapsResp';

export type GetMapsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetMapsResp;
};
