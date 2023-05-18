/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetFuzzyUsersByGroupResp } from './GetFuzzyUsersByGroupResp';

export type GetFuzzyUsersByGroupRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetFuzzyUsersByGroupResp;
};
