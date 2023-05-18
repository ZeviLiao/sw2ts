/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationTemplateArgument } from './NotificationTemplateArgument';
import type { NotificationTemplateDetail } from './NotificationTemplateDetail';

export type GetNotificationTemplateResp = {
    detail?: NotificationTemplateDetail;
    arguments?: Array<NotificationTemplateArgument> | null;
};
