/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetRoleTemplatesByGroupResp } from './GetRoleTemplatesByGroupResp';

export type GetRoleTemplatesByGroupRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetRoleTemplatesByGroupResp;
};
