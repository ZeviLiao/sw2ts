/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelMediaItemResp } from './DelMediaItemResp';
import type { EnumRet } from './EnumRet';

export type DelMediaItemRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelMediaItemResp;
};
