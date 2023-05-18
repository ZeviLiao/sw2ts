/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BroadcastTalentCountry } from './BroadcastTalentCountry';
import type { BroadcastTalentGame } from './BroadcastTalentGame';
import type { BroadcastTalentLanguage } from './BroadcastTalentLanguage';
import type { BroadcastTalentPlayer } from './BroadcastTalentPlayer';
import type { BroadcastTalentStream } from './BroadcastTalentStream';

export type GetBroadcastTalentResp = {
    id?: number;
    name?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    type?: number;
    gender?: number;
    isActive?: boolean | null;
    about?: string | null;
    dateOfBirth?: string | null;
    headerImagePath?: string | null;
    imagePath?: string | null;
    socialFacebook?: string | null;
    socialTwitter?: string | null;
    socialYoutube?: string | null;
    website?: string | null;
    primaryGame?: BroadcastTalentGame;
    country?: BroadcastTalentCountry;
    language?: BroadcastTalentLanguage;
    player?: BroadcastTalentPlayer;
    personalStream?: BroadcastTalentStream;
};
