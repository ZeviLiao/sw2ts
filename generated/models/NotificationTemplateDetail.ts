/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NotificationTemplateDetail = {
    id: number;
    frontEndId: number;
    messagingNotificationTypeId?: number | null;
    typeIdentifier?: string | null;
    webSupported?: boolean;
    webTitle?: string | null;
    webBody?: string | null;
    pushSupported?: boolean;
    pushTitle?: string | null;
    pushBody?: string | null;
    emailSupported?: boolean;
    emailSubject?: string | null;
    emailTextBody?: string | null;
    emailHtmlBody?: string | null;
    createdAt: number;
    updatedAt: number;
};
