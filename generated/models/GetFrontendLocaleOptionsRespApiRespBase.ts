/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetFrontendLocaleOptionsResp } from './GetFrontendLocaleOptionsResp';

export type GetFrontendLocaleOptionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetFrontendLocaleOptionsResp;
};
