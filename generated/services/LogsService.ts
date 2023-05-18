/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetApiLogRespApiRespBase } from '../models/GetApiLogRespApiRespBase';
import type { GetApiLogsRespApiRespBase } from '../models/GetApiLogsRespApiRespBase';
import type { GetSystemLogRespApiRespBase } from '../models/GetSystemLogRespApiRespBase';
import type { GetSystemLogsRespApiRespBase } from '../models/GetSystemLogsRespApiRespBase';
import type { LogLevel } from '../models/LogLevel';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class LogsService {

    /**
     * Get Log Levels
     * @returns any Success
     * @throws ApiError
     */
    public static getApiV4LogsLogLevels(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/logs/log-levels',
        });
    }

    /**
     * Get Api Logs
     * @param from From
     * @param to To
     * @param prefix Prefix
     * @param httpStatusCode Http Status Code
     * @param ip IP Address
     * @param path Path
     * @param content Content
     * @param serverName Server Name
     * @param traceId Trace Id
     * @param pageNo 
     * @param pageSize 
     * @returns GetApiLogsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4LogsApiLogs(
from?: number,
to?: number,
prefix?: string,
httpStatusCode?: number,
ip?: string,
path?: string,
content?: string,
serverName?: string,
traceId?: string,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetApiLogsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/logs/api-logs',
            query: {
                'From': from,
                'To': to,
                'Prefix': prefix,
                'HttpStatusCode': httpStatusCode,
                'Ip': ip,
                'Path': path,
                'Content': content,
                'ServerName': serverName,
                'TraceId': traceId,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Get Api log
     * @param id Log Id
     * @returns GetApiLogRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4LogsApiLogs1(
id: number,
): CancelablePromise<GetApiLogRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/logs/api-logs/{id}',
            path: {
                'id': id,
            },
        });
    }

    /**
     * Get System Logs
     * @param from From
     * @param to To
     * @param prefix Prefix
     * @param serverName Server Name
     * @param logger Logger
     * @param method Method
     * @param logLevel Log Level
     * @param traceId Trace Id
     * @param keyword Keyword
     * @param pageNo 
     * @param pageSize 
     * @returns GetSystemLogsRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4LogsSystemLogs(
from?: number,
to?: number,
prefix?: string,
serverName?: string,
logger?: string,
method?: string,
logLevel?: LogLevel,
traceId?: string,
keyword?: string,
pageNo?: number,
pageSize?: number,
): CancelablePromise<GetSystemLogsRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/logs/system-logs',
            query: {
                'From': from,
                'To': to,
                'Prefix': prefix,
                'ServerName': serverName,
                'Logger': logger,
                'Method': method,
                'LogLevel': logLevel,
                'TraceId': traceId,
                'Keyword': keyword,
                'PageNo': pageNo,
                'PageSize': pageSize,
            },
        });
    }

    /**
     * Get System Log
     * @param id Log Id
     * @returns GetSystemLogRespApiRespBase Error
     * @throws ApiError
     */
    public static getApiV4LogsSystemLogs1(
id: number,
): CancelablePromise<GetSystemLogRespApiRespBase> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/v4/logs/system-logs/{id}',
            path: {
                'id': id,
            },
        });
    }

}
