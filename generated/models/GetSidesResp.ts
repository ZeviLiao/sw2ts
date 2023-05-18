/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetSide } from './GetSide';
import type { PagingRespBase } from './PagingRespBase';

export type GetSidesResp = {
    sides?: Array<GetSide> | null;
    paging?: PagingRespBase;
};
