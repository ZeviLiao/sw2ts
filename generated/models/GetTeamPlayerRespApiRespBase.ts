/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetTeamPlayerResp } from './GetTeamPlayerResp';

export type GetTeamPlayerRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetTeamPlayerResp;
};
