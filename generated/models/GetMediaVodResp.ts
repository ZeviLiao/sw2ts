/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Int16Item } from './Int16Item';
import type { Int32Item } from './Int32Item';

export type GetMediaVodResp = {
    /**
     * Vod id
     */
    vodId: number;
    /**
     * Vod title
     */
    title: string;
    /**
     * Related site sections
     */
    siteSections: Array<Int16Item>;
    /**
     * Host id
     */
    hostId: number;
    /**
     * Host name
     */
    readonly hostName: string;
    /**
     * Host video id
     */
    hostVideoId: string;
    /**
     * Start time
     */
    startTime: number;
    /**
     * Description
     */
    description?: string | null;
    /**
     * Tags
     */
    tags?: Array<Int32Item> | null;
    /**
     * Is in game
     */
    isInGame: boolean;
    /**
     * Is featured
     */
    isFeatured: boolean;
    /**
     * Related players
     */
    players?: Array<Int32Item> | null;
    /**
     * Related teams
     */
    teams?: Array<Int32Item> | null;
};
