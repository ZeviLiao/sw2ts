/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetPageResp = {
    /**
     * Page id
     */
    pageId?: number;
    /**
     * Frontend id
     */
    frontendId?: number;
    /**
     * Title
     */
    title?: string | null;
    /**
     * Content
     */
    content?: string | null;
    /**
     * Extra css
     */
    extraCss?: string | null;
    /**
     * Time spent
     */
    timeSpent?: number;
    /**
     * Comments enabled
     */
    commentsEnabled?: boolean;
};
