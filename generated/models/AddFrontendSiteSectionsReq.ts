/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FrontendSiteSection } from './FrontendSiteSection';

export type AddFrontendSiteSectionsReq = {
    /**
     * New site sections
     */
    newSiteSections?: Array<FrontendSiteSection> | null;
};
