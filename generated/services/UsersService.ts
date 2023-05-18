/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddUserRespApiRespBase } from '../models/AddUserRespApiRespBase';
import type { DelUserRespApiRespBase } from '../models/DelUserRespApiRespBase';
import type { EnumGender } from '../models/EnumGender';
import type { GetFuzzyUsersRespApiRespBase } from '../models/GetFuzzyUsersRespApiRespBase';
import type { GetUserRespApiRespBase } from '../models/GetUserRespApiRespBase';
import type { GetUsersRespApiRespBase } from '../models/GetUsersRespApiRespBase';
import type { ModUserRespApiRespBase } from '../models/ModUserRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {

    /**
     * Get users
     * @param filtersUserName 
     * @param filtersUserTypeId 
     * @param filtersFrontEndIds 
     * @param filtersGroups 
     * @param filtersRoles 
     * @param pageNo 
     * @param pageSize 
     * @returns GetUsersRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Users(
filtersUserName?: string,
filtersUserTypeId?: number,
filtersFrontEndIds?: Array<number>,
filtersGroups?: Array<number>,
filtersRoles?: Array<number>,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetUsersRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/users',
            query: {
                'Filters.UserName': filtersUserName,
                'Filters.UserTypeId': filtersUserTypeId,
                'Filters.FrontEndIds': filtersFrontEndIds,
                'Filters.Groups': filtersGroups,
                'Filters.Roles': filtersRoles,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add User
     * @param formData 
     * @returns AddUserRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Users(
formData?: {
UserName: string;
Email: string;
Password: string;
LastName?: string;
FirstName?: string;
UserTypeId: number;
GroupIds?: Array<number>;
RoleIds?: Array<number>;
Gender?: EnumGender;
DateOfBirth?: string;
City?: string;
CountryId?: number;
AboutMe?: string;
AvatarImage?: Blob;
},
): CancelablePromise<AddUserRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/users',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get User
     * @param id UserId
     * @returns GetUserRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Users1(
id: number,
): CancelablePromise<GetUserRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify user
     * @param id UserId
     * @param formData 
     * @returns ModUserRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Users(
id: number,
formData?: {
UserId: number;
UserName?: string;
Email?: string;
Password?: string;
LastName?: string;
FirstName?: string;
UserTypeId?: number;
/**
 * 未變更帶null，變更後帶完整資料
 */
GroupIds?: Array<number>;
/**
 * 未變更帶null，變更後帶完整資料
 */
RoleIds?: Array<number>;
Gender?: EnumGender;
DateOfBirth?: string;
City?: string;
CountryId?: number;
AboutMe?: string;
AvatarImage?: Blob;
},
): CancelablePromise<ModUserRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/users/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete user
     * @param id UserId
     * @returns DelUserRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Users(
id: number,
): CancelablePromise<DelUserRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get fuzzy users
     * @param fuzzyPrefix 
     * @param maxCount 
     * @returns GetFuzzyUsersRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4UsersFuzzy(
fuzzyPrefix: string,
maxCount?: number,
): CancelablePromise<GetFuzzyUsersRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/users/fuzzy',
            query: {
                'FuzzyPrefix': fuzzyPrefix,
                'MaxCount': maxCount,
            },
        });
    }

}
