/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelSiteSectionsResp } from './DelSiteSectionsResp';
import type { EnumRet } from './EnumRet';

export type DelSiteSectionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelSiteSectionsResp;
};
