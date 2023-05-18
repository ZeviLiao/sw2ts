/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddGameAccountRespApiRespBase } from '../models/AddGameAccountRespApiRespBase';
import type { DelGameAccountRespApiRespBase } from '../models/DelGameAccountRespApiRespBase';
import type { GetFuzzyTournamentsRespApiRespBase } from '../models/GetFuzzyTournamentsRespApiRespBase';
import type { GetGameAccountRespApiRespBase } from '../models/GetGameAccountRespApiRespBase';
import type { GetGameAccountsRespApiRespBase } from '../models/GetGameAccountsRespApiRespBase';
import type { ModGameAccountReq } from '../models/ModGameAccountReq';
import type { ModGameAccountRespApiRespBase } from '../models/ModGameAccountRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TournamentsService {

    /**
     * Get GameAccounts
     * @param playerId PlayerId
     * @param pageNo 
     * @param pageSize 
     * @returns GetGameAccountsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4TournamentsGameAccounts(
playerId: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetGameAccountsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/tournaments/game-accounts',
            query: {
                'PlayerId': playerId,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add GameAccount
     * @param formData 
     * @returns AddGameAccountRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4TournamentsGameAccounts(
formData?: {
/**
 * PlayerId
 */
PlayerId: number;
/**
 * GameId
 */
GameId: number;
/**
 * Server Id
 */
ServerId?: number;
/**
 * GameAccount Name
 */
GameAccountName: string;
},
): CancelablePromise<AddGameAccountRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/tournaments/game-accounts',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get GameAccount
     * @param id GameAccountId
     * @returns GetGameAccountRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4TournamentsGameAccounts1(
id: number,
): CancelablePromise<GetGameAccountRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/tournaments/game-accounts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify GameAccount
     * @param id PlayerId
     * @param requestBody Request
     * @returns ModGameAccountRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4TournamentsGameAccounts(
id: number,
requestBody?: ModGameAccountReq,
): CancelablePromise<ModGameAccountRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/tournaments/game-accounts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete GameAccount
     * @param id GameAccountId
     * @returns DelGameAccountRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4TournamentsGameAccounts(
id: number,
): CancelablePromise<DelGameAccountRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/tournaments/game-accounts/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get fuzzy users
     * @param fuzzyPrefix 
     * @param maxCount 
     * @returns GetFuzzyTournamentsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4TournamentsFuzzy(
fuzzyPrefix: string,
maxCount?: number,
): CancelablePromise<GetFuzzyTournamentsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/tournaments/fuzzy',
            query: {
                'FuzzyPrefix': fuzzyPrefix,
                'MaxCount': maxCount,
            },
        });
    }

}
