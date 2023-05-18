/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddSponsorRespApiRespBase } from '../models/AddSponsorRespApiRespBase';
import type { DelSponsorRespApiRespBase } from '../models/DelSponsorRespApiRespBase';
import type { GetSponsorRespApiRespBase } from '../models/GetSponsorRespApiRespBase';
import type { GetSponsorsRespApiRespBase } from '../models/GetSponsorsRespApiRespBase';
import type { ModSponsorRespApiRespBase } from '../models/ModSponsorRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SponsorsService {

    /**
     * Get tournaments sponsors by condition
     * @param name Sponsor Name
     * @param website Sponsor Url
     * @param creator Creator
     * @param updatedFrom Last Updated From
     * @param updatedTo Last Updated To
     * @param pageNo 
     * @param pageSize 
     * @returns GetSponsorsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Sponsors(
name?: string,
website?: string,
creator?: string,
updatedFrom?: number,
updatedTo?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetSponsorsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/sponsors',
            query: {
                'Name': name,
                'Website': website,
                'Creator': creator,
                'UpdatedFrom': updatedFrom,
                'UpdatedTo': updatedTo,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add new Tournaments Sponsor
     * @param formData 
     * @returns AddSponsorRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Sponsors(
formData?: {
/**
 * Sponsor Name
 */
Name: string;
/**
 * Sponsor Description
 */
Description: string;
/**
 * Sponsor Logo
 */
ImageFile?: Blob;
/**
 * Sponsor website url
 */
Url: string;
},
): CancelablePromise<AddSponsorRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/sponsors',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get Tournaments Sponsor
     * @param id Sponsors Id
     * @returns GetSponsorRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Sponsors1(
id: number,
): CancelablePromise<GetSponsorRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/sponsors/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify Tournaments Sponsor
     * @param id Tournaments Sponsor Id
     * @param formData 
     * @returns ModSponsorRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Sponsors(
id: number,
formData?: {
/**
 * Sponsor Id
 */
Id: number;
/**
 * Sponsor Name
 */
Name: string;
/**
 * Sponsor Description
 */
Description: string;
/**
 * Sponsor Logo
 */
ImageFile?: Blob;
/**
 * Sponsor website url
 */
Url: string;
},
): CancelablePromise<ModSponsorRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/sponsors/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete Tournaments Sponsor
     * @param id Tournaments Sponsor Id
     * @returns DelSponsorRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Sponsors(
id: number,
): CancelablePromise<DelSponsorRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/sponsors/{id}',
            path: {
                'id': id,
            },
        });
    }

}
