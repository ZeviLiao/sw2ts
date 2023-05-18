/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddStreamRespApiRespBase } from '../models/AddStreamRespApiRespBase';
import type { DelStreamRespApiRespBase } from '../models/DelStreamRespApiRespBase';
import type { EnumPlatform } from '../models/EnumPlatform';
import type { GetFuzzyMediaStreamsRespApiRespBase } from '../models/GetFuzzyMediaStreamsRespApiRespBase';
import type { GetFuzzyMediaVideosRespApiRespBase } from '../models/GetFuzzyMediaVideosRespApiRespBase';
import type { GetStreamRespApiRespBase } from '../models/GetStreamRespApiRespBase';
import type { GetStreamsRespApiRespBase } from '../models/GetStreamsRespApiRespBase';
import type { ModStreamRespApiRespBase } from '../models/ModStreamRespApiRespBase';
import type { ModStreamTag } from '../models/ModStreamTag';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class MediaService {

    /**
     * Get media streams by condition
     * @param title Title
     * @param creator Creator(Username)
     * @param platformId Platform Id (TwitchTV = 1,Youtube_Channel = 10,Youtube_Stream = 11,Other = 99)
     * @param streamId Stream Id
     * @param gameId Game Id
     * @param isLive Is Live
     * @param createdFrom Created From
     * @param createdTo Created To
     * @param pageNo 
     * @param pageSize 
     * @returns GetStreamsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MediaStreams(
title?: string,
creator?: string,
platformId?: EnumPlatform,
streamId?: string,
gameId?: number,
isLive?: boolean,
createdFrom?: number,
createdTo?: number,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetStreamsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/media/streams',
            query: {
                'Title': title,
                'Creator': creator,
                'PlatformId': platformId,
                'StreamId': streamId,
                'GameId': gameId,
                'IsLive': isLive,
                'CreatedFrom': createdFrom,
                'CreatedTo': createdTo,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add new media stream
     * @param formData 
     * @returns AddStreamRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4MediaStreams(
formData?: {
Platform: EnumPlatform;
/**
 * StreamId
 */
StreamId?: string;
/**
 * Stream Url
 */
StreamUrl?: string;
/**
 * Screen Cap file
 */
ScreenCapFile?: Blob;
/**
 * GameId
 */
GameId: number;
/**
 * LanguageId
 */
LanguageId: number;
/**
 * Is Event Stream
 */
IsEventStream: boolean;
/**
 * Is Pro Player
 */
IsProPlayer: boolean;
/**
 * Is Celeb Caster
 */
IsCelebCaster: boolean;
/**
 * Next Broadcast At
 */
NextBroadcastAt?: number;
/**
 * Title
 */
Title: string;
/**
 * Is Featured
 */
IsFeatured: boolean;
/**
 * Description
 */
Description?: string;
/**
 * Tags : Maximum of 5 tags(25 characters maximum per tag)
 */
Tags?: Array<string>;
},
): CancelablePromise<AddStreamRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/media/streams',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get media stream detail
     * @param id media item Id
     * @returns GetStreamRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MediaStreams1(
id: number,
): CancelablePromise<GetStreamRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/media/streams/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify media stream
     * @param id media item Id
     * @param formData 
     * @returns ModStreamRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4MediaStreams(
id: number,
formData?: {
/**
 * Media Item Id
 */
Id: number;
Platform: EnumPlatform;
/**
 * StreamId
 */
StreamId?: string;
/**
 * Stream Url
 */
StreamUrl?: string;
/**
 * Screen Cap file
 */
ScreenCapFile?: Blob;
/**
 * GameId
 */
GameId: number;
/**
 * LanguageId
 */
LanguageId: number;
/**
 * Is Event Stream
 */
IsEventStream: boolean;
/**
 * Is Pro Player
 */
IsProPlayer: boolean;
/**
 * Is Celeb Caster
 */
IsCelebCaster: boolean;
/**
 * Next Broadcast At
 */
NextBroadcastAt?: number;
/**
 * Title
 */
Title: string;
/**
 * Is Featured
 */
IsFeatured: boolean;
/**
 * Description
 */
Description?: string;
/**
 * Tags : Maximum of 5 tags(25 characters maximum per tag)
 */
Tags?: Array<ModStreamTag>;
},
): CancelablePromise<ModStreamRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/media/streams/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete media stream
     * @param id media stream Id
     * @returns DelStreamRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4MediaStreams(
id: number,
): CancelablePromise<DelStreamRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/media/streams/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get fuzzy media streams
     * @param fuzzyPrefix FuzzyPrefix
     * @param maxCount 
     * @returns GetFuzzyMediaStreamsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MediaFuzzyStreams(
fuzzyPrefix?: string,
maxCount?: number,
): CancelablePromise<GetFuzzyMediaStreamsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/media/fuzzy-streams',
            query: {
                'FuzzyPrefix': fuzzyPrefix,
                'MaxCount': maxCount,
            },
        });
    }

    /**
     * Get fuzzy media videos
     * @param fuzzyPrefix FuzzyPrefix
     * @param maxCount 
     * @returns GetFuzzyMediaVideosRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4MediaFuzzyVideos(
fuzzyPrefix?: string,
maxCount?: number,
): CancelablePromise<GetFuzzyMediaVideosRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/media/fuzzy-videos',
            query: {
                'FuzzyPrefix': fuzzyPrefix,
                'MaxCount': maxCount,
            },
        });
    }

}
