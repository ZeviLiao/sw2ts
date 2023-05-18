/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddMediaVodResp } from './AddMediaVodResp';
import type { EnumRet } from './EnumRet';

export type AddMediaVodRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddMediaVodResp;
};
