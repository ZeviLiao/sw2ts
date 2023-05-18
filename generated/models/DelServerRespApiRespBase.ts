/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelServerResp } from './DelServerResp';
import type { EnumRet } from './EnumRet';

export type DelServerRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelServerResp;
};
