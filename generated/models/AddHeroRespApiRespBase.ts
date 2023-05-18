/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddHeroResp } from './AddHeroResp';
import type { EnumRet } from './EnumRet';

export type AddHeroRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddHeroResp;
};
