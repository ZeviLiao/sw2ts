/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddSponsorResp } from './AddSponsorResp';
import type { EnumRet } from './EnumRet';

export type AddSponsorRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddSponsorResp;
};
