/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddRoleReq } from '../models/AddRoleReq';
import type { AddRoleRespApiRespBase } from '../models/AddRoleRespApiRespBase';
import type { AssignRoleReq } from '../models/AssignRoleReq';
import type { AssignRoleRespApiRespBase } from '../models/AssignRoleRespApiRespBase';
import type { DelRoleRespApiRespBase } from '../models/DelRoleRespApiRespBase';
import type { GetRoleBlankPermissionsRespApiRespBase } from '../models/GetRoleBlankPermissionsRespApiRespBase';
import type { GetRoleOptionsByGroupRespApiRespBase } from '../models/GetRoleOptionsByGroupRespApiRespBase';
import type { GetRoleRespApiRespBase } from '../models/GetRoleRespApiRespBase';
import type { GetRolesByGroupRespApiRespBase } from '../models/GetRolesByGroupRespApiRespBase';
import type { GetRoleTemplatesByGroupRespApiRespBase } from '../models/GetRoleTemplatesByGroupRespApiRespBase';
import type { GetUsersByRoleRespApiRespBase } from '../models/GetUsersByRoleRespApiRespBase';
import type { ModRoleReq } from '../models/ModRoleReq';
import type { ModRoleRespApiRespBase } from '../models/ModRoleRespApiRespBase';
import type { UnAssignRoleReq } from '../models/UnAssignRoleReq';
import type { UnAssignRoleRespApiRespBase } from '../models/UnAssignRoleRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class RolesService {

    /**
     * Get role options
     * @returns GetRoleOptionsByGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4RolesRoleOptions(): CancelablePromise<GetRoleOptionsByGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/roles/role-options',
        });
    }

    /**
     * Get users by role
     * @param id RoleId
     * @returns GetUsersByRoleRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4RolesUsers(
id: number,
): CancelablePromise<GetUsersByRoleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/roles/users/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get roles
     * @param roleIds Role ids
     * @param groupIds Group ids
     * @param frontendIds Frontend ids
     * @param remark Group remark
     * @param pageNo 
     * @param pageSize 
     * @returns GetRolesByGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Roles(
roleIds?: Array<number>,
groupIds?: Array<number>,
frontendIds?: Array<number>,
remark?: string,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetRolesByGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/roles',
            query: {
                'RoleIds': roleIds,
                'GroupIds': groupIds,
                'FrontendIds': frontendIds,
                'Remark': remark,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add role
     * @param requestBody Request
     * @returns AddRoleRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Roles(
requestBody?: AddRoleReq,
): CancelablePromise<AddRoleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get role
     * @param id RoleId
     * @returns GetRoleRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Roles1(
id: number,
): CancelablePromise<GetRoleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/roles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify Role
     * @param id RoleId
     * @param requestBody Request
     * @returns ModRoleRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Roles(
id: number,
requestBody?: ModRoleReq,
): CancelablePromise<ModRoleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/roles/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Delete role
     * @param id RoleId
     * @returns DelRoleRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Roles(
id: number,
): CancelablePromise<DelRoleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/roles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Assign role
     * @param requestBody Request
     * @returns AssignRoleRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4RolesAssignRole(
requestBody?: AssignRoleReq,
): CancelablePromise<AssignRoleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/roles/assign-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * UnAssign role
     * @param requestBody Request
     * @returns UnAssignRoleRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4RolesUnassignRole(
requestBody?: UnAssignRoleReq,
): CancelablePromise<UnAssignRoleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/roles/unassign-role',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Get role blank permissions
     * @returns GetRoleBlankPermissionsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4RolesBlankPermissions(): CancelablePromise<GetRoleBlankPermissionsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/roles/blank-permissions',
        });
    }

    /**
     * Get role templates by group
     * @param id 
     * @returns GetRoleTemplatesByGroupRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4RolesTemplates(
id: number,
): CancelablePromise<GetRoleTemplatesByGroupRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/roles/templates/{id}',
            path: {
                'id': id,
            },
        });
    }

}
