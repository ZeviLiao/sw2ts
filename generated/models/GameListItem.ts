/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Translation } from './Translation';

export type GameListItem = {
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
     * Is legacy
     */
    isLegacy?: boolean;
    /**
     * Icon image url
     */
    iconImageUrl?: string | null;
    /**
     * Translation
     */
    translations?: Array<Translation> | null;
};
