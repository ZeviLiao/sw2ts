/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddModeResp } from './AddModeResp';
import type { EnumRet } from './EnumRet';

export type AddModeRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddModeResp;
};
