/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddOneSignalAppResp } from './AddOneSignalAppResp';
import type { EnumRet } from './EnumRet';

export type AddOneSignalAppRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddOneSignalAppResp;
};
