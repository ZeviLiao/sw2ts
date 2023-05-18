/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddBroadcastTalentResp } from './AddBroadcastTalentResp';
import type { EnumRet } from './EnumRet';

export type AddBroadcastTalentRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddBroadcastTalentResp;
};
