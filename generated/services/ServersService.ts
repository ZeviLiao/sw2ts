/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddServerRespApiRespBase } from '../models/AddServerRespApiRespBase';
import type { DelServerRespApiRespBase } from '../models/DelServerRespApiRespBase';
import type { GetServerRespApiRespBase } from '../models/GetServerRespApiRespBase';
import type { GetServersRespApiRespBase } from '../models/GetServersRespApiRespBase';
import type { ModServerRespApiRespBase } from '../models/ModServerRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ServersService {

    /**
     * Get servers by condition
     * @param name Server Name
     * @param gameId Game Id
     * @param pageNo 
     * @param pageSize 
     * @returns GetServersRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Servers(
name?: string,
gameId?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetServersRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/servers',
            query: {
                'Name': name,
                'GameId': gameId,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add new tournaments server
     * @param formData 
     * @returns AddServerRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Servers(
formData?: {
/**
 * Server Name
 */
Name: string;
/**
 * Game Id
 */
GameId: number;
},
): CancelablePromise<AddServerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/servers',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get tournaments server detail
     * @param id Server Id
     * @returns GetServerRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Servers1(
id: number,
): CancelablePromise<GetServerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/servers/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify tournaments server
     * @param id tournaments server id
     * @param formData 
     * @returns ModServerRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Servers(
id: number,
formData?: {
/**
 * Server Id
 */
Id: number;
/**
 * Server Name
 */
Name: string;
/**
 * Is Frozen
 */
IsFrozen: boolean;
/**
 * Game Id
 */
GameId: number;
},
): CancelablePromise<ModServerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/servers/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete tournaments server
     * @param id tournaments Server Id
     * @returns DelServerRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Servers(
id: number,
): CancelablePromise<DelServerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/servers/{id}',
            path: {
                'id': id,
            },
        });
    }

}
