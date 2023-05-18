/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetHeroTranslationsResp } from './GetHeroTranslationsResp';

export type GetHeroTranslationsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetHeroTranslationsResp;
};
