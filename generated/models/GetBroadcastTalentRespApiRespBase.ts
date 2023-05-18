/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetBroadcastTalentResp } from './GetBroadcastTalentResp';

export type GetBroadcastTalentRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetBroadcastTalentResp;
};
