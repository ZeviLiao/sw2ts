/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { ModFrontendSiteSectionResp } from './ModFrontendSiteSectionResp';

export type ModFrontendSiteSectionRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: ModFrontendSiteSectionResp;
};
