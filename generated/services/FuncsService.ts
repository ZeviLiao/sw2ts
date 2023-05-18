/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddFuncRespApiRespBase } from '../models/AddFuncRespApiRespBase';
import type { DelFuncRespApiRespBase } from '../models/DelFuncRespApiRespBase';
import type { EnumFuncType } from '../models/EnumFuncType';
import type { EnumState } from '../models/EnumState';
import type { GetFuncOptionsRespApiRespBase } from '../models/GetFuncOptionsRespApiRespBase';
import type { GetFuncRespApiRespBase } from '../models/GetFuncRespApiRespBase';
import type { GetFuncsRespApiRespBase } from '../models/GetFuncsRespApiRespBase';
import type { GetFuncTypesRespApiRespBase } from '../models/GetFuncTypesRespApiRespBase';
import type { ModFuncRespApiRespBase } from '../models/ModFuncRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FuncsService {

    /**
     * Get Func Types
     * @returns GetFuncTypesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4FuncsTypes(): CancelablePromise<GetFuncTypesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/funcs/types',
        });
    }

    /**
     * Get Func Options
     * @returns GetFuncOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4FuncsOptions(): CancelablePromise<GetFuncOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/funcs/options',
        });
    }

    /**
     * Get Funcs
     * @returns GetFuncsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Funcs(): CancelablePromise<GetFuncsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/funcs',
        });
    }

    /**
     * Add Func
     * @param formData 
     * @returns AddFuncRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Funcs(
formData?: {
/**
 * Func id
 */
FuncId: number;
/**
 * Func name
 */
Name: string;
/**
 * Func code
 */
Code: string;
Type: EnumFuncType;
/**
 * Parent func id
 */
ParentId: number;
/**
 * Func position
 */
Position: number;
/**
 * Func url
 */
Url?: string;
/**
 * Func icon
 */
Icon?: string;
},
): CancelablePromise<AddFuncRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/funcs',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get Func
     * @param id FuncId
     * @returns GetFuncRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Funcs1(
id: number,
): CancelablePromise<GetFuncRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/funcs/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify Func
     * @param id FuncId
     * @param formData 
     * @returns ModFuncRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Funcs(
id: number,
formData?: {
/**
 * Func id
 */
FuncId: number;
/**
 * Func name
 */
Name?: string;
/**
 * Func code
 */
Code?: string;
Type?: EnumFuncType;
/**
 * Parent func id
 */
ParentId?: number;
/**
 * Func position
 */
Position?: number;
State?: EnumState;
/**
 * Func url
 */
Url?: string;
/**
 * Func icon
 */
Icon?: string;
},
): CancelablePromise<ModFuncRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/funcs/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete Func
     * @param id FuncId
     * @returns DelFuncRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Funcs(
id: number,
): CancelablePromise<DelFuncRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/funcs/{id}',
            path: {
                'id': id,
            },
        });
    }

}
