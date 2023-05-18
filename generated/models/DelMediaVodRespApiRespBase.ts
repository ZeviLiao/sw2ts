/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelMediaVodResp } from './DelMediaVodResp';
import type { EnumRet } from './EnumRet';

export type DelMediaVodRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelMediaVodResp;
};
