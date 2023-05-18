/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddPageReq } from '../models/AddPageReq';
import type { AddPageRespApiRespBase } from '../models/AddPageRespApiRespBase';
import type { DelPageReq } from '../models/DelPageReq';
import type { DelPageRespApiRespBase } from '../models/DelPageRespApiRespBase';
import type { GetPageRespApiRespBase } from '../models/GetPageRespApiRespBase';
import type { GetPagesRespApiRespBase } from '../models/GetPagesRespApiRespBase';
import type { ModPageReq } from '../models/ModPageReq';
import type { ModPageRespApiRespBase } from '../models/ModPageRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class PagesService {

    /**
     * Get pages byt conditions
     * @param title Title
     * @param frontendId Frontend id
     * @param author Create user name
     * @param pageId Page id
     * @param updatedFrom Updated from
     * @param updatedTo Updated to
     * @param pageNo 
     * @param pageSize 
     * @returns GetPagesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Pages(
title?: string,
frontendId?: number,
author?: string,
pageId?: number,
updatedFrom?: number,
updatedTo?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetPagesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/pages',
            query: {
                'Title': title,
                'FrontendId': frontendId,
                'Author': author,
                'PageId': pageId,
                'UpdatedFrom': updatedFrom,
                'UpdatedTo': updatedTo,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add page
     * @param requestBody Request
     * @returns AddPageRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Pages(
requestBody?: AddPageReq,
): CancelablePromise<AddPageRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/pages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete page
     * @param requestBody Request
     * @returns DelPageRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Pages(
requestBody?: DelPageReq,
): CancelablePromise<DelPageRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/pages',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get page
     * @param id PageId
     * @returns GetPageRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Pages1(
id: number,
): CancelablePromise<GetPageRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/pages/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify page
     * @param id PageId
     * @param requestBody Request
     * @returns ModPageRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Pages(
id: number,
requestBody?: ModPageReq,
): CancelablePromise<ModPageRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/pages/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
