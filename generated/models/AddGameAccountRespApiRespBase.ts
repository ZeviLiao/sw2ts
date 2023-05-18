/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddGameAccountResp } from './AddGameAccountResp';
import type { EnumRet } from './EnumRet';

export type AddGameAccountRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddGameAccountResp;
};
