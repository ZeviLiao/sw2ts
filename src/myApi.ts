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

export interface AddArticleResp {
  /**
   * Article id
   * @format int32
   */
  articleId?: number;
}

export interface AddArticleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddArticleResp;
}

export type AddBroadcastTalentResp = object;

export interface AddBroadcastTalentRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddBroadcastTalentResp;
}

export interface AddChildMediaItemReq {
  /** Media item Ids */
  mediaItems: number[];
}

export type AddChildMediaItemResp = object;

export interface AddChildMediaItemRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddChildMediaItemResp;
}

export interface AddChildPlayerRegistrationsReq {
  /** Registrations */
  registrations: ChildPlayerRegistration[];
}

export interface AddChildReq {
  type: EnumChildTournament;
  /**
   * Child tournament name
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Starting At
   * @format int64
   */
  startAt?: number | null;
  /** IsHidden */
  isHidden: boolean;
  /** IsLan */
  isLan: boolean;
  /**
   * ValueId
   * @format int32
   * @min 1
   * @max 2147483647
   */
  venueId?: number | null;
  /**
   * Qualify Participants
   * @format int32
   * @min 0
   * @max 32767
   */
  qualifyParticipants?: number | null;
  /**
   * Ranking Importance
   * @format double
   * @min 0
   * @max 1
   */
  rankingImportance: number;
  prizePoolStatus: EnumPrizePoolStatus;
  prizePoolCurrency?: EnumCurrency;
  /**
   * PrizePool
   * @format double
   * @min 0.01
   * @max 7.922816251426434e+28
   */
  prizePool?: number | null;
  /**
   * Exchange Rate
   * @format double
   * @min 0.001
   * @max 100000
   */
  exchangeRate?: number | null;
  /**
   * PrizePool Usd
   * @format double
   * @min 0.01
   * @max 7.922816251426434e+28
   */
  prizePoolUsd?: number | null;
  /**
   * Grid Id
   * @format int32
   * @min 0
   * @max 2147483647
   */
  gridId?: number | null;
  /**
   * Rounds
   * @format int32
   * @min 1
   * @max 32767
   */
  rounds?: number | null;
  pointsAwarded?: EnumPointsAwarded;
  /**
   * Points for win
   * @format int32
   * @min 0
   * @max 32767
   */
  pointsWin?: number | null;
  /**
   * Points for draw
   * @format int32
   * @min 0
   * @max 32767
   */
  pointsDraw?: number | null;
}

export type AddChildResp = object;

export interface AddChildRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddChildResp;
}

export interface AddChildTeamRegistrationsReq {
  /** Registrations */
  registrations: ChildTeamRegistration[];
}

export type AddFileResp = object;

export interface AddFileRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddFileResp;
}

export interface AddFolderResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface AddFolderRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddFolderResp;
}

export interface AddFrontendSiteSectionsReq {
  /** New site sections */
  newSiteSections?: FrontendSiteSection[] | null;
}

export type AddFrontendSiteSectionsResp = object;

export interface AddFrontendSiteSectionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddFrontendSiteSectionsResp;
}

export interface AddFuncResp {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId?: number;
}

export interface AddFuncRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddFuncResp;
}

export type AddGameAccountResp = object;

export interface AddGameAccountRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddGameAccountResp;
}

export interface AddGameRegionReq {
  /**
   * Region name
   * @minLength 1
   * @maxLength 50
   */
  regionName: string;
  /**
   * Game id
   * @format int32
   * @min 1
   * @max 32767
   */
  gameId: number;
  /** Country Ids */
  countryIds: number[];
}

export interface AddGameRegionResp {
  /**
   * Region id
   * @format int32
   */
  regionId: number;
}

export interface AddGameRegionRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddGameRegionResp;
}

export interface AddGameResp {
  /**
   * Game id
   * @format int32
   */
  gameId?: number;
}

export interface AddGameRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddGameResp;
}

export interface AddGroupReq {
  /**
   * User group name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * Remark
   * @minLength 0
   * @maxLength 500
   */
  remark?: string | null;
  /** Frontend ids */
  frontendIds?: number[] | null;
  /** Backoffice func ids */
  backofficeFuncIds?: number[] | null;
  /** Save as template */
  saveAsTemplate: boolean;
}

export interface AddGroupResp {
  /**
   * Group id
   * @format int32
   */
  groupId?: number | null;
}

export interface AddGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddGroupResp;
}

export type AddHeroResp = object;

export interface AddHeroRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddHeroResp;
}

export type AddMapResp = object;

export interface AddMapRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddMapResp;
}

export interface AddMatchReq {
  /**
   * Round Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  roundId?: number;
}

export type AddMatchResp = object;

export interface AddMatchRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddMatchResp;
}

export interface AddMediaItemsReq {
  /**
   * Broadcast Talent Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  broadcastTalentId: number;
  /** Media item Ids */
  mediaItems: number[];
}

export type AddMediaItemsResp = object;

export interface AddMediaItemsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddMediaItemsResp;
}

export interface AddMediaVodReq {
  /**
   * Vod title
   * @minLength 1
   * @maxLength 60
   */
  title: string;
  /** Site section ids */
  siteSectionIds: number[];
  /**
   * Host id
   * @format int32
   * @min 0
   * @max 32767
   */
  hostId: number;
  /**
   * Host video id
   * @minLength 1
   * @maxLength 40
   */
  hostVideoId: string;
  /**
   * Start time
   * @format int32
   * @min 1
   * @max 2147483647
   */
  startTime: number;
  /**
   * Description
   * @minLength 1
   * @maxLength 255
   */
  description?: string | null;
  /** Tags */
  tags?: string[] | null;
  /** Is in game */
  isInGame: boolean;
  /** Is featured */
  isFeatured: boolean;
  /** Related players */
  playerIds?: number[] | null;
  /** Related teams */
  teamIds?: number[] | null;
}

export interface AddMediaVodResp {
  /**
   * Vod id
   * @format int32
   */
  vodId: number;
}

export interface AddMediaVodRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddMediaVodResp;
}

export interface AddModeReq {
  /**
   * Game Map Name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * Modes Abbreviation
   * @minLength 0
   * @maxLength 5
   */
  abbreviation?: string | null;
  /**
   * Map Game Id
   * @format int32
   * @min 1
   * @max 32767
   */
  gameId: number;
}

export type AddModeResp = object;

export interface AddModeRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddModeResp;
}

export interface AddNotificationTemplateReq {
  /** @format int32 */
  frontEndId: number;
  /** @format int32 */
  messagingNotificationTypeId: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  webTitle: string;
  /**
   * @minLength 0
   * @maxLength 2147483647
   */
  webBody: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  pushTitle?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  pushBody?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  emailSubject?: string | null;
  /**
   * @minLength 0
   * @maxLength 2147483647
   */
  emailTextBody?: string | null;
  /**
   * @minLength 0
   * @maxLength 2147483647
   */
  emailHtmlBody?: string | null;
}

export interface AddNotificationTemplateResp {
  /**
   * Notification Template Id
   * @format int32
   */
  notificationTemplateId?: number;
}

export interface AddNotificationTemplateRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddNotificationTemplateResp;
}

export interface AddOneSignalAppReq {
  /**
   * App Id
   * @minLength 0
   * @maxLength 36
   */
  appId: string;
  /**
   * Api Key
   * @minLength 0
   * @maxLength 48
   */
  apiKey: string;
  /**
   * Safari Web Id
   * @minLength 0
   * @maxLength 64
   */
  safariWebId: string;
  /**
   * Player Match Starting Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  playerMatchStartingNotificationAndroidChannelId?: string | null;
  /**
   * Team Match Starting Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  teamMatchStartingNotificationAndroidChannelId?: string | null;
  /**
   * Player Article Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  playerArticleNotificationAndroidChannelId?: string | null;
  /**
   * Team Article Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  teamArticleNotificationAndroidChannelId?: string | null;
  /**
   * Player Match Resulted Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  playerMatchResultedNotificationAndroidChannelId?: string | null;
  /**
   * Team Match Resulted Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  teamMatchResultedNotificationAndroidChannelId?: string | null;
  /**
   * Team Transfer Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  teamTransferNotificationAndroidChannelId?: string | null;
  /**
   * Player Transfer Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  playerTransferNotificationAndroidChannelId?: string | null;
}

export interface AddOneSignalAppResp {
  /**
   * One Signal App Id
   * @format int32
   */
  oneSignalAppId?: number;
}

export interface AddOneSignalAppRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddOneSignalAppResp;
}

export interface AddPageReq {
  /**
   * Title
   * @minLength 1
   * @maxLength 100
   */
  title: string;
  /**
   * Content
   * @minLength 1
   * @maxLength 2147483647
   */
  content: string;
  /**
   * Frontend id
   * @format int32
   * @min 1
   * @max 32767
   */
  frontendId: number;
  /**
   * Extra css
   * @minLength 0
   * @maxLength 2147483647
   */
  extraCss?: string | null;
}

export interface AddPageResp {
  /**
   * Page id
   * @format int32
   */
  pageId?: number;
}

export interface AddPageRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddPageResp;
}

export interface AddParentBroadcastTalentsReq {
  /**
   * Broadcast talent id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  broadcastTalentId?: number;
}

export interface AddParentResp {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId?: number;
}

export interface AddParentRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddParentResp;
}

export type AddPlayerMediaItemResp = object;

export interface AddPlayerMediaItemRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddPlayerMediaItemResp;
}

export type AddPlayerResp = object;

export interface AddPlayerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddPlayerResp;
}

export interface AddRoleReq {
  /**
   * Group Id
   * @format int32
   * @min 1
   * @max 4294967295
   */
  groupId: number;
  /**
   * Role name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * Remark
   * @minLength 0
   * @maxLength 500
   */
  remark?: string | null;
  /** Func Ids */
  funcIds?: number[] | null;
  /** Frontend Ids */
  frontendIds?: number[] | null;
  /** Save as template */
  saveAsTemplate: boolean;
}

export type AddRoleResp = object;

export interface AddRoleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddRoleResp;
}

export interface AddRoundReq {
  /**
   * Round Name
   * @minLength 0
   * @maxLength 50
   */
  name?: string | null;
  type?: EnumRoundType;
  /**
   * Round Number
   * @format int32
   * @min 1
   * @max 32767
   */
  number?: number;
  /**
   * Games per match
   * @format int32
   * @min 1
   * @max 32767
   */
  gamesPerMatch?: number;
  /** Is hidden */
  isHidden?: boolean;
  /** Mapping points for points awarded (ByResultFull = 3 or ByResult = 4) */
  mappingPoints?: RoundMappingPointsItem[] | null;
  mapSelection?: EnumMapSelection;
  /** Map Id */
  maps?: number[] | null;
}

export type AddRoundResp = object;

export interface AddRoundRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddRoundResp;
}

export type AddServerResp = object;

export interface AddServerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddServerResp;
}

export type AddSideResp = object;

export interface AddSideRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddSideResp;
}

export interface AddSiteSectionsResp {
  /** @format int32 */
  id?: number | null;
}

export interface AddSiteSectionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddSiteSectionsResp;
}

export type AddSponsorResp = object;

export interface AddSponsorRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddSponsorResp;
}

export type AddStreamResp = object;

export interface AddStreamRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddStreamResp;
}

export interface AddTeamPlayerReq {
  /**
   * Player Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  playerId?: number;
  /**
   * Joined At
   * @format int64
   * @min 0
   */
  joinedAt?: number;
  /** IsHidden */
  isHidden?: boolean;
}

export type AddTeamPlayerResp = object;

export interface AddTeamPlayerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddTeamPlayerResp;
}

export type AddTeamResp = object;

export interface AddTeamRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddTeamResp;
}

export type AddUserResp = object;

export interface AddUserRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddUserResp;
}

export type AddVenueResp = object;

export interface AddVenueRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AddVenueResp;
}

export interface ApiLogDetail {
  /** @format int64 */
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
  /** @format int32 */
  responseCode?: number;
  /** @format int32 */
  executeTimeMs?: number;
  /** @format int64 */
  recordedAt?: number;
}

export interface ApiLogListItem {
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** Trace Id */
  traceId?: string | null;
  /** Ip Address */
  ip?: string | null;
  /** Scheme */
  scheme?: string | null;
  /** Host */
  host?: string | null;
  /** Path */
  path?: string | null;
  /** Method */
  method?: string | null;
  /** Prefix */
  prefix?: string | null;
  /** Server Name */
  serverName?: string | null;
  /**
   * Response Status Code
   * @format int32
   */
  responseCode?: number;
  /**
   * Response Length
   * @format int32
   */
  responseLen?: number;
  /**
   * Execute Time MilliSeconds
   * @format int32
   */
  executeTimeMs?: number;
  /**
   * Record at
   * @format int64
   */
  recordedAt?: number;
}

export interface ApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
}

export interface ArticleDetail {
  /**
   * Article Id
   * @format int32
   */
  id: number;
  /**
   * Article subtype id
   * @format int32
   */
  subTypeId: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /** Redirect url */
  redirectUrl?: string | null;
  /**
   * Teaser
   * @minLength 1
   */
  teaser: string;
  /**
   * Content
   * @minLength 1
   */
  content: string;
  /**
   * Frontend id
   * @format int32
   */
  frontendId: number;
  /**
   * Local id
   * @format int32
   */
  localeId: number;
  /** Site sections */
  siteSections?: SiteSection[] | null;
  /** Headline image url */
  headlineImagePath?: string | null;
  /** Headline image text */
  headlineImageText?: string | null;
  /** Square image url */
  squareHeadlineImageUrl?: string | null;
  /** Is published */
  isPublished: boolean;
  /**
   * Published At
   * @format int64
   */
  publishedAt?: number | null;
  /** Is sticky */
  isSticky: boolean;
  /** Is featured */
  isFeatured: boolean;
  /**
   * Time spent
   * @format int32
   */
  timeSpent: number;
  /** Proofread state */
  isProofread: boolean;
  /**
   * Time spent for proofreading article
   * @format int32
   */
  timeSpentProofreading: number;
  /**
   * Proofread datetime
   * @format int64
   */
  proofreadAt?: number | null;
}

export interface ArticleListItem {
  /**
   * Article id
   * @format int32
   */
  id: number;
  /**
   * Frontend Name
   * @minLength 1
   */
  feName: string;
  /**
   * Article title
   * @minLength 1
   */
  title: string;
  /** Article url */
  url?: string | null;
  /** Published state */
  isPublished: boolean;
  /** Proofread state */
  isProofread: boolean;
  /**
   * Author
   * @minLength 1
   */
  author: string;
  /**
   * Created At
   * @format int64
   */
  createdAt: number;
  /** Updater */
  updater?: string | null;
  /**
   * Update At
   * @format int64
   */
  updateAt?: number;
  type: EnumArticleType;
  /**
   * Article Type Name
   * @minLength 1
   */
  typeName: string;
  /**
   * View counts
   * @format int32
   */
  views: number;
}

export interface AssignGroupReq {
  /**
   * Group id
   * @format int32
   * @min 1
   * @max 4294967295
   */
  groupId: number;
  /** Add user ids */
  userIds: number[];
}

export interface AssignGroupResp {
  /** Add users */
  addUsers?: Int32Item[] | null;
}

export interface AssignGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AssignGroupResp;
}

export interface AssignRoleReq {
  /**
   * Role id
   * @format int32
   * @min 1
   * @max 65535
   */
  roleId: number;
  /** Add user ids */
  userIds: number[];
}

export interface AssignRoleResp {
  /** Assign users */
  addUsers?: Int32Item[] | null;
}

export interface AssignRoleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: AssignRoleResp;
}

export interface BroadcastTalentCountry {
  /** @format int32 */
  id?: number;
  name?: string | null;
  code?: string | null;
  flagImageUrl?: string | null;
}

export interface BroadcastTalentGame {
  /** @format int32 */
  id?: number | null;
  name?: string | null;
  urlSafeName?: string | null;
  iconUrl?: string | null;
}

export interface BroadcastTalentLanguage {
  /** @format int32 */
  id?: number;
  name?: string | null;
  code?: string | null;
}

export interface BroadcastTalentPlayer {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface BroadcastTalentStream {
  /** @format int32 */
  id?: number;
  title?: string | null;
}

export interface ByteItem {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface ChildEarningListItem {
  /**
   * Child tournament id
   * @format int32
   */
  childId?: number;
  /** Child tournament name */
  childName?: string | null;
  prizePoolStatus?: EnumPrizePoolStatus;
  prizePoolCurrency?: EnumCurrency;
  /** Prize pool currency name */
  prizePoolCurrencyName?: string | null;
  /**
   * Prize pool
   * @format double
   */
  prizePool?: number | null;
  /**
   * Prize pool usd
   * @format double
   */
  prizePoolUsd?: number | null;
}

export interface ChildPlayerRegistration {
  /**
   * Player id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  playerId: number;
  /** Is reserved */
  isReserved: boolean;
}

export interface ChildRegistrationTeamListItem {
  /**
   * Register id
   * @format int32
   */
  registerId?: number;
  /** Team name */
  teamName?: string | null;
  /** Team tag */
  teamTag?: string | null;
  /** Player names */
  playerNames?: string[] | null;
  /** Has opp */
  hasOpp?: boolean;
  /** Is reserved */
  isReserved?: boolean;
  /**
   * Registered at
   * @format int64
   */
  registeredAt?: number;
  /** Can register */
  canUnregister?: boolean;
}

export interface ChildRegistrationTeamListItemGetChildRegistrationsResp {
  /**
   * Parent id
   * @format int32
   */
  parentId?: number;
  /**
   * Child id
   * @format int32
   */
  childId?: number;
  /** Parent name */
  parentName?: string | null;
  /** Stage name */
  stageName?: string | null;
  /** Child name */
  childName?: string | null;
  /** @format int32 */
  gameId?: number;
  /** Registrations */
  registrations?: ChildRegistrationTeamListItem[] | null;
}

export interface ChildRegistrationTeamListItemGetChildRegistrationsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ChildRegistrationTeamListItemGetChildRegistrationsResp;
}

export interface ChildTeamRegistration {
  /**
   * Team id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  teamId: number;
  /** Is reserved */
  isReserved: boolean;
  /** Player ids */
  playerIds?: number[] | null;
}

export interface CountryOption {
  /**
   * Country id
   * @format int32
   */
  id?: number;
  /** Country name */
  name?: string | null;
  /** Country code */
  code?: string | null;
  /** Flag image url */
  flagImageUrl?: string | null;
}

export interface CrewFile {
  /**
   * File Id
   * @format int32
   */
  id?: number;
  name?: string | null;
  url?: string | null;
  /** @format int64 */
  uploadedAt?: number;
  /** @format int32 */
  size?: number;
  mineType?: string | null;
  /** @format int32 */
  folderId?: number;
  /** @format int32 */
  userId?: number;
  userName?: string | null;
  url_Safe_UserName?: string | null;
  path?: string | null;
}

export interface DelArticleResp {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId?: number;
}

export interface DelArticleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelArticleResp;
}

export type DelBroadcastTalentResp = object;

export interface DelBroadcastTalentRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelBroadcastTalentResp;
}

export type DelChildMediaItemResp = object;

export interface DelChildMediaItemRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelChildMediaItemResp;
}

export interface DelChildReq {
  /** Is force to delete */
  isForce?: boolean | null;
}

export type DelChildResp = object;

export interface DelChildRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelChildResp;
}

export type DelFileResp = object;

export interface DelFileRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelFileResp;
}

export type DelFolderResp = object;

export interface DelFolderRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelFolderResp;
}

export interface DelFrontendSiteSectionReq {
  /**
   * Frontend id
   * @format int32
   * @min 1
   * @max 32767
   */
  frontendId: number;
  /**
   * Site section id
   * @format int32
   * @min 1
   * @max 32767
   */
  siteSectionId: number;
}

export interface DelFrontendSiteSectionResp {
  /**
   * Frontend id
   * @format int32
   */
  frontendId?: number;
  /**
   * Site section id
   * @format int32
   */
  siteSectionId?: number;
}

export interface DelFrontendSiteSectionRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelFrontendSiteSectionResp;
}

export interface DelFuncResp {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId?: number;
}

export interface DelFuncRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelFuncResp;
}

export type DelGameAccountResp = object;

export interface DelGameAccountRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelGameAccountResp;
}

export interface DelGameRegionResp {
  /**
   * Region id
   * @format int32
   */
  regionId: number;
}

export interface DelGameRegionRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelGameRegionResp;
}

export interface DelGameResp {
  /**
   * Game id
   * @format int32
   */
  gameId?: number;
}

export interface DelGameRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelGameResp;
}

export interface DelGroupResp {
  /**
   * Group id
   * @format int32
   */
  groupId?: number | null;
}

export interface DelGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelGroupResp;
}

export type DelHeroResp = object;

export interface DelHeroRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelHeroResp;
}

export type DelMapResp = object;

export interface DelMapRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelMapResp;
}

export type DelMatchResp = object;

export interface DelMatchRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelMatchResp;
}

export type DelMediaItemResp = object;

export interface DelMediaItemRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelMediaItemResp;
}

export interface DelMediaVodResp {
  /**
   * Vod id
   * @format int32
   */
  vodId: number;
}

export interface DelMediaVodRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelMediaVodResp;
}

export type DelModeResp = object;

export interface DelModeRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelModeResp;
}

export interface DelNotificationTemplateResp {
  /**
   * Notification Template Id
   * @format int32
   */
  notificationTemplateId?: number;
}

export interface DelNotificationTemplateRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelNotificationTemplateResp;
}

export interface DelOneSignalAppResp {
  /**
   * One Signal App Id
   * @format int32
   */
  oneSignalAppId?: number;
}

export interface DelOneSignalAppRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelOneSignalAppResp;
}

export interface DelPageReq {
  pageIds: number[];
}

export interface DelPageResp {
  /** Page id */
  pageId?: number[] | null;
}

export interface DelPageRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelPageResp;
}

export type DelPlayerMediaItemResp = object;

export interface DelPlayerMediaItemRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelPlayerMediaItemResp;
}

export type DelPlayerResp = object;

export interface DelPlayerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelPlayerResp;
}

export type DelReplaceOpponentsResp = object;

export interface DelReplaceOpponentsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelReplaceOpponentsResp;
}

export interface DelRoleResp {
  /**
   * Role id
   * @format int32
   */
  roleId?: number | null;
}

export interface DelRoleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelRoleResp;
}

export type DelRoundResp = object;

export interface DelRoundRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelRoundResp;
}

export type DelServerResp = object;

export interface DelServerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelServerResp;
}

export type DelSideResp = object;

export interface DelSideRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelSideResp;
}

export type DelSiteSectionsResp = object;

export interface DelSiteSectionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelSiteSectionsResp;
}

export type DelSponsorResp = object;

export interface DelSponsorRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelSponsorResp;
}

export type DelStreamResp = object;

export interface DelStreamRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelStreamResp;
}

export type DelTeamPlayerResp = object;

export interface DelTeamPlayerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelTeamPlayerResp;
}

export type DelTeamResp = object;

export interface DelTeamRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelTeamResp;
}

export type DelUserResp = object;

export interface DelUserRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelUserResp;
}

export type DelVenueResp = object;

export interface DelVenueRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DelVenueResp;
}

export interface DeleteParentReq {
  /** Is force to delete */
  isForce?: boolean | null;
}

export interface DeleteParentResp {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId?: number;
}

export interface DeleteParentRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: DeleteParentResp;
}

export interface EarningListItem {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId?: number;
  /** Parent tournament name */
  name?: string | null;
  /** Parent tournament url */
  url?: string | null;
  /** Frontend name */
  frontendName?: string | null;
  /** Frontend short name */
  feName?: string | null;
  /** Game name */
  gameName?: string | null;
  /** Game icon url */
  gameIconUrl?: string | null;
  prizePoolCurrency?: EnumCurrency;
  /** Prize pool currency name */
  prizePoolCurrencyName?: string | null;
  /**
   * Prize pool
   * @format double
   */
  prizePool?: number | null;
  /**
   * Prize pool usd
   * @format double
   */
  prizePoolUsd?: number | null;
  prizePoolStatus?: EnumPrizePoolStatus;
  /** Prize pool status name */
  prizePoolStatusName?: string | null;
  /**
   * Starting at
   * @format int64
   */
  startingAt?: number;
}

/** @format int32 */
export enum EnumArticleState {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

/** @format int32 */
export enum EnumArticleType {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/** @format int32 */
export enum EnumChildTournament {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/** @format int32 */
export enum EnumCurrency {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
  Value7 = 7,
  Value8 = 8,
  Value9 = 9,
  Value10 = 10,
  Value11 = 11,
  Value12 = 12,
  Value13 = 13,
  Value14 = 14,
  Value15 = 15,
  Value16 = 16,
  Value17 = 17,
  Value18 = 18,
  Value19 = 19,
  Value20 = 20,
  Value21 = 21,
  Value22 = 22,
  Value23 = 23,
  Value24 = 24,
  Value25 = 25,
  Value26 = 26,
  Value27 = 27,
  Value28 = 28,
  Value29 = 29,
}

/** @format int32 */
export enum EnumEarningPrizeStatus {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/** @format int32 */
export enum EnumFieldSort {
  Value0 = 0,
  Value1 = 1,
}

/** @format int32 */
export enum EnumFuncType {
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */
export enum EnumGender {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

/** @format int32 */
export enum EnumMapSelection {
  Value0 = 0,
  Value1 = 1,
}

/** @format int32 */
export enum EnumParentTournamentState {
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

/** @format int32 */
export enum EnumParentTournamentType {
  Value1 = 1,
}

/** @format int32 */
export enum EnumPlatform {
  Value1 = 1,
  Value10 = 10,
  Value11 = 11,
  Value99 = 99,
}

/** @format int32 */
export enum EnumPointsAwarded {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

/** @format int32 */
export enum EnumPrizePoolStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
}

/** @format int32 */
export enum EnumRet {
  Value0 = 0,
  Value10001 = 10001,
  Value10002 = 10002,
  Value10003 = 10003,
  Value10004 = 10004,
  Value20000 = 20000,
  Value20001 = 20001,
  Value20002 = 20002,
  Value20003 = 20003,
  Value20004 = 20004,
  Value20005 = 20005,
  Value20006 = 20006,
  Value20007 = 20007,
  Value20008 = 20008,
  Value20009 = 20009,
  Value20010 = 20010,
  Value20011 = 20011,
  Value20012 = 20012,
  Value20013 = 20013,
  Value20014 = 20014,
  Value20015 = 20015,
  Value20016 = 20016,
  Value20017 = 20017,
  Value20018 = 20018,
  Value20019 = 20019,
  Value20020 = 20020,
  Value20021 = 20021,
  Value20022 = 20022,
  Value20023 = 20023,
  Value20024 = 20024,
  Value20025 = 20025,
  Value20026 = 20026,
  Value20027 = 20027,
  Value20028 = 20028,
  Value20029 = 20029,
  Value20030 = 20030,
  Value20031 = 20031,
  Value20032 = 20032,
  Value20033 = 20033,
  Value20034 = 20034,
  Value20035 = 20035,
  Value29999 = 29999,
  Value30000 = 30000,
  Value30001 = 30001,
  Value30002 = 30002,
  Value30003 = 30003,
  Value30004 = 30004,
  Value30005 = 30005,
  Value39999 = 39999,
  Value40000 = 40000,
  Value40001 = 40001,
  Value40999 = 40999,
  Value50000 = 50000,
  Value50001 = 50001,
  Value50002 = 50002,
  Value50003 = 50003,
  Value50004 = 50004,
  Value50005 = 50005,
  Value59999 = 59999,
  Value60000 = 60000,
  Value60001 = 60001,
  Value69999 = 69999,
}

/** @format int32 */
export enum EnumRoundType {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
}

/** @format int32 */
export enum EnumState {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
}

/** @format int32 */
export enum EnumTournamentStatus {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
}

export interface FolderDetail {
  /**
   * Folder id
   * @format int32
   */
  id?: number;
  /** Folder name */
  name?: string | null;
  /** Folder path */
  path?: string | null;
}

export interface FrontendSiteSection {
  /**
   * Frontend id
   * @format int32
   * @min 1
   * @max 32767
   */
  frontendId?: number;
  /**
   * Site section id
   * @format int32
   * @min 1
   * @max 32767
   */
  siteSectionId?: number;
  state?: EnumState;
  /**
   * Position
   * @format int32
   * @min 1
   * @max 32767
   */
  position?: number;
}

export interface FrontendSiteSectionListItem {
  /**
   * Frontend id
   * @format int32
   */
  frontendId?: number;
  /**
   * Site section id
   * @format int32
   */
  siteSectionId?: number;
  /** Site section name */
  name?: string | null;
  /** Game name */
  gameName?: string | null;
}

export interface FuncItem {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId?: number;
  /**
   * Parent id
   * @format int32
   */
  parentId?: number;
  /** Func name */
  name?: string | null;
  /** Func code */
  code?: string | null;
  type?: EnumFuncType;
  /** Func type name */
  typeName?: string | null;
  /**
   * Func position
   * @format int32
   */
  position?: number;
  state?: EnumState;
  /** State name */
  stateName?: string | null;
  /** Func url */
  url?: string | null;
  /** Func icon */
  icon?: string | null;
  /** Sub funcs */
  subFuncs?: FuncItem[] | null;
}

export interface FuzzyFolderDetail {
  /** @format int32 */
  id?: number;
  path?: string | null;
}

export interface GameListItem {
  /**
   * Game id
   * @format int32
   */
  id?: number;
  /** Game name */
  name?: string | null;
  /** Game url safe name */
  urlSafeName?: string | null;
  /** Has player rankings */
  hasPlayerRankings?: boolean;
  /** Has team rankings */
  hasTeamRankings?: boolean;
  /** Has streams */
  hasStreams?: boolean;
  /**
   * Grid id
   * @format int32
   */
  gridId?: number | null;
  /** Is legacy */
  isLegacy?: boolean;
  /** Icon image url */
  iconImageUrl?: string | null;
  /** Translation */
  translations?: Translation[] | null;
}

export interface GameRegionListItem {
  /**
   * Region id
   * @format int32
   */
  regionId: number;
  /**
   * Region name
   * @minLength 1
   */
  regionName: string;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /** Translations */
  translations: Translation[];
}

export interface GenderOption {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface GetApiLogResp {
  log?: ApiLogDetail;
}

export interface GetApiLogRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetApiLogResp;
}

export interface GetApiLogsResp {
  /** Api Logs */
  logs?: ApiLogListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetApiLogsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetApiLogsResp;
}

export interface GetArticleResp {
  articleDetail?: ArticleDetail;
  players?: Int32Item[] | null;
  teams?: Int32Item[] | null;
  tournaments?: Int32Item[] | null;
  quickPoll?: RelatedQuickPoll;
  siteSections?: Int16Item[] | null;
}

export interface GetArticleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetArticleResp;
}

export interface GetArticleTypesResp {
  types?: Int16ItemWithSubItem[] | null;
}

export interface GetArticleTypesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetArticleTypesResp;
}

export interface GetArticlesResp {
  /** Articles */
  articles?: ArticleListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetArticlesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetArticlesResp;
}

export interface GetBroadcastTalentResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /** @format int32 */
  gender?: number;
  isActive?: boolean | null;
  about?: string | null;
  /** @format date */
  dateOfBirth?: string | null;
  headerImagePath?: string | null;
  imagePath?: string | null;
  socialFacebook?: string | null;
  socialTwitter?: string | null;
  socialYoutube?: string | null;
  website?: string | null;
  roles?: Int16Item[] | null;
  primaryGame?: BroadcastTalentGame;
  country?: BroadcastTalentCountry;
  language?: BroadcastTalentLanguage;
  player?: BroadcastTalentPlayer;
  personalStream?: BroadcastTalentStream;
}

export interface GetBroadcastTalentRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetBroadcastTalentResp;
}

export interface GetBroadcastTalentRoleOptionsResp {
  roles?: Int16Item[] | null;
}

export interface GetBroadcastTalentRoleOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetBroadcastTalentRoleOptionsResp;
}

export interface GetBroadcastTalents {
  /** @format int32 */
  id?: number;
  name?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  urlSafeName?: string | null;
  /** @format int32 */
  gender?: number;
  isActive?: boolean;
  url?: string | null;
  roles?: string[] | null;
  primaryGame?: BroadcastTalentGame;
  country?: BroadcastTalentCountry;
  language?: BroadcastTalentLanguage;
}

export interface GetBroadcastTalentsResp {
  broadcastTalents?: GetBroadcastTalents[] | null;
  paging?: PagingRespBase;
}

export interface GetBroadcastTalentsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetBroadcastTalentsResp;
}

export interface GetChildDetailResp {
  /** @format int32 */
  childId?: number;
  childName?: string | null;
  childUrlSafeName?: string | null;
  childType?: EnumChildTournament;
  /** @format int32 */
  gameId?: number;
  gameName?: string | null;
  childStatus?: EnumTournamentStatus;
  /** @format int64 */
  childStartAt?: number | null;
  childIsHidden?: boolean;
  childIsLan?: boolean;
  /** @format int32 */
  childVenueId?: number | null;
  childVenueName?: string | null;
  prizePoolStatus?: EnumPrizePoolStatus;
  /** @format double */
  prizePool?: number | null;
  prizePoolCurrency?: EnumCurrency;
  /** @format double */
  prizePoolUsd?: number | null;
  /** @format int32 */
  teamSize?: number;
  /** @format int32 */
  qualifyParticipants?: number | null;
  /** @format int32 */
  rounds?: number | null;
  pointAwarded?: EnumPointsAwarded;
  /** @format int32 */
  pointsWin?: number | null;
  /** @format int32 */
  pointsDraw?: number | null;
  /** @format int32 */
  childCreatorId?: number;
  childCreatorName?: string | null;
  /** @format int64 */
  childCreatedAt?: number;
  /** @format int64 */
  childUpdatedAt?: number;
  /** @format int32 */
  parentId?: number;
  parentName?: string | null;
  parentUrlSafeName?: string | null;
  parentType?: EnumParentTournamentType;
  parentStatus?: EnumTournamentStatus;
  /** @format int64 */
  parentStartAt?: number | null;
  parentIsHidden?: boolean;
  parentIsLan?: boolean;
  /** @format int32 */
  parentVenueId?: number | null;
  parentVenueName?: string | null;
  description?: string | null;
  isFeatured?: boolean;
  /** @format int32 */
  parentCreatorId?: number;
  parentCreatorName?: string | null;
  /** @format int64 */
  parentCreatedAt?: number;
  /** @format int64 */
  parentUpdatedAt?: number;
}

export interface GetChildDetailRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetChildDetailResp;
}

export interface GetChildEarningPrizePoolResp {
  /**
   * Child id
   * @format int32
   */
  childId?: number;
  /** Parent tournament name */
  parentName?: string | null;
  /** Stage name */
  stageName?: string | null;
  /** Child tournament name */
  childName?: string | null;
  /** Game name */
  gameName?: string | null;
  /**
   * Team size
   * @format int32
   */
  teamSize?: number;
  prizePoolCurrency?: EnumCurrency;
  /** Prize pool currency name */
  prizePoolCurrencyName?: string | null;
  /**
   * Prize pool
   * @format double
   */
  prizePool?: number | null;
  /**
   * Prize pool usd
   * @format double
   */
  prizePoolUsd?: number | null;
  /** Prize placement */
  prizePlacements?: PrizePlacement[] | null;
}

export interface GetChildEarningPrizePoolRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetChildEarningPrizePoolResp;
}

export interface GetChildEarningsResp {
  /** Child earnings */
  stages?: StagingEarningListItem[] | null;
}

export interface GetChildEarningsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetChildEarningsResp;
}

export interface GetChildMediaItem {
  /** @format int32 */
  parentId?: number;
  /** @format int32 */
  childId?: number;
  /** @format int32 */
  mediaItemId?: number;
  title?: string | null;
  type?: string | null;
  urlSafeTitle?: string | null;
  /** @format int32 */
  viewCount?: number;
}

export interface GetChildMediaItemsResp {
  mediaItems?: GetChildMediaItem[] | null;
  paging?: PagingRespBase;
}

export interface GetChildMediaItemsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetChildMediaItemsResp;
}

export interface GetChildTeamRegistrationResp {
  /**
   * Parent id
   * @format int32
   */
  parentId?: number;
  /**
   * Child id
   * @format int32
   */
  childId?: number;
  /**
   * Register id
   * @format int32
   */
  registerId?: number;
  /**
   * Team id
   * @format int32
   */
  teamId?: number;
  /** Team name */
  teamName?: string | null;
  /** Is reserved */
  isReserved?: boolean;
  /** Players */
  players?: Int32CheckItem[] | null;
}

export interface GetChildTeamRegistrationRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetChildTeamRegistrationResp;
}

export interface GetChildTournamentResp {
  /**
   * Child tournament id
   * @format int32
   */
  childTournamentId?: number;
  /**
   * Parent tournament id
   * @format int32
   */
  parentTournamentId?: number;
  type?: EnumChildTournament;
  /**
   * Stage id
   * @format int32
   */
  stageId?: number;
  /** Child tournament name */
  name?: string | null;
  /** Is lan */
  isLan?: boolean;
  /**
   * Venue id
   * @format int32
   */
  venueId?: number | null;
  /** Is hidden */
  isHidden?: boolean;
  prizePoolStatus?: EnumPrizePoolStatus;
  prizePoolCurrency?: EnumCurrency;
  /**
   * Prize pool
   * @format double
   */
  prizePool?: number | null;
  /**
   * prize pool USD
   * @format double
   */
  prizePoolUsd?: number | null;
  /**
   * Qualify participants
   * @format int32
   */
  qualifyParticipants?: number | null;
  status?: EnumTournamentStatus;
  /**
   * Ranking Importance
   * @format double
   */
  rankingImportance?: number;
  /**
   * Grid Id
   * @format int32
   */
  gridId?: number | null;
  /**
   * Start at
   * @format int64
   */
  startingAt?: number | null;
}

export interface GetChildTournamentRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetChildTournamentResp;
}

export interface GetContactTypesResp {
  /** Contact types */
  contactTypes?: ByteItem[] | null;
}

export interface GetContactTypesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetContactTypesResp;
}

export interface GetCountryOptionsResp {
  countries?: CountryOption[] | null;
}

export interface GetCountryOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetCountryOptionsResp;
}

export interface GetCrewFilesResp {
  files?: CrewFile[] | null;
  paging?: PagingRespBase;
}

export interface GetCrewFilesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetCrewFilesResp;
}

export interface GetCrewFoldersResp {
  parent?: ParentFolder[] | null;
  folders?: FolderDetail[] | null;
  paging?: PagingRespBase;
}

export interface GetCrewFoldersRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetCrewFoldersResp;
}

export interface GetCurrentExchangeRateResp {
  /**
   * Exchange rate
   * @format double
   */
  exchangeRate?: number;
  /**
   * Usd amount
   * @format double
   */
  usdAmount?: number;
}

export interface GetEarningsResp {
  /** Earnings */
  earnings: EarningListItem[];
  paging: PagingRespBase;
}

export interface GetEarningsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetEarningsResp;
}

export interface GetFrontendLocaleOptionsResp {
  localeOptions?: Record<string, Int16Item[]>;
}

export interface GetFrontendLocaleOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFrontendLocaleOptionsResp;
}

export interface GetFrontendOptionsResp {
  frontendOptions?: Int16Item[] | null;
}

export interface GetFrontendOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFrontendOptionsResp;
}

export interface GetFrontendSiteSectionsResp {
  /** Frontend site sections */
  frontendSiteSections?: FrontendSiteSectionListItem[] | null;
}

export interface GetFrontendSiteSectionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFrontendSiteSectionsResp;
}

export interface GetFuncOptionsResp {
  /** Func options */
  funcOptions?: UInt16Item[] | null;
}

export interface GetFuncOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuncOptionsResp;
}

export interface GetFuncResp {
  /**
   * Func id
   * @format int32
   */
  funcId?: number;
  /** Func name */
  name?: string | null;
  /** Func code */
  code?: string | null;
  type?: EnumFuncType;
  /** Type name */
  typeName?: string | null;
  /**
   * Func position
   * @format int32
   */
  position?: number;
  state?: EnumState;
  /** State name */
  stateName?: string | null;
  /** Func url */
  url?: string | null;
  /** Func icon */
  icon?: string | null;
  /**
   * Created At
   * @format int64
   */
  createdAt?: number;
  /**
   * Updated At
   * @format int64
   */
  updatedAt?: number;
}

export interface GetFuncRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuncResp;
}

export interface GetFuncTypesResp {
  /** Func types */
  funcTypes?: ByteItem[] | null;
}

export interface GetFuncTypesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuncTypesResp;
}

export interface GetFuncsResp {
  /** Funcs */
  funcs?: FuncItem[] | null;
}

export interface GetFuncsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuncsResp;
}

export interface GetFuzzyBroadcastTalentsResp {
  /** Fuzzy broadcast talents */
  fuzzyBroadcastTalents?: Int32Item[] | null;
}

export interface GetFuzzyBroadcastTalentsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyBroadcastTalentsResp;
}

export interface GetFuzzyFoldersResp {
  folders?: FuzzyFolderDetail[] | null;
}

export interface GetFuzzyFoldersRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyFoldersResp;
}

export interface GetFuzzyGameRaceResp {
  fuzzyGames?: Int32Item[] | null;
}

export interface GetFuzzyGameRaceRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyGameRaceResp;
}

export interface GetFuzzyGamesResp {
  fuzzyGames?: Int32Item[] | null;
}

export interface GetFuzzyGamesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyGamesResp;
}

export interface GetFuzzyMapsResp {
  /** Fuzzy maps */
  fuzzyMaps?: Int16Item[] | null;
}

export interface GetFuzzyMapsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyMapsResp;
}

export interface GetFuzzyMediaStreamsResp {
  fuzzyMediaItems?: Int32Item[] | null;
}

export interface GetFuzzyMediaStreamsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyMediaStreamsResp;
}

export interface GetFuzzyMediaVideosResp {
  fuzzyMediaItems?: Int32Item[] | null;
}

export interface GetFuzzyMediaVideosRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyMediaVideosResp;
}

export interface GetFuzzyPlayersResp {
  /** Fuzzy players */
  fuzzyPlayers?: Int32Item[] | null;
}

export interface GetFuzzyPlayersRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyPlayersResp;
}

export interface GetFuzzySponsorsResp {
  /** Fuzzy sponsors */
  fuzzySponsors?: Int16Item[] | null;
}

export interface GetFuzzySponsorsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzySponsorsResp;
}

export interface GetFuzzyTeamsResp {
  fuzzyTeams?: Int32Item[] | null;
}

export interface GetFuzzyTeamsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyTeamsResp;
}

export interface GetFuzzyTournamentsResp {
  fuzzyTournaments?: Int32Item[] | null;
}

export interface GetFuzzyTournamentsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyTournamentsResp;
}

export interface GetFuzzyUsersByGroupResp {
  /** Fuzzy users */
  users?: GroupUserListItem[] | null;
}

export interface GetFuzzyUsersByGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyUsersByGroupResp;
}

export interface GetFuzzyUsersResp {
  fuzzyUsers?: Int32Item[] | null;
}

export interface GetFuzzyUsersRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyUsersResp;
}

export interface GetFuzzyVenuesResp {
  fuzzyVenues?: Int32Item[] | null;
}

export interface GetFuzzyVenuesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetFuzzyVenuesResp;
}

export interface GetGameAccountDetail {
  /** @format int32 */
  gameAccountId?: number;
  /** @format int32 */
  playerId?: number;
  gameAccountName?: string | null;
  /** @format int32 */
  gameId?: number;
  gameName?: string | null;
  gameUrlSafeName?: string | null;
  /** @format int32 */
  serverId?: number;
  serverName?: string | null;
  isDeleted?: boolean;
}

export interface GetGameAccountResp {
  /** @format int32 */
  gameAccountId?: number;
  /** @format int32 */
  playerId?: number;
  gameAccountName?: string | null;
  /** @format int32 */
  gameId?: number;
  /** @format int32 */
  serverId?: number | null;
}

export interface GetGameAccountRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGameAccountResp;
}

export interface GetGameAccountsResp {
  gameAccounts?: GetGameAccountDetail[] | null;
  paging?: PagingRespBase;
}

export interface GetGameAccountsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGameAccountsResp;
}

export interface GetGameOptionsResp {
  /** Games */
  games?: Int16Item[] | null;
}

export interface GetGameOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGameOptionsResp;
}

export interface GetGameRegionResp {
  /**
   * Region id
   * @format int32
   */
  regionId: number;
  /**
   * Region name
   * @minLength 1
   */
  regionName: string;
  /**
   * GameId
   * @format int32
   */
  gameId?: number;
  /** Countries */
  countries: Int16Item[];
}

export interface GetGameRegionRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGameRegionResp;
}

export interface GetGameRegionTranslationResp {
  /**
   * Region id
   * @format int32
   */
  regionId: number;
  /**
   * Region name
   * @minLength 1
   */
  regionName: string;
  /** Translations */
  translations: Translation[];
}

export interface GetGameRegionTranslationRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGameRegionTranslationResp;
}

export interface GetGameRegionsResp {
  /** Game regions */
  gameRegions?: GameRegionListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetGameRegionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGameRegionsResp;
}

export interface GetGameResp {
  /**
   * Game id
   * @format int32
   */
  id?: number;
  /** Game name */
  name?: string | null;
  /** Has player rankings */
  hasPlayerRankings?: boolean;
  /** Has team rankings */
  hasTeamRankings?: boolean;
  /** Has streams */
  hasStreams?: boolean;
  /**
   * Grid id
   * @format int32
   */
  gridId?: number | null;
  /**
   * Steam app id
   * @format int32
   */
  steamAppId?: number | null;
  /**
   * Twitch game id
   * @format int32
   */
  twitchGameId?: number | null;
  /** Game icon image url */
  iconImageUrl?: string | null;
  /** Is legacy */
  isLegacy?: boolean;
  /**
   * Replay count
   * @format int32
   */
  replayCount?: number;
  /**
   * Recommended replay count
   * @format int32
   */
  recommendedReplayCount?: number;
}

export interface GetGameRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGameResp;
}

export interface GetGamesResp {
  /** Games */
  games?: GameListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetGamesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGamesResp;
}

export interface GetGenderOptionsResp {
  genders?: GenderOption[] | null;
}

export interface GetGenderOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGenderOptionsResp;
}

export interface GetGgCodeInfoResp {
  type?: string | null;
  version?: string | null;
  providerName?: string | null;
  providerUrl?: string | null;
  /** @format int32 */
  width?: number;
  /** @format int32 */
  height?: number;
  html?: string | null;
}

export interface GetGgCodeInfoRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGgCodeInfoResp;
}

export interface GetGridMatchesResp {
  /** @format int32 */
  id?: number;
  tournamentName?: string | null;
  opponent1Name?: string | null;
  opponent2Name?: string | null;
  gameName?: string | null;
  /** @format int32 */
  gamesPerMatchSet?: number;
  /** @format int64 */
  dateTime?: number;
}

export interface GetGridMatchesRespListApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGridMatchesResp[] | null;
}

export interface GetGridTournamentsResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface GetGridTournamentsRespListApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGridTournamentsResp[] | null;
}

export interface GetGroupBlankPermissionsResp {
  /** Frontend permissions */
  frontendPermissions?: Int16Item[] | null;
  /** Backoffice permissions */
  backofficePermissions?: SimpleBackOfficePermissionItem[] | null;
}

export interface GetGroupBlankPermissionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGroupBlankPermissionsResp;
}

export interface GetGroupOptionsResp {
  /** Groups */
  groups?: UInt32Item[] | null;
}

export interface GetGroupOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGroupOptionsResp;
}

export interface GetGroupResp {
  /**
   * Group id
   * @format int32
   */
  groupId: number;
  /**
   * User group name
   * @minLength 1
   */
  name: string;
  /**
   * Remark
   * @minLength 1
   */
  remark: string;
  /** Frontend permissions */
  frontendPermissions: Int16Item[];
  /** Backoffice permissions */
  backofficePermissions: SimpleBackOfficePermissionItem[];
}

export interface GetGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGroupResp;
}

export interface GetGroupTemplatesResp {
  /** Templates */
  templates?: GroupTemplate[] | null;
}

export interface GetGroupTemplatesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGroupTemplatesResp;
}

export interface GetGroupsResp {
  /** Groups */
  groups?: GroupListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetGroupsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetGroupsResp;
}

export interface GetHero {
  /**
   * Hero Id
   * @format int32
   */
  id?: number;
  /** Hero Name */
  name?: string | null;
  gameName?: string | null;
  translations?: GetHeroesTranslation[] | null;
}

export interface GetHeroLocale {
  /** @format int32 */
  id?: number;
  bcp47Identifier?: string | null;
  displayName?: string | null;
}

export interface GetHeroResp {
  /**
   * Hero Id
   * @format int32
   */
  id?: number;
  /** @format int32 */
  gameId?: number;
  name?: string | null;
  description?: string | null;
  iconFileName?: string | null;
}

export interface GetHeroRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetHeroResp;
}

export interface GetHeroTranslation {
  name?: string | null;
  /** Title */
  title?: string | null;
  /** Tagline */
  tagline?: string | null;
  /** Description */
  description?: string | null;
  status?: string | null;
  locale?: GetHeroLocale;
}

export interface GetHeroTranslationsResp {
  /**
   * Hero Id
   * @format int32
   */
  id?: number;
  /** Hero Name */
  name?: string | null;
  /** Title */
  title?: string | null;
  /** Tagline */
  tagline?: string | null;
  /** Description */
  description?: string | null;
  translations?: GetHeroTranslation[] | null;
}

export interface GetHeroTranslationsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetHeroTranslationsResp;
}

export interface GetHeroesResp {
  heroes?: GetHero[] | null;
  paging?: PagingRespBase;
}

export interface GetHeroesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetHeroesResp;
}

export interface GetHeroesTranslation {
  name?: string | null;
  status?: string | null;
  locale?: GetHeroLocale;
}

export interface GetLanguagesResp {
  /** Language options */
  languageOptions?: LanguageOption[] | null;
}

export interface GetLanguagesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetLanguagesResp;
}

export interface GetLocaleOptionsResp {
  /** Locales */
  locales?: Int16Item[] | null;
}

export interface GetLocaleOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetLocaleOptionsResp;
}

export interface GetMap {
  /**
   * Map Id
   * @format int32
   */
  id?: number;
  name?: string | null;
  gameName?: string | null;
  translations?: GetMapTranslation[] | null;
}

export interface GetMapLocale {
  /** @format int32 */
  id?: number;
  bcp47Identifier?: string | null;
  displayName?: string | null;
}

export interface GetMapResp {
  /**
   * Map Id
   * @format int32
   */
  id?: number;
  /** @format int32 */
  gameId?: number;
  name?: string | null;
  imageFileName?: string | null;
}

export interface GetMapRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetMapResp;
}

export interface GetMapTranslation {
  name?: string | null;
  status?: string | null;
  locale?: GetMapLocale;
}

export interface GetMapTranslationsResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
  translations?: GetMapTranslation[] | null;
}

export interface GetMapTranslationsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetMapTranslationsResp;
}

export interface GetMapsResp {
  maps?: GetMap[] | null;
  paging?: PagingRespBase;
}

export interface GetMapsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetMapsResp;
}

export interface GetMatchesOpponent {
  /**
   * child tournament matches opponents Id
   * @format int32
   */
  id?: number;
  /**
   * Registration Id
   * @format int32
   */
  registrationId?: number | null;
  /**
   * Placement: example: Team1=1, Team2=2
   * @format int32
   */
  placement?: number | null;
  name?: string | null;
}

export interface GetMatchesResp {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  number?: number;
  urlSafeName?: string | null;
  opponents?: GetMatchesOpponent[] | null;
  /** @format int64 */
  startingAt?: number | null;
  streams?: Int32Item[] | null;
  /** @format int32 */
  gamesPerMatch?: number | null;
  /** @format int32 */
  gridId?: number | null;
  /** @format int32 */
  tournamentGridId?: number | null;
}

export interface GetMatchesRespListApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetMatchesResp[] | null;
}

export interface GetMediaItems {
  /** @format int32 */
  broadcastTalentId?: number;
  /** @format int32 */
  mediaItemId?: number;
  title?: string | null;
  type?: string | null;
  urlSafeTitle?: string | null;
  /** @format int32 */
  viewCount?: number;
}

export interface GetMediaItemsResp {
  mediaItems?: GetMediaItems[] | null;
  paging?: PagingRespBase;
}

export interface GetMediaItemsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetMediaItemsResp;
}

export interface GetMediaVodHostOptionsResp {
  /** Hosts */
  hosts?: Int16Item[] | null;
}

export interface GetMediaVodResp {
  /**
   * Vod id
   * @format int32
   */
  vodId: number;
  /**
   * Vod title
   * @minLength 1
   */
  title: string;
  /** Related site sections */
  siteSections: Int16Item[];
  /**
   * Host id
   * @format int32
   */
  hostId: number;
  /**
   * Host name
   * @minLength 1
   */
  hostName: string;
  /**
   * Host video id
   * @minLength 1
   */
  hostVideoId: string;
  /**
   * Start time
   * @format int32
   */
  startTime: number;
  /** Description */
  description?: string | null;
  /** Tags */
  tags?: Int32Item[] | null;
  /** Is in game */
  isInGame: boolean;
  /** Is featured */
  isFeatured: boolean;
  /** Related players */
  players?: Int32Item[] | null;
  /** Related teams */
  teams?: Int32Item[] | null;
}

export interface GetMediaVodRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetMediaVodResp;
}

export interface GetMediaVodsResp {
  /** Vods */
  vods?: MediaVodListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetMediaVodsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetMediaVodsResp;
}

export interface GetMode {
  /**
   * Mode Id
   * @format int32
   */
  id?: number;
  name?: string | null;
  abbreviation?: string | null;
  gameName?: string | null;
  translations?: GetModeTranslation[] | null;
}

export interface GetModeLocale {
  /** @format int32 */
  id?: number;
  bcp47Identifier?: string | null;
  displayName?: string | null;
}

export interface GetModeResp {
  /**
   * Mode Id
   * @format int32
   */
  id?: number;
  /** @format int32 */
  gameId?: number;
  name?: string | null;
  abbreviation?: string | null;
}

export interface GetModeRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetModeResp;
}

export interface GetModeTranslation {
  name?: string | null;
  abbreviation?: string | null;
  status?: string | null;
  locale?: GetModeLocale;
}

export interface GetModeTranslationsResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
  abbreviation?: string | null;
  translations?: GetModeTranslation[] | null;
}

export interface GetModeTranslationsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetModeTranslationsResp;
}

export interface GetModesResp {
  modes?: GetMode[] | null;
  paging?: PagingRespBase;
}

export interface GetModesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetModesResp;
}

export interface GetNotificationTemplateResp {
  detail?: NotificationTemplateDetail;
  arguments?: NotificationTemplateArgument[] | null;
}

export interface GetNotificationTemplateRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetNotificationTemplateResp;
}

export interface GetNotificationTemplatesResp {
  /** Notification Templates */
  notificationTemplates?: NotificationTemplateListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetNotificationTemplatesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetNotificationTemplatesResp;
}

export interface GetNotificationTypeOptionsResp {
  /** Notification Type Options */
  notificationTypeOptions?: Int16Item[] | null;
}

export interface GetNotificationTypeOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetNotificationTypeOptionsResp;
}

export interface GetOneSignalAppResp {
  oneSignalAppDetail?: OneSignalAppListItem;
}

export interface GetOneSignalAppRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetOneSignalAppResp;
}

export interface GetOneSignalAppsResp {
  /** Messaging One Signal Apps */
  onesignalApps?: OneSignalAppListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetOneSignalAppsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetOneSignalAppsResp;
}

export interface GetOpponentsItem {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  placement?: number | null;
  /** @format int32 */
  registrationId?: number;
  name?: string | null;
  /** @format int32 */
  pointAdjustment?: number;
  /**
   * Game/Match count
   * @format int32
   */
  count?: number;
  /** @format int32 */
  winCount?: number;
  /** @format int32 */
  drawCount?: number;
  /** @format int32 */
  lossCount?: number;
  /**
   * not include points adjustment
   * @format int32
   */
  points?: number;
  /**
   * PointsAdjustment + Points
   * @format int32
   */
  totalPoints?: number;
}

export interface GetOpponentsResp {
  /** @format int32 */
  parentTournamentId?: number;
  /** @format int32 */
  childTournamentId?: number;
  pointsAwarded?: EnumPointsAwarded;
  opponents?: GetOpponentsItem[] | null;
}

export interface GetOpponentsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetOpponentsResp;
}

export interface GetPageResp {
  /**
   * Page id
   * @format int32
   */
  pageId?: number;
  /**
   * Frontend id
   * @format int32
   */
  frontendId?: number;
  /** Title */
  title?: string | null;
  /** Content */
  content?: string | null;
  /** Extra css */
  extraCss?: string | null;
  /**
   * Time spent
   * @format int32
   */
  timeSpent?: number;
  /** Comments enabled */
  commentsEnabled?: boolean;
}

export interface GetPageRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetPageResp;
}

export interface GetPagesResp {
  /** Pages */
  pages?: PageListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetPagesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetPagesResp;
}

export interface GetParentBroadcastTalentsResp {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId: number;
  /** Parent tournament name */
  parentName?: string | null;
  /** Broadcast talents */
  broadcastTalents: ParentBroadcastTalentListItem[];
  paging: PagingRespBase;
}

export interface GetParentBroadcastTalentsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetParentBroadcastTalentsResp;
}

export interface GetParentDetailResp {
  parentDetail?: ParentTournamentDetail;
  /** Stage details */
  stageDetails?: ParentStageDetail[] | null;
}

export interface GetParentDetailRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetParentDetailResp;
}

export interface GetParentResp {
  parentDetail?: ParentTournamentEditDetail;
  /** Parent tournament sponsors */
  sponsors?: Int16OrderItem[] | null;
  /** Parent tournament maps */
  maps?: Int16Item[] | null;
}

export interface GetParentRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetParentResp;
}

export interface GetParentStage {
  /**
   * Stage Id
   * @format int32
   */
  stageId?: number;
  /**
   * Stage Order
   * @format int32
   */
  order?: number;
  /** Stage Name */
  stageName?: string | null;
  /** Stage UrlSafeName */
  urlSafeName?: string | null;
  /** Child tournaments */
  childTournaments?: GetParentStageChild[] | null;
}

export interface GetParentStageChild {
  /**
   * Child tournament Id
   * @format int32
   */
  childId?: number;
  /** Child tournament Name */
  childName?: string | null;
  /** Child tournament UrlSafeName */
  childUrlSafeName?: string | null;
  childType?: EnumChildTournament;
  /** Child tournament type name */
  childTypeName?: string | null;
  /**
   * Child tournament starting datetime
   * @format int64
   */
  startAt?: number | null;
  /**
   * Child tournament ranking importance
   * @format double
   */
  ranking?: number;
  childStatus?: EnumTournamentStatus;
  /** Child status name */
  childStatusName?: string | null;
  /** Group Embed Url */
  groupEmbedUrl?: string | null;
}

export interface GetParentStagesForEditResp {
  /**
   * Parent id
   * @format int32
   */
  parentId?: number;
  /** Parent name */
  parentName?: string | null;
  /** Stages */
  stages?: Int32OrderItem[] | null;
}

export interface GetParentStagesForEditRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetParentStagesForEditResp;
}

export interface GetParentStagesResp {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId?: number;
  /** Parent tournament name */
  parentName?: string | null;
  /**
   * FrontEndId
   * @format int32
   */
  frontEndId?: number | null;
  /** Frontend short name */
  feName?: string | null;
  /** Parent tournament UrlSafeName */
  parentUrlSafeName?: string | null;
  parentStatus?: EnumTournamentStatus;
  /** Parent tournament name */
  parentStatusName?: string | null;
  /**
   * GameId
   * @format int32
   */
  gameId?: number;
  /** Game Name */
  gameName?: string | null;
  /** Game icon url */
  gameIconUrl?: string | null;
  /** Game UrlSafeName */
  gameUrlSafeName?: string | null;
  /** The GRID field is only displayed to the user when the parent tournament game = CSGO, Valorant or Dota 2 */
  showGridDataProvider?: boolean;
  /** Stages */
  stages?: GetParentStage[] | null;
}

export interface GetParentStagesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetParentStagesResp;
}

export interface GetParentTournamentStateOptionsResp {
  /** Tournament state options */
  states?: Int16Item[] | null;
}

export interface GetParentTournamentStateOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetParentTournamentStateOptionsResp;
}

export interface GetParentsResp {
  /** Parent tournaments */
  parents?: ParentTournamentListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetParentsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetParentsResp;
}

export interface GetPlayerMediaItems {
  /** @format int32 */
  playerId?: number;
  /** @format int32 */
  mediaItemId?: number;
  title?: string | null;
  type?: string | null;
  urlSafeTitle?: string | null;
  /** @format int32 */
  viewCount?: number;
}

export interface GetPlayerMediaItemsResp {
  mediaItems?: GetPlayerMediaItems[] | null;
  paging?: PagingRespBase;
}

export interface GetPlayerMediaItemsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetPlayerMediaItemsResp;
}

export interface GetPlayerResp {
  /** @format int32 */
  playerId?: number;
  /** @format int32 */
  userId?: number | null;
  nickName?: string | null;
  isActive?: boolean;
  firstName?: string | null;
  lastName?: string | null;
  gender?: EnumGender;
  genderName?: string | null;
  /** @format date */
  dateOfBirth?: string | null;
  /** @format int32 */
  countryId?: number | null;
  country?: string | null;
  /** @format int32 */
  initialRating?: number | null;
  /** @format int32 */
  primaryGameId?: number | null;
  primaryGame?: string | null;
  description?: string | null;
  imageFileName?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  youtube?: string | null;
}

export interface GetPlayerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetPlayerResp;
}

export interface GetPlayersDetail {
  /** @format int32 */
  playerId?: number;
  nickName?: string | null;
  name?: string | null;
  urlSafeName?: string | null;
  countryName?: string | null;
  countryCode?: string | null;
  /** @format int32 */
  primaryGameId?: number | null;
  primaryGame?: string | null;
  teamNames?: string[] | null;
  primaryGameIconUrl?: string | null;
  primaryGameUrlSafeName?: string | null;
  isActive?: boolean;
  /** @format int64 */
  createdAt?: number;
  /** Url */
  url?: string | null;
}

export interface GetPlayersResp {
  players?: GetPlayersDetail[] | null;
  paging?: PagingRespBase;
}

export interface GetPlayersRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetPlayersResp;
}

export interface GetPointsAwardedOptionsResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface GetPointsAwardedOptionsRespListApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetPointsAwardedOptionsResp[] | null;
}

export interface GetPrizePoolStatusOptionsResp {
  /** Prize pool status */
  prizePoolStatus: Int16Item[];
}

export interface GetPrizePoolStatusOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetPrizePoolStatusOptionsResp;
}

export interface GetReplaceOpponentsResp {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  registrationId?: number;
  opponentName?: string | null;
  /** @format int32 */
  replaceByRegistrationId?: number;
  replaceOpponentName?: string | null;
}

export interface GetReplaceOpponentsRespListApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetReplaceOpponentsResp[] | null;
}

export interface GetRoleBlankPermissionsResp {
  /** Frontend permissions */
  frontendPermissions?: Int16Item[] | null;
  /** Backoffice permissions */
  backofficePermissions?: SimpleBackOfficePermissionItem[] | null;
}

export interface GetRoleBlankPermissionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetRoleBlankPermissionsResp;
}

export interface GetRoleOptionsByGroupResp {
  /** Roles */
  roles?: UInt32Item[] | null;
}

export interface GetRoleOptionsByGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetRoleOptionsByGroupResp;
}

export interface GetRoleResp {
  /**
   * Group id
   * @format int32
   */
  groupId: number;
  /**
   * Role id
   * @format int32
   */
  roleId: number;
  /**
   * Role name
   * @minLength 1
   */
  name: string;
  /**
   * Group Name
   * @minLength 1
   */
  groupName: string;
  /**
   * Remark
   * @minLength 1
   */
  remark: string;
  /** Role frontend permissions */
  frontendPermissions: Int16Item[];
  /** Group frontend permissions */
  groupFrontendPermissions?: Int16Item[] | null;
  /** Role backoffice permissions */
  backofficePermissions: SimpleBackOfficePermissionItem[];
}

export interface GetRoleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetRoleResp;
}

export interface GetRoleTemplatesByGroupResp {
  /** Templates */
  templates?: RoleTemplate[] | null;
}

export interface GetRoleTemplatesByGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetRoleTemplatesByGroupResp;
}

export interface GetRolesByGroupResp {
  /** Roles */
  roles?: RoleListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetRolesByGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetRolesByGroupResp;
}

export interface GetRoundResp {
  /** @format int32 */
  id?: number;
  pointsAwarded?: EnumPointsAwarded;
  type?: EnumRoundType;
  isHidden?: boolean;
  /** @format int32 */
  number?: number;
  /** @format int32 */
  gamesPerMatch?: number;
  mappingPoints?: RoundMappingPoints;
}

export interface GetRoundRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetRoundResp;
}

export interface GetRoundsItem {
  /**
   * Round Id
   * @format int32
   */
  id?: number;
  /** Round Name */
  name?: string | null;
  type?: EnumRoundType;
  /**
   * Games per match
   * @format int32
   */
  gamesPerMatch?: number;
}

export interface GetRoundsResp {
  /** Rounds */
  rounds?: GetRoundsItem[] | null;
  paging?: PagingRespBase;
}

export interface GetRoundsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetRoundsResp;
}

export interface GetServerOptionsResp {
  /** @format int32 */
  serverId?: number;
  /** @format int32 */
  gameId?: number;
  name?: string | null;
  isFrozen?: boolean;
}

export interface GetServerOptionsRespListApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetServerOptionsResp[] | null;
}

export interface GetServerResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
  isFrozen?: boolean;
  accountNameFormat?: string | null;
  accountNameRegex?: string | null;
  /** @format int32 */
  gameId?: number;
}

export interface GetServerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetServerResp;
}

export interface GetServers {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  gameId?: number;
  isFrozen?: boolean;
  accountNameFormat?: string | null;
  gameName?: string | null;
  gameIconImageUrl?: string | null;
}

export interface GetServersResp {
  servers?: GetServers[] | null;
  paging?: PagingRespBase;
}

export interface GetServersRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetServersResp;
}

export interface GetSide {
  /**
   * Side Id
   * @format int32
   */
  id?: number;
  name?: string | null;
  gameName?: string | null;
  translations?: GetSideTranslation[] | null;
}

export interface GetSideLocale {
  /** @format int32 */
  id?: number;
  bcp47Identifier?: string | null;
  displayName?: string | null;
}

export interface GetSideResp {
  /**
   * Side Id
   * @format int32
   */
  id?: number;
  /** @format int32 */
  gameId?: number;
  name?: string | null;
  iconFileName?: string | null;
}

export interface GetSideRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetSideResp;
}

export interface GetSideTranslation {
  name?: string | null;
  status?: string | null;
  locale?: GetSideLocale;
}

export interface GetSideTranslationsResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
  translations?: GetSideTranslation[] | null;
}

export interface GetSideTranslationsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetSideTranslationsResp;
}

export interface GetSidesResp {
  sides?: GetSide[] | null;
  paging?: PagingRespBase;
}

export interface GetSidesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetSidesResp;
}

export interface GetSiteSectionResp {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  gameId?: number | null;
  name?: string | null;
  hidden?: boolean;
  urlSafeName?: string | null;
  /** @format int32 */
  position?: number;
  headerImageUrl?: string | null;
  backGroundImageUrl?: string | null;
  iconImageUrl?: string | null;
  logoImageUrl?: string | null;
}

export interface GetSiteSectionRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetSiteSectionResp;
}

export interface GetSiteSections {
  /** @format int32 */
  id?: number;
  name?: string | null;
  urlSafeName?: string | null;
  hidden?: boolean;
  gameName?: string | null;
  gameUrlSafeName?: string | null;
}

export interface GetSiteSectionsOptionsResp {
  siteSectionOptions?: Int16Item[] | null;
}

export interface GetSiteSectionsOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetSiteSectionsOptionsResp;
}

export interface GetSiteSectionsResp {
  siteSections?: GetSiteSections[] | null;
  paging?: PagingRespBase;
}

export interface GetSiteSectionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetSiteSectionsResp;
}

export interface GetSponsorResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
  imageFileName?: string | null;
  description?: string | null;
  url?: string | null;
}

export interface GetSponsorRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetSponsorResp;
}

export interface GetSponsors {
  /** @format int32 */
  id?: number;
  name?: string | null;
  imageFileName?: string | null;
  urlSafeName?: string | null;
  url?: string | null;
  /** @format int64 */
  createdAt?: number;
  /** @format int64 */
  updatedAt?: number | null;
  /** @format int32 */
  createdBy?: number;
  userName?: string | null;
}

export interface GetSponsorsResp {
  sponsors?: GetSponsors[] | null;
  paging?: PagingRespBase;
}

export interface GetSponsorsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetSponsorsResp;
}

export interface GetStateOptionsResp {
  /** Func states */
  states?: ByteItem[] | null;
}

export interface GetStateOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetStateOptionsResp;
}

export interface GetStreamResp {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  platform?: number;
  streamId?: string | null;
  streamUrl?: string | null;
  screenCapUrl?: string | null;
  /** @format int32 */
  gameId?: number;
  /** @format int32 */
  languageId?: number;
  isEventStream?: boolean;
  isProPlayer?: boolean;
  isCelebCaster?: boolean;
  /** @format int64 */
  nextBroadcastAt?: number | null;
  title?: string | null;
  isFeatured?: boolean;
  description?: string | null;
  tags?: MediaTag[] | null;
}

export interface GetStreamRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetStreamResp;
}

export interface GetStreams {
  /** @format int32 */
  id?: number;
  title?: string | null;
  /** @format int32 */
  platform?: number;
  streamId?: string | null;
  streamUrl?: string | null;
  /** @format int32 */
  gameId?: number;
  isLive?: boolean;
  /** @format int32 */
  userId?: number;
  /** @format int64 */
  createdAt?: number;
  gameName?: string | null;
  gameUrlSafeName?: string | null;
  userName?: string | null;
}

export interface GetStreamsResp {
  streams?: GetStreams[] | null;
  paging?: PagingRespBase;
}

export interface GetStreamsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetStreamsResp;
}

export interface GetSystemLogResp {
  log?: SystemLogDetail;
}

export interface GetSystemLogRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetSystemLogResp;
}

export interface GetSystemLogsResp {
  /** Api Logs */
  logs?: SystemLogListItem[] | null;
  paging?: PagingRespBase;
}

export interface GetSystemLogsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetSystemLogsResp;
}

export interface GetTeamPlayer {
  /** @format int32 */
  teamPlayerId?: number;
  /** @format int32 */
  playerId?: number;
  /** @format int32 */
  teamId?: number;
  playerName?: string | null;
  playerUrlSafeName?: string | null;
  /** @format int64 */
  joinDate?: number;
  /** @format int64 */
  leaveDate?: number | null;
  isHidden?: boolean;
  position?: string | null;
}

export interface GetTeamPlayerOptionsResp {
  /** Players */
  players?: Int32Item[] | null;
}

export interface GetTeamPlayerOptionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetTeamPlayerOptionsResp;
}

export interface GetTeamPlayerResp {
  /** @format int32 */
  teamPlayerId?: number;
  /** @format int32 */
  playerId?: number;
  /** @format int32 */
  teamId?: number;
  /** @format int64 */
  joinDate?: number;
  /** @format int64 */
  leaveDate?: number | null;
  isHidden?: boolean;
}

export interface GetTeamPlayerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetTeamPlayerResp;
}

export interface GetTeamPlayersResp {
  players?: GetTeamPlayer[] | null;
  paging?: PagingRespBase;
}

export interface GetTeamPlayersRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetTeamPlayersResp;
}

export interface GetTeamResp {
  /** @format int32 */
  teamId?: number;
  teamName?: string | null;
  teamTag?: string | null;
  /** @format int32 */
  ownerId?: number | null;
  ownerName?: string | null;
  /** @format int32 */
  captainId?: number | null;
  captainName?: string | null;
  /** @format int32 */
  manageId?: number | null;
  manageName?: string | null;
  excludedRankings?: boolean;
  imageFileName?: string | null;
  /** @format int32 */
  gameId?: number;
  gameName?: string | null;
  /** @format int32 */
  countryId?: number | null;
  countryName?: string | null;
  description?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  youtube?: string | null;
}

export interface GetTeamRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetTeamResp;
}

export interface GetTeamsDetail {
  /** @format int32 */
  teamId?: number;
  teamName?: string | null;
  teamUrlSafeName?: string | null;
  teamTag?: string | null;
  /** @format int32 */
  countryId?: number | null;
  countryName?: string | null;
  countryCode?: string | null;
  /** @format int32 */
  gameId?: number | null;
  gameName?: string | null;
  gameUrlSafeName?: string | null;
  isRanked?: boolean;
  /** @format int64 */
  updatedAt?: number | null;
  /** @format int32 */
  updatedBy?: number | null;
  username?: string | null;
  url?: string | null;
}

export interface GetTeamsResp {
  teams?: GetTeamsDetail[] | null;
  paging?: PagingRespBase;
}

export interface GetTeamsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetTeamsResp;
}

export interface GetUserForPlayerResp {
  /** @format int32 */
  userId?: number;
  userName?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /** @format int32 */
  countryId?: number | null;
  countryName?: string | null;
  /** @format date */
  dateOfBirth?: string | null;
  gender?: EnumGender;
  /** @format int32 */
  primaryGameId?: number | null;
  primaryGame?: string | null;
}

export interface GetUserForPlayerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetUserForPlayerResp;
}

export interface GetUserPermissionsResp {
  /** Groups */
  groups?: string[] | null;
  /** Roles */
  roles?: string[] | null;
}

export interface GetUserPermissionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetUserPermissionsResp;
}

export interface GetUserResp {
  /** @format int32 */
  userId?: number;
  userName?: string | null;
  password?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  city?: string | null;
  /** @format int32 */
  countryId?: number | null;
  countryName?: string | null;
  /** @format date */
  dateOfBirth?: string | null;
  gender?: EnumGender;
  aboutMe?: string | null;
  avatarImagePath?: string | null;
}

export interface GetUserRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetUserResp;
}

export interface GetUserSessionResp {
  userProfile?: UserProfile;
  menuList?: MenuItem[] | null;
  funcItem?: Record<string, Record<string, number>>;
}

export interface GetUserSessionRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetUserSessionResp;
}

export interface GetUsers {
  /**
   * User id
   * @format int32
   */
  userId?: number;
  /** Username */
  userName?: string | null;
  /** Email */
  email?: string | null;
  /**
   * Updated at
   * @format int64
   */
  updatedAt?: number | null;
  /** Updated username */
  updatedUserName?: string | null;
  /**
   * Registered at
   * @format int64
   */
  registeredAt?: number | null;
  /**
   * Registration completed at
   * @format int64
   */
  registrationCompletedAt?: number | null;
}

export interface GetUsersByGroupResp {
  /** Users */
  users?: GroupUserListItem[] | null;
}

export interface GetUsersByGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetUsersByGroupResp;
}

export interface GetUsersByRoleResp {
  /** Users */
  users?: RoleUserListItem[] | null;
}

export interface GetUsersByRoleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetUsersByRoleResp;
}

export interface GetUsersResp {
  /** Users */
  users?: GetUsers[] | null;
  paging?: PagingRespBase;
}

export interface GetUsersRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetUsersResp;
}

export interface GetVenueResp {
  /** @format int32 */
  id?: number;
  city?: string | null;
  coordinates?: string | null;
  name?: string | null;
  imageFileName?: string | null;
  /** @format int32 */
  countryId?: number;
  address?: string | null;
}

export interface GetVenueRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetVenueResp;
}

export interface GetVenues {
  /** @format int32 */
  id?: number;
  city?: string | null;
  coordinates?: string | null;
  hasCoordinates?: boolean;
  name?: string | null;
  imageFileName?: string | null;
  hasImage?: boolean;
  /** @format int64 */
  createdAt?: number;
  /** @format int64 */
  updatedAt?: number | null;
  countryName?: string | null;
  username?: string | null;
}

export interface GetVenuesResp {
  /** /Venues */
  venues?: GetVenues[] | null;
  paging?: PagingRespBase;
}

export interface GetVenuesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: GetVenuesResp;
}

export interface GroupListItem {
  /**
   * Group id
   * @format int32
   */
  groupId?: number;
  /** User group name */
  name?: string | null;
  /** Remark */
  remark?: string | null;
  /**
   * Updated At
   * @format int64
   */
  updatedAt?: number;
  /** User name */
  updatedUserName?: string | null;
  /** Frontend names */
  frontendNames?: string[] | null;
}

export interface GroupTemplate {
  /**
   * Group template id
   * @format int32
   */
  templateId?: number;
  /** Group template name */
  name?: string | null;
  /** Frontend permissions */
  frontendPermissions?: Int16Item[] | null;
  /** Backoffice permissions */
  backofficePermissions?: SimpleBackOfficePermissionItem[] | null;
}

export interface GroupUserListItem {
  /**
   * User id
   * @format int32
   */
  userId?: number;
  /** User name */
  userName?: string | null;
}

export interface Int16Item {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface Int16ItemListApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: Int16Item[] | null;
}

export interface Int16ItemWithSubItem {
  /** @format int32 */
  id?: number;
  name?: string | null;
  subItems?: Int16Item[] | null;
}

export interface Int16OrderItem {
  /** @format int32 */
  id: number;
  /** @format int32 */
  order: number;
  /**
   * @minLength 1
   * @maxLength 80
   */
  name: string;
}

export interface Int32CheckItem {
  /** @format int32 */
  id?: number;
  name?: string | null;
  checked?: boolean;
}

export interface Int32Item {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface Int32ItemListApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: Int32Item[] | null;
}

export interface Int32OrderItem {
  /** @format int32 */
  id: number;
  /** @format int32 */
  order: number;
  /**
   * @minLength 1
   * @maxLength 80
   */
  name: string;
}

export interface Int32StringDictionaryApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: Record<string, string | null>;
}

export interface LanguageOption {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

/** @format int32 */
export enum LogLevel {
  Value0 = 0,
  Value1 = 1,
  Value2 = 2,
  Value3 = 3,
  Value4 = 4,
  Value5 = 5,
  Value6 = 6,
}

export type LogoutResp = object;

export interface LogoutRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: LogoutResp;
}

export interface MediaTag {
  /**
   * Media Tag Id
   * @format int32
   */
  id?: number;
  /**
   * Media Item Id
   * @format int32
   */
  mediaItemId?: number;
  /** Media Item Name */
  name?: string | null;
}

export interface MediaVodListItem {
  /**
   * Vod id
   * @format int32
   */
  vodId: number;
  /**
   * Vod title
   * @minLength 1
   */
  title: string;
  /**
   * Host name
   * @minLength 1
   */
  hostName: string;
  /**
   * Host video id
   * @minLength 1
   */
  hostVideoId: string;
  /**
   * Creator
   * @minLength 1
   */
  creator: string;
  /**
   * Create at
   * @format int64
   */
  createdAt: number;
  /**
   * Update at
   * @format int64
   */
  updateAt: number;
  /** Is in game */
  isInGame: boolean;
  /**
   * Host view count
   * @format int32
   */
  hostViewCount: number;
}

export interface MenuItem {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId?: number;
  /** Backoffice func name */
  name?: string | null;
  /**
   * Parent func id
   * @format int32
   */
  parentId?: number;
  /**
   * Func level
   * @format int32
   */
  level?: number;
  /**
   * Func position
   * @format int32
   */
  position?: number;
  /** Api url */
  url?: string | null;
  /** Sub Menus */
  subMenus?: MenuItem[] | null;
}

export type ModArticleResp = object;

export interface ModArticleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModArticleResp;
}

export type ModBroadcastTalentResp = object;

export interface ModBroadcastTalentRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModBroadcastTalentResp;
}

export interface ModChildEarningPrizePoolReq {
  prizePoolCurrency: EnumCurrency;
  /**
   * Exchange rate
   * @format double
   */
  exchangeRate: number;
  /**
   * Prize pool
   * @format double
   */
  prizePool: number;
  /**
   * Prize pool usd
   * @format double
   */
  prizePoolUsd: number;
  /** Prize placement */
  prizePlacements?: ModPrizePlacement[] | null;
}

export interface ModChildEarningPrizePoolStatusReq {
  status: EnumEarningPrizeStatus;
}

export interface ModChildEarningPrizePoolStatusResp {
  /**
   * Child id
   * @format int32
   */
  childId?: number;
}

export interface ModChildEarningPrizePoolStatusRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModChildEarningPrizePoolStatusResp;
}

export interface ModChildPlayerRegistrationReq {
  /** Is reserved */
  isReserved: boolean;
}

export interface ModChildReq {
  /**
   * Child tournament name
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Starting At
   * @format int64
   */
  startAt?: number | null;
  /** IsHidden */
  isHidden: boolean;
  /** IsLan */
  isLan: boolean;
  /**
   * ValueId
   * @format int32
   * @min 1
   * @max 2147483647
   */
  venueId?: number | null;
  /**
   * Qualify Participants
   * @format int32
   * @min 0
   * @max 32767
   */
  qualifyParticipants?: number | null;
  /**
   * Ranking Importance
   * @format double
   * @min 0
   * @max 1
   */
  rankingImportance: number;
  prizePoolStatus: EnumPrizePoolStatus;
  prizePoolCurrency?: EnumCurrency;
  /**
   * PrizePool
   * @format double
   * @min 0.01
   * @max 7.922816251426434e+28
   */
  prizePool?: number | null;
  /**
   * Exchange Rate
   * @format double
   * @min 0.001
   * @max 100000
   */
  exchangeRate?: number | null;
  /**
   * PrizePool Usd
   * @format double
   * @min 0.01
   * @max 7.922816251426434e+28
   */
  prizePoolUsd?: number | null;
  /**
   * Grid Id
   * @format int32
   * @min 0
   * @max 2147483647
   */
  gridId?: number | null;
}

export type ModChildResp = object;

export interface ModChildRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModChildResp;
}

export interface ModChildTeamRegistrationReq {
  /** Is reserved */
  isReserved: boolean;
  /** Player ids */
  playerIds?: number[] | null;
}

export interface ModFileResp {
  /** @format int32 */
  fileId?: number;
  /** @format int32 */
  folderId?: number;
  fileName?: string | null;
}

export interface ModFileRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModFileResp;
}

export interface ModFolderResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface ModFolderRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModFolderResp;
}

export interface ModFrontendSiteSectionReq {
  /**
   * Frontend id
   * @format int32
   * @min 1
   * @max 32767
   */
  frontendId: number;
  /**
   * Site section id
   * @format int32
   * @min 1
   * @max 32767
   */
  siteSectionId: number;
}

export interface ModFrontendSiteSectionResp {
  /**
   * Frontend id
   * @format int32
   */
  frontendId?: number;
  /**
   * Site section id
   * @format int32
   */
  siteSectionId?: number;
}

export interface ModFrontendSiteSectionRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModFrontendSiteSectionResp;
}

export interface ModFuncResp {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId?: number;
}

export interface ModFuncRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModFuncResp;
}

export interface ModGameAccountReq {
  /**
   * GameAccount Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  gameAccountId: number;
  /**
   * PlayerId
   * @format int32
   * @min 1
   * @max 2147483647
   */
  playerId: number;
  /**
   * GameAccount Name
   * @minLength 0
   * @maxLength 50
   */
  gameAccountName: string;
}

export type ModGameAccountResp = object;

export interface ModGameAccountRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModGameAccountResp;
}

export interface ModGameRegionReq {
  /**
   * RegionId
   * @format int32
   */
  regionId: number;
  /**
   * Region name
   * @minLength 1
   * @maxLength 50
   */
  regionName: string;
  /**
   * Game id
   * @format int32
   * @min 1
   * @max 32767
   */
  gameId: number;
  /** Country Ids */
  countryIds: number[];
}

export interface ModGameRegionResp {
  /**
   * Region id
   * @format int32
   */
  regionId: number;
}

export interface ModGameRegionRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModGameRegionResp;
}

export interface ModGameRegionTranslationReq {
  /**
   * Region id
   * @format int32
   * @min 1
   * @max 32767
   */
  regionId: number;
  /**
   * Locale Id
   * @format int32
   * @min 1
   * @max 32767
   */
  localeId: number;
  /**
   * Map translations Name
   * @minLength 0
   * @maxLength 50
   */
  regionName: string;
}

export type ModGameRegionTranslationResp = object;

export interface ModGameRegionTranslationRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModGameRegionTranslationResp;
}

export interface ModGameResp {
  /**
   * Game id
   * @format int32
   */
  gameId?: number;
}

export interface ModGameRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModGameResp;
}

export interface ModGameTranslationsReq {
  /**
   * Game id
   * @format int32
   * @min 1
   * @max 32767
   */
  gameId: number;
  /**
   * Locale Id
   * @format int32
   * @min 1
   * @max 32767
   */
  localeId: number;
  /**
   * Side translations Name
   * @minLength 0
   * @maxLength 20
   */
  name: string;
}

export type ModGameTranslationsResp = object;

export interface ModGameTranslationsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModGameTranslationsResp;
}

export interface ModGroupReq {
  /**
   * Group id
   * @format int32
   * @min 1
   * @max 4294967295
   */
  groupId: number;
  /**
   * User group name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * Remark
   * @minLength 0
   * @maxLength 500
   */
  remark?: string | null;
  /** Frontend ids */
  frontendIds?: number[] | null;
  /** Backoffice func ids */
  backofficeFuncIds?: number[] | null;
}

export interface ModGroupResp {
  /**
   * Group id
   * @format int32
   */
  groupId?: number | null;
}

export interface ModGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModGroupResp;
}

export type ModHeroResp = object;

export interface ModHeroRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModHeroResp;
}

export interface ModHeroTranslationsReq {
  /**
   * game hero Id
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * Locale Id
   * @format int32
   * @min 1
   * @max 32767
   */
  localeId: number;
  /**
   * Map translations Name
   * @minLength 0
   * @maxLength 25
   */
  name: string;
  /**
   * Title
   * @minLength 0
   * @maxLength 25
   */
  title: string;
  /**
   * Tagline
   * @minLength 0
   * @maxLength 100
   */
  tagline: string;
  /**
   * Description
   * @minLength 0
   * @maxLength 10000
   */
  description: string;
}

export type ModHeroTranslationsResp = object;

export interface ModHeroTranslationsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModHeroTranslationsResp;
}

export type ModMapResp = object;

export interface ModMapRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModMapResp;
}

export interface ModMapTranslationsReq {
  /**
   * game maps Id
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * Locale Id
   * @format int32
   * @min 1
   * @max 32767
   */
  localeId: number;
  /**
   * Map translations Name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
}

export type ModMapTranslationsResp = object;

export interface ModMapTranslationsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModMapTranslationsResp;
}

export type ModMatchArchivedResp = object;

export interface ModMatchArchivedRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModMatchArchivedResp;
}

export interface ModMatchOpponent {
  /**
   * Matches opponents Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id?: number | null;
  /**
   * Registration/opponent Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  registrationId?: number | null;
  /** Is Seed */
  isSeed?: boolean | null;
  /** Is Qualification */
  isQualification?: boolean | null;
}

export interface ModMatches {
  /**
   * Match Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  matchId?: number;
  /**
   * Match number
   * @format int32
   * @min 1
   * @max 32767
   */
  number?: number;
  /** Opponents */
  opponents?: ModMatchOpponent[] | null;
  /**
   * Starting at
   * @format int64
   */
  startingAt?: number | null;
  /** Stream Id List */
  streams?: number[] | null;
  /**
   * Game per match
   * @format int32
   * @min 0
   * @max 32767
   */
  gamesPerMatch?: number | null;
  /**
   * Grid match id
   * @format int32
   * @min 0
   * @max 2147483647
   */
  gridId?: number | null;
  /**
   * Next match id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  nextMatchId?: number | null;
  /**
   * Next match placement: 1 = Team1, 2 = Team2
   * @format int32
   * @min 1
   * @max 2
   */
  nextMatchPlacement?: number | null;
}

export interface ModMatchesReq {
  /**
   * Round Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  roundId?: number;
  matches?: ModMatches[] | null;
}

export type ModMatchesResp = object;

export interface ModMatchesRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModMatchesResp;
}

export interface ModMediaVodReq {
  /**
   * Vod id
   * @format int32
   */
  vodId: number;
  /**
   * Vod title
   * @minLength 1
   * @maxLength 60
   */
  title: string;
  /** Site section ids */
  siteSectionIds: number[];
  /**
   * Host id
   * @format int32
   * @min 0
   * @max 32767
   */
  hostId: number;
  /**
   * Host video id
   * @minLength 1
   * @maxLength 40
   */
  hostVideoId: string;
  /**
   * Start time
   * @format int32
   * @min 1
   * @max 2147483647
   */
  startTime: number;
  /**
   * Description
   * @minLength 1
   * @maxLength 255
   */
  description?: string | null;
  /** Tags */
  tags?: string[] | null;
  /** Is in game */
  isInGame: boolean;
  /** Is featured */
  isFeatured: boolean;
  /** Related players */
  playerIds?: number[] | null;
  /** Related teams */
  teamIds?: number[] | null;
}

export interface ModMediaVodResp {
  /**
   * Vod id
   * @format int32
   */
  vodId: number;
}

export interface ModMediaVodRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModMediaVodResp;
}

export interface ModModeReq {
  /**
   * Modes Id
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * Modes Name
   * @minLength 0
   * @maxLength 255
   */
  name: string;
  /**
   * Modes Abbreviation
   * @minLength 0
   * @maxLength 5
   */
  abbreviation?: string | null;
  /**
   * Modes Game Id
   * @format int32
   * @min 1
   * @max 32767
   */
  gameId: number;
}

export type ModModeResp = object;

export interface ModModeRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModModeResp;
}

export interface ModModeTranslationsReq {
  /**
   * game modes Id
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * Locale Id
   * @format int32
   * @min 1
   * @max 32767
   */
  localeId: number;
  /**
   * Map translations Name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * Map translations Abbreviation
   * @minLength 0
   * @maxLength 5
   */
  abbreviation?: string | null;
}

export type ModModeTranslationsResp = object;

export interface ModModeTranslationsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModModeTranslationsResp;
}

export interface ModNotificationTemplateReq {
  /**
   * Notification Template Id
   * @format int32
   */
  notificationTemplateId: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  webTitle: string;
  /**
   * @minLength 0
   * @maxLength 2147483647
   */
  webBody: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  pushTitle?: string | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  pushBody?: string | null;
  /**
   * @minLength 0
   * @maxLength 100
   */
  emailSubject?: string | null;
  /**
   * @minLength 0
   * @maxLength 2147483647
   */
  emailTextBody?: string | null;
  /**
   * @minLength 0
   * @maxLength 2147483647
   */
  emailHtmlBody?: string | null;
}

export interface ModNotificationTemplateResp {
  /**
   * Notification Template Id
   * @format int32
   */
  notificationTemplateId?: number;
}

export interface ModNotificationTemplateRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModNotificationTemplateResp;
}

export interface ModOneSignalAppReq {
  /**
   * One Signal App Id
   * @format int32
   */
  oneSignalAppId: number;
  /**
   * App Id
   * @minLength 0
   * @maxLength 36
   */
  appId: string;
  /**
   * Api Key
   * @minLength 0
   * @maxLength 48
   */
  apiKey: string;
  /**
   * Safari Web Id
   * @minLength 0
   * @maxLength 64
   */
  safariWebId: string;
  /**
   * Player Match Starting Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  playerMatchStartingNotificationAndroidChannelId?: string | null;
  /**
   * Team Match Starting Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  teamMatchStartingNotificationAndroidChannelId?: string | null;
  /**
   * Player Article Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  playerArticleNotificationAndroidChannelId?: string | null;
  /**
   * Team Article Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  teamArticleNotificationAndroidChannelId?: string | null;
  /**
   * Player Match Resulted Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  playerMatchResultedNotificationAndroidChannelId?: string | null;
  /**
   * Team Match Resulted Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  teamMatchResultedNotificationAndroidChannelId?: string | null;
  /**
   * Team Transfer Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  teamTransferNotificationAndroidChannelId?: string | null;
  /**
   * Player Transfer Notification Android Channel Id
   * @minLength 0
   * @maxLength 36
   */
  playerTransferNotificationAndroidChannelId?: string | null;
}

export interface ModOneSignalAppResp {
  /**
   * One Signal App Id
   * @format int32
   */
  oneSignalAppId?: number | null;
}

export interface ModOneSignalAppRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModOneSignalAppResp;
}

export interface ModOpponentsItem {
  /** @format int32 */
  id?: number;
  /** @format int32 */
  placement?: number;
  /** @format int32 */
  pointAdjustment?: number;
}

export interface ModOpponentsReq {
  opponents?: ModOpponentsItem[] | null;
}

export type ModOpponentsResp = object;

export interface ModOpponentsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModOpponentsResp;
}

export interface ModPageReq {
  /**
   * Page id
   * @format int32
   */
  pageId: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 100
   */
  title: string;
  /**
   * Content
   * @minLength 1
   * @maxLength 2147483647
   */
  content: string;
  /**
   * Frontend id
   * @format int32
   * @min 1
   * @max 32767
   */
  frontendId: number;
  /**
   * Extra css
   * @minLength 0
   * @maxLength 2147483647
   */
  extraCss?: string | null;
}

export interface ModPageResp {
  /**
   * Page id
   * @format int32
   */
  pageId?: number | null;
}

export interface ModPageRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModPageResp;
}

export interface ModParentResp {
  /** @format int32 */
  parentId?: number;
}

export interface ModParentRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModParentResp;
}

export interface ModParentStageReq {
  /**
   * Stage name
   * @minLength 1
   * @maxLength 100
   */
  name?: string | null;
}

export interface ModParentStagesReq {
  /** Stages */
  stages?: Int32OrderItem[] | null;
}

export type ModPlayerResp = object;

export interface ModPlayerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModPlayerResp;
}

export interface ModPrizePlacement {
  /**
   * Id
   * Unknown: -1
   * Know: > 0
   * @format int32
   */
  id?: number;
  /**
   * Placement from
   * @format int32
   */
  placementFrom?: number;
  /**
   * Placement to
   * @format int32
   */
  placementTo?: number;
  /**
   * Prize amount
   * @format double
   */
  prizeAmount?: number;
  /**
   * Team id
   * @format int32
   */
  teamId?: number;
  /** Player ids */
  playerIds?: number[] | null;
}

export interface ModReplaceOpponents {
  /**
   * Replace opponents Id (When add new data Id is null)
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id?: number | null;
  /**
   * RegistrationId
   * @format int32
   * @min 1
   * @max 2147483647
   */
  registrationId?: number;
  /**
   * Replace by RegistrationId
   * @format int32
   * @min 1
   * @max 2147483647
   */
  replaceByRegistrationId?: number;
}

export interface ModReplaceOpponentsReq {
  /** @format int32 */
  childId?: number;
  replaceOpponents?: ModReplaceOpponents[] | null;
}

export type ModReplaceOpponentsResp = object;

export interface ModReplaceOpponentsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModReplaceOpponentsResp;
}

export interface ModRoleReq {
  /**
   * Role id
   * @format int32
   * @min 1
   * @max 65535
   */
  roleId: number;
  /**
   * Role name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * Remark
   * @minLength 0
   * @maxLength 500
   */
  remark: string;
  /** Backoffice Func Ids */
  backofficeFuncIds?: number[] | null;
  /** Frontend ids */
  frontendIds?: number[] | null;
}

export interface ModRoleResp {
  /**
   * Role id
   * @format int32
   */
  roleId?: number | null;
}

export interface ModRoleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModRoleResp;
}

export interface ModRoundReq {
  /**
   * Round Name
   * @minLength 0
   * @maxLength 50
   */
  name?: string | null;
  /**
   * Round Number
   * @format int32
   * @min 1
   * @max 32767
   */
  number?: number;
  /**
   * Games per match
   * @format int32
   * @min 1
   * @max 32767
   */
  gamesPerMatch?: number;
  /** Is hidden */
  isHidden?: boolean;
  /** Mapping points for points awarded (ByResultFull = 3 or ByResult = 4) */
  mappingPoints?: RoundMappingPointsItem[] | null;
  mapSelection?: EnumMapSelection;
  /** Map Id */
  maps?: number[] | null;
}

export type ModRoundResp = object;

export interface ModRoundRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModRoundResp;
}

export type ModServerResp = object;

export interface ModServerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModServerResp;
}

export type ModSideResp = object;

export interface ModSideRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModSideResp;
}

export interface ModSideTranslationsReq {
  /**
   * game side Id
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * Locale Id
   * @format int32
   * @min 1
   * @max 32767
   */
  localeId: number;
  /**
   * Side translations Name
   * @minLength 0
   * @maxLength 20
   */
  name: string;
}

export type ModSideTranslationsResp = object;

export interface ModSideTranslationsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModSideTranslationsResp;
}

export type ModSiteSectionsResp = object;

export interface ModSiteSectionsRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModSiteSectionsResp;
}

export type ModSponsorResp = object;

export interface ModSponsorRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModSponsorResp;
}

export type ModStreamResp = object;

export interface ModStreamRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModStreamResp;
}

export interface ModStreamTag {
  /**
   * Media Tag Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id?: number | null;
  /**
   * Media Item Name
   * @minLength 0
   * @maxLength 25
   */
  name?: string | null;
}

export interface ModTeamPlayerReq {
  /**
   * TeamPlayerId
   * @format int32
   * @min 1
   * @max 2147483647
   */
  teamPlayerId: number;
  /**
   * TeamId
   * @format int32
   * @min 1
   * @max 2147483647
   */
  teamId: number;
  /**
   * JoinDate
   * @format int64
   * @min 1
   */
  joinDate: number;
  /**
   * LeaveDate
   * @format int64
   * @min 1
   */
  leaveDate?: number | null;
  /** IsHidden */
  isHidden: boolean;
}

export type ModTeamPlayerResp = object;

export interface ModTeamPlayerRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModTeamPlayerResp;
}

export type ModTeamResp = object;

export interface ModTeamRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModTeamResp;
}

export type ModUserResp = object;

export interface ModUserRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModUserResp;
}

export type ModVenueResp = object;

export interface ModVenueRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: ModVenueResp;
}

export interface NotificationTemplateArgument {
  name?: string | null;
  scope?: string | null;
  example?: string | null;
}

export interface NotificationTemplateDetail {
  /** @format int32 */
  id: number;
  /** @format int32 */
  frontEndId: number;
  /** @format int32 */
  messagingNotificationTypeId?: number | null;
  typeIdentifier?: string | null;
  webSupported?: boolean;
  webTitle?: string | null;
  webBody?: string | null;
  pushSupported?: boolean;
  pushTitle?: string | null;
  pushBody?: string | null;
  emailSupported?: boolean;
  emailSubject?: string | null;
  emailTextBody?: string | null;
  emailHtmlBody?: string | null;
  /** @format int64 */
  createdAt: number;
  /** @format int64 */
  updatedAt: number;
}

export interface NotificationTemplateListItem {
  /**
   * Notification Template Id
   * @format int32
   */
  id: number;
  /**
   * Messaging Notification Type Id
   * @format int32
   */
  messagingNotificationTypeId: number;
  /**
   * Frontend Name
   * @minLength 1
   */
  feName: string;
  /**
   * Notification Template Name
   * @minLength 1
   */
  name: string;
  /**
   * Notification Template Description
   * @minLength 1
   */
  desc: string;
  /** Is Web Set */
  webSupported: boolean;
  /** Is Email Set */
  emailSupported: boolean;
  /** Is Push Set */
  pushSupported: boolean;
}

export interface OneSignalAppListItem {
  /** @format int32 */
  id?: number;
  appId?: string | null;
  apiKey?: string | null;
  safariWebId?: string | null;
  playerMatchStartingNotificationAndroidChannelId?: string | null;
  teamMatchStartingNotificationAndroidChannelId?: string | null;
  playerArticleNotificationAndroidChannelId?: string | null;
  teamArticleNotificationAndroidChannelId?: string | null;
  playerMatchResultedNotificationAndroidChannelId?: string | null;
  teamMatchResultedNotificationAndroidChannelId?: string | null;
  teamTransferNotificationAndroidChannelId?: string | null;
  playerTransferNotificationAndroidChannelId?: string | null;
}

export interface Option {
  /**
   * Option id
   * @format int32
   */
  id: number;
  /**
   * Option order
   * @format int32
   */
  order: number;
  /**
   * Option text
   * @minLength 1
   */
  text: string;
}

export interface PageListItem {
  /**
   * Page id
   * @format int32
   */
  pageId?: number;
  /** Frontend name */
  feName?: string | null;
  /** Title */
  title?: string | null;
  /** Url */
  url?: string | null;
  /** Author */
  author?: string | null;
  /**
   * Edited At
   * @format int64
   */
  updatedAt?: number | null;
  /**
   * View count
   * @format int32
   */
  viewCount?: number;
}

export interface PagingRespBase {
  /** @format int32 */
  pageNo: number;
  /** @format int32 */
  pageSize: number;
  /** @format int32 */
  totalPages: number;
  /** @format int32 */
  totalRows: number;
}

export interface ParentBroadcastTalentListItem {
  /**
   * Broadcast talent id
   * @format int32
   */
  broadcastTalentId?: number;
  /** Name (NickName) */
  name?: string | null;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /** Roles */
  roles?: string[] | null;
  /** Country */
  country?: string | null;
  /** Language */
  language?: string | null;
}

export interface ParentChildDetail {
  /**
   * Child id
   * @format int32
   */
  childId?: number | null;
  /**
   * Child name
   * @minLength 1
   */
  childName: string;
  childType: EnumChildTournament;
  /**
   * Child type name
   * @minLength 1
   */
  childTypeName: string;
  /**
   * Child status name
   * @minLength 1
   */
  childStatusName: string;
  /**
   * Starting at
   * @format int64
   */
  startingAt: number;
  /** Is hidden */
  isHidden: boolean;
  /** Is lan */
  isLan: boolean;
  /**
   * Venue id
   * @format int32
   */
  venueId?: number | null;
  /** Venue name */
  venueName?: string | null;
  /**
   * Ranking importance
   * @format double
   */
  rankingImportance: number;
  /**
   * Creator
   * @minLength 1
   */
  creator: string;
  /**
   * Created at
   * @format int64
   */
  createdAt: number;
  /**
   * Updated at
   * @format int64
   */
  updatedAt: number;
}

export interface ParentFolder {
  /**
   * Folder Id
   * @format int32
   */
  id?: number;
  /**
   * ParentId
   * @format int32
   */
  parentId?: number | null;
  /** Folder name */
  name?: string | null;
  /** Folder path */
  path?: string | null;
}

export interface ParentStageDetail {
  /**
   * Stage id
   * @format int32
   */
  stageId: number;
  /**
   * Stage name
   * @minLength 1
   */
  stageName: string;
  /** Child details */
  childDetails: ParentChildDetail[];
}

export interface ParentTournamentDetail {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId: number;
  /**
   * Parent tournament name
   * @minLength 1
   */
  name: string;
  /** Type name */
  typeName?: string | null;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  status?: EnumTournamentStatus;
  /** Status name */
  statusName?: string | null;
  /**
   * Starting at
   * @format int64
   */
  startingAt: number;
  /** Has description */
  hasDescription: boolean;
  /** Is featured */
  isFeatured: boolean;
  /** Is hidden */
  isHidden: boolean;
  /** Is lan */
  isLan: boolean;
  /**
   * Venue id
   * @format int32
   */
  venueId?: number | null;
  /** Venue name */
  venueName?: string | null;
  /** Has prize pool */
  hasPrizePool: boolean;
  /** Has sponsor */
  hasSponsor: boolean;
  /** Has map pool */
  hasMapPool: boolean;
  /**
   * Frontend name
   * @minLength 1
   */
  frontendName: string;
  /** Has image */
  hasImage: boolean;
  /**
   * Creator
   * @minLength 1
   */
  creator: string;
  /**
   * Created at
   * @format int64
   */
  createdAt: number;
  /**
   * Updated at
   * @format int64
   */
  updatedAt: number;
  /**
   * Team size
   * @format int32
   */
  teamSize: number;
  /** Is player based */
  isPlayerBased: boolean;
}

export interface ParentTournamentEditDetail {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId: number;
  /**
   * Type name
   * @minLength 1
   */
  typeName: string;
  /**
   * Frontend id
   * @format int32
   */
  frontendId?: number | null;
  /**
   * Parent tournament name
   * @minLength 1
   */
  name: string;
  /**
   * Parent tournament name
   * @minLength 1
   */
  description: string;
  /**
   * Starting at
   * @format int64
   */
  startingAt: number;
  /** Is hidden */
  isHidden: boolean;
  /** Is lan */
  isLan: boolean;
  /**
   * Venue id
   * @format int32
   */
  venueId?: number | null;
  /** Venue name */
  venueName?: string | null;
  /** Is featured */
  isFeatured: boolean;
  /** Image url */
  imageUrl?: string | null;
}

export interface ParentTournamentListItem {
  /**
   * Tournament id
   * @format int32
   */
  parentId: number;
  /**
   * Frontend Name
   * @minLength 1
   */
  feName: string;
  /**
   * Game icon url
   * @minLength 1
   */
  gameIconUrl: string;
  /**
   * Parent tournament name
   * @minLength 1
   */
  name: string;
  /**
   * Parent tournament url in frontend
   * @minLength 1
   */
  url: string;
  /**
   * Creator
   * @minLength 1
   */
  creator: string;
  /**
   * Starting at
   * @format int64
   */
  startingAt: number;
  status?: EnumTournamentStatus;
  /**
   * Status name
   * @minLength 1
   */
  statusName: string;
  /** Has sponsor */
  hasSponsor: boolean;
  /** Has venue */
  hasVenue: boolean;
}

export interface PrizePlacement {
  /**
   * Id
   * @format int32
   */
  id?: number;
  /**
   * Placement from
   * @format int32
   */
  placementFrom?: number;
  /**
   * Placement to
   * @format int32
   */
  placementTo?: number;
  /**
   * Prize amount
   * @format double
   */
  prizeAmount?: number;
  /**
   * Team id
   * @format int32
   */
  teamId?: number;
  /** Team name */
  teamName?: string | null;
  /** Player items */
  playerItems?: Int32Item[] | null;
}

export interface RelatedQuickPoll {
  /**
   * Poll id
   * @format int32
   */
  pollId: number;
  /**
   * Quick poll question
   * @minLength 1
   */
  question: string;
  /** Quick poll options */
  options?: Option[] | null;
}

export interface RoleListItem {
  /**
   * Role id
   * @format int32
   */
  roleId?: number;
  /** Role name */
  name?: string | null;
  /**
   * Group id
   * @format int32
   */
  groupId?: number;
  /** Group Name */
  groupName?: string | null;
  /** Remark */
  remark?: string | null;
  /**
   * Updated At
   * @format int64
   */
  updatedAt?: number;
  /** User name */
  updatedUserName?: string | null;
  /** Frontend names */
  frontendNames?: string[] | null;
}

export interface RoleTemplate {
  /**
   * Role template id
   * @format int32
   */
  templateId?: number;
  /** Role template name */
  name?: string | null;
  /** Frontend permissions */
  frontendPermissions?: Int16Item[] | null;
  /** Backoffice permissions */
  backofficePermissions?: SimpleBackOfficePermissionItem[] | null;
}

export interface RoleUserListItem {
  /**
   * User id
   * @format int32
   */
  userId?: number;
  /** User name */
  userName?: string | null;
}

export interface RoundMappingPoints {
  mappingPoints?: RoundMappingPointsItem[] | null;
}

export interface RoundMappingPointsItem {
  score1?: RoundPointsItem;
  score2?: RoundPointsItem;
}

export interface RoundPointsItem {
  /** @format int32 */
  score?: number;
  /** @format int32 */
  points?: number;
}

export interface SimpleBackOfficePermissionItem {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId?: number;
  /** Backoffice func name */
  name?: string | null;
  /** Checked */
  checked?: boolean;
  /** Sub */
  subFuncs?: SimpleBackOfficePermissionItem[] | null;
}

export interface SiteSection {
  /**
   * Site section id
   * @format int32
   */
  id?: number;
  /** Site section name */
  name?: string | null;
}

export interface StagingEarningListItem {
  /**
   * Stage id
   * @format int32
   */
  stageId?: number;
  /** Stage name */
  stageName?: string | null;
  /**
   * Stage order
   * @format int32
   */
  order?: number;
  /** Child earnings */
  childEarnings?: ChildEarningListItem[] | null;
}

export type StartTournamentResp = object;

export interface StartTournamentRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: StartTournamentResp;
}

export interface SystemLogDetail {
  /** @format int64 */
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
  /** @format int64 */
  recordedAt?: number;
}

export interface SystemLogListItem {
  /**
   * Id
   * @format int64
   */
  id?: number;
  /** Trace Id */
  traceId?: string | null;
  /** Prefix */
  prefix?: string | null;
  /** Server Name */
  serverName?: string | null;
  level?: LogLevel;
  /** Logger */
  logger?: string | null;
  /** Method */
  method?: string | null;
  /** Message */
  message?: string | null;
  /**
   * Record At
   * @format int64
   */
  recordedAt?: number;
}

export interface Translation {
  name?: string | null;
  status?: string | null;
  locale?: TranslationLocale;
}

export interface TranslationLocale {
  /** @format int32 */
  id?: number;
  bcp47Identifier?: string | null;
  displayName?: string | null;
}

export interface UInt16Item {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface UInt32Item {
  /** @format int32 */
  id?: number;
  name?: string | null;
}

export interface UnAssignGroupReq {
  /**
   * Group id
   * @format int32
   * @min 1
   * @max 4294967295
   */
  groupId: number;
  /** Add user ids */
  userIds: number[];
}

export interface UnAssignGroupResp {
  /** UnAssign user ids */
  userIds?: number[] | null;
}

export interface UnAssignGroupRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: UnAssignGroupResp;
}

export interface UnAssignRoleReq {
  /**
   * Role id
   * @format int32
   * @min 1
   * @max 65535
   */
  roleId: number;
  /** Add user ids */
  userIds: number[];
}

export interface UnAssignRoleResp {
  /** UnAssign user ids */
  userIds?: number[] | null;
}

export interface UnAssignRoleRespApiRespBase {
  ret?: EnumRet;
  msg?: string | null;
  traceId?: string | null;
  data?: UnAssignRoleResp;
}

export interface UserProfile {
  userName?: string | null;
  avatarImage?: string | null;
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
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
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
 * @title BackofficeApi v4
 * @version v4
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Articles
     * @name V4ArticlesTypesList
     * @summary Get all article types and subtypes
     * @request GET:/api/v4/articles/types
     * @secure
     */
    v4ArticlesTypesList: (params: RequestParams = {}) =>
      this.request<any, GetArticleTypesRespApiRespBase>({
        path: `/api/v4/articles/types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name V4ArticlesList
     * @summary Get articles by condition
     * @request GET:/api/v4/articles
     * @secure
     */
    v4ArticlesList: (
      query?: {
        /**
         * Article Id for troubleshooting
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ArticleId?: number;
        /**
         * Frontend id
         * null: All
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId?: number;
        /**
         * Article title
         * @minLength 1
         * @maxLength 100
         */
        Title?: string;
        /** Is Proofread */
        IsProofread?: boolean;
        /**
         * Site Section Id
         * null: All
         * @format int32
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number;
        /**
         * Created From
         * @format int64
         */
        CreatedFrom?: number;
        /**
         * Created To
         * @format int64
         */
        CreatedTo?: number;
        /**
         * Creator user name
         * @minLength 0
         * @maxLength 20
         */
        Author?: string;
        /**
         * Article state
         * Published: 1
         * Unpublished: 2
         * Deleted: 3
         * Featured: 4
         */
        State?: EnumArticleState;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetArticlesRespApiRespBase>({
        path: `/api/v4/articles`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name V4ArticlesCreate
     * @summary Add new article
     * @request POST:/api/v4/articles
     * @secure
     */
    v4ArticlesCreate: (
      data: {
        /**
         * Article SubtypeId
         * @format int32
         * @min 1
         * @max 32767
         */
        SubTypeId: number;
        /**
         * Article frontend id
         * @format int32
         */
        FrontendId: number;
        /**
         * Article locale id
         * @format int32
         */
        LocaleId: number;
        /** Article site sections */
        SiteSectionIds: number[];
        /**
         * Article title
         * @minLength 0
         * @maxLength 100
         */
        Title: string;
        /**
         * Article Teaser
         * @minLength 0
         * @maxLength 160
         */
        Teaser: string;
        /**
         * Article content
         * @minLength 0
         * @maxLength 2147483647
         */
        Content: string;
        /**
         * Headline image file
         * @format binary
         */
        HeadlineImgFile?: File;
        /**
         * Headline image text
         * @minLength 0
         * @maxLength 125
         */
        HeadlineImageText?: string;
        /**
         * Square headline image file
         * @format binary
         */
        SquareHeadlineImgFile?: File;
        /** Is published */
        IsPublished?: boolean;
        /**
         * Published At
         * @format int64
         */
        PublishedAt?: number;
        /** Is featured */
        IsFeatured: boolean;
        /** Is section sticky */
        IsSectionSticky: boolean;
        /**
         * Time spent
         * @format int32
         * @min 1
         * @max 32767
         */
        TimeSpent: number;
        /** Related players */
        PlayerIds?: number[];
        /** Related teams */
        TeamIds?: number[];
        /** Related tournaments */
        TournamentIds?: number[];
        /**
         * Questions
         * @minLength 1
         * @maxLength 255
         */
        "QuickPoll.Question"?: string;
        /** Options */
        "QuickPoll.Options"?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddArticleRespApiRespBase>({
        path: `/api/v4/articles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name V4ArticlesDetail
     * @summary Get article
     * @request GET:/api/v4/articles/{id}
     * @secure
     */
    v4ArticlesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetArticleRespApiRespBase>({
        path: `/api/v4/articles/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name V4ArticlesPartialUpdate
     * @summary Modify article
     * @request PATCH:/api/v4/articles/{id}
     * @secure
     */
    v4ArticlesPartialUpdate: (
      id: number,
      data: {
        /**
         * Article id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id: number;
        /**
         * Article SubtypeId
         * @format int32
         * @min 1
         * @max 32767
         */
        SubTypeId?: number;
        /**
         * Article frontend id
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId?: number;
        /**
         * Article locale id
         * @format int32
         * @min 1
         * @max 32767
         */
        LocaleId?: number;
        /** Article site sections */
        SiteSectionIds?: number[];
        /**
         * Article title
         * @minLength 0
         * @maxLength 100
         */
        Title?: string;
        /**
         * Article teaser
         * @minLength 0
         * @maxLength 160
         */
        Teaser?: string;
        /**
         * Article content
         * @minLength 0
         * @maxLength 2147483647
         */
        Content?: string;
        /**
         * Headline image file
         * @format binary
         */
        HeadlineImgFile?: File;
        /**
         * Headline image text
         * @minLength 0
         * @maxLength 125
         */
        HeadlineImageText?: string;
        /**
         * Square headline image file
         * @format binary
         */
        SquareHeadlineImgFile?: File;
        /** Is published */
        IsPublished?: boolean;
        /**
         * Published At
         * @format int64
         */
        PublishedAt?: number;
        /** Is proofread */
        IsProofread?: boolean;
        /**
         * Time spent for proofreading
         * @format int32
         * @min 1
         * @max 32767
         */
        TimeSpentProofreading?: number;
        /** Is featured */
        IsFeatured?: boolean;
        /** Is section sticky */
        IsSectionSticky?: boolean;
        /**
         * Time spent
         * @format int32
         * @min 1
         * @max 32767
         */
        TimeSpent?: number;
        /** Is Clear All Players */
        IsClearAllPlayers?: boolean;
        /** Related players */
        PlayerIds?: number[];
        /** Is Clear All Teams */
        IsClearAllTeams?: boolean;
        /** Related teams */
        TeamIds?: number[];
        /** Is Clear All Tournaments */
        IsClearAllTournaments?: boolean;
        /** Related tournaments */
        TournamentIds?: number[];
        /**
         * Questions
         * @minLength 1
         * @maxLength 255
         */
        "QuickPoll.Question"?: string;
        /** Options */
        "QuickPoll.Options"?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModArticleRespApiRespBase>({
        path: `/api/v4/articles/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name V4ArticlesDelete
     * @summary Delete article
     * @request DELETE:/api/v4/articles/{id}
     * @secure
     */
    v4ArticlesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelArticleRespApiRespBase>({
        path: `/api/v4/articles/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V4BroadcasttalentsFuzzyList
     * @summary Get fuzzy broadcast talents
     * @request GET:/api/v4/broadcasttalents/fuzzy
     * @secure
     */
    v4BroadcasttalentsFuzzyList: (
      query: {
        /**
         * Prefix
         * @minLength 0
         * @maxLength 30
         */
        FuzzyPrefix: string;
        /**
         * Max count
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyBroadcastTalentsRespApiRespBase>({
        path: `/api/v4/broadcasttalents/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V4BroadcasttalentsList
     * @summary Get broadcast talents by condition
     * @request GET:/api/v4/broadcasttalents
     * @secure
     */
    v4BroadcasttalentsList: (
      query?: {
        /**
         * Name
         * @minLength 0
         * @maxLength 100
         */
        NickName?: string;
        /**
         * FirstName/LastName
         * @minLength 0
         * @maxLength 50
         */
        Name?: string;
        /**
         * Primary game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * LanguageId
         * @format int32
         * @min 1
         * @max 32767
         */
        LanguageId?: number;
        /**
         * CountryId
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetBroadcastTalentsRespApiRespBase>({
        path: `/api/v4/broadcasttalents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V4BroadcasttalentsCreate
     * @summary Add new broadcast talent
     * @request POST:/api/v4/broadcasttalents
     * @secure
     */
    v4BroadcasttalentsCreate: (
      data: {
        /**
         * Name
         * @minLength 0
         * @maxLength 100
         */
        Name: string;
        /**
         * First Name
         * @minLength 0
         * @maxLength 50
         */
        FirstName?: string;
        /**
         * Last Name
         * @minLength 0
         * @maxLength 50
         */
        LastName?: string;
        /**
         * Country Id
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId: number;
        /**
         * Language Id
         * @format int32
         * @min 1
         * @max 32767
         */
        LanguageId: number;
        /** IsActive */
        IsActive: boolean;
        /**
         * About
         * @minLength 0
         * @maxLength 500
         */
        About?: string;
        /**
         * Gender (Male=0/Female=1)
         * @format int32
         * @min 0
         * @max 1
         */
        Gender: number;
        /**
         * DateOfBirth (ex:2022-12-01)
         * @format date
         */
        DateOfBirth?: string;
        /**
         * Primary Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        PrimaryGameId?: number;
        /**
         * Profile Image
         * @format binary
         */
        ProfileImage?: File;
        /**
         * Header Image
         * @format binary
         */
        HeaderImage?: File;
        /**
         * Player Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PlayerId?: number;
        /**
         * Person Stream Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PersonalStreamId?: number;
        /**
         * WebSite
         * @format uri
         * @minLength 0
         * @maxLength 100
         */
        Website?: string;
        /**
         * Facebook
         * @minLength 0
         * @maxLength 100
         */
        Facebook?: string;
        /**
         * Twitter
         * @minLength 0
         * @maxLength 100
         */
        Twitter?: string;
        /**
         * Youtube
         * @minLength 0
         * @maxLength 100
         */
        Youtube?: string;
        /**
         * Role type ids
         * Type (Host=1/Commentator=2/Analyst=3/Observer=4/Interviewer=5/Other=99)
         */
        RoleTypeIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddBroadcastTalentRespApiRespBase>({
        path: `/api/v4/broadcasttalents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V4BroadcasttalentsDetail
     * @summary Get broadcast talent
     * @request GET:/api/v4/broadcasttalents/{id}
     * @secure
     */
    v4BroadcasttalentsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetBroadcastTalentRespApiRespBase>({
        path: `/api/v4/broadcasttalents/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V4BroadcasttalentsPartialUpdate
     * @summary Modify broadcast talent
     * @request PATCH:/api/v4/broadcasttalents/{id}
     * @secure
     */
    v4BroadcasttalentsPartialUpdate: (
      id: number,
      data: {
        /**
         * Broadcast Talent Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id: number;
        /**
         * Name
         * @minLength 0
         * @maxLength 100
         */
        Name: string;
        /**
         * First Name
         * @minLength 0
         * @maxLength 50
         */
        FirstName?: string;
        /**
         * Last Name
         * @minLength 0
         * @maxLength 50
         */
        LastName?: string;
        /**
         * Country Id
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId: number;
        /**
         * Language Id
         * @format int32
         * @min 1
         * @max 32767
         */
        LanguageId: number;
        /** IsActive */
        IsActive: boolean;
        /**
         * About
         * @minLength 0
         * @maxLength 500
         */
        About?: string;
        /**
         * Gender (Male=0/Female=1)
         * @format int32
         * @min 0
         * @max 1
         */
        Gender: number;
        /**
         * DateOfBirth (ex:2022-12-01)
         * @format date
         */
        DateOfBirth?: string;
        /**
         * Primary Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        PrimaryGameId?: number;
        /**
         * Profile Image
         * @format binary
         */
        ProfileImage?: File;
        /**
         * Header Image
         * @format binary
         */
        HeaderImage?: File;
        /**
         * Player Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PlayerId?: number;
        /**
         * Person Stream Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PersonalStreamId?: number;
        /**
         * Website
         * @format uri
         * @minLength 0
         * @maxLength 100
         */
        Website?: string;
        /**
         * Facebook
         * @minLength 0
         * @maxLength 100
         */
        Facebook?: string;
        /**
         * Twitter
         * @minLength 0
         * @maxLength 100
         */
        Twitter?: string;
        /**
         * Youtube
         * @minLength 0
         * @maxLength 100
         */
        Youtube?: string;
        /**
         * Role type ids
         * Type (Host=1/Commentator=2/Analyst=3/Observer=4/Interviewer=5/Other=99)
         */
        RoleTypeIds: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModBroadcastTalentRespApiRespBase>({
        path: `/api/v4/broadcasttalents/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V4BroadcasttalentsDelete
     * @summary Delete broadcast talent
     * @request DELETE:/api/v4/broadcasttalents/{id}
     * @secure
     */
    v4BroadcasttalentsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelBroadcastTalentRespApiRespBase>({
        path: `/api/v4/broadcasttalents/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V4BroadcasttalentsMediaItemsList
     * @summary Get broadcast talents Media items
     * @request GET:/api/v4/broadcasttalents/media-items
     * @secure
     */
    v4BroadcasttalentsMediaItemsList: (
      query?: {
        /**
         * Broadcast Talent Id
         * @format int32
         */
        Id?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetMediaItemsRespApiRespBase>({
        path: `/api/v4/broadcasttalents/media-items`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V4BroadcasttalentsMediaItemsCreate
     * @summary Add broadcast talent new Media items
     * @request POST:/api/v4/broadcasttalents/media-items
     * @secure
     */
    v4BroadcasttalentsMediaItemsCreate: (data: AddMediaItemsReq, params: RequestParams = {}) =>
      this.request<any, AddMediaItemsRespApiRespBase>({
        path: `/api/v4/broadcasttalents/media-items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V4BroadcasttalentsMediaItemsDelete
     * @summary Delete broadcast talent Media item
     * @request DELETE:/api/v4/broadcasttalents/{broadcastid}/media-items/{mediaitemid}
     * @secure
     */
    v4BroadcasttalentsMediaItemsDelete: (broadcastid: number, mediaitemid: number, params: RequestParams = {}) =>
      this.request<any, DelMediaItemRespApiRespBase>({
        path: `/api/v4/broadcasttalents/${broadcastid}/media-items/${mediaitemid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name V4CurrencyCurrentExchangeRateList
     * @summary Get current exchange rate
     * @request GET:/api/v4/currency/current-exchange-rate
     * @secure
     */
    v4CurrencyCurrentExchangeRateList: (
      query?: {
        /**
         * Currency
         * USD = 1,
         * EUR = 2,
         * CNY = 3,
         * RUB = 4,
         * GBP = 5,
         * PHP = 6,
         * AUD = 7,
         * BGN = 8,
         * BRL = 9,
         * CAD = 10,
         * CZK = 11,
         * DKK = 12,
         * HKD = 13,
         * HUF = 14,
         * IDR = 15,
         * ILS = 16,
         * INR = 17,
         * KRW = 18,
         * MXN = 19,
         * MYR = 20,
         * NZD = 21,
         * PLN = 22,
         * RON = 23,
         * SEK = 24,
         * SGD = 25,
         * THB = 26,
         * TRY = 27,
         * ZAR = 28,
         * JPY = 29,
         */
        Currency?: EnumCurrency;
        /**
         * Amount
         * @format double
         */
        Amount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetCurrentExchangeRateResp>({
        path: `/api/v4/currency/current-exchange-rate`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Earnings
     * @name V4EarningsList
     * @summary Get earnings
     * @request GET:/api/v4/earnings
     * @secure
     */
    v4EarningsList: (
      query?: {
        /**
         * Parent tournament id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentId?: number;
        /**
         * Parent tournament name
         * @minLength 1
         * @maxLength 80
         */
        Name?: string;
        /**
         * Game id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * Prize pool status
         * NoPrizePool = 0,
         * NoPrizePoolLogged = 1,
         * NoStructureDefined = 2,
         * NoWinnersBacklogged = 3,
         * MissingWinners = 4,
         * Complete = 5,
         */
        PrizePoolStatus?: EnumPrizePoolStatus;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetEarningsRespApiRespBase>({
        path: `/api/v4/earnings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Earnings
     * @name V4EarningsDetail
     * @summary Get child earnings by parent
     * @request GET:/api/v4/earnings/{id}
     * @secure
     */
    v4EarningsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetChildEarningsRespApiRespBase>({
        path: `/api/v4/earnings/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Earnings
     * @name V4EarningsChildDetail
     * @summary Get child earning prize pool
     * @request GET:/api/v4/earnings/child/{id}
     * @secure
     */
    v4EarningsChildDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetChildEarningPrizePoolRespApiRespBase>({
        path: `/api/v4/earnings/child/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Earnings
     * @name V4EarningsChildPartialUpdate
     * @summary Modify child prize pool
     * @request PATCH:/api/v4/earnings/child/{id}
     * @secure
     */
    v4EarningsChildPartialUpdate: (id: number, data: ModChildEarningPrizePoolReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/earnings/child/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Earnings
     * @name V4EarningsChildStatusPartialUpdate
     * @summary Modify child prize pool status
     * @request PATCH:/api/v4/earnings/child/{id}/status
     * @secure
     */
    v4EarningsChildStatusPartialUpdate: (
      id: number,
      data: ModChildEarningPrizePoolStatusReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModChildEarningPrizePoolStatusRespApiRespBase>({
        path: `/api/v4/earnings/child/${id}/status`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V4FilesCrewFoldersList
     * @summary Get folders
     * @request GET:/api/v4/files/crew-folders
     * @secure
     */
    v4FilesCrewFoldersList: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentId?: number;
        /**
         * @minLength 1
         * @maxLength 50
         */
        UploadType?: string;
        Sort?: EnumFieldSort;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetCrewFoldersRespApiRespBase>({
        path: `/api/v4/files/crew-folders`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V4FilesCrewFoldersCreate
     * @summary Add folder
     * @request POST:/api/v4/files/crew-folders
     * @secure
     */
    v4FilesCrewFoldersCreate: (
      data: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentId: number;
        /**
         * @minLength 1
         * @maxLength 255
         */
        FolderName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddFolderRespApiRespBase>({
        path: `/api/v4/files/crew-folders`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V4FilesCrewFilesList
     * @summary Get files
     * @request GET:/api/v4/files/crew-files
     * @secure
     */
    v4FilesCrewFilesList: (
      query: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        FolderId: number;
        /**
         * @minLength 1
         * @maxLength 255
         */
        FileName?: string;
        /**
         * @minLength 1
         * @maxLength 20
         */
        Uploader?: string;
        /**
         * @format int64
         * @min 1
         */
        UploadedFrom?: number;
        /**
         * @format int64
         * @min 1
         */
        UploadedTo?: number;
        NameSort?: EnumFieldSort;
        UploadedSort?: EnumFieldSort;
        UploaderSort?: EnumFieldSort;
        SizeSort?: EnumFieldSort;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetCrewFilesRespApiRespBase>({
        path: `/api/v4/files/crew-files`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V4FilesCrewFilesCreate
     * @summary add crew file
     * @request POST:/api/v4/files/crew-files
     * @secure
     */
    v4FilesCrewFilesCreate: (
      data: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        FolderId: number;
        /**
         * @minLength 1
         * @maxLength 255
         */
        FileName: string;
        /** @format binary */
        File: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddFileRespApiRespBase>({
        path: `/api/v4/files/crew-files`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V4FilesCrewFoldersPartialUpdate
     * @summary Modify folder
     * @request PATCH:/api/v4/files/crew-folders/{id}
     * @secure
     */
    v4FilesCrewFoldersPartialUpdate: (
      id: number,
      data: {
        /** @format int32 */
        Id?: number;
        /** @format int32 */
        ParentId?: number;
        Name?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModFolderRespApiRespBase>({
        path: `/api/v4/files/crew-folders/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V4FilesCrewFoldersDelete
     * @summary Delete folder
     * @request DELETE:/api/v4/files/crew-folders/{id}
     * @secure
     */
    v4FilesCrewFoldersDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelFolderRespApiRespBase>({
        path: `/api/v4/files/crew-folders/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V4FilesFuzzyFoldersList
     * @summary Get fuzzy folders
     * @request GET:/api/v4/files/fuzzy-folders
     * @secure
     */
    v4FilesFuzzyFoldersList: (
      query: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        FolderId: number;
        /**
         * @minLength 1
         * @maxLength 20
         */
        FuzzyName: string;
        /**
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyFoldersRespApiRespBase>({
        path: `/api/v4/files/fuzzy-folders`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V4FilesCrewFilesPartialUpdate
     * @summary Modify file
     * @request PATCH:/api/v4/files/crew-files/{id}
     * @secure
     */
    v4FilesCrewFilesPartialUpdate: (
      id: number,
      data: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        FileId: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        FolderId: number;
        /**
         * @minLength 1
         * @maxLength 255
         */
        FileName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModFileRespApiRespBase>({
        path: `/api/v4/files/crew-files/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V4FilesCrewFilesDelete
     * @summary Delete file
     * @request DELETE:/api/v4/files/crew-files/{id}
     * @secure
     */
    v4FilesCrewFilesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelFileRespApiRespBase>({
        path: `/api/v4/files/crew-files/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FrontendSiteSections
     * @name V4FrontendSiteSectionsDetail
     * @summary Get frontend site sections
     * @request GET:/api/v4/frontend-site-sections/{id}
     * @secure
     */
    v4FrontendSiteSectionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetFrontendSiteSectionsRespApiRespBase>({
        path: `/api/v4/frontend-site-sections/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FrontendSiteSections
     * @name V4FrontendSiteSectionsCreate
     * @summary Add frontend site sections
     * @request POST:/api/v4/frontend-site-sections
     * @secure
     */
    v4FrontendSiteSectionsCreate: (data: AddFrontendSiteSectionsReq, params: RequestParams = {}) =>
      this.request<any, AddFrontendSiteSectionsRespApiRespBase>({
        path: `/api/v4/frontend-site-sections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FrontendSiteSections
     * @name V4FrontendSiteSectionsPartialUpdate
     * @summary Modify frontend site section
     * @request PATCH:/api/v4/frontend-site-sections
     * @secure
     */
    v4FrontendSiteSectionsPartialUpdate: (data: ModFrontendSiteSectionReq, params: RequestParams = {}) =>
      this.request<any, ModFrontendSiteSectionRespApiRespBase>({
        path: `/api/v4/frontend-site-sections`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FrontendSiteSections
     * @name V4FrontendSiteSectionsDelete
     * @summary Delete frontend site section
     * @request DELETE:/api/v4/frontend-site-sections
     * @secure
     */
    v4FrontendSiteSectionsDelete: (data: DelFrontendSiteSectionReq, params: RequestParams = {}) =>
      this.request<any, DelFrontendSiteSectionRespApiRespBase>({
        path: `/api/v4/frontend-site-sections`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V4FuncsTypesList
     * @summary Get Func Types
     * @request GET:/api/v4/funcs/types
     * @secure
     */
    v4FuncsTypesList: (params: RequestParams = {}) =>
      this.request<any, GetFuncTypesRespApiRespBase>({
        path: `/api/v4/funcs/types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V4FuncsOptionsList
     * @summary Get Func Options
     * @request GET:/api/v4/funcs/options
     * @secure
     */
    v4FuncsOptionsList: (params: RequestParams = {}) =>
      this.request<any, GetFuncOptionsRespApiRespBase>({
        path: `/api/v4/funcs/options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V4FuncsList
     * @summary Get Funcs
     * @request GET:/api/v4/funcs
     * @secure
     */
    v4FuncsList: (params: RequestParams = {}) =>
      this.request<any, GetFuncsRespApiRespBase>({
        path: `/api/v4/funcs`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V4FuncsCreate
     * @summary Add Func
     * @request POST:/api/v4/funcs
     * @secure
     */
    v4FuncsCreate: (
      data: {
        /**
         * Func id
         * @format int32
         * @min 0
         * @max 65535
         */
        FuncId: number;
        /**
         * Func name
         * @minLength 0
         * @maxLength 50
         */
        Name: string;
        /**
         * Func code
         * @minLength 0
         * @maxLength 50
         */
        Code: string;
        Type: EnumFuncType;
        /**
         * Parent func id
         * @format int32
         * @min 0
         * @max 65535
         */
        ParentId: number;
        /**
         * Func position
         * @format int32
         * @min 0
         * @max 255
         */
        Position: number;
        /**
         * Func url
         * @minLength 0
         * @maxLength 100
         */
        Url?: string;
        /**
         * Func icon
         * @minLength 0
         * @maxLength 50
         */
        Icon?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddFuncRespApiRespBase>({
        path: `/api/v4/funcs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V4FuncsDetail
     * @summary Get Func
     * @request GET:/api/v4/funcs/{id}
     * @secure
     */
    v4FuncsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetFuncRespApiRespBase>({
        path: `/api/v4/funcs/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V4FuncsPartialUpdate
     * @summary Modify Func
     * @request PATCH:/api/v4/funcs/{id}
     * @secure
     */
    v4FuncsPartialUpdate: (
      id: number,
      data: {
        /**
         * Func id
         * @format int32
         * @min 1
         * @max 65535
         */
        FuncId: number;
        /**
         * Func name
         * @minLength 0
         * @maxLength 50
         */
        Name?: string;
        /**
         * Func code
         * @minLength 0
         * @maxLength 50
         */
        Code?: string;
        Type?: EnumFuncType;
        /**
         * Parent func id
         * @format int32
         * @min 0
         * @max 65535
         */
        ParentId?: number;
        /**
         * Func position
         * @format int32
         * @min 0
         * @max 255
         */
        Position?: number;
        State?: EnumState;
        /**
         * Func url
         * @minLength 0
         * @maxLength 100
         */
        Url?: string;
        /**
         * Func icon
         * @minLength 0
         * @maxLength 50
         */
        Icon?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModFuncRespApiRespBase>({
        path: `/api/v4/funcs/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V4FuncsDelete
     * @summary Delete Func
     * @request DELETE:/api/v4/funcs/{id}
     * @secure
     */
    v4FuncsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelFuncRespApiRespBase>({
        path: `/api/v4/funcs/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRaces
     * @name V4GameracesFuzzyList
     * @summary Get fuzzy gameRaces
     * @request GET:/api/v4/gameraces/fuzzy
     * @secure
     */
    v4GameracesFuzzyList: (
      query?: {
        /**
         * if FuzzyPrefix = null will get list of all GameRaces
         * @minLength 1
         * @maxLength 25
         */
        FuzzyPrefix?: string;
        /**
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyGameRaceRespApiRespBase>({
        path: `/api/v4/gameraces/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V4GameRegionsList
     * @summary Get game regions
     * @request GET:/api/v4/game-regions
     * @secure
     */
    v4GameRegionsList: (
      query?: {
        /**
         * Game id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * Region name
         * @minLength 1
         * @maxLength 50
         */
        RegionName?: string;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGameRegionsRespApiRespBase>({
        path: `/api/v4/game-regions`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V4GameRegionsCreate
     * @summary Add game region
     * @request POST:/api/v4/game-regions
     * @secure
     */
    v4GameRegionsCreate: (data: AddGameRegionReq, params: RequestParams = {}) =>
      this.request<any, AddGameRegionRespApiRespBase>({
        path: `/api/v4/game-regions`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V4GameRegionsDetail
     * @summary Get game region detail
     * @request GET:/api/v4/game-regions/{id}
     * @secure
     */
    v4GameRegionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetGameRegionRespApiRespBase>({
        path: `/api/v4/game-regions/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V4GameRegionsPartialUpdate
     * @summary Modify game region
     * @request PATCH:/api/v4/game-regions/{id}
     * @secure
     */
    v4GameRegionsPartialUpdate: (id: number, data: ModGameRegionReq, params: RequestParams = {}) =>
      this.request<any, ModGameRegionRespApiRespBase>({
        path: `/api/v4/game-regions/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V4GameRegionsDelete
     * @summary Delete game region
     * @request DELETE:/api/v4/game-regions/{id}
     * @secure
     */
    v4GameRegionsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelGameRegionRespApiRespBase>({
        path: `/api/v4/game-regions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V4GameRegionsTranslationsDetail
     * @summary Get game region translations
     * @request GET:/api/v4/game-regions/{id}/translations
     * @secure
     */
    v4GameRegionsTranslationsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetGameRegionTranslationRespApiRespBase>({
        path: `/api/v4/game-regions/${id}/translations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V4GameRegionsTranslationsPartialUpdate
     * @summary Modify game region translation
     * @request PATCH:/api/v4/game-regions/{id}/translations
     * @secure
     */
    v4GameRegionsTranslationsPartialUpdate: (
      id: number,
      data: ModGameRegionTranslationReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModGameRegionTranslationRespApiRespBase>({
        path: `/api/v4/game-regions/${id}/translations`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V4GamesList
     * @summary Get games by condition
     * @request GET:/api/v4/games
     * @secure
     */
    v4GamesList: (
      query?: {
        /**
         * Game name
         * @minLength 1
         * @maxLength 20
         */
        GameName?: string;
        /** Is legacy */
        IsLegacy?: boolean;
        /** Has player rankings */
        HasPlayerRankings?: boolean;
        /** Has team rankings */
        HasTeamRankings?: boolean;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGamesRespApiRespBase>({
        path: `/api/v4/games`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V4GamesCreate
     * @summary Add game
     * @request POST:/api/v4/games
     * @secure
     */
    v4GamesCreate: (
      data: {
        /**
         * Game name
         * @minLength 1
         * @maxLength 20
         */
        Name: string;
        /** Has player rankings */
        HasPlayerRankings: boolean;
        /** Has team rankings */
        HasTeamRankings: boolean;
        /** Has streams */
        HasStreams: boolean;
        /**
         * Grid id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        GridId?: number;
        /**
         * Steam app id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        SteamAppId?: number;
        /**
         * Twitch game id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        TwitchGameId?: number;
        /**
         * Icon image file
         * @format binary
         */
        IconImageFile?: File;
        /** Is legacy */
        IsLegacy: boolean;
        /**
         * Recommended replay count
         * @format int32
         * @min 0
         * @max 2147483647
         */
        RecommendedReplayCount: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddGameRespApiRespBase>({
        path: `/api/v4/games`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V4GamesDetail
     * @summary Get game
     * @request GET:/api/v4/games/{id}
     * @secure
     */
    v4GamesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetGameRespApiRespBase>({
        path: `/api/v4/games/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V4GamesDelete
     * @summary Delete game
     * @request DELETE:/api/v4/games/{id}
     * @secure
     */
    v4GamesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelGameRespApiRespBase>({
        path: `/api/v4/games/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V4GamesIdPartialUpdate
     * @summary Modify game
     * @request PATCH:/api/v4/games/id
     * @secure
     */
    v4GamesIdPartialUpdate: (
      data: {
        /**
         * Game id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
        /**
         * Game name
         * @minLength 1
         * @maxLength 20
         */
        Name: string;
        /** Has player rankings */
        HasPlayerRankings: boolean;
        /** Has team rankings */
        HasTeamRankings: boolean;
        /** Has streams */
        HasStreams: boolean;
        /**
         * Grid id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        GridId?: number;
        /**
         * Steam app id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        SteamAppId?: number;
        /**
         * Twitch game id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        TwitchGameId?: number;
        /**
         * Icon image file
         * @format binary
         */
        IconImageFile?: File;
        /** Is legacy */
        IsLegacy: boolean;
        /**
         * Recommended replay count
         * @format int32
         * @min 0
         * @max 2147483647
         */
        RecommendedReplayCount: number;
      },
      query?: {
        /**
         * GameId
         * @format int32
         */
        id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModGameRespApiRespBase>({
        path: `/api/v4/games/id`,
        method: "PATCH",
        query: query,
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V4GamesTranslationsPartialUpdate
     * @summary Modify game translations
     * @request PATCH:/api/v4/games/{id}/translations
     * @secure
     */
    v4GamesTranslationsPartialUpdate: (id: number, data: ModGameTranslationsReq, params: RequestParams = {}) =>
      this.request<any, ModGameTranslationsRespApiRespBase>({
        path: `/api/v4/games/${id}/translations`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V4GamesFuzzyList
     * @summary Get fuzzy games
     * @request GET:/api/v4/games/fuzzy
     * @secure
     */
    v4GamesFuzzyList: (
      query?: {
        /**
         * if FuzzyPrefix = null will get list of all games
         * @minLength 1
         * @maxLength 20
         */
        FuzzyPrefix?: string;
        /**
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyGamesRespApiRespBase>({
        path: `/api/v4/games/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V4GamesidesList
     * @summary Get sides by condition
     * @request GET:/api/v4/gamesides
     * @secure
     */
    v4GamesidesList: (
      query?: {
        /**
         * Side Name
         * @minLength 0
         * @maxLength 20
         */
        Name?: string;
        /**
         * Side Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetSidesRespApiRespBase>({
        path: `/api/v4/gamesides`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V4GamesidesCreate
     * @summary Add new game side
     * @request POST:/api/v4/gamesides
     * @secure
     */
    v4GamesidesCreate: (
      data: {
        /**
         * Game Side Name
         * @minLength 0
         * @maxLength 50
         */
        Name: string;
        /**
         * Icon file
         * @format binary
         */
        IconFile?: File;
        /**
         * Side Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddSideRespApiRespBase>({
        path: `/api/v4/gamesides`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V4GamesidesDetail
     * @summary Get game side
     * @request GET:/api/v4/gamesides/{id}
     * @secure
     */
    v4GamesidesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetSideRespApiRespBase>({
        path: `/api/v4/gamesides/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V4GamesidesPartialUpdate
     * @summary Modify game side
     * @request PATCH:/api/v4/gamesides/{id}
     * @secure
     */
    v4GamesidesPartialUpdate: (
      id: number,
      data: {
        /**
         * Side Id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id: number;
        /**
         * Game Side Name
         * @minLength 0
         * @maxLength 50
         */
        Name: string;
        /**
         * Icon file
         * @format binary
         */
        IconFile?: File;
        /**
         * Side Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModSideRespApiRespBase>({
        path: `/api/v4/gamesides/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V4GamesidesDelete
     * @summary Delete game side
     * @request DELETE:/api/v4/gamesides/{id}
     * @secure
     */
    v4GamesidesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelSideRespApiRespBase>({
        path: `/api/v4/gamesides/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V4GamesidesTranslationsDetail
     * @summary Get game side translations
     * @request GET:/api/v4/gamesides/{id}/translations
     * @secure
     */
    v4GamesidesTranslationsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetSideTranslationsRespApiRespBase>({
        path: `/api/v4/gamesides/${id}/translations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V4GamesidesTranslationsPartialUpdate
     * @summary Modify game side translations
     * @request PATCH:/api/v4/gamesides/{id}/translations
     * @secure
     */
    v4GamesidesTranslationsPartialUpdate: (id: number, data: ModSideTranslationsReq, params: RequestParams = {}) =>
      this.request<any, ModSideTranslationsRespApiRespBase>({
        path: `/api/v4/gamesides/${id}/translations`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsGroupOptionsList
     * @summary Get group options
     * @request GET:/api/v4/groups/group-options
     * @secure
     */
    v4GroupsGroupOptionsList: (params: RequestParams = {}) =>
      this.request<any, GetGroupOptionsRespApiRespBase>({
        path: `/api/v4/groups/group-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsGroupOptionsByUserList
     * @summary Get group options by user
     * @request GET:/api/v4/groups/group-options-by-user
     * @secure
     */
    v4GroupsGroupOptionsByUserList: (params: RequestParams = {}) =>
      this.request<any, GetGroupOptionsRespApiRespBase>({
        path: `/api/v4/groups/group-options-by-user`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsList
     * @summary Get Groups
     * @request GET:/api/v4/groups
     * @secure
     */
    v4GroupsList: (
      query?: {
        /** Group ids */
        GroupIds?: number[];
        /**
         * Group remark
         * @minLength 3
         * @maxLength 20
         */
        Remark?: string;
        /** Frontend ids */
        FrontendIds?: number[];
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGroupsRespApiRespBase>({
        path: `/api/v4/groups`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsCreate
     * @summary Add group
     * @request POST:/api/v4/groups
     * @secure
     */
    v4GroupsCreate: (data: AddGroupReq, params: RequestParams = {}) =>
      this.request<any, AddGroupRespApiRespBase>({
        path: `/api/v4/groups`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsDetail
     * @summary Get Group
     * @request GET:/api/v4/groups/{id}
     * @secure
     */
    v4GroupsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetGroupRespApiRespBase>({
        path: `/api/v4/groups/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsPartialUpdate
     * @summary Modify Group
     * @request PATCH:/api/v4/groups/{id}
     * @secure
     */
    v4GroupsPartialUpdate: (id: number, data: ModGroupReq, params: RequestParams = {}) =>
      this.request<any, ModGroupRespApiRespBase>({
        path: `/api/v4/groups/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsDelete
     * @summary Delete Group
     * @request DELETE:/api/v4/groups/{id}
     * @secure
     */
    v4GroupsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelGroupRespApiRespBase>({
        path: `/api/v4/groups/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsBlankPermissionsList
     * @summary Get group blank permissions
     * @request GET:/api/v4/groups/blank-permissions
     * @secure
     */
    v4GroupsBlankPermissionsList: (params: RequestParams = {}) =>
      this.request<any, GetGroupBlankPermissionsRespApiRespBase>({
        path: `/api/v4/groups/blank-permissions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsTemplatesList
     * @summary Get Group Templates
     * @request GET:/api/v4/groups/templates
     * @secure
     */
    v4GroupsTemplatesList: (params: RequestParams = {}) =>
      this.request<any, GetGroupTemplatesRespApiRespBase>({
        path: `/api/v4/groups/templates`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsAssignGroupPartialUpdate
     * @summary Assign group to ser
     * @request PATCH:/api/v4/groups/assign-group
     * @secure
     */
    v4GroupsAssignGroupPartialUpdate: (data: AssignGroupReq, params: RequestParams = {}) =>
      this.request<any, AssignGroupRespApiRespBase>({
        path: `/api/v4/groups/assign-group`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsUnassignGroupDelete
     * @summary UnAssign group from user
     * @request DELETE:/api/v4/groups/unassign-group
     * @secure
     */
    v4GroupsUnassignGroupDelete: (data: UnAssignGroupReq, params: RequestParams = {}) =>
      this.request<any, UnAssignGroupRespApiRespBase>({
        path: `/api/v4/groups/unassign-group`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsUsersDetail
     * @summary Get users by group
     * @request GET:/api/v4/groups/{id}/users
     * @secure
     */
    v4GroupsUsersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetUsersByGroupRespApiRespBase>({
        path: `/api/v4/groups/${id}/users`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V4GroupsFuzzyUsersDetail
     * @summary Get fuzzy users by group
     * @request GET:/api/v4/groups/{id}/fuzzy-users
     * @secure
     */
    v4GroupsFuzzyUsersDetail: (
      id: number,
      query: {
        /**
         * @minLength 1
         * @maxLength 30
         */
        FuzzyPrefix: string;
        /**
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyUsersByGroupRespApiRespBase>({
        path: `/api/v4/groups/${id}/fuzzy-users`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V4HeroesList
     * @summary Get heroes by condition
     * @request GET:/api/v4/heroes
     * @secure
     */
    v4HeroesList: (
      query?: {
        /**
         * Hero Name
         * @minLength 1
         * @maxLength 25
         */
        Name?: string;
        /**
         * Hero Title
         * @minLength 1
         * @maxLength 25
         */
        Title?: string;
        /**
         * Hero Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetHeroesRespApiRespBase>({
        path: `/api/v4/heroes`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V4HeroesCreate
     * @summary Add new game Hero
     * @request POST:/api/v4/heroes
     * @secure
     */
    v4HeroesCreate: (
      data: {
        /**
         * Game Hero Name
         * @minLength 0
         * @maxLength 25
         */
        Name: string;
        /**
         * Hero Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
        /**
         * Description
         * @minLength 0
         * @maxLength 10000
         */
        Description: string;
        /**
         * Icon file
         * @format binary
         */
        IconFile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddHeroRespApiRespBase>({
        path: `/api/v4/heroes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V4HeroesDetail
     * @summary Get game hero
     * @request GET:/api/v4/heroes/{id}
     * @secure
     */
    v4HeroesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetHeroRespApiRespBase>({
        path: `/api/v4/heroes/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V4HeroesPartialUpdate
     * @summary Modify game Hero
     * @request PATCH:/api/v4/heroes/{id}
     * @secure
     */
    v4HeroesPartialUpdate: (
      id: number,
      data: {
        /**
         * Game Hero Id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id: number;
        /**
         * Game Hero Name
         * @minLength 0
         * @maxLength 25
         */
        Name: string;
        /**
         * Hero Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
        /**
         * Description
         * @minLength 0
         * @maxLength 10000
         */
        Description: string;
        /**
         * Icon file
         * @format binary
         */
        IconFile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModHeroRespApiRespBase>({
        path: `/api/v4/heroes/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V4HeroesDelete
     * @summary Delete game Hero
     * @request DELETE:/api/v4/heroes/{id}
     * @secure
     */
    v4HeroesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelHeroRespApiRespBase>({
        path: `/api/v4/heroes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V4HeroesTranslationsDetail
     * @summary Get game hero translations
     * @request GET:/api/v4/heroes/{id}/translations
     * @secure
     */
    v4HeroesTranslationsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetHeroTranslationsRespApiRespBase>({
        path: `/api/v4/heroes/${id}/translations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V4HeroesTranslationsPartialUpdate
     * @summary Modify game Hero translations
     * @request PATCH:/api/v4/heroes/{id}/translations
     * @secure
     */
    v4HeroesTranslationsPartialUpdate: (id: number, data: ModHeroTranslationsReq, params: RequestParams = {}) =>
      this.request<any, ModHeroTranslationsRespApiRespBase>({
        path: `/api/v4/heroes/${id}/translations`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logout
     * @name V4LogoutCreate
     * @summary Logout
     * @request POST:/api/v4/logout
     * @secure
     */
    v4LogoutCreate: (
      query?: {
        /** RefreshToken */
        refreshToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, LogoutRespApiRespBase>({
        path: `/api/v4/logout`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V4LogsLogLevelsList
     * @summary Get Log Levels
     * @request GET:/api/v4/logs/log-levels
     * @secure
     */
    v4LogsLogLevelsList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v4/logs/log-levels`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V4LogsApiLogsList
     * @summary Get Api Logs
     * @request GET:/api/v4/logs/api-logs
     * @secure
     */
    v4LogsApiLogsList: (
      query?: {
        /**
         * From
         * @format int64
         * @min 0
         */
        From?: number;
        /**
         * To
         * @format int64
         * @min 0
         */
        To?: number;
        /**
         * Prefix
         * @minLength 0
         * @maxLength 128
         */
        Prefix?: string;
        /**
         * Http Status Code
         * @format int32
         * @min 0
         * @max 2147483647
         */
        HttpStatusCode?: number;
        /**
         * IP Address
         * @minLength 0
         * @maxLength 50
         */
        Ip?: string;
        /**
         * Path
         * @minLength 0
         * @maxLength 512
         */
        Path?: string;
        /**
         * Content
         * @minLength 0
         * @maxLength 512
         */
        Content?: string;
        /**
         * Server Name
         * @minLength 0
         * @maxLength 128
         */
        ServerName?: string;
        /**
         * Trace Id
         * @minLength 0
         * @maxLength 128
         */
        TraceId?: string;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetApiLogsRespApiRespBase>({
        path: `/api/v4/logs/api-logs`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V4LogsApiLogsDetail
     * @summary Get Api log
     * @request GET:/api/v4/logs/api-logs/{id}
     * @secure
     */
    v4LogsApiLogsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetApiLogRespApiRespBase>({
        path: `/api/v4/logs/api-logs/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V4LogsSystemLogsList
     * @summary Get System Logs
     * @request GET:/api/v4/logs/system-logs
     * @secure
     */
    v4LogsSystemLogsList: (
      query?: {
        /**
         * From
         * @format int64
         * @min 0
         */
        From?: number;
        /**
         * To
         * @format int64
         * @min 0
         */
        To?: number;
        /**
         * Prefix
         * @minLength 0
         * @maxLength 128
         */
        Prefix?: string;
        /**
         * Server Name
         * @minLength 0
         * @maxLength 128
         */
        ServerName?: string;
        /**
         * Logger
         * @minLength 0
         * @maxLength 128
         */
        Logger?: string;
        /**
         * Method
         * @minLength 0
         * @maxLength 128
         */
        Method?: string;
        /** Log Level */
        LogLevel?: LogLevel;
        /**
         * Trace Id
         * @minLength 0
         * @maxLength 128
         */
        TraceId?: string;
        /**
         * Keyword
         * @minLength 0
         * @maxLength 128
         */
        Keyword?: string;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetSystemLogsRespApiRespBase>({
        path: `/api/v4/logs/system-logs`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V4LogsSystemLogsDetail
     * @summary Get System Log
     * @request GET:/api/v4/logs/system-logs/{id}
     * @secure
     */
    v4LogsSystemLogsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetSystemLogRespApiRespBase>({
        path: `/api/v4/logs/system-logs/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V4MapsList
     * @summary Get maps by condition
     * @request GET:/api/v4/maps
     * @secure
     */
    v4MapsList: (
      query?: {
        /**
         * Maps Name
         * @minLength 0
         * @maxLength 50
         */
        Name?: string;
        /**
         * Maps Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetMapsRespApiRespBase>({
        path: `/api/v4/maps`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V4MapsCreate
     * @summary Add new game map
     * @request POST:/api/v4/maps
     * @secure
     */
    v4MapsCreate: (
      data: {
        /**
         * Game Map Name
         * @minLength 0
         * @maxLength 50
         */
        Name: string;
        /**
         * Image file
         * @format binary
         */
        ImageFile?: File;
        /**
         * Map Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddMapRespApiRespBase>({
        path: `/api/v4/maps`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V4MapsDetail
     * @summary Get game map
     * @request GET:/api/v4/maps/{id}
     * @secure
     */
    v4MapsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetMapRespApiRespBase>({
        path: `/api/v4/maps/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V4MapsPartialUpdate
     * @summary Modify game map
     * @request PATCH:/api/v4/maps/{id}
     * @secure
     */
    v4MapsPartialUpdate: (
      id: number,
      data: {
        /**
         * Game Map Id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id: number;
        /**
         * Game Map Name
         * @minLength 0
         * @maxLength 50
         */
        Name: string;
        /**
         * Image file
         * @format binary
         */
        ImageFile?: File;
        /**
         * Map Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModMapRespApiRespBase>({
        path: `/api/v4/maps/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V4MapsDelete
     * @summary Delete game map
     * @request DELETE:/api/v4/maps/{id}
     * @secure
     */
    v4MapsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelMapRespApiRespBase>({
        path: `/api/v4/maps/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V4MapsTranslationsDetail
     * @summary Get game map translations
     * @request GET:/api/v4/maps/{id}/translations
     * @secure
     */
    v4MapsTranslationsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetMapTranslationsRespApiRespBase>({
        path: `/api/v4/maps/${id}/translations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V4MapsTranslationsPartialUpdate
     * @summary Modify game map translations
     * @request PATCH:/api/v4/maps/{id}/translations
     * @secure
     */
    v4MapsTranslationsPartialUpdate: (id: number, data: ModMapTranslationsReq, params: RequestParams = {}) =>
      this.request<any, ModMapTranslationsRespApiRespBase>({
        path: `/api/v4/maps/${id}/translations`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V4MapsFuzzyList
     * @summary Get fuzzy maps
     * @request GET:/api/v4/maps/fuzzy
     * @secure
     */
    v4MapsFuzzyList: (
      query: {
        /**
         * Game id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * Fuzzy prefix
         * @minLength 1
         * @maxLength 50
         */
        FuzzyPrefix: string;
        /**
         * Max count
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyMapsRespApiRespBase>({
        path: `/api/v4/maps/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V4MediaStreamsList
     * @summary Get media streams by condition
     * @request GET:/api/v4/media/streams
     * @secure
     */
    v4MediaStreamsList: (
      query?: {
        /**
         * Title
         * @minLength 0
         * @maxLength 60
         */
        Title?: string;
        /**
         * Creator(Username)
         * @minLength 0
         * @maxLength 20
         */
        Creator?: string;
        /** Platform Id (TwitchTV = 1,Youtube_Channel = 10,Youtube_Stream = 11,Other = 99) */
        PlatformId?: EnumPlatform;
        /**
         * Stream Id
         * @minLength 0
         * @maxLength 25
         */
        StreamId?: string;
        /**
         * Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /** Is Live */
        IsLive?: boolean;
        /**
         * Created From
         * @format int64
         */
        CreatedFrom?: number;
        /**
         * Created To
         * @format int64
         */
        CreatedTo?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetStreamsRespApiRespBase>({
        path: `/api/v4/media/streams`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V4MediaStreamsCreate
     * @summary Add new media stream
     * @request POST:/api/v4/media/streams
     * @secure
     */
    v4MediaStreamsCreate: (
      data: {
        Platform: EnumPlatform;
        /**
         * StreamId
         * @minLength 0
         * @maxLength 25
         */
        StreamId?: string;
        /**
         * Stream Url
         * @minLength 0
         * @maxLength 150
         */
        StreamUrl?: string;
        /**
         * Screen Cap file
         * @format binary
         */
        ScreenCapFile?: File;
        /**
         * GameId
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
        /**
         * LanguageId
         * @format int32
         * @min 1
         * @max 32767
         */
        LanguageId: number;
        /** Is Event Stream */
        IsEventStream: boolean;
        /** Is Pro Player */
        IsProPlayer: boolean;
        /** Is Celeb Caster */
        IsCelebCaster: boolean;
        /**
         * Next Broadcast At
         * @format int64
         * @min 1
         */
        NextBroadcastAt?: number;
        /**
         * Title
         * @minLength 0
         * @maxLength 60
         */
        Title: string;
        /** Is Featured */
        IsFeatured: boolean;
        /**
         * Description
         * @minLength 0
         * @maxLength 255
         */
        Description?: string;
        /** Tags : Maximum of 5 tags(25 characters maximum per tag) */
        Tags?: string[];
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddStreamRespApiRespBase>({
        path: `/api/v4/media/streams`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V4MediaStreamsDetail
     * @summary Get media stream detail
     * @request GET:/api/v4/media/streams/{id}
     * @secure
     */
    v4MediaStreamsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetStreamRespApiRespBase>({
        path: `/api/v4/media/streams/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V4MediaStreamsPartialUpdate
     * @summary Modify media stream
     * @request PATCH:/api/v4/media/streams/{id}
     * @secure
     */
    v4MediaStreamsPartialUpdate: (
      id: number,
      data: {
        /**
         * Media Item Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id: number;
        Platform: EnumPlatform;
        /**
         * StreamId
         * @minLength 0
         * @maxLength 25
         */
        StreamId?: string;
        /**
         * Stream Url
         * @minLength 0
         * @maxLength 150
         */
        StreamUrl?: string;
        /**
         * Screen Cap file
         * @format binary
         */
        ScreenCapFile?: File;
        /**
         * GameId
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
        /**
         * LanguageId
         * @format int32
         * @min 1
         * @max 32767
         */
        LanguageId: number;
        /** Is Event Stream */
        IsEventStream: boolean;
        /** Is Pro Player */
        IsProPlayer: boolean;
        /** Is Celeb Caster */
        IsCelebCaster: boolean;
        /**
         * Next Broadcast At
         * @format int64
         * @min 1
         */
        NextBroadcastAt?: number;
        /**
         * Title
         * @minLength 0
         * @maxLength 60
         */
        Title: string;
        /** Is Featured */
        IsFeatured: boolean;
        /**
         * Description
         * @minLength 0
         * @maxLength 255
         */
        Description?: string;
        /** Tags : Maximum of 5 tags(25 characters maximum per tag) */
        Tags?: ModStreamTag[];
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModStreamRespApiRespBase>({
        path: `/api/v4/media/streams/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V4MediaStreamsDelete
     * @summary Delete media stream
     * @request DELETE:/api/v4/media/streams/{id}
     * @secure
     */
    v4MediaStreamsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelStreamRespApiRespBase>({
        path: `/api/v4/media/streams/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V4MediaFuzzyStreamsList
     * @summary Get fuzzy media streams
     * @request GET:/api/v4/media/fuzzy-streams
     * @secure
     */
    v4MediaFuzzyStreamsList: (
      query?: {
        /**
         * FuzzyPrefix
         * @minLength 0
         * @maxLength 20
         */
        FuzzyPrefix?: string;
        /**
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyMediaStreamsRespApiRespBase>({
        path: `/api/v4/media/fuzzy-streams`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V4MediaFuzzyVideosList
     * @summary Get fuzzy media videos
     * @request GET:/api/v4/media/fuzzy-videos
     * @secure
     */
    v4MediaFuzzyVideosList: (
      query?: {
        /**
         * FuzzyPrefix
         * @minLength 0
         * @maxLength 20
         */
        FuzzyPrefix?: string;
        /**
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyMediaVideosRespApiRespBase>({
        path: `/api/v4/media/fuzzy-videos`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V4MediaVodsHostOptionsList
     * @summary Get media vod host options
     * @request GET:/api/v4/media/vods/host-options
     * @secure
     */
    v4MediaVodsHostOptionsList: (params: RequestParams = {}) =>
      this.request<any, GetMediaVodHostOptionsResp>({
        path: `/api/v4/media/vods/host-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V4MediaVodsList
     * @summary Get media vods
     * @request GET:/api/v4/media/vods
     * @secure
     */
    v4MediaVodsList: (
      query?: {
        /**
         * Vod id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        VodId?: number;
        /**
         * vod title
         * @minLength 3
         * @maxLength 30
         */
        Title?: string;
        /**
         * Host id
         * @format int32
         * @min 0
         * @max 32767
         */
        HostId?: number;
        /**
         * Host video id
         * @minLength 1
         * @maxLength 40
         */
        HostVideoId?: string;
        /** Site section ids */
        SiteSectionIds?: number[];
        /**
         * Created From
         * @format int64
         */
        CreatedFrom?: number;
        /**
         * Created To
         * @format int64
         */
        CreatedTo?: number;
        /**
         * Creator user name
         * @minLength 3
         * @maxLength 20
         */
        Creator?: string;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetMediaVodsRespApiRespBase>({
        path: `/api/v4/media/vods`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V4MediaVodsCreate
     * @summary Add media vod
     * @request POST:/api/v4/media/vods
     * @secure
     */
    v4MediaVodsCreate: (data: AddMediaVodReq, params: RequestParams = {}) =>
      this.request<any, AddMediaVodRespApiRespBase>({
        path: `/api/v4/media/vods`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V4MediaVodsDetail
     * @summary Get media vod
     * @request GET:/api/v4/media/vods/{id}
     * @secure
     */
    v4MediaVodsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetMediaVodRespApiRespBase>({
        path: `/api/v4/media/vods/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V4MediaVodsPartialUpdate
     * @summary Modify media vod
     * @request PATCH:/api/v4/media/vods/{id}
     * @secure
     */
    v4MediaVodsPartialUpdate: (id: number, data: ModMediaVodReq, params: RequestParams = {}) =>
      this.request<any, ModMediaVodRespApiRespBase>({
        path: `/api/v4/media/vods/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V4MediaVodsDelete
     * @summary Delete media vod
     * @request DELETE:/api/v4/media/vods/{id}
     * @secure
     */
    v4MediaVodsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelMediaVodRespApiRespBase>({
        path: `/api/v4/media/vods/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V4MediaVodsDownloadCsvList
     * @summary Download media vods csv
     * @request GET:/api/v4/media/vods/download-csv
     * @secure
     */
    v4MediaVodsDownloadCsvList: (
      query?: {
        /**
         * Page size
         * @format int32
         * @min 1
         * @max 10000
         */
        PageSize?: number;
        /**
         * Vod id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        VodId?: number;
        /**
         * vod title
         * @minLength 3
         * @maxLength 30
         */
        Title?: string;
        /**
         * Host id
         * @format int32
         * @min 0
         * @max 32767
         */
        HostId?: number;
        /**
         * Host video id
         * @minLength 1
         * @maxLength 40
         */
        HostVideoId?: string;
        /** Site section ids */
        SiteSectionIds?: number[];
        /**
         * Created From
         * @format int64
         */
        CreatedFrom?: number;
        /**
         * Created To
         * @format int64
         */
        CreatedTo?: number;
        /**
         * Creator user name
         * @minLength 3
         * @maxLength 20
         */
        Creator?: string;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v4/media/vods/download-csv`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V4ModesList
     * @summary Get modes by condition
     * @request GET:/api/v4/modes
     * @secure
     */
    v4ModesList: (
      query?: {
        /**
         * Modes Name
         * @minLength 0
         * @maxLength 255
         */
        Name?: string;
        /**
         * Modes Abbreviation
         * @minLength 0
         * @maxLength 5
         */
        Abbreviation?: string;
        /**
         * Modes Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetModesRespApiRespBase>({
        path: `/api/v4/modes`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V4ModesCreate
     * @summary Add new game mode
     * @request POST:/api/v4/modes
     * @secure
     */
    v4ModesCreate: (data: AddModeReq, params: RequestParams = {}) =>
      this.request<any, AddModeRespApiRespBase>({
        path: `/api/v4/modes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V4ModesDetail
     * @summary Get game mode
     * @request GET:/api/v4/modes/{id}
     * @secure
     */
    v4ModesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetModeRespApiRespBase>({
        path: `/api/v4/modes/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V4ModesPartialUpdate
     * @summary Modify game mode
     * @request PATCH:/api/v4/modes/{id}
     * @secure
     */
    v4ModesPartialUpdate: (id: number, data: ModModeReq, params: RequestParams = {}) =>
      this.request<any, ModModeRespApiRespBase>({
        path: `/api/v4/modes/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V4ModesDelete
     * @summary Delete game mode
     * @request DELETE:/api/v4/modes/{id}
     * @secure
     */
    v4ModesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelModeRespApiRespBase>({
        path: `/api/v4/modes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V4ModesTranslationsDetail
     * @summary Get game mode translations
     * @request GET:/api/v4/modes/{id}/translations
     * @secure
     */
    v4ModesTranslationsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetModeTranslationsRespApiRespBase>({
        path: `/api/v4/modes/${id}/translations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V4ModesTranslationsPartialUpdate
     * @summary Modify game mode translations
     * @request PATCH:/api/v4/modes/{id}/translations
     * @secure
     */
    v4ModesTranslationsPartialUpdate: (id: number, data: ModModeTranslationsReq, params: RequestParams = {}) =>
      this.request<any, ModModeTranslationsRespApiRespBase>({
        path: `/api/v4/modes/${id}/translations`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V4ModesOptionsList
     * @summary Get modes options
     * @request GET:/api/v4/modes/options
     * @secure
     */
    v4ModesOptionsList: (
      query: {
        /**
         * Game id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, Int16ItemListApiRespBase>({
        path: `/api/v4/modes/options`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name V4MessagingNotificationTemplatesList
     * @summary Get Notification Templates
     * @request GET:/api/v4/messaging-notification-templates
     * @secure
     */
    v4MessagingNotificationTemplatesList: (
      query?: {
        /**
         * Frontend id
         * null: All
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId?: number;
        /** @format int32 */
        NotificationTemplateType?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetNotificationTemplatesRespApiRespBase>({
        path: `/api/v4/messaging-notification-templates`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name V4MessagingNotificationTemplatesCreate
     * @summary Add Notification Template
     * @request POST:/api/v4/messaging-notification-templates
     * @secure
     */
    v4MessagingNotificationTemplatesCreate: (data: AddNotificationTemplateReq, params: RequestParams = {}) =>
      this.request<any, AddNotificationTemplateRespApiRespBase>({
        path: `/api/v4/messaging-notification-templates`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name V4MessagingNotificationTemplatesDetail
     * @summary Get Notification Template
     * @request GET:/api/v4/messaging-notification-templates/{id}
     * @secure
     */
    v4MessagingNotificationTemplatesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetNotificationTemplateRespApiRespBase>({
        path: `/api/v4/messaging-notification-templates/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name V4MessagingNotificationTemplatesPartialUpdate
     * @summary Modify Notification Template
     * @request PATCH:/api/v4/messaging-notification-templates/{id}
     * @secure
     */
    v4MessagingNotificationTemplatesPartialUpdate: (
      id: number,
      data: ModNotificationTemplateReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModNotificationTemplateRespApiRespBase>({
        path: `/api/v4/messaging-notification-templates/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name V4MessagingNotificationTemplatesDelete
     * @summary Delete Notification Template
     * @request DELETE:/api/v4/messaging-notification-templates/{id}
     * @secure
     */
    v4MessagingNotificationTemplatesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelNotificationTemplateRespApiRespBase>({
        path: `/api/v4/messaging-notification-templates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneSignalApps
     * @name V4MessagingOnesignalAppsList
     * @summary Get One Signal Apps
     * @request GET:/api/v4/messaging-onesignal-apps
     * @secure
     */
    v4MessagingOnesignalAppsList: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetOneSignalAppsRespApiRespBase>({
        path: `/api/v4/messaging-onesignal-apps`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneSignalApps
     * @name V4MessagingOnesignalAppsCreate
     * @summary Add One Signal App
     * @request POST:/api/v4/messaging-onesignal-apps
     * @secure
     */
    v4MessagingOnesignalAppsCreate: (data: AddOneSignalAppReq, params: RequestParams = {}) =>
      this.request<any, AddOneSignalAppRespApiRespBase>({
        path: `/api/v4/messaging-onesignal-apps`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneSignalApps
     * @name V4MessagingOnesignalAppsDetail
     * @summary Get One Signal App
     * @request GET:/api/v4/messaging-onesignal-apps/{id}
     * @secure
     */
    v4MessagingOnesignalAppsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetOneSignalAppRespApiRespBase>({
        path: `/api/v4/messaging-onesignal-apps/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneSignalApps
     * @name V4MessagingOnesignalAppsPartialUpdate
     * @summary Modify One Signal App
     * @request PATCH:/api/v4/messaging-onesignal-apps/{id}
     * @secure
     */
    v4MessagingOnesignalAppsPartialUpdate: (id: number, data: ModOneSignalAppReq, params: RequestParams = {}) =>
      this.request<any, ModOneSignalAppRespApiRespBase>({
        path: `/api/v4/messaging-onesignal-apps/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneSignalApps
     * @name V4MessagingOnesignalAppsDelete
     * @summary Delete One Signal App
     * @request DELETE:/api/v4/messaging-onesignal-apps/{id}
     * @secure
     */
    v4MessagingOnesignalAppsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelOneSignalAppRespApiRespBase>({
        path: `/api/v4/messaging-onesignal-apps/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsStatesList
     * @summary Get state options
     * @request GET:/api/v4/options/states
     * @secure
     */
    v4OptionsStatesList: (params: RequestParams = {}) =>
      this.request<any, GetStateOptionsRespApiRespBase>({
        path: `/api/v4/options/states`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsContactTypesList
     * @summary Get contact types
     * @request GET:/api/v4/options/contact-types
     * @secure
     */
    v4OptionsContactTypesList: (params: RequestParams = {}) =>
      this.request<any, GetContactTypesRespApiRespBase>({
        path: `/api/v4/options/contact-types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsFrontendsList
     * @summary Get frontend options
     * @request GET:/api/v4/options/frontends
     * @secure
     */
    v4OptionsFrontendsList: (params: RequestParams = {}) =>
      this.request<any, GetFrontendOptionsRespApiRespBase>({
        path: `/api/v4/options/frontends`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsFrontendsByUserList
     * @summary Get frontend options by user
     * @request GET:/api/v4/options/frontends-by-user
     * @secure
     */
    v4OptionsFrontendsByUserList: (params: RequestParams = {}) =>
      this.request<any, GetFrontendOptionsRespApiRespBase>({
        path: `/api/v4/options/frontends-by-user`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsLocalesList
     * @summary Get locale options
     * @request GET:/api/v4/options/locales
     * @secure
     */
    v4OptionsLocalesList: (params: RequestParams = {}) =>
      this.request<any, GetLocaleOptionsRespApiRespBase>({
        path: `/api/v4/options/locales`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsFrontendLocalesList
     * @summary Get frontend locale options
     * @request GET:/api/v4/options/frontend-locales
     * @secure
     */
    v4OptionsFrontendLocalesList: (params: RequestParams = {}) =>
      this.request<any, GetFrontendLocaleOptionsRespApiRespBase>({
        path: `/api/v4/options/frontend-locales`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsSiteSectionsList
     * @summary Get site section options
     * @request GET:/api/v4/options/site-sections
     * @secure
     */
    v4OptionsSiteSectionsList: (params: RequestParams = {}) =>
      this.request<any, GetSiteSectionsOptionsRespApiRespBase>({
        path: `/api/v4/options/site-sections`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsCountriesList
     * @summary Get country options
     * @request GET:/api/v4/options/countries
     * @secure
     */
    v4OptionsCountriesList: (params: RequestParams = {}) =>
      this.request<any, GetCountryOptionsRespApiRespBase>({
        path: `/api/v4/options/countries`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsGendersList
     * @summary Get gender options
     * @request GET:/api/v4/options/genders
     * @secure
     */
    v4OptionsGendersList: (params: RequestParams = {}) =>
      this.request<any, GetGenderOptionsRespApiRespBase>({
        path: `/api/v4/options/genders`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsProxyList
     * @summary Get GG Code Info
     * @request GET:/api/v4/options/proxy
     * @secure
     */
    v4OptionsProxyList: (
      query?: {
        url?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGgCodeInfoRespApiRespBase>({
        path: `/api/v4/options/proxy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsNotificationTypesList
     * @summary Get Notification Type Options
     * @request GET:/api/v4/options/notification-types
     * @secure
     */
    v4OptionsNotificationTypesList: (params: RequestParams = {}) =>
      this.request<any, GetNotificationTypeOptionsRespApiRespBase>({
        path: `/api/v4/options/notification-types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsLanguagesList
     * @summary Get language options
     * @request GET:/api/v4/options/languages
     * @secure
     */
    v4OptionsLanguagesList: (params: RequestParams = {}) =>
      this.request<any, GetLanguagesRespApiRespBase>({
        path: `/api/v4/options/languages`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsGamesList
     * @summary Get games options
     * @request GET:/api/v4/options/games
     * @secure
     */
    v4OptionsGamesList: (params: RequestParams = {}) =>
      this.request<any, GetGameOptionsRespApiRespBase>({
        path: `/api/v4/options/games`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsBroadcastTalentRolesList
     * @summary Get broadcast talent roles options
     * @request GET:/api/v4/options/broadcast-talent-roles
     * @secure
     */
    v4OptionsBroadcastTalentRolesList: (params: RequestParams = {}) =>
      this.request<any, GetBroadcastTalentRoleOptionsRespApiRespBase>({
        path: `/api/v4/options/broadcast-talent-roles`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsServersList
     * @summary Get servers(locations) options
     * @request GET:/api/v4/options/servers
     * @secure
     */
    v4OptionsServersList: (
      query?: {
        /** @format int32 */
        gameId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetServerOptionsRespListApiRespBase>({
        path: `/api/v4/options/servers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsTournamentPointsAwardedList
     * @summary Get tournament points awarded options
     * @request GET:/api/v4/options/tournament/points-awarded
     * @secure
     */
    v4OptionsTournamentPointsAwardedList: (params: RequestParams = {}) =>
      this.request<any, GetPointsAwardedOptionsRespListApiRespBase>({
        path: `/api/v4/options/tournament/points-awarded`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsEarningPrizePoolStatusList
     * @summary Get earning prize pool status
     * @request GET:/api/v4/options/earning-prize-pool-status
     * @secure
     */
    v4OptionsEarningPrizePoolStatusList: (params: RequestParams = {}) =>
      this.request<any, GetPrizePoolStatusOptionsRespApiRespBase>({
        path: `/api/v4/options/earning-prize-pool-status`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsCurrenciesList
     * @summary Get currency options
     * @request GET:/api/v4/options/currencies
     * @secure
     */
    v4OptionsCurrenciesList: (params: RequestParams = {}) =>
      this.request<any, GetPrizePoolStatusOptionsRespApiRespBase>({
        path: `/api/v4/options/currencies`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsTournamentStatesList
     * @summary Get tournament state options
     * @request GET:/api/v4/options/tournament-states
     * @secure
     */
    v4OptionsTournamentStatesList: (params: RequestParams = {}) =>
      this.request<any, GetParentTournamentStateOptionsRespApiRespBase>({
        path: `/api/v4/options/tournament-states`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsTournamentOpponentsList
     * @summary Get tournament opponents options
     * @request GET:/api/v4/options/tournament-opponents
     * @secure
     */
    v4OptionsTournamentOpponentsList: (
      query?: {
        /** @format int32 */
        childTournamentId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, Int32ItemListApiRespBase>({
        path: `/api/v4/options/tournament-opponents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V4OptionsGameResultsList
     * @summary Get game result options
     * @request GET:/api/v4/options/game-results
     * @secure
     */
    v4OptionsGameResultsList: (params: RequestParams = {}) =>
      this.request<any, Int16ItemListApiRespBase>({
        path: `/api/v4/options/game-results`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pages
     * @name V4PagesList
     * @summary Get pages byt conditions
     * @request GET:/api/v4/pages
     * @secure
     */
    v4PagesList: (
      query?: {
        /**
         * Title
         * @minLength 1
         * @maxLength 20
         */
        Title?: string;
        /**
         * Frontend id
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId?: number;
        /**
         * Create user name
         * @minLength 1
         * @maxLength 20
         */
        Author?: string;
        /**
         * Page id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageId?: number;
        /**
         * Updated from
         * @format int64
         * @min 0
         */
        UpdatedFrom?: number;
        /**
         * Updated to
         * @format int64
         * @min 0
         */
        UpdatedTo?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetPagesRespApiRespBase>({
        path: `/api/v4/pages`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pages
     * @name V4PagesCreate
     * @summary Add page
     * @request POST:/api/v4/pages
     * @secure
     */
    v4PagesCreate: (data: AddPageReq, params: RequestParams = {}) =>
      this.request<any, AddPageRespApiRespBase>({
        path: `/api/v4/pages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pages
     * @name V4PagesDelete
     * @summary Delete page
     * @request DELETE:/api/v4/pages
     * @secure
     */
    v4PagesDelete: (data: DelPageReq, params: RequestParams = {}) =>
      this.request<any, DelPageRespApiRespBase>({
        path: `/api/v4/pages`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pages
     * @name V4PagesDetail
     * @summary Get page
     * @request GET:/api/v4/pages/{id}
     * @secure
     */
    v4PagesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetPageRespApiRespBase>({
        path: `/api/v4/pages/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pages
     * @name V4PagesPartialUpdate
     * @summary Modify page
     * @request PATCH:/api/v4/pages/{id}
     * @secure
     */
    v4PagesPartialUpdate: (id: number, data: ModPageReq, params: RequestParams = {}) =>
      this.request<any, ModPageRespApiRespBase>({
        path: `/api/v4/pages/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V4PlayersList
     * @summary Get players
     * @request GET:/api/v4/players
     * @secure
     */
    v4PlayersList: (
      query?: {
        /**
         * Player Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id?: number;
        /**
         * Player Name
         * @minLength 0
         * @maxLength 30
         */
        NickName?: string;
        /**
         * First Name
         * @minLength 0
         * @maxLength 50
         */
        FirstName?: string;
        /**
         * Last Name
         * @minLength 0
         * @maxLength 50
         */
        LastName?: string;
        /**
         * Primary Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        PrimaryGameId?: number;
        /**
         * CountryId
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId?: number;
        /**
         * Created at from
         * @format int64
         */
        CreatedAtFrom?: number;
        /**
         * Created at to
         * @format int64
         */
        CreatedAtTo?: number;
        /**
         * Game Account
         * @minLength 0
         * @maxLength 50
         */
        GameAccount?: string;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetPlayersRespApiRespBase>({
        path: `/api/v4/players`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V4PlayersCreate
     * @summary Add player
     * @request POST:/api/v4/players
     * @secure
     */
    v4PlayersCreate: (
      data: {
        /**
         * User id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        UserId?: number;
        /** Is active */
        IsActive: boolean;
        /**
         * Nickname
         * @minLength 0
         * @maxLength 30
         */
        NickName: string;
        /**
         * Firstname
         * @minLength 0
         * @maxLength 50
         */
        FirstName?: string;
        /**
         * Lastname
         * @minLength 0
         * @maxLength 50
         */
        LastName?: string;
        Gender: EnumGender;
        /**
         * Date of birth
         * ex:2022-12-01
         * @format date
         */
        DateOfBirth?: string;
        /**
         * Country id
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId: number;
        /**
         * Initial rating
         * @format int32
         * @min 1
         * @max 32767
         */
        InitialRating?: number;
        /**
         * Primary game id
         * @format int32
         * @min 1
         * @max 32767
         */
        PrimaryGameId?: number;
        /**
         * Image
         * @format binary
         */
        Image?: File;
        /**
         * Description
         * @minLength 0
         * @maxLength 5000
         */
        Descriptions?: string;
        /**
         * Facebook
         * @minLength 0
         * @maxLength 100
         */
        FaceBook?: string;
        /**
         * Twitter
         * @minLength 0
         * @maxLength 100
         */
        Twitter?: string;
        /**
         * Youtube
         * @minLength 0
         * @maxLength 100
         */
        Youtube?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddPlayerRespApiRespBase>({
        path: `/api/v4/players`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V4PlayersDetail
     * @summary Get player
     * @request GET:/api/v4/players/{id}
     * @secure
     */
    v4PlayersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetPlayerRespApiRespBase>({
        path: `/api/v4/players/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V4PlayersPartialUpdate
     * @summary Modify player
     * @request PATCH:/api/v4/players/{id}
     * @secure
     */
    v4PlayersPartialUpdate: (
      id: number,
      data: {
        /**
         * Player id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PlayerId: number;
        /**
         * User id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        UserId?: number;
        /** Is active */
        IsActive: boolean;
        /**
         * Nickname
         * @minLength 0
         * @maxLength 30
         */
        NickName: string;
        /**
         * Firstname
         * @minLength 0
         * @maxLength 50
         */
        FirstName?: string;
        /**
         * Lastname
         * @minLength 0
         * @maxLength 50
         */
        LastName?: string;
        Gender: EnumGender;
        /**
         * Date of birth
         * ex:2022-12-01
         * @format date
         */
        DateOfBirth?: string;
        /**
         * Country id
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId: number;
        /**
         * Primary game id
         * @format int32
         * @min 1
         * @max 32767
         */
        PrimaryGameId?: number;
        /**
         * Image
         * @format binary
         */
        Image?: File;
        /**
         * is remove image
         * if IsRemoveImage = true will remove Image and set ImageFilePath = null
         */
        IsRemoveImage?: boolean;
        /**
         * Descriptions
         * @minLength 0
         * @maxLength 5000
         */
        Descriptions?: string;
        /**
         * Facebook
         * @minLength 0
         * @maxLength 100
         */
        FaceBook?: string;
        /**
         * Twitter
         * @minLength 0
         * @maxLength 100
         */
        Twitter?: string;
        /**
         * Youtube
         * @minLength 0
         * @maxLength 100
         */
        Youtube?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModPlayerRespApiRespBase>({
        path: `/api/v4/players/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V4PlayersDelete
     * @summary Delete player
     * @request DELETE:/api/v4/players/{id}
     * @secure
     */
    v4PlayersDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelPlayerRespApiRespBase>({
        path: `/api/v4/players/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V4PlayersFuzzyList
     * @summary Get fuzzy players
     * @request GET:/api/v4/players/fuzzy
     * @secure
     */
    v4PlayersFuzzyList: (
      query: {
        /**
         * Fuzzy prefix
         * @minLength 0
         * @maxLength 30
         */
        FuzzyPrefix: string;
        /**
         * Max count
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyPlayersRespApiRespBase>({
        path: `/api/v4/players/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V4PlayersUsersDetail
     * @summary Get User
     * @request GET:/api/v4/players/users/{id}
     * @secure
     */
    v4PlayersUsersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetUserForPlayerRespApiRespBase>({
        path: `/api/v4/players/users/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V4PlayersMediaItemsDetail
     * @summary Get player Media items
     * @request GET:/api/v4/players/{playerid}/media-items
     * @secure
     */
    v4PlayersMediaItemsDetail: (
      playerid: number,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetPlayerMediaItemsRespApiRespBase>({
        path: `/api/v4/players/${playerid}/media-items`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V4PlayersMediaItemsCreate
     * @summary Add player new Media items
     * @request POST:/api/v4/players/{playerid}/media-items
     * @secure
     */
    v4PlayersMediaItemsCreate: (
      playerid: number,
      query: {
        /** Media item Ids */
        MediaItems: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddPlayerMediaItemRespApiRespBase>({
        path: `/api/v4/players/${playerid}/media-items`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V4PlayersMediaItemsDelete
     * @summary Delete player Media item
     * @request DELETE:/api/v4/players/{playerid}/media-items/{mediaitemid}
     * @secure
     */
    v4PlayersMediaItemsDelete: (playerid: number, mediaitemid: number, params: RequestParams = {}) =>
      this.request<any, DelPlayerMediaItemRespApiRespBase>({
        path: `/api/v4/players/${playerid}/media-items/${mediaitemid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesRoleOptionsList
     * @summary Get role options
     * @request GET:/api/v4/roles/role-options
     * @secure
     */
    v4RolesRoleOptionsList: (params: RequestParams = {}) =>
      this.request<any, GetRoleOptionsByGroupRespApiRespBase>({
        path: `/api/v4/roles/role-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesUsersDetail
     * @summary Get users by role
     * @request GET:/api/v4/roles/users/{id}
     * @secure
     */
    v4RolesUsersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetUsersByRoleRespApiRespBase>({
        path: `/api/v4/roles/users/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesList
     * @summary Get roles
     * @request GET:/api/v4/roles
     * @secure
     */
    v4RolesList: (
      query?: {
        /** Role ids */
        RoleIds?: number[];
        /** Group ids */
        GroupIds?: number[];
        /** Frontend ids */
        FrontendIds?: number[];
        /**
         * Group remark
         * @minLength 3
         * @maxLength 20
         */
        Remark?: string;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetRolesByGroupRespApiRespBase>({
        path: `/api/v4/roles`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesCreate
     * @summary Add role
     * @request POST:/api/v4/roles
     * @secure
     */
    v4RolesCreate: (data: AddRoleReq, params: RequestParams = {}) =>
      this.request<any, AddRoleRespApiRespBase>({
        path: `/api/v4/roles`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesDetail
     * @summary Get role
     * @request GET:/api/v4/roles/{id}
     * @secure
     */
    v4RolesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetRoleRespApiRespBase>({
        path: `/api/v4/roles/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesPartialUpdate
     * @summary Modify Role
     * @request PATCH:/api/v4/roles/{id}
     * @secure
     */
    v4RolesPartialUpdate: (id: number, data: ModRoleReq, params: RequestParams = {}) =>
      this.request<any, ModRoleRespApiRespBase>({
        path: `/api/v4/roles/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesDelete
     * @summary Delete role
     * @request DELETE:/api/v4/roles/{id}
     * @secure
     */
    v4RolesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelRoleRespApiRespBase>({
        path: `/api/v4/roles/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesAssignRolePartialUpdate
     * @summary Assign role
     * @request PATCH:/api/v4/roles/assign-role
     * @secure
     */
    v4RolesAssignRolePartialUpdate: (data: AssignRoleReq, params: RequestParams = {}) =>
      this.request<any, AssignRoleRespApiRespBase>({
        path: `/api/v4/roles/assign-role`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesUnassignRoleDelete
     * @summary UnAssign role
     * @request DELETE:/api/v4/roles/unassign-role
     * @secure
     */
    v4RolesUnassignRoleDelete: (data: UnAssignRoleReq, params: RequestParams = {}) =>
      this.request<any, UnAssignRoleRespApiRespBase>({
        path: `/api/v4/roles/unassign-role`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesBlankPermissionsList
     * @summary Get role blank permissions
     * @request GET:/api/v4/roles/blank-permissions
     * @secure
     */
    v4RolesBlankPermissionsList: (params: RequestParams = {}) =>
      this.request<any, GetRoleBlankPermissionsRespApiRespBase>({
        path: `/api/v4/roles/blank-permissions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V4RolesTemplatesDetail
     * @summary Get role templates by group
     * @request GET:/api/v4/roles/templates/{id}
     * @secure
     */
    v4RolesTemplatesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetRoleTemplatesByGroupRespApiRespBase>({
        path: `/api/v4/roles/templates/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Servers
     * @name V4ServersList
     * @summary Get servers by condition
     * @request GET:/api/v4/servers
     * @secure
     */
    v4ServersList: (
      query?: {
        /**
         * Server Name
         * @minLength 0
         * @maxLength 50
         */
        Name?: string;
        /**
         * Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetServersRespApiRespBase>({
        path: `/api/v4/servers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Servers
     * @name V4ServersCreate
     * @summary Add new tournaments server
     * @request POST:/api/v4/servers
     * @secure
     */
    v4ServersCreate: (
      data: {
        /**
         * Server Name
         * @minLength 0
         * @maxLength 50
         */
        Name: string;
        /**
         * Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddServerRespApiRespBase>({
        path: `/api/v4/servers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Servers
     * @name V4ServersDetail
     * @summary Get tournaments server detail
     * @request GET:/api/v4/servers/{id}
     * @secure
     */
    v4ServersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetServerRespApiRespBase>({
        path: `/api/v4/servers/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Servers
     * @name V4ServersPartialUpdate
     * @summary Modify tournaments server
     * @request PATCH:/api/v4/servers/{id}
     * @secure
     */
    v4ServersPartialUpdate: (
      id: number,
      data: {
        /**
         * Server Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id: number;
        /**
         * Server Name
         * @minLength 0
         * @maxLength 50
         */
        Name: string;
        /** Is Frozen */
        IsFrozen: boolean;
        /**
         * Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModServerRespApiRespBase>({
        path: `/api/v4/servers/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Servers
     * @name V4ServersDelete
     * @summary Delete tournaments server
     * @request DELETE:/api/v4/servers/{id}
     * @secure
     */
    v4ServersDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelServerRespApiRespBase>({
        path: `/api/v4/servers/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSections
     * @name V4SitesectionsSiteSectionsList
     * @summary Get Site-Sections
     * @request GET:/api/v4/sitesections/site-sections
     * @secure
     */
    v4SitesectionsSiteSectionsList: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        "Filters.Id"?: number;
        /**
         * @minLength 1
         * @maxLength 40
         */
        "Filters.Name"?: string;
        /**
         * @minLength 1
         * @maxLength 20
         */
        "Filters.GameName"?: string;
        "Filters.Hidden"?: boolean;
        "Sorts.Id"?: EnumFieldSort;
        "Sorts.GameName"?: EnumFieldSort;
        "Sorts.Name"?: EnumFieldSort;
        "Sorts.Hidden"?: EnumFieldSort;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetSiteSectionsRespApiRespBase>({
        path: `/api/v4/sitesections/site-sections`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSections
     * @name V4SitesectionsSiteSectionsCreate
     * @summary Add Site-Sections
     * @request POST:/api/v4/sitesections/site-sections
     * @secure
     */
    v4SitesectionsSiteSectionsCreate: (
      data: {
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * @minLength 1
         * @maxLength 40
         */
        Name: string;
        Hidden: boolean;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        Position: number;
        /** @format binary */
        HeaderImage?: File;
        /** @format binary */
        BackGroundImage?: File;
        /** @format binary */
        IconImage?: File;
        /** @format binary */
        LogoImage?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddSiteSectionsRespApiRespBase>({
        path: `/api/v4/sitesections/site-sections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSections
     * @name V4SitesectionsSiteSectionsDetail
     * @summary Get Site-Section
     * @request GET:/api/v4/sitesections/site-sections/{id}
     * @secure
     */
    v4SitesectionsSiteSectionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetSiteSectionRespApiRespBase>({
        path: `/api/v4/sitesections/site-sections/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSections
     * @name V4SitesectionsSiteSectionsPartialUpdate
     * @summary Modify Site-Sections
     * @request PATCH:/api/v4/sitesections/site-sections/{id}
     * @secure
     */
    v4SitesectionsSiteSectionsPartialUpdate: (
      id: number,
      data: {
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        Id: number;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * @minLength 1
         * @maxLength 40
         */
        Name?: string;
        Hidden?: boolean;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        Position?: number;
        /** @format binary */
        HeaderImage?: File;
        /** @format binary */
        BackGroundImage?: File;
        /** @format binary */
        IconImage?: File;
        /** @format binary */
        LogoImage?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModSiteSectionsRespApiRespBase>({
        path: `/api/v4/sitesections/site-sections/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSections
     * @name V4SitesectionsSiteSectionsDelete
     * @summary Delete Site-Sections
     * @request DELETE:/api/v4/sitesections/site-sections/{id}
     * @secure
     */
    v4SitesectionsSiteSectionsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelSiteSectionsRespApiRespBase>({
        path: `/api/v4/sitesections/site-sections/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name V4SponsorsList
     * @summary Get tournaments sponsors by condition
     * @request GET:/api/v4/sponsors
     * @secure
     */
    v4SponsorsList: (
      query?: {
        /**
         * Sponsor Name
         * @minLength 0
         * @maxLength 30
         */
        Name?: string;
        /**
         * Sponsor Url
         * @minLength 0
         * @maxLength 60
         */
        Website?: string;
        /**
         * Creator
         * @minLength 0
         * @maxLength 20
         */
        Creator?: string;
        /**
         * Last Updated From
         * @format int64
         */
        UpdatedFrom?: number;
        /**
         * Last Updated To
         * @format int64
         */
        UpdatedTo?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetSponsorsRespApiRespBase>({
        path: `/api/v4/sponsors`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name V4SponsorsCreate
     * @summary Add new Tournaments Sponsor
     * @request POST:/api/v4/sponsors
     * @secure
     */
    v4SponsorsCreate: (
      data: {
        /**
         * Sponsor Name
         * @minLength 0
         * @maxLength 30
         */
        Name: string;
        /**
         * Sponsor Description
         * @minLength 0
         * @maxLength 3000
         */
        Description: string;
        /**
         * Sponsor Logo
         * @format binary
         */
        ImageFile?: File;
        /**
         * Sponsor website url
         * @format uri
         * @minLength 0
         * @maxLength 60
         */
        Url: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddSponsorRespApiRespBase>({
        path: `/api/v4/sponsors`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name V4SponsorsDetail
     * @summary Get Tournaments Sponsor
     * @request GET:/api/v4/sponsors/{id}
     * @secure
     */
    v4SponsorsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetSponsorRespApiRespBase>({
        path: `/api/v4/sponsors/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name V4SponsorsPartialUpdate
     * @summary Modify Tournaments Sponsor
     * @request PATCH:/api/v4/sponsors/{id}
     * @secure
     */
    v4SponsorsPartialUpdate: (
      id: number,
      data: {
        /**
         * Sponsor Id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id: number;
        /**
         * Sponsor Name
         * @minLength 0
         * @maxLength 30
         */
        Name: string;
        /**
         * Sponsor Description
         * @minLength 0
         * @maxLength 3000
         */
        Description: string;
        /**
         * Sponsor Logo
         * @format binary
         */
        ImageFile?: File;
        /**
         * Sponsor website url
         * @format uri
         * @minLength 0
         * @maxLength 60
         */
        Url: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModSponsorRespApiRespBase>({
        path: `/api/v4/sponsors/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name V4SponsorsDelete
     * @summary Delete Tournaments Sponsor
     * @request DELETE:/api/v4/sponsors/{id}
     * @secure
     */
    v4SponsorsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelSponsorRespApiRespBase>({
        path: `/api/v4/sponsors/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name V4SponsorsFuzzyList
     * @summary Get fuzzy sponsors
     * @request GET:/api/v4/sponsors/fuzzy
     * @secure
     */
    v4SponsorsFuzzyList: (
      query: {
        /**
         * Fuzzy prefix
         * @minLength 0
         * @maxLength 30
         */
        FuzzyPrefix: string;
        /**
         * Max count
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzySponsorsRespApiRespBase>({
        path: `/api/v4/sponsors/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsList
     * @summary Get teams
     * @request GET:/api/v4/teams
     * @secure
     */
    v4TeamsList: (
      query?: {
        /**
         * TeamName
         * @minLength 1
         * @maxLength 50
         */
        TeamName?: string;
        /**
         * Team Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        TeamId?: number;
        /**
         * Player Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PlayerId?: number;
        /**
         * Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * Country Id
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId?: number;
        /**
         * Created at from
         * @format int64
         */
        UpdatedAtFrom?: number;
        /**
         * Created at to
         * @format int64
         */
        UpdatedAtTo?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetTeamsRespApiRespBase>({
        path: `/api/v4/teams`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsCreate
     * @summary Add team
     * @request POST:/api/v4/teams
     * @secure
     */
    v4TeamsCreate: (
      data: {
        /**
         * @minLength 0
         * @maxLength 50
         */
        TeamName: string;
        /**
         * @minLength 0
         * @maxLength 10
         */
        TeamTag: string;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId?: number;
        /** @format binary */
        Image?: File;
        /**
         * @minLength 0
         * @maxLength 5000
         */
        Description?: string;
        /**
         * @format int32
         * @min -32768
         * @max 32767
         */
        InitialRating?: number;
        ExcludeRankings: boolean;
        /**
         * @minLength 0
         * @maxLength 100
         */
        Facebook?: string;
        /**
         * @minLength 0
         * @maxLength 100
         */
        Twitter?: string;
        /**
         * @minLength 0
         * @maxLength 100
         */
        Youtube?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddTeamRespApiRespBase>({
        path: `/api/v4/teams`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsDetail
     * @summary Get team
     * @request GET:/api/v4/teams/{id}
     * @secure
     */
    v4TeamsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetTeamRespApiRespBase>({
        path: `/api/v4/teams/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsPartialUpdate
     * @summary Modify team
     * @request PATCH:/api/v4/teams/{id}
     * @secure
     */
    v4TeamsPartialUpdate: (
      id: number,
      data: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        TeamId: number;
        /**
         * @minLength 0
         * @maxLength 50
         */
        TeamName: string;
        /**
         * @minLength 0
         * @maxLength 10
         */
        TeamTag: string;
        /**
         * OwnerId
         * @format int32
         * @min 0
         * @max 2147483647
         */
        OwnerId?: number;
        /**
         * CaptainId
         * @format int32
         * @min 0
         * @max 2147483647
         */
        CaptainId?: number;
        /**
         * ManageId
         * @format int32
         * @min 0
         * @max 2147483647
         */
        ManageId?: number;
        ExcludedRankings: boolean;
        /** @format binary */
        Image?: File;
        /** if IsRemoveImage = true will remove Image and set ImageFilePath = null */
        IsRemoveImage?: boolean;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId?: number;
        /**
         * @minLength 0
         * @maxLength 5000
         */
        Description?: string;
        /**
         * @minLength 0
         * @maxLength 100
         */
        Facebook?: string;
        /**
         * @minLength 0
         * @maxLength 100
         */
        Twitter?: string;
        /**
         * @minLength 0
         * @maxLength 100
         */
        Youtube?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModTeamRespApiRespBase>({
        path: `/api/v4/teams/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsDelete
     * @summary Delete team
     * @request DELETE:/api/v4/teams/{id}
     * @secure
     */
    v4TeamsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelTeamRespApiRespBase>({
        path: `/api/v4/teams/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsTeamPlayersDetail
     * @summary Get team players
     * @request GET:/api/v4/teams/{teamid}/team-players
     * @secure
     */
    v4TeamsTeamPlayersDetail: (
      teamid: number,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetTeamPlayersRespApiRespBase>({
        path: `/api/v4/teams/${teamid}/team-players`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsTeamPlayersCreate
     * @summary Add team player
     * @request POST:/api/v4/teams/{teamid}/team-players
     * @secure
     */
    v4TeamsTeamPlayersCreate: (teamid: number, data: AddTeamPlayerReq, params: RequestParams = {}) =>
      this.request<any, AddTeamPlayerRespApiRespBase>({
        path: `/api/v4/teams/${teamid}/team-players`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsTeamPlayersDetail2
     * @summary Get team player
     * @request GET:/api/v4/teams/{teamid}/team-players/{teamplayerid}
     * @originalName v4TeamsTeamPlayersDetail
     * @duplicate
     * @secure
     */
    v4TeamsTeamPlayersDetail2: (teamid: number, teamplayerid: number, params: RequestParams = {}) =>
      this.request<any, GetTeamPlayerRespApiRespBase>({
        path: `/api/v4/teams/${teamid}/team-players/${teamplayerid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsTeamPlayersPartialUpdate
     * @summary Modify team player
     * @request PATCH:/api/v4/teams/{teamid}/team-players/{teamplayerid}
     * @secure
     */
    v4TeamsTeamPlayersPartialUpdate: (
      teamid: number,
      teamplayerid: number,
      data: ModTeamPlayerReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModTeamPlayerRespApiRespBase>({
        path: `/api/v4/teams/${teamid}/team-players/${teamplayerid}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsTeamPlayersDelete
     * @summary Delete team player
     * @request DELETE:/api/v4/teams/{teamid}/team-players/{teamplayerid}
     * @secure
     */
    v4TeamsTeamPlayersDelete: (teamid: number, teamplayerid: number, params: RequestParams = {}) =>
      this.request<any, DelTeamPlayerRespApiRespBase>({
        path: `/api/v4/teams/${teamid}/team-players/${teamplayerid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsFuzzyList
     * @summary Get fuzzy teams
     * @request GET:/api/v4/teams/fuzzy
     * @secure
     */
    v4TeamsFuzzyList: (
      query: {
        /**
         * @minLength 0
         * @maxLength 50
         */
        FuzzyPrefix: string;
        /**
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
        /**
         * Game id
         * @format int32
         */
        GameId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyTeamsRespApiRespBase>({
        path: `/api/v4/teams/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V4TeamsTeamPlayerOptionsDetail
     * @summary Get team player options for tournament registrations
     * @request GET:/api/v4/teams/{teamId}/team-player-options
     * @secure
     */
    v4TeamsTeamPlayerOptionsDetail: (teamId: number, params: RequestParams = {}) =>
      this.request<any, GetTeamPlayerOptionsRespApiRespBase>({
        path: `/api/v4/teams/${teamId}/team-player-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tools
     * @name ToolsClearAllMemoryCacheCreate
     * @summary Clear All Memory Cache
     * @request POST:/api/tools/clear-all-memory-cache
     * @secure
     */
    toolsClearAllMemoryCacheCreate: (
      query?: {
        "api-version"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/tools/clear-all-memory-cache`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tools
     * @name ToolsConvertTournamentDataPartialUpdate
     * @summary Convert tournament data
     * @request PATCH:/api/tools/convert-tournament-data
     * @secure
     */
    toolsConvertTournamentDataPartialUpdate: (
      query?: {
        "api-version"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/tools/convert-tournament-data`,
        method: "PATCH",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsFuzzyList
     * @summary Get fuzzy tournaments
     * @request GET:/api/v4/tournaments/fuzzy
     * @secure
     */
    v4TournamentsFuzzyList: (
      query: {
        /**
         * @minLength 0
         * @maxLength 80
         */
        FuzzyPrefix: string;
        /**
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyTournamentsRespApiRespBase>({
        path: `/api/v4/tournaments/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsBroadcastTalentsDetail
     * @summary Get parent tournament broadcast talents
     * @request GET:/api/v4/tournaments/parents/{parentId}/broadcast-talents
     * @secure
     */
    v4TournamentsParentsBroadcastTalentsDetail: (
      parentId: number,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetParentBroadcastTalentsRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/broadcast-talents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsBroadcastTalentsCreate
     * @summary Add parent tournament broadcast talent
     * @request POST:/api/v4/tournaments/parents/{parentId}/broadcast-talents
     * @secure
     */
    v4TournamentsParentsBroadcastTalentsCreate: (
      parentId: number,
      data: AddParentBroadcastTalentsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/broadcast-talents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsBroadcastTalentsDelete
     * @summary Delete parent tournament broadcast talents
     * @request DELETE:/api/v4/tournaments/parents/{parentId}/broadcast-talents/{broadcastTalentId}
     * @secure
     */
    v4TournamentsParentsBroadcastTalentsDelete: (
      parentId: number,
      broadcastTalentId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/broadcast-talents/${broadcastTalentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsStagesChildrenCreate
     * @summary Add child tournament
     * @request POST:/api/v4/tournaments/parents/{parentid}/stages/{stageid}/children
     * @secure
     */
    v4TournamentsParentsStagesChildrenCreate: (
      parentid: number,
      stageid: number,
      data: AddChildReq,
      params: RequestParams = {},
    ) =>
      this.request<any, AddChildRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/stages/${stageid}/children`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenDetail
     * @summary Get child tournament for edit
     * @request GET:/api/v4/tournaments/parents/{parentid}/children/{childid}
     * @secure
     */
    v4TournamentsParentsChildrenDetail: (parentid: number, childid: number, params: RequestParams = {}) =>
      this.request<any, GetChildTournamentRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenPartialUpdate
     * @summary Modify child tournament
     * @request PATCH:/api/v4/tournaments/parents/{parentid}/children/{childid}
     * @secure
     */
    v4TournamentsParentsChildrenPartialUpdate: (
      parentid: number,
      childid: number,
      data: ModChildReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModChildRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenDelete
     * @summary Delete child tournaments
     * @request DELETE:/api/v4/tournaments/parents/{parentid}/children/{childid}
     * @secure
     */
    v4TournamentsParentsChildrenDelete: (
      parentid: number,
      childid: number,
      data: DelChildReq,
      params: RequestParams = {},
    ) =>
      this.request<any, DelChildRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenDetailDetail
     * @summary Get child tournament for detail
     * @request GET:/api/v4/tournaments/parents/{parentid}/children/{childid}/detail
     * @secure
     */
    v4TournamentsParentsChildrenDetailDetail: (parentid: number, childid: number, params: RequestParams = {}) =>
      this.request<any, GetChildDetailRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/detail`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenStartTournamentPartialUpdate
     * @summary start child tournament
     * @request PATCH:/api/v4/tournaments/parents/{parentid}/children/{childid}/start-tournament
     * @secure
     */
    v4TournamentsParentsChildrenStartTournamentPartialUpdate: (
      parentid: number,
      childid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, StartTournamentRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/start-tournament`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsDataProvidersGridTournamentsList
     * @summary Get grid tournaments
     * @request GET:/api/v4/tournaments/data-providers/grid/tournaments
     * @secure
     */
    v4TournamentsDataProvidersGridTournamentsList: (
      query: {
        /**
         * Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * Date from
         * @format int64
         * @min 0
         */
        DateFrom: number;
        /**
         * Date to
         * @format int64
         * @min 0
         */
        DateTo: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGridTournamentsRespListApiRespBase>({
        path: `/api/v4/tournaments/data-providers/grid/tournaments`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsDataProvidersGridMatchesList
     * @summary Get grid matches
     * @request GET:/api/v4/tournaments/data-providers/grid/matches
     * @secure
     */
    v4TournamentsDataProvidersGridMatchesList: (
      query: {
        /**
         * Child Tournament Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ChildTournamentId: number;
        /**
         * Date from
         * @format int64
         * @min 0
         */
        DateFrom: number;
        /**
         * Date to
         * @format int64
         * @min 0
         */
        DateTo: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGridMatchesRespListApiRespBase>({
        path: `/api/v4/tournaments/data-providers/grid/matches`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenMediaItemsDetail
     * @summary Get child tournament Media items
     * @request GET:/api/v4/tournaments/parents/{parentid}/children/{childid}/media-items
     * @secure
     */
    v4TournamentsParentsChildrenMediaItemsDetail: (
      parentid: number,
      childid: number,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetChildMediaItemsRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/media-items`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenMediaItemsCreate
     * @summary Add child tournament new Media items
     * @request POST:/api/v4/tournaments/parents/{parentid}/children/{childid}/media-items
     * @secure
     */
    v4TournamentsParentsChildrenMediaItemsCreate: (
      parentid: number,
      childid: number,
      data: AddChildMediaItemReq,
      params: RequestParams = {},
    ) =>
      this.request<any, AddChildMediaItemRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/media-items`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenMediaItemsDelete
     * @summary Delete child tournament Media item
     * @request DELETE:/api/v4/tournaments/parents/{parentid}/children/{childid}/media-items/{mediaitemid}
     * @secure
     */
    v4TournamentsParentsChildrenMediaItemsDelete: (
      parentid: number,
      childid: number,
      mediaitemid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, DelChildMediaItemRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/media-items/${mediaitemid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsGameAccountsList
     * @summary Get GameAccounts
     * @request GET:/api/v4/tournaments/game-accounts
     * @secure
     */
    v4TournamentsGameAccountsList: (
      query: {
        /**
         * PlayerId
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PlayerId: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGameAccountsRespApiRespBase>({
        path: `/api/v4/tournaments/game-accounts`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsGameAccountsCreate
     * @summary Add GameAccount
     * @request POST:/api/v4/tournaments/game-accounts
     * @secure
     */
    v4TournamentsGameAccountsCreate: (
      data: {
        /**
         * PlayerId
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PlayerId: number;
        /**
         * GameId
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
        /**
         * Server Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ServerId?: number;
        /**
         * GameAccount Name
         * @minLength 0
         * @maxLength 50
         */
        GameAccountName: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddGameAccountRespApiRespBase>({
        path: `/api/v4/tournaments/game-accounts`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsGameAccountsDetail
     * @summary Get GameAccount
     * @request GET:/api/v4/tournaments/game-accounts/{id}
     * @secure
     */
    v4TournamentsGameAccountsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetGameAccountRespApiRespBase>({
        path: `/api/v4/tournaments/game-accounts/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsGameAccountsPartialUpdate
     * @summary Modify GameAccount
     * @request PATCH:/api/v4/tournaments/game-accounts/{id}
     * @secure
     */
    v4TournamentsGameAccountsPartialUpdate: (id: number, data: ModGameAccountReq, params: RequestParams = {}) =>
      this.request<any, ModGameAccountRespApiRespBase>({
        path: `/api/v4/tournaments/game-accounts/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsGameAccountsDelete
     * @summary Delete GameAccount
     * @request DELETE:/api/v4/tournaments/game-accounts/{id}
     * @secure
     */
    v4TournamentsGameAccountsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelGameAccountRespApiRespBase>({
        path: `/api/v4/tournaments/game-accounts/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsRoundsMatchesDetail
     * @summary Get child tournament matches or archived matches
     * @request GET:/api/v4/tournaments/rounds/{roundid}/matches
     * @secure
     */
    v4TournamentsRoundsMatchesDetail: (
      roundid: number,
      query?: {
        /** @default false */
        isArchived?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetMatchesRespListApiRespBase>({
        path: `/api/v4/tournaments/rounds/${roundid}/matches`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsRoundsMatchesPartialUpdate
     * @summary Modify child tournament matches
     * @request PATCH:/api/v4/tournaments/rounds/{roundid}/matches
     * @secure
     */
    v4TournamentsRoundsMatchesPartialUpdate: (roundid: number, data: ModMatchesReq, params: RequestParams = {}) =>
      this.request<any, ModMatchesRespApiRespBase>({
        path: `/api/v4/tournaments/rounds/${roundid}/matches`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsRoundsMatchesCreate
     * @summary Add new child tournament matches
     * @request POST:/api/v4/tournaments/rounds/{roundid}/matches
     * @secure
     */
    v4TournamentsRoundsMatchesCreate: (roundid: number, data: AddMatchReq, params: RequestParams = {}) =>
      this.request<any, AddMatchRespApiRespBase>({
        path: `/api/v4/tournaments/rounds/${roundid}/matches`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsRoundsMatchesDelete
     * @summary Delete child tournament match
     * @request DELETE:/api/v4/tournaments/rounds/{roundid}/matches/{matchid}
     * @secure
     */
    v4TournamentsRoundsMatchesDelete: (roundid: number, matchid: number, params: RequestParams = {}) =>
      this.request<any, DelMatchRespApiRespBase>({
        path: `/api/v4/tournaments/rounds/${roundid}/matches/${matchid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsRoundsMatchesPartialUpdate2
     * @summary Modify child tournament match archived
     * @request PATCH:/api/v4/tournaments/rounds/{roundid}/matches/{matchid}
     * @originalName v4TournamentsRoundsMatchesPartialUpdate
     * @duplicate
     * @secure
     */
    v4TournamentsRoundsMatchesPartialUpdate2: (roundid: number, matchid: number, params: RequestParams = {}) =>
      this.request<any, ModMatchArchivedRespApiRespBase>({
        path: `/api/v4/tournaments/rounds/${roundid}/matches/${matchid}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsChildrenReplaceOpponentsDetail
     * @summary Get child tournament replace opponents
     * @request GET:/api/v4/tournaments/children/{childid}/replace-opponents
     * @secure
     */
    v4TournamentsChildrenReplaceOpponentsDetail: (childid: number, params: RequestParams = {}) =>
      this.request<any, GetReplaceOpponentsRespListApiRespBase>({
        path: `/api/v4/tournaments/children/${childid}/replace-opponents`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsChildrenReplaceOpponentsPartialUpdate
     * @summary Add/Modify child tournament replace opponents
     * @request PATCH:/api/v4/tournaments/children/{childid}/replace-opponents
     * @secure
     */
    v4TournamentsChildrenReplaceOpponentsPartialUpdate: (
      childid: number,
      data: ModReplaceOpponentsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModReplaceOpponentsRespApiRespBase>({
        path: `/api/v4/tournaments/children/${childid}/replace-opponents`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsChildrenReplaceOpponentsDelete
     * @summary Delete child tournament replace opponents
     * @request DELETE:/api/v4/tournaments/children/{childid}/replace-opponents/{id}
     * @secure
     */
    v4TournamentsChildrenReplaceOpponentsDelete: (childid: number, id: number, params: RequestParams = {}) =>
      this.request<any, DelReplaceOpponentsRespApiRespBase>({
        path: `/api/v4/tournaments/children/${childid}/replace-opponents/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenOpponentsDetail
     * @summary Get child tournament opponents
     * @request GET:/api/v4/tournaments/parents/{parentid}/children/{childid}/opponents
     * @secure
     */
    v4TournamentsParentsChildrenOpponentsDetail: (parentid: number, childid: number, params: RequestParams = {}) =>
      this.request<any, GetOpponentsRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/opponents`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenOpponentsPartialUpdate
     * @summary Modify child tournament opponents
     * @request PATCH:/api/v4/tournaments/parents/{parentid}/children/{childid}/opponents
     * @secure
     */
    v4TournamentsParentsChildrenOpponentsPartialUpdate: (
      parentid: number,
      childid: number,
      data: ModOpponentsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModOpponentsRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/opponents`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildTypesDetail
     * @summary get child tournament types by parent tournament
     * @request GET:/api/v4/tournaments/parents/{parentId}/child-types
     * @secure
     */
    v4TournamentsParentsChildTypesDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, Int16ItemListApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/child-types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsList
     * @summary Get parent tournaments
     * @request GET:/api/v4/tournaments/parents
     * @secure
     */
    v4TournamentsParentsList: (
      query?: {
        /**
         * Parent tournament name
         * @minLength 1
         * @maxLength 80
         */
        Name?: string;
        /**
         * Game id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * Frontend id
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId?: number;
        /** Is hidden */
        IsHidden?: boolean;
        /** Is lan */
        IsLan?: boolean;
        /**
         * Venue country id
         * @format int32
         */
        VenueCountryId?: number;
        /**
         * Venue id
         * @format int32
         */
        VenueId?: number;
        /**
         * Parent tournament id
         * @format int32
         */
        ParentId?: number;
        /**
         * Created from
         * @format int64
         */
        CreatedFrom?: number;
        /**
         * Created to
         * @format int64
         */
        CreatedTo?: number;
        /**
         * Starting from
         * @format int64
         */
        StartingFrom?: number;
        /**
         * Starting to
         * @format int64
         */
        StartingTo?: number;
        /**
         * Created user id
         * @format int32
         */
        CreatedUserId?: number;
        /**
         * Map id
         * @format int32
         */
        MapId?: number;
        /**
         * Sponsor id
         * @format int32
         */
        SponsorId?: number;
        /**
         * State
         * Live = 1
         * Upcoming = 2
         * Completed = 3
         * Canceled = 4
         * Featured = 5
         */
        State?: EnumParentTournamentState;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetParentsRespApiRespBase>({
        path: `/api/v4/tournaments/parents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsCreate
     * @summary Add parent tournament
     * @request POST:/api/v4/tournaments/parents
     * @secure
     */
    v4TournamentsParentsCreate: (
      data: {
        /**
         * Game id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
        /**
         * Frontend id
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId?: number;
        /**
         * Team size
         * @format int32
         * @min 1
         * @max 32767
         */
        TeamSize: number;
        /** Is player based */
        IsPlayerBased: boolean;
        /** Is featured */
        IsFeatured: boolean;
        /** Is hidden */
        IsHidden: boolean;
        /**
         * Start at
         * @format int64
         * @min 0
         */
        StartingAt: number;
        /** Is lan */
        IsLan: boolean;
        /**
         * Venue id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        VenueId?: number;
        /**
         * Tournament name
         * @minLength 1
         * @maxLength 80
         */
        Name: string;
        /**
         * Description
         * @minLength 1
         * @maxLength 4096
         */
        Description: string;
        /** Sponsor ids */
        SponsorIds: number[];
        /** Map ids */
        MapIds: number[];
        /**
         * Image file
         * @format binary
         */
        ImageFile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddParentRespApiRespBase>({
        path: `/api/v4/tournaments/parents`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsDetail
     * @summary Get parent tournament for edit
     * @request GET:/api/v4/tournaments/parents/{parentId}
     * @secure
     */
    v4TournamentsParentsDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, GetParentRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsPartialUpdate
     * @summary Modify parent tournament
     * @request PATCH:/api/v4/tournaments/parents/{parentId}
     * @secure
     */
    v4TournamentsParentsPartialUpdate: (
      parentId: number,
      data: {
        /**
         * Parent tournament id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentId: number;
        /**
         * Frontend id
         * null: ALL
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId?: number;
        /** Is featured */
        IsFeatured: boolean;
        /** Is hidden */
        IsHidden: boolean;
        /**
         * Start at
         * @format int64
         * @min 0
         */
        StartingAt: number;
        /** Is lan */
        IsLan: boolean;
        /**
         * Venue id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        VenueId?: number;
        /**
         * Parent tournament name
         * @minLength 1
         * @maxLength 80
         */
        Name: string;
        /**
         * Description
         * @minLength 1
         * @maxLength 4096
         */
        Description: string;
        /**
         * Sponsor ids
         * [] is clear all
         */
        SponsorIds: number[];
        /**
         * Map ids
         * [] is clear all
         */
        MapIds: number[];
        /**
         * Image file
         * @format binary
         */
        ImageFile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModParentRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsDelete
     * @summary Delete parent tournaments
     * @request DELETE:/api/v4/tournaments/parents/{parentId}
     * @secure
     */
    v4TournamentsParentsDelete: (parentId: number, data: DeleteParentReq, params: RequestParams = {}) =>
      this.request<any, DeleteParentRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsDetailDetail
     * @summary Get parent tournament for detail
     * @request GET:/api/v4/tournaments/parents/{parentId}/detail
     * @secure
     */
    v4TournamentsParentsDetailDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, GetParentDetailRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/detail`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenTeamRegistrationsDetail
     * @summary Get child team registrations
     * @request GET:/api/v4/tournaments/parents/{parentId}/children/{childId}/team-registrations
     * @secure
     */
    v4TournamentsParentsChildrenTeamRegistrationsDetail: (
      parentId: number,
      childId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ChildRegistrationTeamListItemGetChildRegistrationsRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/children/${childId}/team-registrations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenTeamRegistrationsCreate
     * @summary Add child team registrations
     * @request POST:/api/v4/tournaments/parents/{parentId}/children/{childId}/team-registrations
     * @secure
     */
    v4TournamentsParentsChildrenTeamRegistrationsCreate: (
      parentId: number,
      childId: number,
      data: AddChildTeamRegistrationsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/children/${childId}/team-registrations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenTeamRegistrationsDetail2
     * @summary Get child team registration
     * @request GET:/api/v4/tournaments/parents/{parentId}/children/{childId}/team-registrations/{registerId}
     * @originalName v4TournamentsParentsChildrenTeamRegistrationsDetail
     * @duplicate
     * @secure
     */
    v4TournamentsParentsChildrenTeamRegistrationsDetail2: (
      parentId: number,
      childId: number,
      registerId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, GetChildTeamRegistrationRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/children/${childId}/team-registrations/${registerId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenTeamRegistrationsPartialUpdate
     * @summary Modify child team registration
     * @request PATCH:/api/v4/tournaments/parents/{parentId}/children/{childId}/team-registrations/{registerId}
     * @secure
     */
    v4TournamentsParentsChildrenTeamRegistrationsPartialUpdate: (
      parentId: number,
      childId: number,
      registerId: number,
      data: ModChildTeamRegistrationReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/children/${childId}/team-registrations/${registerId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenTeamRegistrationsDelete
     * @summary Delete child team registration
     * @request DELETE:/api/v4/tournaments/parents/{parentId}/children/{childId}/team-registrations/{registerId}
     * @secure
     */
    v4TournamentsParentsChildrenTeamRegistrationsDelete: (
      parentId: number,
      childId: number,
      registerId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/children/${childId}/team-registrations/${registerId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenPlayerRegistrationsDetail
     * @summary Get child player registrations
     * @request GET:/api/v4/tournaments/parents/{parentId}/children/{childId}/player-registrations
     * @secure
     */
    v4TournamentsParentsChildrenPlayerRegistrationsDetail: (
      parentId: number,
      childId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ChildRegistrationTeamListItemGetChildRegistrationsRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/children/${childId}/player-registrations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenPlayerRegistrationsCreate
     * @summary Add child player registrations
     * @request POST:/api/v4/tournaments/parents/{parentId}/children/{childId}/player-registrations
     * @secure
     */
    v4TournamentsParentsChildrenPlayerRegistrationsCreate: (
      parentId: number,
      childId: number,
      data: AddChildPlayerRegistrationsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/children/${childId}/player-registrations`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenPlayerRegistrationsPartialUpdate
     * @summary Modify child player registration
     * @request PATCH:/api/v4/tournaments/parents/{parentId}/children/{childId}/player-registrations/{registerId}
     * @secure
     */
    v4TournamentsParentsChildrenPlayerRegistrationsPartialUpdate: (
      parentId: number,
      childId: number,
      registerId: number,
      data: ModChildPlayerRegistrationReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/children/${childId}/player-registrations/${registerId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenPlayerRegistrationsDelete
     * @summary Delete child player registration
     * @request DELETE:/api/v4/tournaments/parents/{parentId}/children/{childId}/player-registrations/{registerId}
     * @secure
     */
    v4TournamentsParentsChildrenPlayerRegistrationsDelete: (
      parentId: number,
      childId: number,
      registerId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/children/${childId}/player-registrations/${registerId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenRoundsDetail
     * @summary Get child tournament rounds
     * @request GET:/api/v4/tournaments/parents/{parentid}/children/{childid}/rounds
     * @secure
     */
    v4TournamentsParentsChildrenRoundsDetail: (
      parentid: number,
      childid: number,
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetRoundsRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/rounds`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenRoundsCreate
     * @summary Add new child tournament round
     * @request POST:/api/v4/tournaments/parents/{parentid}/children/{childid}/rounds
     * @secure
     */
    v4TournamentsParentsChildrenRoundsCreate: (
      parentid: number,
      childid: number,
      data: AddRoundReq,
      params: RequestParams = {},
    ) =>
      this.request<any, AddRoundRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/rounds`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenRoundsDetail2
     * @summary Get child tournament round detail
     * @request GET:/api/v4/tournaments/parents/{parentid}/children/{childid}/rounds/{roundid}
     * @originalName v4TournamentsParentsChildrenRoundsDetail
     * @duplicate
     * @secure
     */
    v4TournamentsParentsChildrenRoundsDetail2: (
      parentid: number,
      childid: number,
      roundid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, GetRoundRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/rounds/${roundid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenRoundsPartialUpdate
     * @summary Modify child tournament round
     * @request PATCH:/api/v4/tournaments/parents/{parentid}/children/{childid}/rounds/{roundid}
     * @secure
     */
    v4TournamentsParentsChildrenRoundsPartialUpdate: (
      parentid: number,
      childid: number,
      roundid: number,
      data: ModRoundReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModRoundRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/rounds/${roundid}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsChildrenRoundsDelete
     * @summary Delete child tournament round
     * @request DELETE:/api/v4/tournaments/parents/{parentid}/children/{childid}/rounds/{roundid}
     * @secure
     */
    v4TournamentsParentsChildrenRoundsDelete: (
      parentid: number,
      childid: number,
      roundid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, DelRoundRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentid}/children/${childid}/rounds/${roundid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsStagesDetail
     * @summary Get parent stages
     * @request GET:/api/v4/tournaments/parents/{parentId}/stages
     * @secure
     */
    v4TournamentsParentsStagesDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, GetParentStagesRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/stages`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsStagesPartialUpdate
     * @summary Modify parent stages
     * @request PATCH:/api/v4/tournaments/parents/{parentId}/stages
     * @secure
     */
    v4TournamentsParentsStagesPartialUpdate: (parentId: number, data: ModParentStagesReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/stages`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsStagesForEditDetail
     * @summary Get parent stages for edit
     * @request GET:/api/v4/tournaments/parents/{parentId}/stages-for-edit
     * @secure
     */
    v4TournamentsParentsStagesForEditDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, GetParentStagesForEditRespApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/stages-for-edit`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsStagesPartialUpdate2
     * @summary Modify parent stage
     * @request PATCH:/api/v4/tournaments/parents/{parentId}/stages/{stageId}
     * @originalName v4TournamentsParentsStagesPartialUpdate
     * @duplicate
     * @secure
     */
    v4TournamentsParentsStagesPartialUpdate2: (
      parentId: number,
      stageId: number,
      data: ModParentStageReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/stages/${stageId}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V4TournamentsParentsStagesDelete
     * @summary Delete parent stage
     * @request DELETE:/api/v4/tournaments/parents/{parentId}/stages/{stageId}
     * @secure
     */
    v4TournamentsParentsStagesDelete: (parentId: number, stageId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v4/tournaments/parents/${parentId}/stages/${stageId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V4UsersList
     * @summary Get users
     * @request GET:/api/v4/users
     * @secure
     */
    v4UsersList: (
      query?: {
        /**
         * Username
         * @minLength 1
         * @maxLength 20
         */
        UserName?: string;
        /**
         * User id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        UserId?: number;
        /**
         * Email
         * @minLength 1
         * @maxLength 60
         */
        Email?: string;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetUsersRespApiRespBase>({
        path: `/api/v4/users`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V4UsersCreate
     * @summary Add User
     * @request POST:/api/v4/users
     * @secure
     */
    v4UsersCreate: (
      data: {
        /**
         * Username
         * @minLength 1
         * @maxLength 20
         */
        Username: string;
        /**
         * Email
         * @minLength 1
         * @maxLength 60
         */
        Email: string;
        /**
         * Password
         * @minLength 8
         * @maxLength 72
         */
        Password: string;
        /**
         * Lastname
         * @minLength 1
         * @maxLength 50
         */
        LastName?: string;
        /**
         * Firstname
         * @minLength 1
         * @maxLength 50
         */
        FirstName?: string;
        Gender?: EnumGender;
        /**
         * Date of birth
         * @format date
         */
        DateOfBirth?: string;
        /**
         * City
         * @minLength 1
         * @maxLength 255
         */
        City?: string;
        /**
         * Country id
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId?: number;
        /**
         * About me
         * @minLength 1
         * @maxLength 500
         */
        AboutMe?: string;
        /**
         * Avatar image
         * @format binary
         */
        AvatarImage?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddUserRespApiRespBase>({
        path: `/api/v4/users`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V4UsersDetail
     * @summary Get User
     * @request GET:/api/v4/users/{id}
     * @secure
     */
    v4UsersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetUserRespApiRespBase>({
        path: `/api/v4/users/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V4UsersPartialUpdate
     * @summary Modify user
     * @request PATCH:/api/v4/users/{id}
     * @secure
     */
    v4UsersPartialUpdate: (
      id: number,
      data: {
        /**
         * User id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        UserId: number;
        /**
         * Username
         * @minLength 1
         * @maxLength 20
         */
        Username?: string;
        /**
         * Email
         * @format email
         * @minLength 1
         * @maxLength 60
         */
        Email?: string;
        /**
         * Password
         * @minLength 8
         * @maxLength 72
         */
        Password?: string;
        /**
         * Lastname
         * @minLength 1
         * @maxLength 50
         */
        LastName?: string;
        /**
         * Firstname
         * @minLength 1
         * @maxLength 50
         */
        FirstName?: string;
        Gender?: EnumGender;
        /**
         * Date of birth
         * @format date
         */
        DateOfBirth?: string;
        /**
         * City
         * @minLength 1
         * @maxLength 255
         */
        City?: string;
        /**
         * Country id
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId?: number;
        /**
         * About me
         * @minLength 1
         * @maxLength 500
         */
        AboutMe?: string;
        /**
         * Avatar image
         * @format binary
         */
        AvatarImage?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModUserRespApiRespBase>({
        path: `/api/v4/users/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V4UsersDelete
     * @summary Delete user
     * @request DELETE:/api/v4/users/{id}
     * @secure
     */
    v4UsersDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelUserRespApiRespBase>({
        path: `/api/v4/users/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V4UsersPermissionsDetail
     * @summary Get User permissions
     * @request GET:/api/v4/users/{id}/permissions
     * @secure
     */
    v4UsersPermissionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetUserPermissionsRespApiRespBase>({
        path: `/api/v4/users/${id}/permissions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V4UsersFuzzyList
     * @summary Get fuzzy users
     * @request GET:/api/v4/users/fuzzy
     * @secure
     */
    v4UsersFuzzyList: (
      query: {
        /**
         * @minLength 1
         * @maxLength 20
         */
        FuzzyPrefix: string;
        /**
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyUsersRespApiRespBase>({
        path: `/api/v4/users/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserSession
     * @name V4UsersessionList
     * @summary Get user menu and userprofile
     * @request GET:/api/v4/usersession
     * @secure
     */
    v4UsersessionList: (params: RequestParams = {}) =>
      this.request<any, GetUserSessionRespApiRespBase>({
        path: `/api/v4/usersession`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Venues
     * @name V4VenuesList
     * @summary Get venues by condition
     * @request GET:/api/v4/venues
     * @secure
     */
    v4VenuesList: (
      query?: {
        /**
         * Venues Name
         * @minLength 0
         * @maxLength 100
         */
        Name?: string;
        /**
         * Venues Country Id
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetVenuesRespApiRespBase>({
        path: `/api/v4/venues`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Venues
     * @name V4VenuesCreate
     * @summary Add new tournaments venue
     * @request POST:/api/v4/venues
     * @secure
     */
    v4VenuesCreate: (
      data: {
        /**
         * Venues Name
         * @minLength 0
         * @maxLength 100
         */
        Name: string;
        /**
         * Venues Country Id
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId: number;
        /**
         * Venues City
         * @minLength 0
         * @maxLength 100
         */
        City: string;
        /**
         * Venues Address
         * @minLength 0
         * @maxLength 1000
         */
        Address?: string;
        /**
         * Venues Coordinates
         * @minLength 0
         * @maxLength 255
         */
        Coordinates?: string;
        /**
         * Image file
         * @format binary
         */
        ImageFile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddVenueRespApiRespBase>({
        path: `/api/v4/venues`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Venues
     * @name V4VenuesDetail
     * @summary Get tournaments venue detail
     * @request GET:/api/v4/venues/{id}
     * @secure
     */
    v4VenuesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetVenueRespApiRespBase>({
        path: `/api/v4/venues/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Venues
     * @name V4VenuesPartialUpdate
     * @summary Modify tournaments venue
     * @request PATCH:/api/v4/venues/{id}
     * @secure
     */
    v4VenuesPartialUpdate: (
      id: number,
      data: {
        /**
         * Venue Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id: number;
        /**
         * Venues Name
         * @minLength 0
         * @maxLength 100
         */
        Name: string;
        /**
         * Venues Country Id
         * @format int32
         * @min 1
         * @max 32767
         */
        CountryId: number;
        /**
         * Venues City
         * @minLength 0
         * @maxLength 100
         */
        City: string;
        /**
         * Venues Address
         * @minLength 0
         * @maxLength 1000
         */
        Address?: string;
        /**
         * Venues Coordinates
         * @minLength 0
         * @maxLength 255
         */
        Coordinates?: string;
        /**
         * Image file
         * @format binary
         */
        ImageFile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModVenueRespApiRespBase>({
        path: `/api/v4/venues/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Venues
     * @name V4VenuesDelete
     * @summary Delete tournaments venue
     * @request DELETE:/api/v4/venues/{id}
     * @secure
     */
    v4VenuesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelVenueRespApiRespBase>({
        path: `/api/v4/venues/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Venues
     * @name V4VenuesFuzzyList
     * @summary Get fuzzy venue
     * @request GET:/api/v4/venues/fuzzy
     * @secure
     */
    v4VenuesFuzzyList: (
      query: {
        /**
         * @minLength 0
         * @maxLength 30
         */
        FuzzyPrefix: string;
        /**
         * @format int32
         * @min 10
         * @max 100
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFuzzyVenuesRespApiRespBase>({
        path: `/api/v4/venues/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  login = {
    /**
     * No description
     *
     * @tags AuthTest
     * @name LoginList
     * @summary Login
     * @request GET:/login
     * @secure
     */
    loginList: (
      query?: {
        "api-version"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/login`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  register = {
    /**
     * No description
     *
     * @tags AuthTest
     * @name RegisterList
     * @summary Register
     * @request GET:/register
     * @secure
     */
    registerList: (
      query?: {
        "api-version"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/register`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  logout = {
    /**
     * No description
     *
     * @tags AuthTest
     * @name LogoutList
     * @request GET:/logout
     * @secure
     */
    logoutList: (
      query?: {
        "api-version"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/logout`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  oauthCallback = {
    /**
     * No description
     *
     * @tags AuthTest
     * @name OauthCallbackList
     * @request GET:/oauth-callback
     * @secure
     */
    oauthCallbackList: (
      query?: {
        Code?: string;
        Locale?: string;
        State?: string;
        UserState?: string;
        "api-version"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/oauth-callback`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  enumret = {
    /**
     * No description
     *
     * @tags EnumRetList
     * @name EnumretList
     * @summary Get EnumRet List
     * @request GET:/enumret
     * @secure
     */
    enumretList: (
      query?: {
        "api-version"?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<Int32StringDictionaryApiRespBase, any>({
        path: `/enumret`,
        method: "GET",
        query: query,
        secure: true,
        format: "json",
        ...params,
      }),
  };
}
