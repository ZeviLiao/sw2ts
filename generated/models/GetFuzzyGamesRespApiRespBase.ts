/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetFuzzyGamesResp } from './GetFuzzyGamesResp';

export type GetFuzzyGamesRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetFuzzyGamesResp;
};
