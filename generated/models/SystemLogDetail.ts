/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LogLevel } from './LogLevel';

export type SystemLogDetail = {
    id?: number;
    traceId?: string | null;
    prefix?: string | null;
    serverName?: string | null;
    level?: LogLevel;
    logger?: string | null;
    method?: string | null;
    message?: string | null;
    messagePayload?: string | null;
    exception?: string | null;
    recordedAt?: number;
};
