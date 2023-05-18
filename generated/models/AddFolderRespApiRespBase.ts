/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddFolderResp } from './AddFolderResp';
import type { EnumRet } from './EnumRet';

export type AddFolderRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: AddFolderResp;
};
