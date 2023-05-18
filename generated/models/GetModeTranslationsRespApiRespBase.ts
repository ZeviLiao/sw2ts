/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetModeTranslationsResp } from './GetModeTranslationsResp';

export type GetModeTranslationsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetModeTranslationsResp;
};
