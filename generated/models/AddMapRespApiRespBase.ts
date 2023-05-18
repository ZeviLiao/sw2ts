/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddMapResp } from './AddMapResp';
import type { EnumRet } from './EnumRet';

export type AddMapRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddMapResp;
};
