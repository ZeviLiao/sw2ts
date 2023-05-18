/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelMapResp } from './DelMapResp';
import type { EnumRet } from './EnumRet';

export type DelMapRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelMapResp;
};
