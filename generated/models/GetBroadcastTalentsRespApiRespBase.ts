/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetBroadcastTalentsResp } from './GetBroadcastTalentsResp';

export type GetBroadcastTalentsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetBroadcastTalentsResp;
};
