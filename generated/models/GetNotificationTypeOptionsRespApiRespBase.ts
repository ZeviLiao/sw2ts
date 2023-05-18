/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetNotificationTypeOptionsResp } from './GetNotificationTypeOptionsResp';

export type GetNotificationTypeOptionsRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetNotificationTypeOptionsResp;
};
