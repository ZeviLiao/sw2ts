/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddTeamPlayerRespApiRespBase } from '../models/AddTeamPlayerRespApiRespBase';
import type { AddTeamRespApiRespBase } from '../models/AddTeamRespApiRespBase';
import type { DelTeamPlayerRespApiRespBase } from '../models/DelTeamPlayerRespApiRespBase';
import type { DelTeamRespApiRespBase } from '../models/DelTeamRespApiRespBase';
import type { GetFuzzyTeamsRespApiRespBase } from '../models/GetFuzzyTeamsRespApiRespBase';
import type { GetTeamPlayerRespApiRespBase } from '../models/GetTeamPlayerRespApiRespBase';
import type { GetTeamPlayersRespApiRespBase } from '../models/GetTeamPlayersRespApiRespBase';
import type { GetTeamRespApiRespBase } from '../models/GetTeamRespApiRespBase';
import type { GetTeamsRespApiRespBase } from '../models/GetTeamsRespApiRespBase';
import type { ModTeamPlayerRespApiRespBase } from '../models/ModTeamPlayerRespApiRespBase';
import type { ModTeamRespApiRespBase } from '../models/ModTeamRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class TeamsService {

    /**
     * Get teams
     * @param teamName TeamName
     * @param teamId Team Id
     * @param playerId Player Id
     * @param gameId Game Id
     * @param countryId Country Id
     * @param updatedAtFrom Created at from
     * @param updatedAtTo Created at to
     * @param pageNo 
     * @param pageSize 
     * @returns GetTeamsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Teams(
teamName?: string,
teamId?: number,
playerId?: number,
gameId?: number,
countryId?: number,
updatedAtFrom?: number,
updatedAtTo?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetTeamsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/teams',
            query: {
                'TeamName': teamName,
                'TeamId': teamId,
                'PlayerId': playerId,
                'GameId': gameId,
                'CountryId': countryId,
                'UpdatedAtFrom': updatedAtFrom,
                'UpdatedAtTo': updatedAtTo,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add team
     * @param formData 
     * @returns AddTeamRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Teams(
formData?: {
TeamName: string;
TeamTag: string;
GameId: number;
CountryId?: number;
Image?: Blob;
Description?: string;
InitialRating?: number;
ExcludeRankings?: boolean;
Facebook?: string;
Twitter?: string;
Youtube?: string;
},
): CancelablePromise<AddTeamRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/teams',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get team
     * @param id TeamId
     * @returns GetTeamRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Teams1(
id: number,
): CancelablePromise<GetTeamRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/teams/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify team
     * @param id TeamId
     * @param formData 
     * @returns ModTeamRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Teams(
id: number,
formData?: {
TeamId: number;
TeamName: string;
TeamTag: string;
/**
 * OwnerId
 */
OwnerId?: number;
/**
 * CaptainId
 */
CaptainId?: number;
/**
 * ManageId
 */
ManageId?: number;
ExcludedRankings?: boolean;
Image?: Blob;
/**
 * if IsRemoveImage = true will remove Image and set ImageFilePath = null
 */
IsRemoveImage?: boolean;
GameId: number;
CountryId?: number;
Description?: string;
Facebook?: string;
Twitter?: string;
Youtube?: string;
},
): CancelablePromise<ModTeamRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/teams/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete team
     * @param id TeamId
     * @returns DelTeamRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Teams(
id: number,
): CancelablePromise<DelTeamRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/teams/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get team players
     * @param teamid 
     * @param pageNo 
     * @param pageSize 
     * @returns GetTeamPlayersRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4TeamsTeamPlayers(
teamid: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetTeamPlayersRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/teams/{teamid}/team-players',
            path: {
                'teamid': teamid,
            },
            query: {
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add team player
     * @param teamid 
     * @param formData 
     * @returns AddTeamPlayerRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4TeamsTeamPlayers(
teamid: number,
formData?: {
PlayerId?: number;
JoinedAt?: number;
IsHidden?: boolean;
},
): CancelablePromise<AddTeamPlayerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/teams/{teamid}/team-players',
            path: {
                'teamid': teamid,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get team player
     * @param teamid 
     * @param teamplayerid 
     * @returns GetTeamPlayerRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4TeamsTeamPlayers1(
teamid: number,
teamplayerid: number,
): CancelablePromise<GetTeamPlayerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/teams/{teamid}/team-players/{teamplayerid}',
            path: {
                'teamid': teamid,
                'teamplayerid': teamplayerid,
            },
        });
    }

    /**
     * Modify team player
     * @param teamid 
     * @param teamplayerid 
     * @param formData 
     * @returns ModTeamPlayerRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4TeamsTeamPlayers(
teamid: number,
teamplayerid: number,
formData?: {
/**
 * TeamPlayerId
 */
TeamPlayerId: number;
/**
 * TeamId
 */
TeamId: number;
/**
 * JoinDate
 */
JoinDate: number;
/**
 * LeaveDate
 */
LeaveDate?: number;
/**
 * IsHidden
 */
IsHidden: boolean;
},
): CancelablePromise<ModTeamPlayerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/teams/{teamid}/team-players/{teamplayerid}',
            path: {
                'teamid': teamid,
                'teamplayerid': teamplayerid,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete team player
     * @param teamid 
     * @param teamplayerid 
     * @returns DelTeamPlayerRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4TeamsTeamPlayers(
teamid: number,
teamplayerid: number,
): CancelablePromise<DelTeamPlayerRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/teams/{teamid}/team-players/{teamplayerid}',
            path: {
                'teamid': teamid,
                'teamplayerid': teamplayerid,
            },
        });
    }

    /**
     * Get fuzzy teams
     * @param fuzzyPrefix 
     * @param maxCount 
     * @returns GetFuzzyTeamsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4TeamsFuzzy(
fuzzyPrefix: string,
maxCount?: number,
): CancelablePromise<GetFuzzyTeamsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/teams/fuzzy',
            query: {
                'FuzzyPrefix': fuzzyPrefix,
                'MaxCount': maxCount,
            },
        });
    }

}
