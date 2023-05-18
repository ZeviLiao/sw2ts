/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelPlayerResp } from './DelPlayerResp';
import type { EnumRet } from './EnumRet';

export type DelPlayerRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelPlayerResp;
};
