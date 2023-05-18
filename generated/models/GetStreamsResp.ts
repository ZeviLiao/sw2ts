/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetStreams } from './GetStreams';
import type { PagingRespBase } from './PagingRespBase';

export type GetStreamsResp = {
    streams?: Array<GetStreams> | null;
    paging?: PagingRespBase;
};
