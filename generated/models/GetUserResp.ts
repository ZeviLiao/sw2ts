/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EnumGender } from './EnumGender';
import type { GetUserFrontEnd } from './GetUserFrontEnd';
import type { GetUserGroup } from './GetUserGroup';
import type { GetUserRole } from './GetUserRole';

export type GetUserResp = {
    userId?: number;
    userName?: string | null;
    password?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    email?: string | null;
    city?: string | null;
    userTypeId?: number | null;
    userType?: string | null;
    countryId?: number | null;
    countryName?: string | null;
    dateOfBirth?: string | null;
    gender?: EnumGender;
    aboutMe?: string | null;
    avatarImagePath?: string | null;
    userGroups?: Array<GetUserGroup> | null;
    userRoles?: Array<GetUserRole> | null;
    userFrontEnds?: Array<GetUserFrontEnd> | null;
};
