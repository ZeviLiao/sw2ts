/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddPlayerMediaItemRespApiRespBase } from '../models/AddPlayerMediaItemRespApiRespBase';
import type { AddPlayerRespApiRespBase } from '../models/AddPlayerRespApiRespBase';
import type { DelPlayerMediaItemRespApiRespBase } from '../models/DelPlayerMediaItemRespApiRespBase';
import type { DelPlayerRespApiRespBase } from '../models/DelPlayerRespApiRespBase';
import type { EnumGender } from '../models/EnumGender';
import type { GetFuzzyPlayersRespApiRespBase } from '../models/GetFuzzyPlayersRespApiRespBase';
import type { GetPlayerMediaItemsRespApiRespBase } from '../models/GetPlayerMediaItemsRespApiRespBase';
import type { GetPlayerRespApiRespBase } from '../models/GetPlayerRespApiRespBase';
import type { GetPlayersRespApiRespBase } from '../models/GetPlayersRespApiRespBase';
import type { GetUserForPlayerRespApiRespBase } from '../models/GetUserForPlayerRespApiRespBase';
import type { ModPlayerRespApiRespBase } from '../models/ModPlayerRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PlayersService {

    /**
     * Get players
     * @param id Player Id
     * @param nickName Player Name
     * @param firstName First Name
     * @param lastName Last Name
     * @param primaryGameId Primary Game Id
     * @param countryId CountryId
     * @param createdAtFrom Created at from
     * @param createdAtTo Created at to
     * @param gameAccount Game Account
     * @param pageNo 
     * @param pageSize 
     * @returns GetPlayersRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Players(
id?: number,
nickName?: string,
firstName?: string,
lastName?: string,
primaryGameId?: number,
countryId?: number,
createdAtFrom?: number,
createdAtTo?: number,
gameAccount?: string,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetPlayersRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/players',
            query: {
                'Id': id,
                'NickName': nickName,
                'FirstName': firstName,
                'LastName': lastName,
                'PrimaryGameId': primaryGameId,
                'CountryId': countryId,
                'CreatedAtFrom': createdAtFrom,
                'CreatedAtTo': createdAtTo,
                'GameAccount': gameAccount,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add player
     * @param formData 
     * @returns AddPlayerRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Players(
formData?: {
UserId?: number;
IsActive: boolean;
NickName: string;
FirstName?: string;
LastName?: string;
Gender: EnumGender;
/**
 * ex:2022-12-01
 */
DateOfBirth?: string;
CountryId: number;
InitialRating: number;
PrimaryGameId?: number;
Image?: Blob;
Descriptions?: string;
FaceBook?: string;
Twitter?: string;
Youtube?: string;
},
): CancelablePromise<AddPlayerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/players',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get player
     * @param id PlayerId
     * @returns GetPlayerRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Players1(
id: number,
): CancelablePromise<GetPlayerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/players/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify player
     * @param id PlayerId
     * @param formData 
     * @returns ModPlayerRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Players(
id: number,
formData?: {
PlayerId: number;
UserId?: number;
IsActive: boolean;
NickName: string;
FirstName?: string;
LastName?: string;
Gender: EnumGender;
/**
 * ex:2022-12-01
 */
DateOfBirth?: string;
CountryId: number;
PrimaryGameId?: number;
Image?: Blob;
/**
 * if IsRemoveImage = true will remove Image and set ImageFilePath = null
 */
IsRemoveImage?: boolean;
Descriptions?: string;
FaceBook?: string;
Twitter?: string;
Youtube?: string;
},
): CancelablePromise<ModPlayerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/players/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete player
     * @param id PlayerId
     * @returns DelPlayerRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Players(
id: number,
): CancelablePromise<DelPlayerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/players/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get fuzzy players
     * @param fuzzyPrefix 
     * @param maxCount 
     * @returns GetFuzzyPlayersRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4PlayersFuzzy(
fuzzyPrefix: string,
maxCount?: number,
): CancelablePromise<GetFuzzyPlayersRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/players/fuzzy',
            query: {
                'FuzzyPrefix': fuzzyPrefix,
                'MaxCount': maxCount,
            },
        });
    }

    /**
     * Get User
     * @param id UserId
     * @returns GetUserForPlayerRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4PlayersUsers(
id: number,
): CancelablePromise<GetUserForPlayerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/players/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get player Media items
     * @param playerid 
     * @param pageNo 
     * @param pageSize 
     * @returns GetPlayerMediaItemsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4PlayersMediaItems(
playerid: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetPlayerMediaItemsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/players/{playerid}/media-items',
            path: {
                'playerid': playerid,
            },
            query: {
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add player new Media items
     * @param playerid 
     * @param mediaItems Media item Ids
     * @returns AddPlayerMediaItemRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4PlayersMediaItems(
playerid: number,
mediaItems: Array<number>,
): CancelablePromise<AddPlayerMediaItemRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/players/{playerid}/media-items',
            path: {
                'playerid': playerid,
            },
            query: {
                'MediaItems': mediaItems,
            },
        });
    }

    /**
     * Delete player Media item
     * @param playerid Player Id
     * @param mediaitemid Media Item Id
     * @returns DelPlayerMediaItemRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4PlayersMediaItems(
playerid: number,
mediaitemid: number,
): CancelablePromise<DelPlayerMediaItemRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/players/{playerid}/media-items/{mediaitemid}',
            path: {
                'playerid': playerid,
                'mediaitemid': mediaitemid,
            },
        });
    }

}
