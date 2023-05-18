/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddHeroRespApiRespBase } from '../models/AddHeroRespApiRespBase';
import type { DelHeroRespApiRespBase } from '../models/DelHeroRespApiRespBase';
import type { GetHeroesRespApiRespBase } from '../models/GetHeroesRespApiRespBase';
import type { GetHeroRespApiRespBase } from '../models/GetHeroRespApiRespBase';
import type { GetHeroTranslationsRespApiRespBase } from '../models/GetHeroTranslationsRespApiRespBase';
import type { ModHeroRespApiRespBase } from '../models/ModHeroRespApiRespBase';
import type { ModHeroTranslationsReq } from '../models/ModHeroTranslationsReq';
import type { ModHeroTranslationsRespApiRespBase } from '../models/ModHeroTranslationsRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class HeroesService {

    /**
     * Get heroes by condition
     * @param name Hero Name
     * @param title Hero Title
     * @param gameId Hero Game Id
     * @param pageNo 
     * @param pageSize 
     * @returns GetHeroesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Heroes(
name?: string,
title?: string,
gameId?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetHeroesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/heroes',
            query: {
                'Name': name,
                'Title': title,
                'GameId': gameId,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add new game Hero
     * @param formData 
     * @returns AddHeroRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Heroes(
formData?: {
/**
 * Game Hero Name
 */
Name: string;
/**
 * Hero Game Id
 */
GameId: number;
/**
 * Title
 */
Title: string;
/**
 * ReferredToBy
 */
ReferredToBy: number;
/**
 * Tagline
 */
Tagline: string;
/**
 * Description
 */
Description: string;
/**
 * Image file
 */
ImageFile?: Blob;
/**
 * Icon file
 */
IconFile?: Blob;
},
): CancelablePromise<AddHeroRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/heroes',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get game hero
     * @param id Hero Id
     * @returns GetHeroRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Heroes1(
id: number,
): CancelablePromise<GetHeroRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/heroes/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game Hero
     * @param id game Hero Id
     * @param formData 
     * @returns ModHeroRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Heroes(
id: number,
formData?: {
/**
 * Game Hero Id
 */
Id: number;
/**
 * Game Hero Name
 */
Name: string;
/**
 * Hero Game Id
 */
GameId: number;
/**
 * Title
 */
Title: string;
/**
 * ReferredToBy
 */
ReferredToBy: number;
/**
 * Tagline
 */
Tagline: string;
/**
 * Description
 */
Description: string;
/**
 * Image file
 */
ImageFile?: Blob;
/**
 * Icon file
 */
IconFile?: Blob;
},
): CancelablePromise<ModHeroRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/heroes/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete game Hero
     * @param id game Hero Id
     * @returns DelHeroRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Heroes(
id: number,
): CancelablePromise<DelHeroRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/heroes/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get game hero translations
     * @param id heroes Id
     * @returns GetHeroTranslationsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4HeroesTranslations(
id: number,
): CancelablePromise<GetHeroTranslationsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/heroes/{id}/translations',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify game Hero translations
     * @param id game Hero Id
     * @param requestBody Request
     * @returns ModHeroTranslationsRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4HeroesTranslations(
id: number,
requestBody?: ModHeroTranslationsReq,
): CancelablePromise<ModHeroTranslationsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/heroes/{id}/translations',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
