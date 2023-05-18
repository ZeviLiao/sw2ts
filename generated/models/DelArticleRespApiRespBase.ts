/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelArticleResp } from './DelArticleResp';
import type { EnumRet } from './EnumRet';

export type DelArticleRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelArticleResp;
};
