/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { NotificationTemplateListItem } from './NotificationTemplateListItem';
import type { PagingRespBase } from './PagingRespBase';

export type GetNotificationTemplatesResp = {
    /**
     * Notification Templates
     */
    notificationTemplates?: Array<NotificationTemplateListItem> | null;
    paging?: PagingRespBase;
};
