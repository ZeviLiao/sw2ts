/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetMediaItems } from './GetMediaItems';
import type { PagingRespBase } from './PagingRespBase';

export type GetMediaItemsResp = {
    mediaItems?: Array<GetMediaItems> | null;
    paging?: PagingRespBase;
};
