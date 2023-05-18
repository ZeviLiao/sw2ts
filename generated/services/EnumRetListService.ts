/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Int32StringDictionaryApiRespBase } from '../models/Int32StringDictionaryApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class EnumRetListService {

    /**
     * Get EnumRet List
     * @returns Int32StringDictionaryApiRespBase Success
     * @throws ApiError
     */
    public static getEnumret(): CancelablePromise<Int32StringDictionaryApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/enumret',
        });
    }

}
