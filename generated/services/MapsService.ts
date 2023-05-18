/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddMapRespApiRespBase } from '../models/AddMapRespApiRespBase';
import type { DelMapRespApiRespBase } from '../models/DelMapRespApiRespBase';
import type { GetMapRespApiRespBase } from '../models/GetMapRespApiRespBase';
import type { GetMapsRespApiRespBase } from '../models/GetMapsRespApiRespBase';
import type { GetMapTranslationsRespApiRespBase } from '../models/GetMapTranslationsRespApiRespBase';
import type { ModMapRespApiRespBase } from '../models/ModMapRespApiRespBase';
import type { ModMapTranslationsReq } from '../models/ModMapTranslationsReq';
import type { ModMapTranslationsRespApiRespBase } from '../models/ModMapTranslationsRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MapsService {

    /**
     * Get maps by condition
     * @param name Maps Name
     * @param gameId Maps Game Id
     * @param pageNo 
     * @param pageSize 
     * @returns GetMapsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Maps(
name?: string,
gameId?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetMapsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/maps',
            query: {
                'Name': name,
                'GameId': gameId,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add new game map
     * @param formData 
     * @returns AddMapRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Maps(
formData?: {
/**
 * Game Map Name
 */
Name: string;
/**
 * Image file
 */
ImageFile?: Blob;
/**
 * Map Game Id
 */
GameId: number;
},
): CancelablePromise<AddMapRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/maps',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get game map
     * @param id Maps Id
     * @returns GetMapRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Maps1(
id: number,
): CancelablePromise<GetMapRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/maps/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game map
     * @param id game map Id
     * @param formData 
     * @returns ModMapRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Maps(
id: number,
formData?: {
/**
 * Game Map Id
 */
Id: number;
/**
 * Game Map Name
 */
Name: string;
/**
 * Image file
 */
ImageFile?: Blob;
/**
 * Map Game Id
 */
GameId: number;
},
): CancelablePromise<ModMapRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/maps/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete game map
     * @param id game map Id
     * @returns DelMapRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Maps(
id: number,
): CancelablePromise<DelMapRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/maps/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get game map translations
     * @param id Maps Id
     * @returns GetMapTranslationsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MapsTranslations(
id: number,
): CancelablePromise<GetMapTranslationsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/maps/{id}/translations',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game map translations
     * @param id game map Id
     * @param requestBody Request
     * @returns ModMapTranslationsRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4MapsTranslations(
id: number,
requestBody?: ModMapTranslationsReq,
): CancelablePromise<ModMapTranslationsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/maps/{id}/translations',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
