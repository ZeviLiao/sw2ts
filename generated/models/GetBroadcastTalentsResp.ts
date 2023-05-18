/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GetBroadcastTalents } from './GetBroadcastTalents';
import type { PagingRespBase } from './PagingRespBase';

export type GetBroadcastTalentsResp = {
    broadcastTalents?: Array<GetBroadcastTalents> | null;
    paging?: PagingRespBase;
};
