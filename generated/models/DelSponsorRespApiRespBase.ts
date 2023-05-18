/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelSponsorResp } from './DelSponsorResp';
import type { EnumRet } from './EnumRet';

export type DelSponsorRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelSponsorResp;
};
