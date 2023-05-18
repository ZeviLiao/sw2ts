/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddPlayerMediaItemResp } from './AddPlayerMediaItemResp';
import type { EnumRet } from './EnumRet';

export type AddPlayerMediaItemRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddPlayerMediaItemResp;
};
