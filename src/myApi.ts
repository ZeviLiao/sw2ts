/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface AddPermissionRequest {
  module?: BoPermission;
  actions?: PermissionAction[] | null;
}

export interface ApiResponse {
  message?: string | null;
}

/** @format int32 */
export enum AuditAction {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

/** @format int32 */
export enum AuditModule {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
}

/** @format int32 */
export enum BoPermission {
  Value10000 = 10000,
  Value10100 = 10100,
  Value20000 = 20000,
  Value20100 = 20100,
  Value30000 = 30000,
  Value40000 = 40000,
  Value50000 = 50000,
  Value50100 = 50100,
  Value60000 = 60000,
  Value80000 = 80000,
  Value90000 = 90000,
}

/** @format int32 */
export enum BoStatus {
  Value0 = 0,
  Value1 = 1,
}

export interface ChangeSourceGameStatusRequest {
  /** @format int32 */
  sourceId?: number;
  gameId?: string | null;
  status?: BoStatus;
}

export interface ChangeStatusRequest {
  /** @format int32 */
  id?: number;
  status?: BoStatus;
}

export interface ChangeTournamentStatusRequest {
  /** @format int32 */
  id?: number;
  status?: TournamentStatus;
}

export interface CreateAgentRequest {
  code?: string | null;
  name?: string | null;
  currencies?: string[] | null;
  languages?: string[] | null;
  /** @format int32 */
  timezone?: number;
  description?: string | null;
}

export interface CreateOperatorRequest {
  code?: string | null;
  name?: string | null;
  agentIds?: number[] | null;
  clientId?: string | null;
  clientSecret?: string | null;
  description?: string | null;
}

export interface CreateRoleRequest {
  name?: string | null;
  description?: string | null;
  permissions?: number[] | null;
}

export interface CreateSourceGameRequest {
  /** @format int32 */
  sourceId?: number | null;
  gameId?: string | null;
  gameName?: string | null;
}

export interface CreateTournamentRequest {
  code?: string | null;
  name?: string | null;
  mode?: TournamentMode;
  sourceCode?: string | null;
  operatorCode?: string | null;
  agentCode?: string | null;
  gameIds?: string[] | null;
  currency?: string | null;
  /** @format int32 */
  timezone?: number;
  /** @format int32 */
  cycleLength?: number;
  description?: string | null;
  leaderboards?: UpsertLeaderboardModel[] | null;
  leaderboardCycles?: UpsertLeaderboardCycleModel[] | null;
  exchangeRates?: UpsertExchangeRateModel[] | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
}

export interface CreateUserRequest {
  username?: string | null;
  password?: string | null;
  /** @format int32 */
  roleId?: number | null;
  description?: string | null;
}

export interface CurrencyModel {
  code?: string | null;
  name?: string | null;
}

/** @format int32 */
export enum GamificationModule {
  Value0 = 0,
  Value1 = 1,
}

export interface GetAgentsRequest {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  sortBy?: string | null;
  agent?: string | null;
  status?: BoStatus;
}

export interface GetAuditsRequest {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  sortBy?: string | null;
  object?: string | null;
  /** @format date-time */
  startTime?: string | null;
  /** @format date-time */
  endTime?: string | null;
  module?: AuditModule;
  action?: AuditAction;
}

export interface GetCurrenciesResponse {
  items?: CurrencyModel[] | null;
}

export interface GetGameRoomsRequest {
  /**
   * @minLength 0
   * @maxLength 10
   */
  source: string | null;
  /**
   * @minLength 0
   * @maxLength 36
   */
  agent: string | null;
  /**
   * @minLength 0
   * @maxLength 32
   */
  gameId: string | null;
  /**
   * @minLength 0
   * @maxLength 8
   */
  currency: string | null;
}

export interface GetLanguagesResponse {
  items?: LanguageModel[] | null;
}

export interface GetOperatorUsersRequest {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  sortBy?: string | null;
  /** @format int32 */
  operatorId?: number;
}

export interface GetOperatorsRequest {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  sortBy?: string | null;
  operator?: string | null;
  /** @format int32 */
  agentId?: number | null;
  status?: BoStatus;
}

export interface GetPermissionsResponse {
  items?: PermissionModel[] | null;
}

export interface GetRolesRequest {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  sortBy?: string | null;
  role?: string | null;
  status?: BoStatus;
}

export interface GetSourceGamesRequest {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  sortBy?: string | null;
  source?: string | null;
  game?: string | null;
  status?: BoStatus;
}

export interface GetTimeZonesResponse {
  message?: string | null;
  timeZones?: TimeZoneModel[] | null;
}

export interface GetTournamentsRequest {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  sortBy?: string | null;
  operator?: string | null;
  agent?: string | null;
  game?: string | null;
  currency?: string | null;
  tournament?: string | null;
  status?: TournamentStatus;
  /** @format date-time */
  startTime?: string | null;
  /** @format date-time */
  endTime?: string | null;
}

export interface GetUsersRequest {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  sortBy?: string | null;
  username?: string | null;
  /** @format int32 */
  agentId?: number | null;
  roleName?: string | null;
  status?: BoStatus;
}

export interface LanguageModel {
  code?: string | null;
  name?: string | null;
}

export interface LoginRequest {
  username?: string | null;
  password?: string | null;
}

/** @format int32 */
export enum PermissionAction {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
}

export interface PermissionModel {
  /** @format int32 */
  id?: number;
  category?: string | null;
  code?: string | null;
  name?: string | null;
}

export interface RemoveOperatorUserRequest {
  /** @format int32 */
  operatorId?: number | null;
  /** @format int32 */
  userId?: number | null;
}

export interface RemovePermissionRequest {
  module?: BoPermission;
  action?: PermissionAction;
}

export interface SwitchMaintenanceRequest {
  module: GamificationModule;
  isMaintenance: boolean;
}

export interface TimeZoneModel {
  id?: string | null;
  /** @format int32 */
  timeZoneOffsetHours?: number;
}

/** @format int32 */
export enum TournamentMode {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/** @format int32 */
export enum TournamentStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface UpdateAgentRequest {
  code?: string | null;
  name?: string | null;
  currencies?: string[] | null;
  languages?: string[] | null;
  /** @format int32 */
  timezone?: number;
  description?: string | null;
  /** @format int32 */
  id?: number;
}

export interface UpdateOperatorRequest {
  code?: string | null;
  name?: string | null;
  agentIds?: number[] | null;
  clientId?: string | null;
  clientSecret?: string | null;
  description?: string | null;
  /** @format int32 */
  id?: number;
}

export interface UpdateRoleRequest {
  name?: string | null;
  description?: string | null;
  permissions?: number[] | null;
  /** @format int32 */
  id?: number;
}

export interface UpdateSourceGameRequest {
  /** @format int32 */
  sourceId?: number | null;
  gameId?: string | null;
  gameName?: string | null;
}

export interface UpdateTournamentRequest {
  code?: string | null;
  name?: string | null;
  mode?: TournamentMode;
  sourceCode?: string | null;
  operatorCode?: string | null;
  agentCode?: string | null;
  gameIds?: string[] | null;
  currency?: string | null;
  /** @format int32 */
  timezone?: number;
  /** @format int32 */
  cycleLength?: number;
  description?: string | null;
  leaderboards?: UpsertLeaderboardModel[] | null;
  leaderboardCycles?: UpsertLeaderboardCycleModel[] | null;
  exchangeRates?: UpsertExchangeRateModel[] | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  /** @format int32 */
  id?: number;
}

export interface UpdateUserRequest {
  username?: string | null;
  password?: string | null;
  /** @format int32 */
  roleId?: number | null;
  description?: string | null;
  /** @format int32 */
  id?: number;
}

export interface UpsertExchangeRateModel {
  currency?: string | null;
  /** @format double */
  rate?: number;
}

export interface UpsertLeaderboardCycleModel {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
}

export interface UpsertLeaderboardGameRoomModel {
  gameId?: string | null;
  roomId?: string | null;
  name?: string | null;
  currency?: string | null;
}

export interface UpsertLeaderboardModel {
  /** @format int32 */
  id?: number;
  names?: UpsertLeaderboardNameModel[] | null;
  gameRooms?: UpsertLeaderboardGameRoomModel[] | null;
  rewards?: UpsertPrizeModel[] | null;
}

export interface UpsertLeaderboardNameModel {
  language?: string | null;
  name?: string | null;
}

export interface UpsertOperatorUserRequest {
  /** @format int32 */
  operatorId?: number | null;
  /** @format int32 */
  userId?: number | null;
  agentIds?: number[] | null;
  /** @format int32 */
  roleId?: number | null;
}

export interface UpsertPrizeModel {
  /** @format int32 */
  rank?: number;
  /** @format double */
  amount?: number;
  description?: string | null;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== "string" ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      signal: (cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal) || null,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title BackofficeApi
 * @version v1
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  agent = {
    /**
     * No description
     *
     * @tags Agent
     * @name AgentList
     * @request GET:/agent
     */
    agentList: (data: GetAgentsRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/agent`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentCreate
     * @request POST:/agent
     */
    agentCreate: (data: CreateAgentRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/agent`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentUpdate
     * @request PUT:/agent
     */
    agentUpdate: (data: UpdateAgentRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/agent`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name OperatorDetail
     * @request GET:/agent/operator/{operatorId}
     */
    operatorDetail: (operatorId: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/agent/operator/${operatorId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentDetail
     * @request GET:/agent/{id}
     */
    agentDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/agent/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name ChangeStatusCreate
     * @request POST:/agent/changeStatus
     */
    changeStatusCreate: (data: ChangeStatusRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/agent/changeStatus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  audit = {
    /**
     * No description
     *
     * @tags Audit
     * @name AuditList
     * @request GET:/audit
     */
    auditList: (data: GetAuditsRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/audit`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Audit
     * @name AuditDetail
     * @request GET:/audit/{id}
     */
    auditDetail: (id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/audit/${id}`,
        method: "GET",
        ...params,
      }),
  };
  auth = {
    /**
     * No description
     *
     * @tags Auth
     * @name LoginCreate
     * @request POST:/auth/login
     */
    loginCreate: (data: LoginRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Auth
     * @name LogoutCreate
     * @request POST:/auth/logout
     */
    logoutCreate: (params: RequestParams = {}) =>
      this.request<ApiResponse, any>({
        path: `/auth/logout`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  currencies = {
    /**
     * No description
     *
     * @tags Currency
     * @name GetCurrencies
     * @request GET:/currencies/all
     */
    getCurrencies: (params: RequestParams = {}) =>
      this.request<GetCurrenciesResponse, any>({
        path: `/currencies/all`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  languages = {
    /**
     * No description
     *
     * @tags Language
     * @name GetLanguages
     * @request GET:/languages/all
     */
    getLanguages: (params: RequestParams = {}) =>
      this.request<GetLanguagesResponse, any>({
        path: `/languages/all`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  maintenance = {
    /**
     * No description
     *
     * @tags Maintenance
     * @name SwitchUpdate
     * @request PUT:/maintenance/switch
     */
    switchUpdate: (data: SwitchMaintenanceRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/maintenance/switch`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maintenance
     * @name MaintenanceList
     * @request GET:/maintenance
     */
    maintenanceList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/maintenance`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maintenance
     * @name MaintenanceDetail
     * @request GET:/maintenance/{id}
     */
    maintenanceDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/maintenance/${id}`,
        method: "GET",
        ...params,
      }),
  };
  operator = {
    /**
     * No description
     *
     * @tags Operator
     * @name OperatorList
     * @request GET:/operator
     */
    operatorList: (data: GetOperatorsRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/operator`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Operator
     * @name OperatorCreate
     * @request POST:/operator
     */
    operatorCreate: (data: CreateOperatorRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/operator`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Operator
     * @name OperatorUpdate
     * @request PUT:/operator
     */
    operatorUpdate: (data: UpdateOperatorRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/operator`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Operator
     * @name OperatorDetail
     * @request GET:/operator/{id}
     */
    operatorDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/operator/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Operator
     * @name ChangeStatusCreate
     * @request POST:/operator/changeStatus
     */
    changeStatusCreate: (data: ChangeStatusRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/operator/changeStatus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OperatorUser
     * @name UserList
     * @request GET:/operator/user
     */
    userList: (data: GetOperatorUsersRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/operator/user`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OperatorUser
     * @name UserCreate
     * @request POST:/operator/user
     */
    userCreate: (data: UpsertOperatorUserRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/operator/user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OperatorUser
     * @name UserUpdate
     * @request PUT:/operator/user
     */
    userUpdate: (data: UpsertOperatorUserRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/operator/user`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OperatorUser
     * @name UserDelete
     * @request DELETE:/operator/user
     */
    userDelete: (data: RemoveOperatorUserRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/operator/user`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  permission = {
    /**
     * No description
     *
     * @tags Permission
     * @name PermissionList
     * @request GET:/permission
     */
    permissionList: (params: RequestParams = {}) =>
      this.request<GetPermissionsResponse, any>({
        path: `/permission`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name PermissionCreate
     * @request POST:/permission
     */
    permissionCreate: (data: AddPermissionRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/permission`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Permission
     * @name PermissionDelete
     * @request DELETE:/permission
     */
    permissionDelete: (data: RemovePermissionRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/permission`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  role = {
    /**
     * No description
     *
     * @tags Role
     * @name RoleList
     * @request GET:/role
     */
    roleList: (data: GetRolesRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/role`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleCreate
     * @request POST:/role
     */
    roleCreate: (data: CreateRoleRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/role`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleUpdate
     * @request PUT:/role
     */
    roleUpdate: (data: UpdateRoleRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/role`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name RoleDetail
     * @request GET:/role/{id}
     */
    roleDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/role/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Role
     * @name ChangeStatusCreate
     * @request POST:/role/changeStatus
     */
    changeStatusCreate: (data: ChangeStatusRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/role/changeStatus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  source = {
    /**
     * No description
     *
     * @tags Source
     * @name SourceList
     * @request GET:/source
     */
    sourceList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/source`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Source
     * @name GameRoomsList
     * @request GET:/source/game/rooms
     */
    gameRoomsList: (data: GetGameRoomsRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/source/game/rooms`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  sourceGame = {
    /**
     * No description
     *
     * @tags SourceGame
     * @name SourceGameList
     * @request GET:/sourceGame
     */
    sourceGameList: (data: GetSourceGamesRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sourceGame`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SourceGame
     * @name SourceGameCreate
     * @request POST:/sourceGame
     */
    sourceGameCreate: (data: CreateSourceGameRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sourceGame`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SourceGame
     * @name SourceGameUpdate
     * @request PUT:/sourceGame
     */
    sourceGameUpdate: (data: UpdateSourceGameRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sourceGame`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SourceGame
     * @name SourceGameDetail
     * @request GET:/sourceGame/{sourceId}/{gameId}
     */
    sourceGameDetail: (sourceId: number, gameId: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sourceGame/${sourceId}/${gameId}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags SourceGame
     * @name ChangeStatusCreate
     * @request POST:/sourceGame/changeStatus
     */
    changeStatusCreate: (data: ChangeSourceGameStatusRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/sourceGame/changeStatus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  timeZones = {
    /**
     * No description
     *
     * @tags TimeZone
     * @name TimeZonesList
     * @request GET:/timeZones
     */
    timeZonesList: (params: RequestParams = {}) =>
      this.request<GetTimeZonesResponse, any>({
        path: `/timeZones`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  tournament = {
    /**
     * No description
     *
     * @tags Tournament
     * @name TournamentList
     * @request GET:/tournament
     */
    tournamentList: (data: GetTournamentsRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tournament`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournament
     * @name TournamentCreate
     * @request POST:/tournament
     */
    tournamentCreate: (data: CreateTournamentRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tournament`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournament
     * @name TournamentUpdate
     * @request PUT:/tournament
     */
    tournamentUpdate: (data: UpdateTournamentRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tournament`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournament
     * @name TournamentDetail
     * @request GET:/tournament/{id}
     */
    tournamentDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tournament/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournament
     * @name ChangeStatusCreate
     * @request POST:/tournament/changeStatus
     */
    changeStatusCreate: (data: ChangeTournamentStatusRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tournament/changeStatus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @tags User
     * @name UserList
     * @request GET:/user
     */
    userList: (data: GetUsersRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserCreate
     * @request POST:/user
     */
    userCreate: (data: CreateUserRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserUpdate
     * @request PUT:/user
     */
    userUpdate: (data: UpdateUserRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name UserDetail
     * @request GET:/user/{id}
     */
    userDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name RolePermissionDetail
     * @request GET:/user/rolePermission/{id}
     */
    rolePermissionDetail: (id: number, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/rolePermission/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name ChangeStatusCreate
     * @request POST:/user/changeStatus
     */
    changeStatusCreate: (data: ChangeStatusRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/changeStatus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
}
