/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type NotificationTemplateListItem = {
    /**
     * Notification Template Id
     */
    id: number;
    /**
     * Messaging Notification Type Id
     */
    messagingNotificationTypeId: number;
    /**
     * Frontend Name
     */
    feName: string;
    /**
     * Notification Template Name
     */
    name: string;
    /**
     * Notification Template Description
     */
    desc: string;
    /**
     * Is Web Set
     */
    webSupported: boolean;
    /**
     * Is Email Set
     */
    emailSupported: boolean;
    /**
     * Is Push Set
     */
    pushSupported: boolean;
};
