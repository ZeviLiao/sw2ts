/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelGroupResp } from './DelGroupResp';
import type { EnumRet } from './EnumRet';

export type DelGroupRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelGroupResp;
};
