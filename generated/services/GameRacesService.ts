/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetFuzzyGameRaceRespApiRespBase } from '../models/GetFuzzyGameRaceRespApiRespBase';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class GameRacesService {

    /**
     * Get fuzzy gameRaces
     * @param fuzzyPrefix if FuzzyPrefix = null will get list of all GameRaces
     * @param maxCount 
     * @returns GetFuzzyGameRaceRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4GameracesFuzzy(
fuzzyPrefix?: string,
maxCount?: number,
): CancelablePromise<GetFuzzyGameRaceRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/gameraces/fuzzy',
            query: {
                'FuzzyPrefix': fuzzyPrefix,
                'MaxCount': maxCount,
            },
        });
    }

}
