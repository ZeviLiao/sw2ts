/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LogLevel } from './LogLevel';

export type SystemLogListItem = {
    /**
     * Id
     */
    id?: number;
    /**
     * Trace Id
     */
    traceId?: string | null;
    /**
     * Prefix
     */
    prefix?: string | null;
    /**
     * Server Name
     */
    serverName?: string | null;
    level?: LogLevel;
    /**
     * Logger
     */
    logger?: string | null;
    /**
     * Method
     */
    method?: string | null;
    /**
     * Message
     */
    message?: string | null;
    /**
     * Record At
     */
    recordedAt?: number;
};
