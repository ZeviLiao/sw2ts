/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddNotificationTemplateResp } from './AddNotificationTemplateResp';
import type { EnumRet } from './EnumRet';

export type AddNotificationTemplateRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddNotificationTemplateResp;
};
