/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetOneSignalAppsResp } from './GetOneSignalAppsResp';

export type GetOneSignalAppsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetOneSignalAppsResp;
};
