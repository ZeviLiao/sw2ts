/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddVenueResp } from './AddVenueResp';
import type { EnumRet } from './EnumRet';

export type AddVenueRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddVenueResp;
};
