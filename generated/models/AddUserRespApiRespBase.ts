/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddUserResp } from './AddUserResp';
import type { EnumRet } from './EnumRet';

export type AddUserRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddUserResp;
};
