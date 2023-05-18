/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetOneSignalAppResp } from './GetOneSignalAppResp';

export type GetOneSignalAppRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetOneSignalAppResp;
};
