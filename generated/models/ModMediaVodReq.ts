/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModMediaVodReq = {
    /**
     * Vod id
     */
    vodId: number;
    /**
     * Vod title
     */
    title: string;
    /**
     * Site section ids
     */
    siteSectionIds: Array<number>;
    /**
     * Host id
     */
    hostId: number;
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
    tags?: Array<string> | null;
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
    playerIds?: Array<number> | null;
    /**
     * Related teams
     */
    teamIds?: Array<number> | null;
};
