/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SiteSection } from './SiteSection';

export type ArticleDetail = {
    /**
     * Article Id
     */
    id: number;
    /**
     * Article subtype id
     */
    subTypeId: number;
    /**
     * Title
     */
    title: string;
    /**
     * Redirect url
     */
    redirectUrl?: string | null;
    /**
     * Teaser
     */
    teaser: string;
    /**
     * Content
     */
    content: string;
    /**
     * Frontend id
     */
    frontendId: number;
    /**
     * Local id
     */
    localeId: number;
    /**
     * Site sections
     */
    siteSections?: Array<SiteSection> | null;
    /**
     * Headline image url
     */
    headlineImagePath?: string | null;
    /**
     * Headline image text
     */
    headlineImageText?: string | null;
    /**
     * Square image url
     */
    squareHeadlineImageUrl?: string | null;
    /**
     * Is published
     */
    isPublished: boolean;
    /**
     * Published At
     */
    publishedAt?: number | null;
    /**
     * Is sticky
     */
    isSticky: boolean;
    /**
     * Is featured
     */
    isFeatured: boolean;
    /**
     * Time spent
     */
    timeSpent: number;
    /**
     * Proofread state
     */
    isProofread: boolean;
    /**
     * Time spent for proofreading article
     */
    timeSpentProofreading: number;
    /**
     * Proofread datetime
     */
    proofreadAt?: number | null;
};
