/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LogoutRespApiRespBase } from '../models/LogoutRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LogoutService {

    /**
     * Logout
     * @param refreshToken RefreshToken
     * @returns LogoutRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Logout(
refreshToken?: string,
): CancelablePromise<LogoutRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/logout',
            query: {
                'refreshToken': refreshToken,
            },
        });
    }

}
