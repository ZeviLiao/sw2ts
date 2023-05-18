/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddServerResp } from './AddServerResp';
import type { EnumRet } from './EnumRet';

export type AddServerRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddServerResp;
};
