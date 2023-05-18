/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetPlayerMediaItems } from './GetPlayerMediaItems';
import type { PagingRespBase } from './PagingRespBase';

export type GetPlayerMediaItemsResp = {
    mediaItems?: Array<GetPlayerMediaItems> | null;
    paging?: PagingRespBase;
};
