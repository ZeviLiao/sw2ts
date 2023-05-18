/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddMediaItemsResp } from './AddMediaItemsResp';
import type { EnumRet } from './EnumRet';

export type AddMediaItemsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddMediaItemsResp;
};
