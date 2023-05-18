/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddGameResp } from './AddGameResp';
import type { EnumRet } from './EnumRet';

export type AddGameRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddGameResp;
};
