/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BroadcastTalentCountry } from './BroadcastTalentCountry';
import type { BroadcastTalentGame } from './BroadcastTalentGame';
import type { BroadcastTalentLanguage } from './BroadcastTalentLanguage';

export type GetBroadcastTalents = {
    id?: number;
    name?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    urlSafeName?: string | null;
    type?: number;
    gender?: number;
    isActive?: boolean;
    primaryGame?: BroadcastTalentGame;
    country?: BroadcastTalentCountry;
    language?: BroadcastTalentLanguage;
};
