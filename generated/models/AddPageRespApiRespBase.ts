/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddPageResp } from './AddPageResp';
import type { EnumRet } from './EnumRet';

export type AddPageRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddPageResp;
};
