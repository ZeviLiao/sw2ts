/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetFuzzyMediaVideosResp } from './GetFuzzyMediaVideosResp';

export type GetFuzzyMediaVideosRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetFuzzyMediaVideosResp;
};
