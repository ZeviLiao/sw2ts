/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleListItem } from './ArticleListItem';
import type { PagingRespBase } from './PagingRespBase';

export type GetArticlesResp = {
    /**
     * Articles
     */
    articles?: Array<ArticleListItem> | null;
    paging?: PagingRespBase;
};
