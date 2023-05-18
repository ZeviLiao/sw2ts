/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddFrontendSiteSectionsReq } from '../models/AddFrontendSiteSectionsReq';
import type { AddFrontendSiteSectionsRespApiRespBase } from '../models/AddFrontendSiteSectionsRespApiRespBase';
import type { DelFrontendSiteSectionReq } from '../models/DelFrontendSiteSectionReq';
import type { DelFrontendSiteSectionRespApiRespBase } from '../models/DelFrontendSiteSectionRespApiRespBase';
import type { GetFrontendSiteSectionsRespApiRespBase } from '../models/GetFrontendSiteSectionsRespApiRespBase';
import type { ModFrontendSiteSectionReq } from '../models/ModFrontendSiteSectionReq';
import type { ModFrontendSiteSectionRespApiRespBase } from '../models/ModFrontendSiteSectionRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FrontendSiteSectionsService {

    /**
     * Get frontend site sections
     * @param id FrontendId
     * @returns GetFrontendSiteSectionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4FrontendSiteSections(
id: number,
): CancelablePromise<GetFrontendSiteSectionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/frontend-site-sections/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Add frontend site sections
     * @param requestBody Request
     * @returns AddFrontendSiteSectionsRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4FrontendSiteSections(
requestBody?: AddFrontendSiteSectionsReq,
): CancelablePromise<AddFrontendSiteSectionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/frontend-site-sections',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Modify frontend site section
     * @param requestBody Request
     * @returns ModFrontendSiteSectionRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4FrontendSiteSections(
requestBody?: ModFrontendSiteSectionReq,
): CancelablePromise<ModFrontendSiteSectionRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/frontend-site-sections',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete frontend site section
     * @param requestBody Request
     * @returns DelFrontendSiteSectionRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4FrontendSiteSections(
requestBody?: DelFrontendSiteSectionReq,
): CancelablePromise<DelFrontendSiteSectionRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/frontend-site-sections',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
