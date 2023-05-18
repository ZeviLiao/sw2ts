/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { ModGameRegionTranslationResp } from './ModGameRegionTranslationResp';

export type ModGameRegionTranslationRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: ModGameRegionTranslationResp;
};
