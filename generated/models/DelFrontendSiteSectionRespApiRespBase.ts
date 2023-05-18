/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelFrontendSiteSectionResp } from './DelFrontendSiteSectionResp';
import type { EnumRet } from './EnumRet';

export type DelFrontendSiteSectionRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelFrontendSiteSectionResp;
};
