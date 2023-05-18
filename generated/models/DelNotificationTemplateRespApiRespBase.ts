/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelNotificationTemplateResp } from './DelNotificationTemplateResp';
import type { EnumRet } from './EnumRet';

export type DelNotificationTemplateRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelNotificationTemplateResp;
};
