/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { ModBroadcastTalentResp } from './ModBroadcastTalentResp';

export type ModBroadcastTalentRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: ModBroadcastTalentResp;
};
