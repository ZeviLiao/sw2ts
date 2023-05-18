/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddArticleResp } from './AddArticleResp';
import type { EnumRet } from './EnumRet';

export type AddArticleRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddArticleResp;
};
