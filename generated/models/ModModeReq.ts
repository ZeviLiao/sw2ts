/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ModModeReq = {
    /**
     * Modes Id
     */
    id: number;
    /**
     * Modes Name
     */
    name: string;
    /**
     * Modes Abbreviation
     */
    abbreviation?: string | null;
    /**
     * Modes Game Id
     */
    gameId: number;
};
