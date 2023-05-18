/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumArticleType } from './EnumArticleType';

export type ArticleListItem = {
    /**
     * Article id
     */
    id: number;
    /**
     * Frontend Name
     */
    feName: string;
    /**
     * Article title
     */
    title: string;
    /**
     * Article url
     */
    url?: string | null;
    /**
     * Published state
     */
    isPublished: boolean;
    /**
     * Proofread state
     */
    isProofread: boolean;
    /**
     * Author
     */
    author: string;
    /**
     * Created At
     */
    createdAt: number;
    /**
     * Updater
     */
    updater?: string | null;
    /**
     * Update At
     */
    updateAt?: number;
    type: EnumArticleType;
    /**
     * Article Type Name
     */
    readonly typeName: string;
    /**
     * View counts
     */
    views: number;
};
