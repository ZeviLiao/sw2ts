/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelVenueResp } from './DelVenueResp';
import type { EnumRet } from './EnumRet';

export type DelVenueRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelVenueResp;
};
