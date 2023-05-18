/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddTeamResp } from './AddTeamResp';
import type { EnumRet } from './EnumRet';

export type AddTeamRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddTeamResp;
};
