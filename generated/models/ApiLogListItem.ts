/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApiLogListItem = {
    /**
     * Id
     */
    id?: number;
    /**
     * Trace Id
     */
    traceId?: string | null;
    /**
     * Ip Address
     */
    ip?: string | null;
    /**
     * Scheme
     */
    scheme?: string | null;
    /**
     * Host
     */
    host?: string | null;
    /**
     * Path
     */
    path?: string | null;
    /**
     * Method
     */
    method?: string | null;
    /**
     * Prefix
     */
    prefix?: string | null;
    /**
     * Server Name
     */
    serverName?: string | null;
    /**
     * Response Status Code
     */
    responseCode?: number;
    /**
     * Response Length
     */
    responseLen?: number;
    /**
     * Execute Time MilliSeconds
     */
    executeTimeMs?: number;
    /**
     * Record at
     */
    recordedAt?: number;
};
