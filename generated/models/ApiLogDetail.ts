/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ApiLogDetail = {
    id?: number;
    traceId?: string | null;
    ip?: string | null;
    scheme?: string | null;
    host?: string | null;
    path?: string | null;
    method?: string | null;
    prefix?: string | null;
    serverName?: string | null;
    requestHeaders?: string | null;
    requestContent?: string | null;
    responseHeaders?: string | null;
    responseContent?: string | null;
    responseCode?: number;
    executeTimeMs?: number;
    recordedAt?: number;
};
