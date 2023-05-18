/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetFrontendSiteSectionsResp } from './GetFrontendSiteSectionsResp';

export type GetFrontendSiteSectionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetFrontendSiteSectionsResp;
};
