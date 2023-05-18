/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModPageReq = {
    /**
     * Page id
     */
    pageId: number;
    /**
     * Title
     */
    title: string;
    /**
     * Content
     */
    content: string;
    /**
     * Frontend id
     */
    frontendId: number;
    /**
     * Extra css
     */
    extraCss?: string | null;
};
