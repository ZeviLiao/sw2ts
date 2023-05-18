/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddStreamResp } from './AddStreamResp';
import type { EnumRet } from './EnumRet';

export type AddStreamRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddStreamResp;
};
