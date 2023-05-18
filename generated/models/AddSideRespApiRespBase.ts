/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddSideResp } from './AddSideResp';
import type { EnumRet } from './EnumRet';

export type AddSideRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddSideResp;
};
