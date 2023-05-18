/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddFileResp } from './AddFileResp';
import type { EnumRet } from './EnumRet';

export type AddFileRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddFileResp;
};
