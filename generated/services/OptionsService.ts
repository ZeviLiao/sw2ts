/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetContactTypesRespApiRespBase } from '../models/GetContactTypesRespApiRespBase';
import type { GetCountryOptionsRespApiRespBase } from '../models/GetCountryOptionsRespApiRespBase';
import type { GetFrontendLocaleOptionsRespApiRespBase } from '../models/GetFrontendLocaleOptionsRespApiRespBase';
import type { GetFrontendOptionsRespApiRespBase } from '../models/GetFrontendOptionsRespApiRespBase';
import type { GetGameOptionsRespApiRespBase } from '../models/GetGameOptionsRespApiRespBase';
import type { GetGenderOptionsRespApiRespBase } from '../models/GetGenderOptionsRespApiRespBase';
import type { GetGgCodeInfoRespApiRespBase } from '../models/GetGgCodeInfoRespApiRespBase';
import type { GetLanguagesRespApiRespBase } from '../models/GetLanguagesRespApiRespBase';
import type { GetLocaleOptionsRespApiRespBase } from '../models/GetLocaleOptionsRespApiRespBase';
import type { GetNotificationTypeOptionsRespApiRespBase } from '../models/GetNotificationTypeOptionsRespApiRespBase';
import type { GetServerOptionsRespApiRespBase } from '../models/GetServerOptionsRespApiRespBase';
import type { GetSiteSectionsOptionsRespApiRespBase } from '../models/GetSiteSectionsOptionsRespApiRespBase';
import type { GetStateOptionsRespApiRespBase } from '../models/GetStateOptionsRespApiRespBase';
import type { GetUserTypeOptionsRespApiRespBase } from '../models/GetUserTypeOptionsRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OptionsService {

    /**
     * Get state options
     * @returns GetStateOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsStates(): CancelablePromise<GetStateOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/states',
        });
    }

    /**
     * Get contact types
     * @returns GetContactTypesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsContactTypes(): CancelablePromise<GetContactTypesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/contact-types',
        });
    }

    /**
     * Get frontend options
     * @returns GetFrontendOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsFrontends(): CancelablePromise<GetFrontendOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/frontends',
        });
    }

    /**
     * Get frontend options by user
     * @returns GetFrontendOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsFrontendsByUser(): CancelablePromise<GetFrontendOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/frontends-by-user',
        });
    }

    /**
     * Get locale options
     * @returns GetLocaleOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsLocales(): CancelablePromise<GetLocaleOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/locales',
        });
    }

    /**
     * Get frontend locale options
     * @returns GetFrontendLocaleOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsFrontendLocales(): CancelablePromise<GetFrontendLocaleOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/frontend-locales',
        });
    }

    /**
     * Get site section options
     * @returns GetSiteSectionsOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsSiteSections(): CancelablePromise<GetSiteSectionsOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/site-sections',
        });
    }

    /**
     * Get country options
     * @returns GetCountryOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsCountries(): CancelablePromise<GetCountryOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/countries',
        });
    }

    /**
     * Get user type options
     * @returns GetUserTypeOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsUserTypes(): CancelablePromise<GetUserTypeOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/user-types',
        });
    }

    /**
     * Get gender options
     * @returns GetGenderOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsGenders(): CancelablePromise<GetGenderOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/genders',
        });
    }

    /**
     * Get GG Code Info
     * @param url 
     * @returns GetGgCodeInfoRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsProxy(
url?: string,
): CancelablePromise<GetGgCodeInfoRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/proxy',
            query: {
                'url': url,
            },
        });
    }

    /**
     * Get Notification Type Options
     * @returns GetNotificationTypeOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsNotificationTypes(): CancelablePromise<GetNotificationTypeOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/notification-types',
        });
    }

    /**
     * Get language options
     * @returns GetLanguagesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsLanguages(): CancelablePromise<GetLanguagesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/languages',
        });
    }

    /**
     * Get language options
     * @returns GetGameOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsGames(): CancelablePromise<GetGameOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/games',
        });
    }

    /**
     * Get servers(locations) options
     * @param gameId 
     * @returns GetServerOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4OptionsServers(
gameId?: number,
): CancelablePromise<GetServerOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/options/servers',
            query: {
                'gameId': gameId,
            },
        });
    }

}
