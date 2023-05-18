/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MenuItem } from './MenuItem';
import type { UserProfile } from './UserProfile';

export type GetUserSessionResp = {
    userProfile?: UserProfile;
    menuList?: Array<MenuItem> | null;
    funcItem?: Record<string, Record<string, number>> | null;
};
