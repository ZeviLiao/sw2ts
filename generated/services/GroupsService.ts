/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddGroupReq } from '../models/AddGroupReq';
import type { AddGroupRespApiRespBase } from '../models/AddGroupRespApiRespBase';
import type { AssignGroupReq } from '../models/AssignGroupReq';
import type { AssignGroupRespApiRespBase } from '../models/AssignGroupRespApiRespBase';
import type { DelGroupRespApiRespBase } from '../models/DelGroupRespApiRespBase';
import type { GetFuzzyUsersByGroupRespApiRespBase } from '../models/GetFuzzyUsersByGroupRespApiRespBase';
import type { GetGroupBlankPermissionsRespApiRespBase } from '../models/GetGroupBlankPermissionsRespApiRespBase';
import type { GetGroupOptionsRespApiRespBase } from '../models/GetGroupOptionsRespApiRespBase';
import type { GetGroupRespApiRespBase } from '../models/GetGroupRespApiRespBase';
import type { GetGroupsRespApiRespBase } from '../models/GetGroupsRespApiRespBase';
import type { GetGroupTemplatesRespApiRespBase } from '../models/GetGroupTemplatesRespApiRespBase';
import type { GetUsersByGroupRespApiRespBase } from '../models/GetUsersByGroupRespApiRespBase';
import type { ModGroupReq } from '../models/ModGroupReq';
import type { ModGroupRespApiRespBase } from '../models/ModGroupRespApiRespBase';
import type { UnAssignGroupReq } from '../models/UnAssignGroupReq';
import type { UnAssignGroupRespApiRespBase } from '../models/UnAssignGroupRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GroupsService {

    /**
     * Get group options
     * @returns GetGroupOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4GroupsGroupOptions(): CancelablePromise<GetGroupOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/groups/group-options',
        });
    }

    /**
     * Get group options by user
     * @returns GetGroupOptionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4GroupsGroupOptionsByUser(): CancelablePromise<GetGroupOptionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/groups/group-options-by-user',
        });
    }

    /**
     * Get Groups
     * @param groupIds Group ids
     * @param remark Group remark
     * @param frontendIds Frontend ids
     * @param pageNo 
     * @param pageSize 
     * @returns GetGroupsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Groups(
groupIds?: Array<number>,
remark?: string,
frontendIds?: Array<number>,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetGroupsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/groups',
            query: {
                'GroupIds': groupIds,
                'Remark': remark,
                'FrontendIds': frontendIds,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add group
     * @param requestBody Request
     * @returns AddGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Groups(
requestBody?: AddGroupReq,
): CancelablePromise<AddGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/groups',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get Group
     * @param id GroupId
     * @returns GetGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Groups1(
id: number,
): CancelablePromise<GetGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/groups/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify Group
     * @param id GroupId
     * @param requestBody Request
     * @returns ModGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Groups(
id: number,
requestBody?: ModGroupReq,
): CancelablePromise<ModGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/groups/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete Group
     * @param id GroupId
     * @returns DelGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Groups(
id: number,
): CancelablePromise<DelGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/groups/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get group blank permissions
     * @returns GetGroupBlankPermissionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4GroupsBlankPermissions(): CancelablePromise<GetGroupBlankPermissionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/groups/blank-permissions',
        });
    }

    /**
     * Get Group Templates
     * @returns GetGroupTemplatesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4GroupsTemplates(): CancelablePromise<GetGroupTemplatesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/groups/templates',
        });
    }

    /**
     * Assign group to ser
     * @param requestBody Request
     * @returns AssignGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4GroupsAssignGroup(
requestBody?: AssignGroupReq,
): CancelablePromise<AssignGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/groups/assign-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * UnAssign group from user
     * @param requestBody Request
     * @returns UnAssignGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4GroupsUnassignGroup(
requestBody?: UnAssignGroupReq,
): CancelablePromise<UnAssignGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/groups/unassign-group',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get users by group
     * @param id 
     * @returns GetUsersByGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4GroupsUsers(
id: number,
): CancelablePromise<GetUsersByGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/groups/{id}/users',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get fuzzy users by group
     * @param id 
     * @param fuzzyPrefix 
     * @param maxCount 
     * @returns GetFuzzyUsersByGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4GroupsFuzzyUsers(
id: number,
fuzzyPrefix: string,
maxCount?: number,
): CancelablePromise<GetFuzzyUsersByGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/groups/{id}/fuzzy-users',
            path: {
                'id': id,
            },
            query: {
                'FuzzyPrefix': fuzzyPrefix,
                'MaxCount': maxCount,
            },
        });
    }

}
