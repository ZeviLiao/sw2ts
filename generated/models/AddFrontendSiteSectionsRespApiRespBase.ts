/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddFrontendSiteSectionsResp } from './AddFrontendSiteSectionsResp';
import type { EnumRet } from './EnumRet';

export type AddFrontendSiteSectionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddFrontendSiteSectionsResp;
};
