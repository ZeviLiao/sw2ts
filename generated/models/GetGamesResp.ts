/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GameListItem } from './GameListItem';
import type { PagingRespBase } from './PagingRespBase';

export type GetGamesResp = {
    /**
     * Games
     */
    games?: Array<GameListItem> | null;
    paging?: PagingRespBase;
};
