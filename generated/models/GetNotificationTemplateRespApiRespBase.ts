/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetNotificationTemplateResp } from './GetNotificationTemplateResp';

export type GetNotificationTemplateRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetNotificationTemplateResp;
};
