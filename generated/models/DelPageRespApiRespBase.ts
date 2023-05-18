/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelPageResp } from './DelPageResp';
import type { EnumRet } from './EnumRet';

export type DelPageRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelPageResp;
};
