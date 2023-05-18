/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetMapTranslationsResp } from './GetMapTranslationsResp';

export type GetMapTranslationsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetMapTranslationsResp;
};
