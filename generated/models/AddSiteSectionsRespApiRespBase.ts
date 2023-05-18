/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddSiteSectionsResp } from './AddSiteSectionsResp';
import type { EnumRet } from './EnumRet';

export type AddSiteSectionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddSiteSectionsResp;
};
