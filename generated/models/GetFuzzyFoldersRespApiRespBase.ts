/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetFuzzyFoldersResp } from './GetFuzzyFoldersResp';

export type GetFuzzyFoldersRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetFuzzyFoldersResp;
};
