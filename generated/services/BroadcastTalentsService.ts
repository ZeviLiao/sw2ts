/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddBroadcastTalentRespApiRespBase } from '../models/AddBroadcastTalentRespApiRespBase';
import type { AddMediaItemsRespApiRespBase } from '../models/AddMediaItemsRespApiRespBase';
import type { DelBroadcastTalentRespApiRespBase } from '../models/DelBroadcastTalentRespApiRespBase';
import type { DelMediaItemRespApiRespBase } from '../models/DelMediaItemRespApiRespBase';
import type { EnumBroadcastTalentType } from '../models/EnumBroadcastTalentType';
import type { GetBroadcastTalentRespApiRespBase } from '../models/GetBroadcastTalentRespApiRespBase';
import type { GetBroadcastTalentsRespApiRespBase } from '../models/GetBroadcastTalentsRespApiRespBase';
import type { GetMediaItemsRespApiRespBase } from '../models/GetMediaItemsRespApiRespBase';
import type { ModBroadcastTalentRespApiRespBase } from '../models/ModBroadcastTalentRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class BroadcastTalentsService {

    /**
     * Get broadcast talents by condition
     * @param nickName Name
     * @param name FirstName/LastName
     * @param gameId Primary game Id
     * @param languageId LanguageId
     * @param countryId CountryId
     * @param pageNo 
     * @param pageSize 
     * @returns GetBroadcastTalentsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Broadcasttalents(
nickName?: string,
name?: string,
gameId?: number,
languageId?: number,
countryId?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetBroadcastTalentsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/broadcasttalents',
            query: {
                'NickName': nickName,
                'Name': name,
                'GameId': gameId,
                'LanguageId': languageId,
                'CountryId': countryId,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add new broadcast talent
     * @param formData 
     * @returns AddBroadcastTalentRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Broadcasttalents(
formData?: {
/**
 * Name
 */
Name: string;
/**
 * First Name
 */
FirstName?: string;
/**
 * Last Name
 */
LastName?: string;
/**
 * Country Id
 */
CountryId: number;
/**
 * Language Id
 */
LanguageId: number;
Type: EnumBroadcastTalentType;
/**
 * IsActive
 */
IsActive: boolean;
/**
 * About
 */
About?: string;
/**
 * Gender (Male=0/Female=1)
 */
Gender: number;
/**
 * DateOfBirth (ex:2022-12-01)
 */
DateOfBirth?: string;
/**
 * Primary Game Id
 */
PrimaryGameId?: number;
/**
 * Profile Image
 */
ProfileImage?: Blob;
/**
 * Header Image
 */
HeaderImage?: Blob;
/**
 * Player Id
 */
PlayerId?: number;
/**
 * Person Stream Id
 */
PersonalStreamId?: number;
/**
 * WebSite
 */
Website?: string;
/**
 * Facebook
 */
Facebook?: string;
/**
 * Twitter
 */
Twitter?: string;
/**
 * Youtube
 */
Youtube?: string;
},
): CancelablePromise<AddBroadcastTalentRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/broadcasttalents',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get broadcast talent
     * @param id Broadcast Talent Id
     * @returns GetBroadcastTalentRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Broadcasttalents1(
id: number,
): CancelablePromise<GetBroadcastTalentRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/broadcasttalents/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify broadcast talent
     * @param id Broadcast Talent Id
     * @param formData 
     * @returns ModBroadcastTalentRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Broadcasttalents(
id: number,
formData?: {
/**
 * Broadcast Talent Id
 */
Id: number;
/**
 * Name
 */
Name: string;
/**
 * First Name
 */
FirstName?: string;
/**
 * Last Name
 */
LastName?: string;
/**
 * Country Id
 */
CountryId: number;
/**
 * Language Id
 */
LanguageId: number;
Type: EnumBroadcastTalentType;
/**
 * IsActive
 */
IsActive: boolean;
/**
 * About
 */
About?: string;
/**
 * Gender (Male=0/Female=1)
 */
Gender: number;
/**
 * DateOfBirth (ex:2022-12-01)
 */
DateOfBirth?: string;
/**
 * Primary Game Id
 */
PrimaryGameId?: number;
/**
 * Profile Image
 */
ProfileImage?: Blob;
/**
 * Header Image
 */
HeaderImage?: Blob;
/**
 * Player Id
 */
PlayerId?: number;
/**
 * Person Stream Id
 */
PersonalStreamId?: number;
/**
 * Website
 */
Website?: string;
/**
 * Facebook
 */
Facebook?: string;
/**
 * Twitter
 */
Twitter?: string;
/**
 * Youtube
 */
Youtube?: string;
},
): CancelablePromise<ModBroadcastTalentRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/broadcasttalents/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete broadcast talent
     * @param id Broadcast Talent Id
     * @returns DelBroadcastTalentRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Broadcasttalents(
id: number,
): CancelablePromise<DelBroadcastTalentRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/broadcasttalents/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get broadcast talents Media items
     * @param id Broadcast Talent Id
     * @param pageNo 
     * @param pageSize 
     * @returns GetMediaItemsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4BroadcasttalentsMediaItems(
id?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetMediaItemsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/broadcasttalents/media-items',
            query: {
                'Id': id,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add broadcast talent new Media items
     * @param broadcastTalentId Broadcast Talent Id
     * @param mediaItems Media item Ids
     * @returns AddMediaItemsRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4BroadcasttalentsMediaItems(
broadcastTalentId: number,
mediaItems: Array<number>,
): CancelablePromise<AddMediaItemsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/broadcasttalents/media-items',
            query: {
                'BroadcastTalentId': broadcastTalentId,
                'MediaItems': mediaItems,
            },
        });
    }

    /**
     * Delete broadcast talent Media item
     * @param broadcastid Broadcast Talent Id
     * @param mediaitemid Media Item Id
     * @returns DelMediaItemRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4BroadcasttalentsMediaItems(
broadcastid: number,
mediaitemid: number,
): CancelablePromise<DelMediaItemRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/broadcasttalents/{broadcastid}/media-items/{mediaitemid}',
            path: {
                'broadcastid': broadcastid,
                'mediaitemid': mediaitemid,
            },
        });
    }

}
