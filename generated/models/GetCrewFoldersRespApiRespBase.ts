/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumRet } from './EnumRet';
import type { GetCrewFoldersResp } from './GetCrewFoldersResp';

export type GetCrewFoldersRespApiRespBase = {
    ret?: EnumRet;
    msg?: string | null;
    readonly traceId?: string | null;
    data?: GetCrewFoldersResp;
};
