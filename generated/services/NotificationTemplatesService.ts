/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddNotificationTemplateReq } from '../models/AddNotificationTemplateReq';
import type { AddNotificationTemplateRespApiRespBase } from '../models/AddNotificationTemplateRespApiRespBase';
import type { DelNotificationTemplateRespApiRespBase } from '../models/DelNotificationTemplateRespApiRespBase';
import type { GetNotificationTemplateRespApiRespBase } from '../models/GetNotificationTemplateRespApiRespBase';
import type { GetNotificationTemplatesRespApiRespBase } from '../models/GetNotificationTemplatesRespApiRespBase';
import type { ModNotificationTemplateReq } from '../models/ModNotificationTemplateReq';
import type { ModNotificationTemplateRespApiRespBase } from '../models/ModNotificationTemplateRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class NotificationTemplatesService {

    /**
     * Get Notification Templates
     * @param frontendId Frontend id
 * null: All
     * @param notificationTemplateType 
     * @param pageNo 
     * @param pageSize 
     * @returns GetNotificationTemplatesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MessagingNotificationTemplates(
frontendId?: number,
notificationTemplateType?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetNotificationTemplatesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/messaging-notification-templates',
            query: {
                'FrontendId': frontendId,
                'NotificationTemplateType': notificationTemplateType,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add Notification Template
     * @param requestBody 
     * @returns AddNotificationTemplateRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4MessagingNotificationTemplates(
requestBody?: AddNotificationTemplateReq,
): CancelablePromise<AddNotificationTemplateRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/messaging-notification-templates',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Notification Template
     * @param id 
     * @returns GetNotificationTemplateRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MessagingNotificationTemplates1(
id: number,
): CancelablePromise<GetNotificationTemplateRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/messaging-notification-templates/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify Notification Template
     * @param id 
     * @param requestBody 
     * @returns ModNotificationTemplateRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4MessagingNotificationTemplates(
id: number,
requestBody?: ModNotificationTemplateReq,
): CancelablePromise<ModNotificationTemplateRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/messaging-notification-templates/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Notification Template
     * @param id 
     * @returns DelNotificationTemplateRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4MessagingNotificationTemplates(
id: number,
): CancelablePromise<DelNotificationTemplateRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/messaging-notification-templates/{id}',
            path: {
                'id': id,
            },
        });
    }

}
