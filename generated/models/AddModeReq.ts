/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddModeReq = {
    /**
     * Game Map Name
     */
    name: string;
    /**
     * Modes Abbreviation
     */
    abbreviation?: string | null;
    /**
     * Map Game Id
     */
    gameId: number;
};
