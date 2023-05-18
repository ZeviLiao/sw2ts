/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthTestService {

    /**
     * Login
     * @returns any Success
     * @throws ApiError
     */
    public static getLogin(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/login',
        });
    }

    /**
     * Register
     * @returns any Success
     * @throws ApiError
     */
    public static getRegister(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/register',
        });
    }

    /**
     * @returns any Success
     * @throws ApiError
     */
    public static getLogout(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/logout',
        });
    }

    /**
     * @param code 
     * @param locale 
     * @param state 
     * @param userState 
     * @returns any Success
     * @throws ApiError
     */
    public static getOauthCallback(
code?: string,
locale?: string,
state?: string,
userState?: string,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/oauth-callback',
            query: {
                'Code': code,
                'Locale': locale,
                'State': state,
                'UserState': userState,
            },
        });
    }

}
