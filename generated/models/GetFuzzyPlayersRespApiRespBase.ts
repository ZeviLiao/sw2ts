/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetFuzzyPlayersResp } from './GetFuzzyPlayersResp';

export type GetFuzzyPlayersRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetFuzzyPlayersResp;
};
