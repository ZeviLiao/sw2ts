/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddGroupResp } from './AddGroupResp';
import type { EnumRet } from './EnumRet';

export type AddGroupRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddGroupResp;
};
