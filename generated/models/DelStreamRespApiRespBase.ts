/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelStreamResp } from './DelStreamResp';
import type { EnumRet } from './EnumRet';

export type DelStreamRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelStreamResp;
};
