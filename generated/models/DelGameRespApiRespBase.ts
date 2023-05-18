/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelGameResp } from './DelGameResp';
import type { EnumRet } from './EnumRet';

export type DelGameRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelGameResp;
};
