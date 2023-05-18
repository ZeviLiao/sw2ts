/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetLocaleOptionsResp } from './GetLocaleOptionsResp';

export type GetLocaleOptionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetLocaleOptionsResp;
};
