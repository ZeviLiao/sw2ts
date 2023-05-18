/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetUserTypeOptionsResp } from './GetUserTypeOptionsResp';

export type GetUserTypeOptionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetUserTypeOptionsResp;
};
