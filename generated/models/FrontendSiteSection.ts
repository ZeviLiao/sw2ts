/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumState } from './EnumState';

export type FrontendSiteSection = {
    /**
     * Frontend id
     */
    frontendId?: number;
    /**
     * Site section id
     */
    siteSectionId?: number;
    state?: EnumState;
    /**
     * Position
     */
    position?: number;
};
