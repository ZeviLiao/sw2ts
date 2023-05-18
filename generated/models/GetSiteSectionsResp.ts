/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetSiteSections } from './GetSiteSections';
import type { PagingRespBase } from './PagingRespBase';

export type GetSiteSectionsResp = {
    siteSections?: Array<GetSiteSections> | null;
    paging?: PagingRespBase;
};
