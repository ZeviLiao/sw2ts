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
  /** 10000 = Role, 10100 = User, 20000 = Operator, 20100 = OperatorUser, 30000 = Agent, 40000 = Audit, 50000 = Source, 50100 = SourceGame, 60000 = Maintenance, 80000 = Tournament, 90000 = ApplicationConfiguration */
  module?: BoPermission;
  actions?: PermissionAction[] | null;
}

export interface ApiResponse {
  message?: string | null;
}

export interface ApproveTournamentPaymentRequest {
  /** @format uuid */
  leaderboardCycleId?: string;
}

/**
 * 1 = Add, 2 = Edit, 3 = Remove, 4 = Disable, 5 = Enable, 6 = Revoke, 7 = ChangePassword
 * @format int32
 */
export enum AuditAction {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
}

/**
 * 1 = Operator, 2 = OperatorUser, 3 = Agent, 4 = Role, 5 = User, 6 = SourceGame, 7 = Tournament, 8 = Maintenance
 * @format int32
 */
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

/**
 * 10000 = Role, 10100 = User, 20000 = Operator, 20100 = OperatorUser, 30000 = Agent, 40000 = Audit, 50000 = Source, 50100 = SourceGame, 60000 = Maintenance, 80000 = Tournament, 90000 = ApplicationConfiguration
 * @format int32
 */
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

/**
 * 0 = Disabled, 1 = Enabled
 * @format int32
 */
export enum BoStatus {
  Value0 = 0,
  Value1 = 1,
}

export interface ChangePasswordRequest {
  /** @format int32 */
  id?: number;
  newPassword?: string | null;
  confirmPassword?: string | null;
  oldPassword?: string | null;
}

export interface ChangeSourceGameStatusRequest {
  /** @format int32 */
  sourceId?: number;
  gameId?: string | null;
  /** 0 = Disabled, 1 = Enabled */
  status?: BoStatus;
}

export interface ChangeStatusRequest {
  /** @format int32 */
  id?: number;
  /** 0 = Disabled, 1 = Enabled */
  status?: BoStatus;
}

export interface ChangeTournamentStatusRequest {
  /** @format int32 */
  id?: number;
  /** 0 = Drafted, 1 = Enabled, 2 = Disabled, 3 = Finished */
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

export interface CreateAppConfigRequest {
  /**
   * @minLength 0
   * @maxLength 64
   */
  key: string | null;
  /**
   * @minLength 0
   * @maxLength 2048
   */
  value: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   */
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
  /** 0 = Turnover, 1 = TotalWinningAmount, 2 = BiggestWinningAmount, 3 = TurnoverAndTotalWinningAmount */
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

export interface DeleteAppConfigRequest {
  /**
   * @minLength 0
   * @maxLength 64
   */
  key: string | null;
}

export interface ForceUpdatePasswordRequest {
  /** @format int32 */
  id?: number;
  newPassword?: string | null;
  confirmPassword?: string | null;
}

/**
 * 0 = All, 1 = Tournament
 * @format int32
 */
export enum GamificationModule {
  Value0 = 0,
  Value1 = 1,
}

export interface GetAppConfigsRequest {
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  sortBy?: string | null;
  /**
   * @minLength 0
   * @maxLength 64
   */
  key?: string | null;
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

export interface GetPermissionsResponse {
  items?: PermissionModel[] | null;
}

export interface GetTimeZonesResponse {
  message?: string | null;
  timeZones?: TimeZoneModel[] | null;
}

export interface LanguageModel {
  code?: string | null;
  name?: string | null;
}

export interface LoginRequest {
  username?: string | null;
  password?: string | null;
}

/**
 * 1 = List, 2 = View, 3 = Create, 4 = Update, 5 = ChangeStatus, 6 = Remove, 7 = ViewRolePermission
 * @format int32
 */
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

export interface ProcessTournamentPaymentRequest {
  /** @format uuid */
  leaderboardCycleId?: string;
}

export interface RemoveOperatorUserRequest {
  /** @format int32 */
  operatorId?: number | null;
  /** @format int32 */
  userId?: number | null;
}

export interface RemovePermissionRequest {
  /** 10000 = Role, 10100 = User, 20000 = Operator, 20100 = OperatorUser, 30000 = Agent, 40000 = Audit, 50000 = Source, 50100 = SourceGame, 60000 = Maintenance, 80000 = Tournament, 90000 = ApplicationConfiguration */
  module?: BoPermission;
  /** 1 = List, 2 = View, 3 = Create, 4 = Update, 5 = ChangeStatus, 6 = Remove, 7 = ViewRolePermission */
  action?: PermissionAction;
}

export interface SwitchMaintenanceRequest {
  /** 0 = All, 1 = Tournament */
  module: GamificationModule;
  isMaintenance: boolean;
}

export interface TimeZoneModel {
  id?: string | null;
  /** @format int32 */
  timeZoneOffsetHours?: number;
}

/**
 * 0 = Turnover, 1 = TotalWinningAmount, 2 = BiggestWinningAmount, 3 = TurnoverAndTotalWinningAmount
 * @format int32
 */
export enum TournamentMode {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/**
 * 0 = Drafted, 1 = Enabled, 2 = Disabled, 3 = Finished
 * @format int32
 */
export enum TournamentStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface UpdateAgentRequest {
  /** @format int32 */
  id?: number;
  code?: string | null;
  name?: string | null;
  currencies?: string[] | null;
  languages?: string[] | null;
  /** @format int32 */
  timezone?: number;
  description?: string | null;
}

export interface UpdateAppConfigRequest {
  /**
   * @minLength 0
   * @maxLength 64
   */
  key: string | null;
  /**
   * @minLength 0
   * @maxLength 2048
   */
  value: string | null;
  /**
   * @minLength 0
   * @maxLength 256
   */
  description?: string | null;
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
  /** 0 = Turnover, 1 = TotalWinningAmount, 2 = BiggestWinningAmount, 3 = TurnoverAndTotalWinningAmount */
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
     * @summary Get all agents
     * @request GET:/agent
     */
    agentList: (
      query?: {
        Agent?: string;
        /** 0 = Disabled, 1 = Enabled */
        Status?: BoStatus;
        SortBy?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/agent`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Agent
     * @name AgentCreate
     * @summary Create new agent
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
     * @summary Update agent
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
     * @summary Get agents by operator
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
     * @summary Get agent by id
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
     * @summary Change status
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
  appConfig = {
    /**
     * No description
     *
     * @tags AppConfigurations
     * @name AppConfigList
     * @request GET:/appConfig
     */
    appConfigList: (data: GetAppConfigsRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/appConfig`,
        method: "GET",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppConfigurations
     * @name AppConfigCreate
     * @request POST:/appConfig
     */
    appConfigCreate: (data: CreateAppConfigRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/appConfig`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppConfigurations
     * @name AppConfigUpdate
     * @request PUT:/appConfig
     */
    appConfigUpdate: (data: UpdateAppConfigRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/appConfig`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppConfigurations
     * @name AppConfigDelete
     * @request DELETE:/appConfig
     */
    appConfigDelete: (data: DeleteAppConfigRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/appConfig`,
        method: "DELETE",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AppConfigurations
     * @name AppConfigDetail
     * @request GET:/appConfig/{key}
     */
    appConfigDetail: (key: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/appConfig/${key}`,
        method: "GET",
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
    auditList: (
      query?: {
        Object?: string;
        /** @format date-time */
        StartTime?: string;
        /** @format date-time */
        EndTime?: string;
        /** 1 = Operator, 2 = OperatorUser, 3 = Agent, 4 = Role, 5 = User, 6 = SourceGame, 7 = Tournament, 8 = Maintenance */
        Module?: AuditModule;
        /** 1 = Add, 2 = Edit, 3 = Remove, 4 = Disable, 5 = Enable, 6 = Revoke, 7 = ChangePassword */
        Action?: AuditAction;
        SortBy?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/audit`,
        method: "GET",
        query: query,
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
     * @name GetAuth
     * @request GET:/auth/me
     */
    getAuth: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/me`,
        method: "GET",
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
    operatorList: (
      query?: {
        Operator?: string;
        /** @format int32 */
        AgentId?: number;
        /** 0 = Disabled, 1 = Enabled */
        Status?: BoStatus;
        SortBy?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/operator`,
        method: "GET",
        query: query,
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
    userList: (
      query?: {
        /** @format int32 */
        OperatorId?: number;
        SortBy?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/operator/user`,
        method: "GET",
        query: query,
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
    roleList: (
      query?: {
        Role?: string;
        /** 0 = Disabled, 1 = Enabled */
        Status?: BoStatus;
        SortBy?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/role`,
        method: "GET",
        query: query,
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
    sourceGameList: (
      query?: {
        Source?: string;
        Game?: string;
        /** 0 = Disabled, 1 = Enabled */
        Status?: BoStatus;
        SortBy?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/sourceGame`,
        method: "GET",
        query: query,
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
    tournamentList: (
      query?: {
        Operator?: string;
        Agent?: string;
        Game?: string;
        Currency?: string;
        Tournament?: string;
        /** 0 = Drafted, 1 = Enabled, 2 = Disabled, 3 = Finished */
        Status?: TournamentStatus;
        /** @format date-time */
        StartTime?: string;
        /** @format date-time */
        EndTime?: string;
        SortBy?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/tournament`,
        method: "GET",
        query: query,
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

    /**
     * No description
     *
     * @tags Tournament
     * @name PaymentApproveUpdate
     * @request PUT:/tournament/payment/approve
     */
    paymentApproveUpdate: (data: ApproveTournamentPaymentRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tournament/payment/approve`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournament
     * @name PaymentProcessCreate
     * @request POST:/tournament/payment/process
     */
    paymentProcessCreate: (data: ProcessTournamentPaymentRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/tournament/payment/process`,
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
    userList: (
      query?: {
        Username?: string;
        /** @format int32 */
        AgentId?: number;
        RoleName?: string;
        /** 0 = Disabled, 1 = Enabled */
        Status?: BoStatus;
        SortBy?: string;
        /** @format int32 */
        Page?: number;
        /** @format int32 */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/user`,
        method: "GET",
        query: query,
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

    /**
     * No description
     *
     * @tags User
     * @name PasswordChangeUpdate
     * @request PUT:/user/password/change
     */
    passwordChangeUpdate: (data: ChangePasswordRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/password/change`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags User
     * @name PasswordForceUpdateUpdate
     * @request PUT:/user/password/forceUpdate
     */
    passwordForceUpdateUpdate: (data: ForceUpdatePasswordRequest, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/password/forceUpdate`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        ...params,
      }),
  };
}
