/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelSideResp } from './DelSideResp';
import type { EnumRet } from './EnumRet';

export type DelSideRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelSideResp;
};
