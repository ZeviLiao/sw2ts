/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetTeamPlayersResp } from './GetTeamPlayersResp';

export type GetTeamPlayersRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetTeamPlayersResp;
};
