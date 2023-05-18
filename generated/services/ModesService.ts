/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddModeReq } from '../models/AddModeReq';
import type { AddModeRespApiRespBase } from '../models/AddModeRespApiRespBase';
import type { DelModeRespApiRespBase } from '../models/DelModeRespApiRespBase';
import type { GetModeRespApiRespBase } from '../models/GetModeRespApiRespBase';
import type { GetModesRespApiRespBase } from '../models/GetModesRespApiRespBase';
import type { GetModeTranslationsRespApiRespBase } from '../models/GetModeTranslationsRespApiRespBase';
import type { ModModeReq } from '../models/ModModeReq';
import type { ModModeRespApiRespBase } from '../models/ModModeRespApiRespBase';
import type { ModModeTranslationsReq } from '../models/ModModeTranslationsReq';
import type { ModModeTranslationsRespApiRespBase } from '../models/ModModeTranslationsRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ModesService {

    /**
     * Get modes by condition
     * @param name Modes Name
     * @param abbreviation Modes Abbreviation
     * @param gameId Modes Game Id
     * @param pageNo 
     * @param pageSize 
     * @returns GetModesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Modes(
name?: string,
abbreviation?: string,
gameId?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetModesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/modes',
            query: {
                'Name': name,
                'Abbreviation': abbreviation,
                'GameId': gameId,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add new game mode
     * @param requestBody Request
     * @returns AddModeRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Modes(
requestBody?: AddModeReq,
): CancelablePromise<AddModeRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/modes',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get game mode
     * @param id Modes Id
     * @returns GetModeRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Modes1(
id: number,
): CancelablePromise<GetModeRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/modes/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game mode
     * @param id game Mode Id
     * @param requestBody Request
     * @returns ModModeRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Modes(
id: number,
requestBody?: ModModeReq,
): CancelablePromise<ModModeRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/modes/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete game mode
     * @param id game Mode Id
     * @returns DelModeRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Modes(
id: number,
): CancelablePromise<DelModeRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/modes/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get game mode translations
     * @param id Modes Id
     * @returns GetModeTranslationsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4ModesTranslations(
id: number,
): CancelablePromise<GetModeTranslationsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/modes/{id}/translations',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game mode translations
     * @param id game Mode Id
     * @param requestBody Request
     * @returns ModModeTranslationsRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4ModesTranslations(
id: number,
requestBody?: ModModeTranslationsReq,
): CancelablePromise<ModModeTranslationsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/modes/{id}/translations',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
