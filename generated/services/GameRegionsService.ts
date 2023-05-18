/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddGameRegionReq } from '../models/AddGameRegionReq';
import type { AddGameRegionResp } from '../models/AddGameRegionResp';
import type { DelGameRegionResp } from '../models/DelGameRegionResp';
import type { GetGameRegionResp } from '../models/GetGameRegionResp';
import type { GetGameRegionsResp } from '../models/GetGameRegionsResp';
import type { GetGameRegionTranslationResp } from '../models/GetGameRegionTranslationResp';
import type { ModGameRegionReq } from '../models/ModGameRegionReq';
import type { ModGameRegionResp } from '../models/ModGameRegionResp';
import type { ModGameRegionTranslationReq } from '../models/ModGameRegionTranslationReq';
import type { ModGameRegionTranslationRespApiRespBase } from '../models/ModGameRegionTranslationRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GameRegionsService {

    /**
     * Get game regions
     * @param gameId Game id
     * @param regionName Region name
     * @param pageNo 
     * @param pageSize 
     * @returns GetGameRegionsResp Error
     * @throws ApiError
     */
    public static getApiV4GameRegions(
gameId?: number,
regionName?: string,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetGameRegionsResp> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/game-regions',
            query: {
                'GameId': gameId,
                'RegionName': regionName,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add game region
     * @param requestBody 
     * @returns AddGameRegionResp Error
     * @throws ApiError
     */
    public static postApiV4GameRegions(
requestBody?: AddGameRegionReq,
): CancelablePromise<AddGameRegionResp> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/game-regions',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get game region detail
     * @param id 
     * @returns GetGameRegionResp Error
     * @throws ApiError
     */
    public static getApiV4GameRegions1(
id: number,
): CancelablePromise<GetGameRegionResp> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/game-regions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game region
     * @param id 
     * @param requestBody 
     * @returns ModGameRegionResp Error
     * @throws ApiError
     */
    public static patchApiV4GameRegions(
id: number,
requestBody?: ModGameRegionReq,
): CancelablePromise<ModGameRegionResp> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/game-regions/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete game region
     * @param id 
     * @returns DelGameRegionResp Error
     * @throws ApiError
     */
    public static deleteApiV4GameRegions(
id: number,
): CancelablePromise<DelGameRegionResp> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/game-regions/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get game region translations
     * @param id 
     * @returns GetGameRegionTranslationResp Error
     * @throws ApiError
     */
    public static getApiV4GameRegionsTranslations(
id: number,
): CancelablePromise<GetGameRegionTranslationResp> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/game-regions/{id}/translations',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game region translation
     * @param id 
     * @param requestBody 
     * @returns ModGameRegionTranslationRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4GameRegionsTranslations(
id: number,
requestBody?: ModGameRegionTranslationReq,
): CancelablePromise<ModGameRegionTranslationRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/game-regions/{id}/translations',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
