/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddTeamPlayerResp } from './AddTeamPlayerResp';
import type { EnumRet } from './EnumRet';

export type AddTeamPlayerRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddTeamPlayerResp;
};
