/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetSponsors } from './GetSponsors';
import type { PagingRespBase } from './PagingRespBase';

export type GetSponsorsResp = {
    sponsors?: Array<GetSponsors> | null;
    paging?: PagingRespBase;
};
