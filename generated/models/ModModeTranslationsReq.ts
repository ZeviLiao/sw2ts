/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModModeTranslationsReq = {
    /**
     * game modes Id
     */
    id: number;
    /**
     * Locale Id
     */
    localeId: number;
    /**
     * Map translations Name
     */
    name: string;
    /**
     * Map translations Abbreviation
     */
    abbreviation?: string | null;
};
