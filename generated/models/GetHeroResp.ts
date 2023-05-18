/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetHeroResp = {
    /**
     * Hero Id
     */
    id?: number;
    gameId?: number;
    name?: string | null;
    title?: string | null;
    referredToBy?: number;
    tagline?: string | null;
    description?: string | null;
    imageFileName?: string | null;
    iconFileName?: string | null;
};
