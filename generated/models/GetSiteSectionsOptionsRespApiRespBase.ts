/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetSiteSectionsOptionsResp } from './GetSiteSectionsOptionsResp';

export type GetSiteSectionsOptionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetSiteSectionsOptionsResp;
};
