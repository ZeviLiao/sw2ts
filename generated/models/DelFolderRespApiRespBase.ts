/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DelFolderResp } from './DelFolderResp';
import type { EnumRet } from './EnumRet';

export type DelFolderRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: DelFolderResp;
};
