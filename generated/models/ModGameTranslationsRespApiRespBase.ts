/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { ModGameTranslationsResp } from './ModGameTranslationsResp';

export type ModGameTranslationsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: ModGameTranslationsResp;
};
