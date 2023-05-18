/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { ModSideTranslationsResp } from './ModSideTranslationsResp';

export type ModSideTranslationsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: ModSideTranslationsResp;
};
