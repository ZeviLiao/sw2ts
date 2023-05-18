/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CrewFile } from './CrewFile';
import type { PagingRespBase } from './PagingRespBase';

export type GetCrewFilesResp = {
    files?: Array<CrewFile> | null;
    paging?: PagingRespBase;
};
