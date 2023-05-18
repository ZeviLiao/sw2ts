/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddOneSignalAppReq } from '../models/AddOneSignalAppReq';
import type { AddOneSignalAppRespApiRespBase } from '../models/AddOneSignalAppRespApiRespBase';
import type { DelOneSignalAppRespApiRespBase } from '../models/DelOneSignalAppRespApiRespBase';
import type { GetOneSignalAppRespApiRespBase } from '../models/GetOneSignalAppRespApiRespBase';
import type { GetOneSignalAppsRespApiRespBase } from '../models/GetOneSignalAppsRespApiRespBase';
import type { ModOneSignalAppReq } from '../models/ModOneSignalAppReq';
import type { ModOneSignalAppRespApiRespBase } from '../models/ModOneSignalAppRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OneSignalAppsService {

    /**
     * Get One Signal Apps
     * @param pageNo 
     * @param pageSize 
     * @returns GetOneSignalAppsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MessagingOnesignalApps(
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetOneSignalAppsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/messaging-onesignal-apps',
            query: {
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add One Signal App
     * @param requestBody 
     * @returns AddOneSignalAppRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4MessagingOnesignalApps(
requestBody?: AddOneSignalAppReq,
): CancelablePromise<AddOneSignalAppRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/messaging-onesignal-apps',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get One Signal App
     * @param id 
     * @returns GetOneSignalAppRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MessagingOnesignalApps1(
id: number,
): CancelablePromise<GetOneSignalAppRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/messaging-onesignal-apps/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify One Signal App
     * @param id 
     * @param requestBody 
     * @returns ModOneSignalAppRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4MessagingOnesignalApps(
id: number,
requestBody?: ModOneSignalAppReq,
): CancelablePromise<ModOneSignalAppRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/messaging-onesignal-apps/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete One Signal App
     * @param id 
     * @returns DelOneSignalAppRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4MessagingOnesignalApps(
id: number,
): CancelablePromise<DelOneSignalAppRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/messaging-onesignal-apps/{id}',
            path: {
                'id': id,
            },
        });
    }

}
