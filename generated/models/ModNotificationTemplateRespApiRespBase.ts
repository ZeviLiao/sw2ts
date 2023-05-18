/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { ModNotificationTemplateResp } from './ModNotificationTemplateResp';

export type ModNotificationTemplateRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: ModNotificationTemplateResp;
};
