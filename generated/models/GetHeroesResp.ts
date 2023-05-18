/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetHero } from './GetHero';
import type { PagingRespBase } from './PagingRespBase';

export type GetHeroesResp = {
    heroes?: Array<GetHero> | null;
    paging?: PagingRespBase;
};
