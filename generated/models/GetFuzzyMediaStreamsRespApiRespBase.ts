/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetFuzzyMediaStreamsResp } from './GetFuzzyMediaStreamsResp';

export type GetFuzzyMediaStreamsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetFuzzyMediaStreamsResp;
};
