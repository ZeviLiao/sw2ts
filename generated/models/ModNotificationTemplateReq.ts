/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModNotificationTemplateReq = {
    /**
     * Notification Template Id
     */
    notificationTemplateId: number;
    webTitle: string;
    webBody: string;
    pushTitle?: string | null;
    pushBody?: string | null;
    emailSubject?: string | null;
    emailTextBody?: string | null;
    emailHtmlBody?: string | null;
};
