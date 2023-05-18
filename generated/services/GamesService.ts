/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddGameRespApiRespBase } from '../models/AddGameRespApiRespBase';
import type { DelGameRespApiRespBase } from '../models/DelGameRespApiRespBase';
import type { GetFuzzyGamesRespApiRespBase } from '../models/GetFuzzyGamesRespApiRespBase';
import type { GetGameRespApiRespBase } from '../models/GetGameRespApiRespBase';
import type { GetGamesRespApiRespBase } from '../models/GetGamesRespApiRespBase';
import type { ModGameRespApiRespBase } from '../models/ModGameRespApiRespBase';
import type { ModGameTranslationsReq } from '../models/ModGameTranslationsReq';
import type { ModGameTranslationsRespApiRespBase } from '../models/ModGameTranslationsRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GamesService {

    /**
     * Get games by condition
     * @param gameName Game name
     * @param isLegacy Is legacy
     * @param hasPlayerRankings Has player rankings
     * @param hasTeamRankings Has team rankings
     * @param pageNo 
     * @param pageSize 
     * @returns GetGamesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Games(
gameName?: string,
isLegacy?: boolean,
hasPlayerRankings?: boolean,
hasTeamRankings?: boolean,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetGamesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/games',
            query: {
                'GameName': gameName,
                'IsLegacy': isLegacy,
                'HasPlayerRankings': hasPlayerRankings,
                'HasTeamRankings': hasTeamRankings,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add game
     * @param formData 
     * @returns AddGameRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Games(
formData?: {
/**
 * Game name
 */
Name: string;
/**
 * Has player rankings
 */
HasPlayerRankings: boolean;
/**
 * Has team rankings
 */
HasTeamRankings: boolean;
/**
 * Has streams
 */
HasStreams: boolean;
/**
 * Grid id
 */
GridId?: number;
/**
 * Steam app id
 */
SteamAppId?: number;
/**
 * Twitch game id
 */
TwitchGameId?: number;
/**
 * Icon image file
 */
IconImageFile?: Blob;
/**
 * Is legacy
 */
IsLegacy: boolean;
/**
 * Recommended replay count
 */
RecommendedReplayCount: number;
},
): CancelablePromise<AddGameRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/games',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get game
     * @param id GameId
     * @returns GetGameRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Games1(
id: number,
): CancelablePromise<GetGameRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/games/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Delete game
     * @param id GameId
     * @returns DelGameRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Games(
id: number,
): CancelablePromise<DelGameRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/games/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game
     * @param id GameId
     * @param formData 
     * @returns ModGameRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4GamesId(
id?: number,
formData?: {
/**
 * Game id
 */
GameId: number;
/**
 * Game name
 */
Name: string;
/**
 * Has player rankings
 */
HasPlayerRankings: boolean;
/**
 * Has team rankings
 */
HasTeamRankings: boolean;
/**
 * Has streams
 */
HasStreams: boolean;
/**
 * Grid id
 */
GridId?: number;
/**
 * Steam app id
 */
SteamAppId?: number;
/**
 * Twitch game id
 */
TwitchGameId?: number;
/**
 * Icon image file
 */
IconImageFile?: Blob;
/**
 * Is legacy
 */
IsLegacy: boolean;
/**
 * Recommended replay count
 */
RecommendedReplayCount: number;
},
): CancelablePromise<ModGameRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/games/id',
            query: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Modify game translations
     * @param id 
     * @param requestBody 
     * @returns ModGameTranslationsRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4GamesTranslations(
id: number,
requestBody?: ModGameTranslationsReq,
): CancelablePromise<ModGameTranslationsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/games/{id}/translations',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get fuzzy games
     * @param fuzzyPrefix if FuzzyPrefix = null will get list of all games
     * @param maxCount 
     * @returns GetFuzzyGamesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4GamesFuzzy(
fuzzyPrefix?: string,
maxCount?: number,
): CancelablePromise<GetFuzzyGamesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/games/fuzzy',
            query: {
                'FuzzyPrefix': fuzzyPrefix,
                'MaxCount': maxCount,
            },
        });
    }

}
