/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelPlayerMediaItemResp } from './DelPlayerMediaItemResp';
import type { EnumRet } from './EnumRet';

export type DelPlayerMediaItemRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelPlayerMediaItemResp;
};
