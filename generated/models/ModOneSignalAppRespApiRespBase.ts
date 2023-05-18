/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { ModOneSignalAppResp } from './ModOneSignalAppResp';

export type ModOneSignalAppRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: ModOneSignalAppResp;
};
