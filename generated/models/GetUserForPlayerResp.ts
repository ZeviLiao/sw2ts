/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumGender } from './EnumGender';

export type GetUserForPlayerResp = {
    userId?: number;
    userName?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    countryId?: number | null;
    countryName?: string | null;
    dateOfBirth?: string | null;
    gender?: EnumGender;
    primaryGameId?: number | null;
    primaryGame?: string | null;
};
