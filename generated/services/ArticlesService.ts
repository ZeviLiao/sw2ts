/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddArticleRespApiRespBase } from '../models/AddArticleRespApiRespBase';
import type { DelArticleRespApiRespBase } from '../models/DelArticleRespApiRespBase';
import type { EnumArticleState } from '../models/EnumArticleState';
import type { GetArticleRespApiRespBase } from '../models/GetArticleRespApiRespBase';
import type { GetArticlesRespApiRespBase } from '../models/GetArticlesRespApiRespBase';
import type { GetArticleTypesRespApiRespBase } from '../models/GetArticleTypesRespApiRespBase';
import type { ModArticleRespApiRespBase } from '../models/ModArticleRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ArticlesService {

    /**
     * Get all article types and subtypes
     * @returns GetArticleTypesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4ArticlesTypes(): CancelablePromise<GetArticleTypesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/articles/types',
        });
    }

    /**
     * Get articles by condition
     * @param articleId Article Id for troubleshooting
     * @param frontendId Frontend id
 * null: All
     * @param title Article title
     * @param isProofread Is Proofread
     * @param siteSectionId Site Section Id
 * null: All
     * @param createdFrom Created From
     * @param createdTo Created To
     * @param author Creator user name
     * @param state Article state
 * Published: 1
 * Unpublished: 2
 * Deleted: 3
 * Featured: 4
     * @param pageNo 
     * @param pageSize 
     * @returns GetArticlesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Articles(
articleId?: number,
frontendId?: number,
title?: string,
isProofread?: boolean,
siteSectionId?: number,
createdFrom?: number,
createdTo?: number,
author?: string,
state?: EnumArticleState,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetArticlesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/articles',
            query: {
                'ArticleId': articleId,
                'FrontendId': frontendId,
                'Title': title,
                'IsProofread': isProofread,
                'SiteSectionId': siteSectionId,
                'CreatedFrom': createdFrom,
                'CreatedTo': createdTo,
                'Author': author,
                'State': state,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add new article
     * @param formData 
     * @returns AddArticleRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4Articles(
formData?: {
/**
 * Article SubtypeId
 */
SubTypeId: number;
/**
 * Article frontend id
 */
FrontendId: number;
/**
 * Article locale id
 */
LocaleId: number;
/**
 * Article site sections
 */
SiteSectionIds: Array<number>;
/**
 * Article title
 */
Title: string;
/**
 * Article Teaser
 */
Teaser: string;
/**
 * Article content
 */
Content: string;
/**
 * Headline image file
 */
HeadlineImgFile?: Blob;
/**
 * Headline image text
 */
HeadlineImageText?: string;
/**
 * Square headline image file
 */
SquareHeadlineImgFile?: Blob;
/**
 * Is published
 */
IsPublished?: boolean;
/**
 * Published At
 */
PublishedAt?: number;
/**
 * Is featured
 */
IsFeatured: boolean;
/**
 * Is section sticky
 */
IsSectionSticky: boolean;
/**
 * Time spent
 */
TimeSpent: number;
/**
 * Related players
 */
PlayerIds?: Array<number>;
/**
 * Related teams
 */
TeamIds?: Array<number>;
/**
 * Related tournaments
 */
TournamentIds?: Array<number>;
/**
 * Questions
 */
'QuickPoll.Question'?: string;
/**
 * Options
 */
'QuickPoll.Options'?: Array<string>;
},
): CancelablePromise<AddArticleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/articles',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get article
     * @param id ArticleId
     * @returns GetArticleRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4Articles1(
id: number,
): CancelablePromise<GetArticleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/articles/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Modify article
     * @param id ArticleId
     * @param formData 
     * @returns ModArticleRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4Articles(
id: number,
formData?: {
/**
 * Article id
 */
Id: number;
/**
 * Article SubtypeId
 */
SubTypeId?: number;
/**
 * Article frontend id
 */
FrontendId?: number;
/**
 * Article locale id
 */
LocaleId?: number;
/**
 * Article site sections
 */
SiteSectionIds?: Array<number>;
/**
 * Article title
 */
Title?: string;
/**
 * Article teaser
 */
Teaser?: string;
/**
 * Article content
 */
Content?: string;
/**
 * Headline image file
 */
HeadlineImgFile?: Blob;
/**
 * Headline image text
 */
HeadlineImageText?: string;
/**
 * Square headline image file
 */
SquareHeadlineImgFile?: Blob;
/**
 * Is published
 */
IsPublished?: boolean;
/**
 * Published At
 */
PublishedAt?: number;
/**
 * Is proofread
 */
IsProofread?: boolean;
/**
 * Time spent for proofreading
 */
TimeSpentProofreading?: number;
/**
 * Is featured
 */
IsFeatured?: boolean;
/**
 * Is section sticky
 */
IsSectionSticky?: boolean;
/**
 * Time spent
 */
TimeSpent?: number;
/**
 * Is Clear All Players
 */
IsClearAllPlayers?: boolean;
/**
 * Related players
 */
PlayerIds?: Array<number>;
/**
 * Is Clear All Teams
 */
IsClearAllTeams?: boolean;
/**
 * Related teams
 */
TeamIds?: Array<number>;
/**
 * Is Clear All Tournaments
 */
IsClearAllTournaments?: boolean;
/**
 * Related tournaments
 */
TournamentIds?: Array<number>;
/**
 * Questions
 */
'QuickPoll.Question'?: string;
/**
 * Options
 */
'QuickPoll.Options'?: Array<string>;
},
): CancelablePromise<ModArticleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/articles/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete article
     * @param id ArticleId
     * @returns DelArticleRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4Articles(
id: number,
): CancelablePromise<DelArticleRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/articles/{id}',
            path: {
                'id': id,
            },
        });
    }

}
