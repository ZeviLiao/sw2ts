/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

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

/**
 * 0 = Turnover, 1 = TotalWinningAmount, 2 = BiggestWinningAmount, 3 = TurnoverAndActualWinningAmount
 * @format int32
 */
export enum TournamentMode {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
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

/**
 * 0 = All, 1 = Tournament, 255 = IntegrationTest
 * @format int32
 */
export enum GamificationModule {
  Value0 = 0,
  Value1 = 1,
  Value255 = 255,
}

/**
 * 0 = Disabled, 1 = Enabled
 * @format int32
 */
export enum BoStatus {
  Value0 = 0,
  Value1 = 1,
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

export interface AddPermissionRequest {
  /** 10000 = Role, 10100 = User, 20000 = Operator, 20100 = OperatorUser, 30000 = Agent, 40000 = Audit, 50000 = Source, 50100 = SourceGame, 60000 = Maintenance, 80000 = Tournament, 90000 = ApplicationConfiguration */
  module?: BoPermission;
  actions?: PermissionAction[] | null;
}

export interface AgentModel {
  updatedBy?: string | null;
  updatedAt?: string | null;
  /** @format int32 */
  id?: number;
  code?: string | null;
  name?: string | null;
  clientId?: string | null;
  clientSecret?: string | null;
  currencies?: string | null;
  languages?: string | null;
  timezone?: string | null;
  /** 0 = Disabled, 1 = Enabled */
  status?: BoStatus;
  description?: string | null;
}

export interface ApiResponse {
  message?: string | null;
}

export interface ApproveTournamentPaymentRequest {
  /** @format uuid */
  leaderboardCycleId?: string;
}

export interface AuditModel {
  updatedBy?: string | null;
  updatedAt?: string | null;
  /** @format uuid */
  id?: string;
  object?: string | null;
  module?: string | null;
  action?: string | null;
  detail?: string | null;
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

export interface ChangeUserPasswordRequest {
  newPassword?: string | null;
  confirmPassword?: string | null;
  oldPassword?: string | null;
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
  /** @format int32 */
  sourceId?: number;
  agentIds?: number[] | null;
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
  sourceCode?: string | null;
  agentCode?: string | null;
  operatorCode?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  gameIds?: string[] | null;
  currency?: string | null;
  name?: string | null;
  code?: string | null;
  /** 0 = Turnover, 1 = TotalWinningAmount, 2 = BiggestWinningAmount, 3 = TurnoverAndActualWinningAmount */
  mode?: TournamentMode;
  description?: string | null;
  /** @format date-time */
  cyclePeriodStartDate?: string;
  /** @format date-time */
  cyclePeriodEndDate?: string;
  /** @format int32 */
  cycleLength?: number;
  /** @format int32 */
  payoutDay?: number;
  /** @format date-span */
  payoutTime?: string;
  leaderboards?: UpsertLeaderboardModel[] | null;
  leaderboardCycles?: UpsertLeaderboardCycleModel[] | null;
  exchangeRates?: UpsertExchangeRateModel[] | null;
}

export interface CreateUserRequest {
  password?: string | null;
  username?: string | null;
  /** @format int32 */
  roleId?: number;
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

export interface ExchangeRateModel {
  currency?: string | null;
  /** @format double */
  rate?: number;
  /** @format double */
  totalPrizeDisplay?: number;
}

export interface ForceUpdatePasswordRequest {
  newPassword?: string | null;
  confirmPassword?: string | null;
  /** @format int32 */
  id?: number;
}

export interface ForceUpdateUserPasswordRequest {
  newPassword?: string | null;
  confirmPassword?: string | null;
}

export interface GameRoomDto {
  roomId?: string | null;
  roomName?: string | null;
  currency?: string | null;
  /** @format double */
  minBet?: number;
  /** @format double */
  maxBet?: number;
}

export interface GameRoomOptionDto {
  gameId?: string | null;
  gameName?: string | null;
  roomId?: string | null;
  roomName?: string | null;
  currency?: string | null;
}

export interface GetAgentOptionsResponse {
  options?: Int32ItemDto[] | null;
}

export interface GetAgentResponse {
  model?: AgentModel;
}

export interface GetAgentsByOperatorResponse {
  agents?: Int32ItemDto[] | null;
}

export interface GetAgentsResponse {
  /** @format int32 */
  totalRows?: number | null;
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  results?: AgentModel[] | null;
}

export interface GetAllAgentsResponse {
  models?: AgentModel[] | null;
}

export interface GetAllMaintenanceStatusesResponse {
  modules?: MaintenanceStatusDto[] | null;
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

export interface GetAuditsResponse {
  /** @format int32 */
  totalRows?: number | null;
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  results?: AuditModel[] | null;
}

export interface GetCurrenciesResponse {
  items?: CurrencyModel[] | null;
}

export interface GetGameRoomOptionsResponse {
  options?: GameRoomOptionDto[] | null;
}

export interface GetGameRoomsResponse {
  rooms: GameRoomDto[] | null;
}

export interface GetLanguagesResponse {
  items?: LanguageModel[] | null;
}

export interface GetMeResponse {
  message?: string | null;
  forceUpdatePassword?: boolean;
  /** @uniqueItems true */
  rolePermissions?: number[] | null;
  /** @format date-time */
  expiryTime?: string;
  username?: string | null;
  /** @format int32 */
  userId?: number;
}

export interface GetOperatorOptionsResponse {
  options?: Int32ItemDto[] | null;
}

export interface GetOperatorResponse {
  model?: OperatorDetailDto;
}

export interface GetOperatorUserResponse {
  operatorUser?: OperatorUserDto;
}

export interface GetOperatorsResponse {
  /** @format int32 */
  totalRows?: number | null;
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  results?: OperatorDto[] | null;
}

export interface GetPermissionsResponse {
  items?: PermissionModel[] | null;
}

export interface GetRoleResponse {
  model?: RoleModel;
}

export interface GetRolesResponse {
  /** @format int32 */
  totalRows?: number | null;
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  results?: RoleModel[] | null;
}

export interface GetSourceGameOptionsResponse {
  options?: StringItemDto[] | null;
}

export interface GetSourceGameResponse {
  model?: SourceGameModel;
}

export interface GetSourceGamesResponse {
  /** @format int32 */
  totalRows?: number | null;
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  results?: SourceGameModel[] | null;
}

export interface GetSourceOptionsResponse {
  options?: Int32ItemDto[] | null;
}

export interface GetSourcesResponse {
  /** @format int32 */
  totalRows?: number | null;
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  results?: SourceModel[] | null;
}

export interface GetTimeZonesResponse {
  message?: string | null;
  timeZones?: TimeZoneModel[] | null;
}

export interface GetTournamentCyclesResponse {
  results: TournamentCycleDto[] | null;
  /** @format int32 */
  totalCycles?: number;
}

export interface GetTournamentResponse {
  detailDto?: TournamentDetailDto;
}

export interface GetTournamentsResponse {
  /** @format int32 */
  totalRows?: number | null;
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  results?: TournamentListDto[] | null;
}

export interface GetUserResponse {
  model?: UserModel;
}

export interface GetUserRolePermissionResponse {
  model?: UserRolePermissionModel;
}

export interface GetUsersResponse {
  /** @format int32 */
  totalRows?: number | null;
  /** @format int32 */
  page?: number | null;
  /** @format int32 */
  pageSize?: number | null;
  results?: UserModel[] | null;
}

export interface Int32ItemDto {
  name: string | null;
  /** @format int32 */
  id: number;
  code: string | null;
}

export interface LanguageModel {
  code?: string | null;
  name?: string | null;
}

export interface LeaderboardCycleModel {
  /** @format uuid */
  id?: string;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
}

export interface LeaderboardGameRoomModel {
  gameId?: string | null;
  roomId?: string | null;
  name?: string | null;
  currency?: string | null;
}

export interface LeaderboardModel {
  /** @format int32 */
  id?: number;
  names?: LeaderboardNameModel[] | null;
  gameRooms?: LeaderboardGameRoomModel[] | null;
  rewards?: LeaderboardPrizeModel[] | null;
  /** @format int32 */
  order?: number;
}

export interface LeaderboardNameModel {
  language?: string | null;
  name?: string | null;
}

export interface LeaderboardPrizeModel {
  /** @format int32 */
  rank?: number;
  /** @format double */
  amount?: number;
  description?: string | null;
}

export interface LoginRequest {
  username?: string | null;
  password?: string | null;
}

export interface LoginResponse {
  message?: string | null;
  forceUpdatePassword?: boolean;
  /** @uniqueItems true */
  rolePermissions?: number[] | null;
  /** @format date-time */
  expiryTime?: string;
  /** @format int32 */
  userId?: number;
}

export interface MaintenanceStatusDto {
  /** 0 = All, 1 = Tournament, 255 = IntegrationTest */
  id?: GamificationModule;
  name?: string | null;
  isMaintenance?: boolean;
  /** @format date-time */
  createdAt?: string | null;
  createdBy?: string | null;
  /** @format date-time */
  updatedAt?: string | null;
  updatedBy?: string | null;
}

export interface OperatorDetailDto {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  sourceId?: number;
  code?: string | null;
  name?: string | null;
  /** 0 = Disabled, 1 = Enabled */
  status?: BoStatus;
  description?: string | null;
  agents?: Int32ItemDto[] | null;
}

export interface OperatorDto {
  updatedBy?: string | null;
  updatedAt?: string | null;
  /** @format int32 */
  id?: number;
  /** @format int32 */
  sourceId?: number;
  sourceName?: string | null;
  sourceCode?: string | null;
  code?: string | null;
  name?: string | null;
  /** 0 = Disabled, 1 = Enabled */
  status?: BoStatus;
  description?: string | null;
}

export interface OperatorUserDto {
  /** @format int32 */
  operatorId?: number | null;
  /** @format int32 */
  userId?: number;
  agents?: Int32ItemDto[] | null;
  /** @format int32 */
  roleId?: number;
  roleName?: string | null;
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

export interface RoleModel {
  updatedBy?: string | null;
  updatedAt?: string | null;
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** 0 = Disabled, 1 = Enabled */
  status?: BoStatus;
  description?: string | null;
  /** @uniqueItems true */
  permissions?: number[] | null;
}

export interface SourceGameModel {
  updatedBy?: string | null;
  updatedAt?: string | null;
  /** @format int32 */
  sourceId?: number;
  sourceCode?: string | null;
  sourceName?: string | null;
  gameId?: string | null;
  gameName?: string | null;
  /** 0 = Disabled, 1 = Enabled */
  status?: BoStatus;
}

export interface SourceModel {
  updatedBy?: string | null;
  updatedAt?: string | null;
  /** @format int32 */
  id?: number;
  code?: string | null;
  name?: string | null;
  /** 0 = Disabled, 1 = Enabled */
  status?: BoStatus;
}

export interface StringItemDto {
  name: string | null;
  id: string | null;
  code: string | null;
}

export interface SwitchMaintenanceRequest {
  /** 0 = All, 1 = Tournament, 255 = IntegrationTest */
  module: GamificationModule;
  isMaintenance: boolean;
}

export interface TimeZoneModel {
  id?: string | null;
  /** @format int32 */
  timeZoneOffsetHours?: number;
}

export interface TournamentCycleDto {
  /** @format uuid */
  id: string;
  startDate: string | null;
  endDate: string | null;
  payoutDate: string | null;
}

export interface TournamentDetailDto {
  /** @format int32 */
  id?: number;
  sourceCode?: string | null;
  operatorCode?: string | null;
  agentCode?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  code?: string | null;
  name?: string | null;
  gameIds?: string[] | null;
  currency?: string | null;
  /** 0 = Drafted, 1 = Enabled, 2 = Disabled, 3 = Finished */
  status?: TournamentStatus;
  description?: string | null;
  /** 0 = Turnover, 1 = TotalWinningAmount, 2 = BiggestWinningAmount, 3 = TurnoverAndActualWinningAmount */
  mode?: TournamentMode;
  cyclePeriodStartDate?: string | null;
  cyclePeriodEndDate?: string | null;
  /** @format int32 */
  cycleLength?: number;
  /** @format int32 */
  payoutDay?: number;
  payoutTime?: string | null;
  leaderboards?: LeaderboardModel[] | null;
  leaderboardCycles?: LeaderboardCycleModel[] | null;
  exchangeRates?: ExchangeRateModel[] | null;
  updatedBy?: string | null;
  updatedAt?: string | null;
}

export interface TournamentListDto {
  /** @format int32 */
  id?: number;
  sourceCode?: string | null;
  operatorCode?: string | null;
  agentCode?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  code?: string | null;
  name?: string | null;
  gameIds?: string[] | null;
  currency?: string | null;
  /** 0 = Drafted, 1 = Enabled, 2 = Disabled, 3 = Finished */
  status?: TournamentStatus;
  description?: string | null;
  updatedBy?: string | null;
  updatedAt?: string | null;
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
  /** @format int32 */
  id?: number;
  code?: string | null;
  name?: string | null;
  /** @format int32 */
  sourceId?: number;
  agentIds?: number[] | null;
  description?: string | null;
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
  sourceCode?: string | null;
  agentCode?: string | null;
  operatorCode?: string | null;
  /** @format date-time */
  startDate?: string;
  /** @format date-time */
  endDate?: string;
  gameIds?: string[] | null;
  currency?: string | null;
  name?: string | null;
  code?: string | null;
  /** 0 = Turnover, 1 = TotalWinningAmount, 2 = BiggestWinningAmount, 3 = TurnoverAndActualWinningAmount */
  mode?: TournamentMode;
  description?: string | null;
  /** @format date-time */
  cyclePeriodStartDate?: string;
  /** @format date-time */
  cyclePeriodEndDate?: string;
  /** @format int32 */
  cycleLength?: number;
  /** @format int32 */
  payoutDay?: number;
  /** @format date-span */
  payoutTime?: string;
  leaderboards?: UpsertLeaderboardModel[] | null;
  leaderboardCycles?: UpsertLeaderboardCycleModel[] | null;
  exchangeRates?: UpsertExchangeRateModel[] | null;
  /** @format int32 */
  id?: number;
}

export interface UpdateUserRequest {
  /** @format int32 */
  id?: number;
  username?: string | null;
  /** @format int32 */
  roleId?: number;
  description?: string | null;
}

export interface UpsertExchangeRateModel {
  currency?: string | null;
  /** @format double */
  rate?: number;
  /** @format double */
  totalPrizeDisplay?: number;
}

export interface UpsertLeaderboardCycleModel {
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
  /** @format int32 */
  order?: number;
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

export interface UserModel {
  updatedBy?: string | null;
  updatedAt?: string | null;
  /** @format int32 */
  userId?: number;
  username?: string | null;
  /** @format int32 */
  roleId?: number | null;
  roleName?: string | null;
  isActive?: boolean;
  description?: string | null;
  forceUpdatePassword?: boolean;
}

export interface UserRolePermissionModel {
  /** @format int32 */
  userId?: number;
  username?: string | null;
  /** @format int32 */
  roleId?: number | null;
  roleName?: string | null;
  operatorName?: string | null;
  agents?: string[] | null;
  /** @uniqueItems true */
  permissions?: number[] | null;
  isActive?: boolean;
  description?: string | null;
}
