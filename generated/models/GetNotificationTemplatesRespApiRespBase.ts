/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetNotificationTemplatesResp } from './GetNotificationTemplatesResp';

export type GetNotificationTemplatesRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetNotificationTemplatesResp;
};
