/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetFuzzyUsersResp } from './GetFuzzyUsersResp';

export type GetFuzzyUsersRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetFuzzyUsersResp;
};
