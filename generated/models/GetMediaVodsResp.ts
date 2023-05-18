/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MediaVodListItem } from './MediaVodListItem';
import type { PagingRespBase } from './PagingRespBase';

export type GetMediaVodsResp = {
    /**
     * Vods
     */
    vods?: Array<MediaVodListItem> | null;
    paging?: PagingRespBase;
};
