/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetFuzzyGameRaceResp } from './GetFuzzyGameRaceResp';

export type GetFuzzyGameRaceRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetFuzzyGameRaceResp;
};
