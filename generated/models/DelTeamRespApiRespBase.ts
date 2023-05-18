/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelTeamResp } from './DelTeamResp';
import type { EnumRet } from './EnumRet';

export type DelTeamRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelTeamResp;
};
