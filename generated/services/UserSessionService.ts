/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetUserSessionRespApiRespBase } from '../models/GetUserSessionRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserSessionService {

    /**
     * Get user menu and userprofile
     * @returns GetUserSessionRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Usersession(): CancelablePromise<GetUserSessionRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/usersession',
        });
    }

}
