/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MediaTag } from './MediaTag';

export type GetStreamResp = {
    id?: number;
    platform?: number;
    streamId?: string | null;
    streamUrl?: string | null;
    screenCapUrl?: string | null;
    gameId?: number;
    languageId?: number;
    isEventStream?: boolean;
    isProPlayer?: boolean;
    isCelebCaster?: boolean;
    nextBroadcastAt?: number | null;
    title?: string | null;
    isFeatured?: boolean;
    description?: string | null;
    tags?: Array<MediaTag> | null;
};
