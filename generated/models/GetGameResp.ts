/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetGameResp = {
    /**
     * Game id
     */
    id?: number;
    /**
     * Game name
     */
    name?: string | null;
    /**
     * Has player rankings
     */
    hasPlayerRankings?: boolean;
    /**
     * Has team rankings
     */
    hasTeamRankings?: boolean;
    /**
     * Has streams
     */
    hasStreams?: boolean;
    /**
     * Grid id
     */
    gridId?: number | null;
    /**
     * Steam app id
     */
    steamAppId?: number | null;
    /**
     * Twitch game id
     */
    twitchGameId?: number | null;
    /**
     * Game icon image url
     */
    iconImageUrl?: string | null;
    /**
     * Is legacy
     */
    isLegacy?: boolean;
    /**
     * Replay count
     */
    replayCount?: number;
    /**
     * Recommended replay count
     */
    recommendedReplayCount?: number;
};
