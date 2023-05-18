/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddSiteSectionsRespApiRespBase } from '../models/AddSiteSectionsRespApiRespBase';
import type { DelSiteSectionsRespApiRespBase } from '../models/DelSiteSectionsRespApiRespBase';
import type { EnumFieldSort } from '../models/EnumFieldSort';
import type { GetSiteSectionRespApiRespBase } from '../models/GetSiteSectionRespApiRespBase';
import type { GetSiteSectionsRespApiRespBase } from '../models/GetSiteSectionsRespApiRespBase';
import type { ModSiteSectionsRespApiRespBase } from '../models/ModSiteSectionsRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class SiteSectionsService {

    /**
     * Get Site-Sections
     * @param filtersId 
     * @param filtersName 
     * @param filtersGameName 
     * @param filtersHidden 
     * @param sortsId 
     * @param sortsGameName 
     * @param sortsName 
     * @param sortsHidden 
     * @param pageNo 
     * @param pageSize 
     * @returns GetSiteSectionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4SitesectionsSiteSections(
filtersId?: number,
filtersName?: string,
filtersGameName?: string,
filtersHidden?: boolean,
sortsId?: EnumFieldSort,
sortsGameName?: EnumFieldSort,
sortsName?: EnumFieldSort,
sortsHidden?: EnumFieldSort,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetSiteSectionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/sitesections/site-sections',
            query: {
                'Filters.Id': filtersId,
                'Filters.Name': filtersName,
                'Filters.GameName': filtersGameName,
                'Filters.Hidden': filtersHidden,
                'Sorts.Id': sortsId,
                'Sorts.GameName': sortsGameName,
                'Sorts.Name': sortsName,
                'Sorts.Hidden': sortsHidden,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add Site-Sections
     * @param formData 
     * @returns AddSiteSectionsRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4SitesectionsSiteSections(
formData?: {
GameId?: number;
Name: string;
Hidden: boolean;
Position: number;
HeaderImage?: Blob;
BackGroundImage?: Blob;
IconImage?: Blob;
LogoImage?: Blob;
},
): CancelablePromise<AddSiteSectionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/sitesections/site-sections',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get Site-Section
     * @param id SiteSectionId
     * @returns GetSiteSectionRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4SitesectionsSiteSections1(
id: number,
): CancelablePromise<GetSiteSectionRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/sitesections/site-sections/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify Site-Sections
     * @param id SiteSectionId
     * @param formData 
     * @returns ModSiteSectionsRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4SitesectionsSiteSections(
id: number,
formData?: {
Id: number;
GameId?: number;
Name?: string;
Hidden?: boolean;
Position?: number;
HeaderImage?: Blob;
BackGroundImage?: Blob;
IconImage?: Blob;
LogoImage?: Blob;
},
): CancelablePromise<ModSiteSectionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/sitesections/site-sections/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete Site-Sections
     * @param id SiteSectionId
     * @returns DelSiteSectionsRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4SitesectionsSiteSections(
id: number,
): CancelablePromise<DelSiteSectionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/sitesections/site-sections/{id}',
            path: {
                'id': id,
            },
        });
    }

}
