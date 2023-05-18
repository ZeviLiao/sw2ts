/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelBroadcastTalentResp } from './DelBroadcastTalentResp';
import type { EnumRet } from './EnumRet';

export type DelBroadcastTalentRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelBroadcastTalentResp;
};
