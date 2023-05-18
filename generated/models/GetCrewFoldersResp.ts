/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FolderDetail } from './FolderDetail';
import type { PagingRespBase } from './PagingRespBase';
import type { ParentFolder } from './ParentFolder';

export type GetCrewFoldersResp = {
    parent?: Array<ParentFolder> | null;
    folders?: Array<FolderDetail> | null;
    paging?: PagingRespBase;
};
