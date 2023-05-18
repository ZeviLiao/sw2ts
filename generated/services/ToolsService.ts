/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ToolsService {

    /**
     * Clear All Memory Cache
     * @returns any Success
     * @throws ApiError
     */
    public static postApiToolsClearAllMemoryCache(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/tools/clear-all-memory-cache',
        });
    }

}
