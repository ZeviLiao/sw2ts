/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelUserResp } from './DelUserResp';
import type { EnumRet } from './EnumRet';

export type DelUserRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelUserResp;
};
