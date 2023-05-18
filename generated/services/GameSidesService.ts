/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddSideRespApiRespBase } from '../models/AddSideRespApiRespBase';
import type { DelSideRespApiRespBase } from '../models/DelSideRespApiRespBase';
import type { GetSideRespApiRespBase } from '../models/GetSideRespApiRespBase';
import type { GetSidesRespApiRespBase } from '../models/GetSidesRespApiRespBase';
import type { GetSideTranslationsRespApiRespBase } from '../models/GetSideTranslationsRespApiRespBase';
import type { ModSideRespApiRespBase } from '../models/ModSideRespApiRespBase';
import type { ModSideTranslationsReq } from '../models/ModSideTranslationsReq';
import type { ModSideTranslationsRespApiRespBase } from '../models/ModSideTranslationsRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GameSidesService {

    /**
     * Get sides by condition
     * @param name Side Name
     * @param gameId Side Game Id
     * @param pageNo 
     * @param pageSize 
     * @returns GetSidesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Gamesides(
name?: string,
gameId?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetSidesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/gamesides',
            query: {
                'Name': name,
                'GameId': gameId,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add new game side
     * @param formData 
     * @returns AddSideRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Gamesides(
formData?: {
/**
 * Game Side Name
 */
Name: string;
/**
 * Icon file
 */
IconFile?: Blob;
/**
 * Side Game Id
 */
GameId: number;
},
): CancelablePromise<AddSideRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/gamesides',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get game side
     * @param id Sides Id
     * @returns GetSideRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Gamesides1(
id: number,
): CancelablePromise<GetSideRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/gamesides/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game side
     * @param id Game side Id
     * @param formData 
     * @returns ModSideRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Gamesides(
id: number,
formData?: {
/**
 * Side Id
 */
Id: number;
/**
 * Game Side Name
 */
Name: string;
/**
 * Icon file
 */
IconFile?: Blob;
/**
 * Side Game Id
 */
GameId: number;
},
): CancelablePromise<ModSideRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/gamesides/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete game side
     * @param id Game side Id
     * @returns DelSideRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Gamesides(
id: number,
): CancelablePromise<DelSideRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/gamesides/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get game side translations
     * @param id Sides Id
     * @returns GetSideTranslationsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4GamesidesTranslations(
id: number,
): CancelablePromise<GetSideTranslationsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/gamesides/{id}/translations',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game side translations
     * @param id Game side Id
     * @param requestBody Request
     * @returns ModSideTranslationsRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4GamesidesTranslations(
id: number,
requestBody?: ModSideTranslationsReq,
): CancelablePromise<ModSideTranslationsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/gamesides/{id}/translations',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
