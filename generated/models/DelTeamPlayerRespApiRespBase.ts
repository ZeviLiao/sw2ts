/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelTeamPlayerResp } from './DelTeamPlayerResp';
import type { EnumRet } from './EnumRet';

export type DelTeamPlayerRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelTeamPlayerResp;
};
