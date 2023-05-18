/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleDetail } from './ArticleDetail';
import type { Int16Item } from './Int16Item';
import type { Int32Item } from './Int32Item';
import type { RelatedQuickPoll } from './RelatedQuickPoll';

export type GetArticleResp = {
    articleDetail?: ArticleDetail;
    players?: Array<Int32Item> | null;
    teams?: Array<Int32Item> | null;
    tournaments?: Array<Int32Item> | null;
    quickPoll?: RelatedQuickPoll;
    siteSections?: Array<Int16Item> | null;
};
