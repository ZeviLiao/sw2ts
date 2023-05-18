/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModOneSignalAppReq = {
    /**
     * One Signal App Id
     */
    oneSignalAppId: number;
    /**
     * App Id
     */
    appId: string;
    /**
     * Api Key
     */
    apiKey: string;
    /**
     * Safari Web Id
     */
    safariWebId: string;
    /**
     * Player Match Starting Notification Android Channel Id
     */
    playerMatchStartingNotificationAndroidChannelId?: string | null;
    /**
     * Team Match Starting Notification Android Channel Id
     */
    teamMatchStartingNotificationAndroidChannelId?: string | null;
    /**
     * Player Article Notification Android Channel Id
     */
    playerArticleNotificationAndroidChannelId?: string | null;
    /**
     * Team Article Notification Android Channel Id
     */
    teamArticleNotificationAndroidChannelId?: string | null;
    /**
     * Player Match Resulted Notification Android Channel Id
     */
    playerMatchResultedNotificationAndroidChannelId?: string | null;
    /**
     * Team Match Resulted Notification Android Channel Id
     */
    teamMatchResultedNotificationAndroidChannelId?: string | null;
    /**
     * Team Transfer Notification Android Channel Id
     */
    teamTransferNotificationAndroidChannelId?: string | null;
    /**
     * Player Transfer Notification Android Channel Id
     */
    playerTransferNotificationAndroidChannelId?: string | null;
};
