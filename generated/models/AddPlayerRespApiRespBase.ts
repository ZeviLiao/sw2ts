/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddPlayerResp } from './AddPlayerResp';
import type { EnumRet } from './EnumRet';

export type AddPlayerRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddPlayerResp;
};
