/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddVenueRespApiRespBase } from '../models/AddVenueRespApiRespBase';
import type { DelVenueRespApiRespBase } from '../models/DelVenueRespApiRespBase';
import type { GetVenueRespApiRespBase } from '../models/GetVenueRespApiRespBase';
import type { GetVenuesRespApiRespBase } from '../models/GetVenuesRespApiRespBase';
import type { ModVenueRespApiRespBase } from '../models/ModVenueRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class VenuesService {

    /**
     * Get venues by condition
     * @param name Venues Name
     * @param countryId Venues Country Id
     * @param pageNo 
     * @param pageSize 
     * @returns GetVenuesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Venues(
name?: string,
countryId?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetVenuesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/venues',
            query: {
                'Name': name,
                'CountryId': countryId,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add new tournaments venue
     * @param formData 
     * @returns AddVenueRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Venues(
formData?: {
/**
 * Venues Name
 */
Name: string;
/**
 * Venues Country Id
 */
CountryId: number;
/**
 * Venues City
 */
City: string;
/**
 * Venues Address
 */
Address?: string;
/**
 * Venues Coordinates
 */
Coordinates?: string;
/**
 * Image file
 */
ImageFile?: Blob;
},
): CancelablePromise<AddVenueRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/venues',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get tournaments venue detail
     * @param id venue Id
     * @returns GetVenueRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Venues1(
id: number,
): CancelablePromise<GetVenueRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/venues/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify tournaments venue
     * @param id tournaments venue Id
     * @param formData 
     * @returns ModVenueRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Venues(
id: number,
formData?: {
/**
 * Venue Id
 */
Id: number;
/**
 * Venues Name
 */
Name: string;
/**
 * Venues Country Id
 */
CountryId: number;
/**
 * Venues City
 */
City: string;
/**
 * Venues Address
 */
Address?: string;
/**
 * Venues Coordinates
 */
Coordinates?: string;
/**
 * Image file
 */
ImageFile?: Blob;
},
): CancelablePromise<ModVenueRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/venues/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete tournaments venue
     * @param id tournaments venue Id
     * @returns DelVenueRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Venues(
id: number,
): CancelablePromise<DelVenueRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/venues/{id}',
            path: {
                'id': id,
            },
        });
    }

}
