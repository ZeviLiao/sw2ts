/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelModeResp } from './DelModeResp';
import type { EnumRet } from './EnumRet';

export type DelModeRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelModeResp;
};
