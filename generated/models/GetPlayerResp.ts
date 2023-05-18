/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumGender } from './EnumGender';

export type GetPlayerResp = {
    playerId?: number;
    userId?: number | null;
    nickName?: string | null;
    isActive?: boolean;
    firstName?: string | null;
    lastName?: string | null;
    gender?: EnumGender;
    genderName?: string | null;
    dateOfBirth?: string;
    countryId?: number | null;
    country?: string | null;
    initialRating?: number | null;
    primaryGameId?: number | null;
    primaryGame?: string | null;
    description?: string | null;
    imageFileName?: string | null;
    facebook?: string | null;
    twitter?: string | null;
    youtube?: string | null;
};
