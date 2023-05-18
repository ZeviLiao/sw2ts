/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelHeroResp } from './DelHeroResp';
import type { EnumRet } from './EnumRet';

export type DelHeroRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelHeroResp;
};
