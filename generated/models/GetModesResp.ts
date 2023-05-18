/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetMode } from './GetMode';
import type { PagingRespBase } from './PagingRespBase';

export type GetModesResp = {
    modes?: Array<GetMode> | null;
    paging?: PagingRespBase;
};
