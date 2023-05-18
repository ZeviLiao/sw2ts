/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type GetTeamPlayer = {
    teamPlayerId?: number;
    playerId?: number;
    teamId?: number;
    playerName?: string | null;
    playerUrlSafeName?: string | null;
    joinDate?: number;
    leaveDate?: number | null;
    isHidden?: boolean;
    position?: string | null;
};
