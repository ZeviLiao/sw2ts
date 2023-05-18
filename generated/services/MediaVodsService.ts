/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddMediaVodReq } from '../models/AddMediaVodReq';
import type { AddMediaVodRespApiRespBase } from '../models/AddMediaVodRespApiRespBase';
import type { DelMediaVodRespApiRespBase } from '../models/DelMediaVodRespApiRespBase';
import type { GetMediaVodHostOptionsResp } from '../models/GetMediaVodHostOptionsResp';
import type { GetMediaVodRespApiRespBase } from '../models/GetMediaVodRespApiRespBase';
import type { GetMediaVodsRespApiRespBase } from '../models/GetMediaVodsRespApiRespBase';
import type { ModMediaVodReq } from '../models/ModMediaVodReq';
import type { ModMediaVodRespApiRespBase } from '../models/ModMediaVodRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MediaVodsService {

    /**
     * Get media vod host options
     * @returns GetMediaVodHostOptionsResp Error
     * @throws ApiError
     */
    public static getApiV4MediaVodsHostOptions(): CancelablePromise<GetMediaVodHostOptionsResp> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/media/vods/host-options',
        });
    }

    /**
     * Get media vods
     * @param vodId Vod id
     * @param title vod title
     * @param hostId Host id
     * @param hostVideoId Host video id
     * @param siteSectionIds Site section ids
     * @param createdFrom Created From
     * @param createdTo Created To
     * @param creator Creator user name
     * @param pageNo 
     * @param pageSize 
     * @returns GetMediaVodsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MediaVods(
vodId?: number,
title?: string,
hostId?: number,
hostVideoId?: string,
siteSectionIds?: Array<number>,
createdFrom?: number,
createdTo?: number,
creator?: string,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetMediaVodsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/media/vods',
            query: {
                'VodId': vodId,
                'Title': title,
                'HostId': hostId,
                'HostVideoId': hostVideoId,
                'SiteSectionIds': siteSectionIds,
                'CreatedFrom': createdFrom,
                'CreatedTo': createdTo,
                'Creator': creator,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add media vod
     * @param requestBody 
     * @returns AddMediaVodRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4MediaVods(
requestBody?: AddMediaVodReq,
): CancelablePromise<AddMediaVodRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/media/vods',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get media vod
     * @param id 
     * @returns GetMediaVodRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MediaVods1(
id: number,
): CancelablePromise<GetMediaVodRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/media/vods/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify media vod
     * @param id 
     * @param requestBody 
     * @returns ModMediaVodRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4MediaVods(
id: number,
requestBody?: ModMediaVodReq,
): CancelablePromise<ModMediaVodRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/media/vods/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete media vod
     * @param id 
     * @returns DelMediaVodRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4MediaVods(
id: number,
): CancelablePromise<DelMediaVodRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/media/vods/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Download media vods csv
     * @param pageSize Page size
     * @param vodId Vod id
     * @param title vod title
     * @param hostId Host id
     * @param hostVideoId Host video id
     * @param siteSectionIds Site section ids
     * @param createdFrom Created From
     * @param createdTo Created To
     * @param creator Creator user name
     * @param pageNo 
     * @returns any Success
     * @throws ApiError
     */
    public static getApiV4MediaVodsDownloadCsv(
pageSize?: number,
vodId?: number,
title?: string,
hostId?: number,
hostVideoId?: string,
siteSectionIds?: Array<number>,
createdFrom?: number,
createdTo?: number,
creator?: string,
pageNo?: number,
): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/media/vods/download-csv',
            query: {
                'PageSize': pageSize,
                'VodId': vodId,
                'Title': title,
                'HostId': hostId,
                'HostVideoId': hostVideoId,
                'SiteSectionIds': siteSectionIds,
                'CreatedFrom': createdFrom,
                'CreatedTo': createdTo,
                'Creator': creator,
                'PageNo': pageNo,
            },
        });
    }

}
