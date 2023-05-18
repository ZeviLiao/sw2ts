/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddFileRespApiRespBase } from '../models/AddFileRespApiRespBase';
import type { AddFolderRespApiRespBase } from '../models/AddFolderRespApiRespBase';
import type { DelFileRespApiRespBase } from '../models/DelFileRespApiRespBase';
import type { DelFolderRespApiRespBase } from '../models/DelFolderRespApiRespBase';
import type { EnumFieldSort } from '../models/EnumFieldSort';
import type { GetCrewFilesRespApiRespBase } from '../models/GetCrewFilesRespApiRespBase';
import type { GetCrewFoldersRespApiRespBase } from '../models/GetCrewFoldersRespApiRespBase';
import type { GetFuzzyFoldersRespApiRespBase } from '../models/GetFuzzyFoldersRespApiRespBase';
import type { ModFileRespApiRespBase } from '../models/ModFileRespApiRespBase';
import type { ModFolderRespApiRespBase } from '../models/ModFolderRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FilesService {

    /**
     * Get folders
     * @param parentId 
     * @param uploadType 
     * @param sort 
     * @param pageNo 
     * @param pageSize 
     * @returns GetCrewFoldersRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4FilesCrewFolders(
parentId?: number,
uploadType?: string,
sort?: EnumFieldSort,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetCrewFoldersRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/files/crew-folders',
            query: {
                'ParentId': parentId,
                'UploadType': uploadType,
                'Sort': sort,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Add folder
     * @param formData 
     * @returns AddFolderRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4FilesCrewFolders(
formData?: {
ParentId: number;
FolderName: string;
},
): CancelablePromise<AddFolderRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/files/crew-folders',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Get files
     * @param folderId 
     * @param fileName 
     * @param uploader 
     * @param uploadedFrom 
     * @param uploadedTo 
     * @param nameSort 
     * @param uploadedSort 
     * @param uploaderSort 
     * @param sizeSort 
     * @param pageNo 
     * @param pageSize 
     * @returns GetCrewFilesRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4FilesCrewFiles(
folderId: number,
fileName?: string,
uploader?: string,
uploadedFrom?: number,
uploadedTo?: number,
nameSort?: EnumFieldSort,
uploadedSort?: EnumFieldSort,
uploaderSort?: EnumFieldSort,
sizeSort?: EnumFieldSort,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetCrewFilesRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/files/crew-files',
            query: {
                'FolderId': folderId,
                'FileName': fileName,
                'Uploader': uploader,
                'UploadedFrom': uploadedFrom,
                'UploadedTo': uploadedTo,
                'NameSort': nameSort,
                'UploadedSort': uploadedSort,
                'UploaderSort': uploaderSort,
                'SizeSort': sizeSort,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * add crew file
     * @param formData 
     * @returns AddFileRespApiRespBase Error
     * @throws ApiError
     */
    public static postApiV4FilesCrewFiles(
formData?: {
FolderId: number;
FileName: string;
File: Blob;
},
): CancelablePromise<AddFileRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/v4/files/crew-files',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Modify folder
     * @param id FolderId
     * @param formData 
     * @returns ModFolderRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4FilesCrewFolders(
id: number,
formData?: {
Id?: number;
ParentId?: number;
Name?: string;
},
): CancelablePromise<ModFolderRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/files/crew-folders/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete folder
     * @param id FolderId
     * @returns DelFolderRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4FilesCrewFolders(
id: number,
): CancelablePromise<DelFolderRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/files/crew-folders/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get fuzzy folders
     * @param folderId 
     * @param fuzzyName 
     * @param maxCount 
     * @returns GetFuzzyFoldersRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4FilesFuzzyFolders(
folderId: number,
fuzzyName: string,
maxCount?: number,
): CancelablePromise<GetFuzzyFoldersRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/files/fuzzy-folders',
            query: {
                'FolderId': folderId,
                'FuzzyName': fuzzyName,
                'MaxCount': maxCount,
            },
        });
    }

    /**
     * Modify file
     * @param id FileId
     * @param formData 
     * @returns ModFileRespApiRespBase Error
     * @throws ApiError
     */
    public static patchApiV4FilesCrewFiles(
id: number,
formData?: {
FileId: number;
FolderId: number;
FileName: string;
},
): CancelablePromise<ModFileRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/api/v4/files/crew-files/{id}',
            path: {
                'id': id,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }

    /**
     * Delete file
     * @param id FileId
     * @returns DelFileRespApiRespBase Error
     * @throws ApiError
     */
    public static deleteApiV4FilesCrewFiles(
id: number,
): CancelablePromise<DelFileRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/v4/files/crew-files/{id}',
            path: {
                'id': id,
            },
        });
    }

}
