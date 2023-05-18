/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelFileResp } from './DelFileResp';
import type { EnumRet } from './EnumRet';

export type DelFileRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelFileResp;
};
