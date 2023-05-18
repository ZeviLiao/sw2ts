/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetPlayerMediaItemsResp } from './GetPlayerMediaItemsResp';

export type GetPlayerMediaItemsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetPlayerMediaItemsResp;
};
