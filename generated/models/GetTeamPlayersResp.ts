/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetTeamPlayer } from './GetTeamPlayer';
import type { PagingRespBase } from './PagingRespBase';

export type GetTeamPlayersResp = {
    players?: Array<GetTeamPlayer> | null;
    paging?: PagingRespBase;
};
