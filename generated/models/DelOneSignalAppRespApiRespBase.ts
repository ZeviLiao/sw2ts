/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelOneSignalAppResp } from './DelOneSignalAppResp';
import type { EnumRet } from './EnumRet';

export type DelOneSignalAppRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelOneSignalAppResp;
};
