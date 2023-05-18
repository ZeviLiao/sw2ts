/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelGameAccountResp } from './DelGameAccountResp';
import type { EnumRet } from './EnumRet';

export type DelGameAccountRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelGameAccountResp;
};
