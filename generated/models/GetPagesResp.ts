/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PageListItem } from './PageListItem';
import type { PagingRespBase } from './PagingRespBase';

export type GetPagesResp = {
    /**
     * Pages
     */
    pages?: Array<PageListItem> | null;
    paging?: PagingRespBase;
};
