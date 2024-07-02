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
  articleId: number;
}

export interface AddArticleRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddArticleResp;
}

export type AddBannerResp = object;

export interface AddBannerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddBannerResp;
}

export type AddBroadcastTalentResp = object;

export interface AddBroadcastTalentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddBroadcastTalentResp;
}

export interface AddChildMediaItemReq {
  /** Media item Ids */
  mediaItems: number[];
}

export type AddChildMediaItemResp = object;

export interface AddChildMediaItemRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  /**
   * Game Mode Id
   * @format int32
   * @min 1
   * @max 32767
   */
  gameModeId?: number | null;
  /** Telegram auto push */
  isTgPush: boolean;
}

export type AddChildResp = object;

export interface AddChildRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddChildResp;
}

export interface AddChildTeamRegistrationsReq {
  /** Registrations */
  registrations: ChildTeamRegistration[];
}

export interface AddCountryResp {
  /**
   * Country id
   * @format int32
   */
  countryId: number;
}

export interface AddCountryRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddCountryResp;
}

export interface AddEventBoxReq {
  /**
   * Event page id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  eventPageId: number;
  type: EnumEventBoxType;
  /**
   * Style
   * @format int32
   * @min 1
   * @max 127
   */
  style: number;
  /**
   * Position
   * @format int32
   * @min 1
   * @max 127
   */
  position: number;
  /**
   * Content
   * @minLength 0
   * @maxLength 20000
   */
  content: string;
}

export type AddEventBoxResp = object;

export interface AddEventBoxRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddEventBoxResp;
}

export interface AddEventPageReq {
  /**
   * Event id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  eventId: number;
  /**
   * Page no
   * @format int32
   * @min 1
   * @max 32767
   */
  number: number;
  /**
   * Page name
   * @minLength 0
   * @maxLength 60
   */
  name: string;
}

export type AddEventPageResp = object;

export interface AddEventPageRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddEventPageResp;
}

export interface AddEventReq {
  /**
   * Event name
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Organizer ids
   * @maxItems 20
   * @minItems 1
   */
  organizerIds: number[];
  /**
   * Description
   * @minLength 0
   * @maxLength 10000
   */
  description: string;
  /** Is hidden */
  isHidden: boolean;
  /**
   * Starting at
   * @format int64
   * @min 1
   */
  startingAt: number;
  /**
   * Ending at
   * @format int64
   * @min 1
   */
  endingAt: number;
  /**
   * Frontend id
   * 0 : ALL
   * @format int32
   * @min 0
   * @max 32767
   */
  frontendId: number;
  /** Is Lan */
  isLan: boolean;
  /**
   * City
   * @minLength 0
   * @maxLength 100
   */
  city?: string | null;
  /**
   * Country id
   * @format int32
   * @min 1
   * @max 32767
   */
  countryId?: number | null;
  /**
   * Games
   * @maxItems 20
   * @minItems 1
   */
  games: number[];
}

export type AddEventResp = object;

export interface AddEventRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddEventResp;
}

export type AddFileResp = object;

export interface AddFileRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddFileResp;
}

export interface AddFolderResp {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface AddFolderRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddFolderResp;
}

export interface AddFrontendMenuReq {
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  frontendId: number;
  platform: EnumMenuPlatform;
  /**
   * @minLength 0
   * @maxLength 40
   */
  name: string;
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  siteSectionId?: number | null;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  parentId: number;
  state: EnumState;
  isUseCustomUrl: boolean;
  /**
   * @minLength 0
   * @maxLength 255
   */
  customUrl?: string | null;
}

export type AddFrontendMenuResp = object;

export interface AddFrontendMenuRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddFrontendMenuResp;
}

export interface AddFrontendReq {
  /**
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 5
   */
  shortName: string;
  /**
   * @minLength 0
   * @maxLength 255
   */
  url: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  emailDomain: string;
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  localeId: number;
  isHidden?: boolean;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  aboutPageId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  jobsPageId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  privacyPageId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  supportPageId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  termsPageId?: number | null;
}

export type AddFrontendResp = object;

export interface AddFrontendRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddFrontendResp;
}

export interface AddFuncResp {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId: number;
}

export interface AddFuncRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddFuncResp;
}

export type AddGameAccountResp = object;

export interface AddGameAccountRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddGameRegionResp;
}

export interface AddGameResp {
  /**
   * Game id
   * @format int32
   */
  gameId: number;
}

export interface AddGameRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  groupId: number;
}

export interface AddGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddGroupResp;
}

export type AddHeroResp = object;

export interface AddHeroRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddHeroResp;
}

export interface AddLogReq {
  /**
   * @minLength 0
   * @maxLength 128
   */
  traceId: string;
  /**
   * Ex: GG.Frontend.Backoffice/GB.Frontend.Backoffice
   * @minLength 0
   * @maxLength 128
   */
  prefix: string;
  logLevel: LogLevel;
  /**
   * @minLength 0
   * @maxLength 2000
   */
  message: string;
  /**
   * @minLength 0
   * @maxLength 4000
   */
  messagePayload: string;
  /**
   * @minLength 0
   * @maxLength 128
   */
  className: string;
  /**
   * @minLength 0
   * @maxLength 128
   */
  methodName: string;
}

export type AddLogResp = object;

export interface AddLogRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddLogResp;
}

export interface AddMLBBBattleSpellReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * @minLength 0
   * @maxLength 100
   */
  battleSpellName: string;
}

export type AddMLBBBattleSpellResp = object;

export interface AddMLBBBattleSpellRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddMLBBBattleSpellResp;
}

export interface AddMLBBEmblemReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * @minLength 0
   * @maxLength 100
   */
  emblemName: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  emblemType: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  emblemTypeName: string;
}

export type AddMLBBEmblemResp = object;

export interface AddMLBBEmblemRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddMLBBEmblemResp;
}

export type AddMLBBEqpResp = object;

export interface AddMLBBEqpRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddMLBBEqpResp;
}

export type AddMapResp = object;

export interface AddMapRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  /**
   * multiple matches number
   * @format int32
   * @min 1
   * @max 100
   */
  multipleNumber?: number;
}

export type AddMatchResp = object;

export interface AddMatchRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
   * @min 0
   * @max 2147483647
   */
  startTime?: number | null;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddModeResp;
}

export type AddMultipleChildTournamentsResp = object;

export interface AddMultipleChildTournamentsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddMultipleChildTournamentsResp;
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
  notificationTemplateId: number;
}

export interface AddNotificationTemplateRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  oneSignalAppId: number;
}

export interface AddOneSignalAppRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  pageId: number;
}

export interface AddPageRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddPageResp;
}

export interface AddParentBroadcastTalentsReq {
  /**
   * Broadcast talent id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  broadcastTalentId: number;
}

export interface AddParentResp {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId: number;
}

export interface AddParentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddParentResp;
}

export type AddPlayerMediaItemResp = object;

export interface AddPlayerMediaItemRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddPlayerMediaItemResp;
}

export type AddPlayerResp = object;

export interface AddPlayerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddRoleResp;
}

export interface AddRoundReq {
  /**
   * Round Name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  type: EnumRoundType;
  /**
   * Round Number
   * @format int32
   * @min 1
   * @max 32767
   */
  number: number;
  /**
   * Games per match
   * @format int32
   * @min 1
   * @max 32767
   */
  gamesPerMatch: number;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddRoundResp;
}

export interface AddServerReq {
  /**
   * Server Name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * Game Id
   * @format int32
   * @min 1
   * @max 32767
   */
  gameId: number;
}

export type AddServerResp = object;

export interface AddServerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddServerResp;
}

export type AddSideResp = object;

export interface AddSideRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddSideResp;
}

export interface AddSiteSectionsReq {
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  gameId?: number | null;
  /**
   * @minLength 1
   * @maxLength 40
   */
  name: string;
  hidden: boolean;
}

export interface AddSiteSectionsResp {
  /**
   * Site section id
   * @format int32
   */
  id: number;
}

export interface AddSiteSectionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddSiteSectionsResp;
}

export type AddSponsorResp = object;

export interface AddSponsorRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddSponsorResp;
}

export type AddStreamResp = object;

export interface AddStreamRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddTeamPlayerResp;
}

export type AddTeamResp = object;

export interface AddTeamRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddTeamResp;
}

export type AddVenueResp = object;

export interface AddVenueRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AddVenueResp;
}

export interface AdjustBoxesReq {
  boxes: BoxPosition[];
}

export type AdjustBoxesResp = object;

export interface AdjustBoxesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AdjustBoxesResp;
}

export interface ApiLogDetail {
  /**
   * Id
   * @format int64
   */
  id: number;
  /**
   * Trace id
   * @minLength 1
   */
  traceId: string;
  /**
   * IP
   * @minLength 1
   */
  ip: string;
  /**
   * Scheme
   * @minLength 1
   */
  scheme: string;
  /**
   * Host
   * @minLength 1
   */
  host: string;
  /**
   * Path
   * @minLength 1
   */
  path: string;
  /**
   * Method
   * @minLength 1
   */
  method: string;
  /**
   * Prefix
   * @minLength 1
   */
  prefix: string;
  /**
   * Server name
   * @minLength 1
   */
  serverName: string;
  /**
   * Request headers
   * @minLength 1
   */
  requestHeaders: string;
  /**
   * Request content
   * @minLength 1
   */
  requestContent: string;
  /**
   * Response headers
   * @minLength 1
   */
  responseHeaders: string;
  /** @minLength 1 */
  responseContent: string;
  /**
   * Response code
   * @format int32
   */
  responseCode: number;
  /**
   * Execute time ms
   * @format int32
   */
  executeTimeMs: number;
  /**
   * Recorded at
   * @format int64
   */
  recordedAt: number;
  /**
   * Updated user id
   * @format int32
   */
  updatedUserId?: number | null;
  /** Updated user name */
  updatedUserName?: string | null;
}

export interface ApiLogListItem {
  /**
   * Id
   * @format int64
   */
  id: number;
  /**
   * Trace Id
   * @minLength 1
   */
  traceId: string;
  /**
   * Ip Address
   * @minLength 1
   */
  ip: string;
  /**
   * Scheme
   * @minLength 1
   */
  scheme: string;
  /**
   * Host
   * @minLength 1
   */
  host: string;
  /**
   * Path
   * @minLength 1
   */
  path: string;
  /**
   * Method
   * @minLength 1
   */
  method: string;
  /**
   * Prefix
   * @minLength 1
   */
  prefix: string;
  /**
   * Server Name
   * @minLength 1
   */
  serverName: string;
  /**
   * Response Status Code
   * @format int32
   */
  responseCode: number;
  /**
   * Response Length
   * @format int32
   */
  responseLen: number;
  /**
   * Execute Time MilliSeconds
   * @format int32
   */
  executeTimeMs: number;
  /**
   * Record at
   * @format int64
   */
  recordedAt: number;
  /**
   * Updated user id
   * @format int32
   */
  updatedUserId?: number | null;
  /** Updated user name */
  updatedUserName?: string | null;
}

export interface ApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  /** Is telegram push */
  isTgPush: boolean;
  /** Meta data */
  metadata?: SeoMetadata[] | null;
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
  /**
   * Article url
   * @minLength 1
   */
  url: string;
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
  addUsers: Int32Item[];
}

export interface AssignGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  addUsers: Int32Item[];
}

export interface AssignRoleRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: AssignRoleResp;
}

export interface BoxPosition {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * @format int32
   * @min 1
   * @max 127
   */
  position: number;
}

export interface BroadcastTalentCountry {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  code: string;
  flagImageUrl?: string | null;
}

export interface BroadcastTalentGame {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  urlSafeName: string;
  iconUrl?: string | null;
}

export interface BroadcastTalentLanguage {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  code: string;
}

export interface BroadcastTalentPlayer {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface BroadcastTalentStream {
  /**
   * Id
   * @format int32
   */
  id: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
}

export interface ByteItem {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface ByteItemListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ByteItem[] | null;
}

export interface CheckResetPasswordTokenReq {
  /**
   * Token
   * @minLength 0
   * @maxLength 100
   */
  token: string;
}

export interface CheckResetPasswordTokenResp {
  /**
   * Token
   * @minLength 1
   */
  resetPasswordToken: string;
}

export interface CheckResetPasswordTokenRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: CheckResetPasswordTokenResp;
}

export interface ChildEarningListItem {
  /**
   * Child tournament id
   * @format int32
   */
  childId: number;
  /**
   * Child tournament name
   * @minLength 1
   */
  childName: string;
  prizePoolStatus: EnumPrizePoolStatus;
  prizePoolCurrency?: EnumCurrency;
  /** Prize pool currency code */
  prizePoolCurrencyCode?: string | null;
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
  status?: EnumTournamentStatus;
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

export interface ChildRegistrationPlayerListItem {
  /**
   * Register id
   * @format int32
   */
  registerId: number;
  /**
   * Player id
   * @format int32
   */
  playerId: number;
  /**
   * Player name
   * @minLength 1
   */
  playerName: string;
  /** Has opp */
  hasOpp: boolean;
  /** Is reserved */
  isReserved: boolean;
  /**
   * Registered at
   * @format int64
   */
  registeredAt: number;
  /** Can register */
  canUnregister: boolean;
  /**
   * Portal player detail page hyperlink
   * @minLength 1
   */
  url: string;
}

export interface ChildRegistrationPlayerListItemGetChildRegistrationsResp {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
  /**
   * Child id
   * @format int32
   */
  childId: number;
  /**
   * Parent name
   * @minLength 1
   */
  parentName: string;
  /**
   * Stage name
   * @minLength 1
   */
  stageName: string;
  /**
   * Child name
   * @minLength 1
   */
  childName: string;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Team size
   * @format int32
   */
  teamSize: number;
  /** Registrations */
  registrations?: ChildRegistrationPlayerListItem[] | null;
}

export interface ChildRegistrationPlayerListItemGetChildRegistrationsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ChildRegistrationPlayerListItemGetChildRegistrationsResp;
}

export interface ChildRegistrationTeamListItem {
  /**
   * Register id
   * @format int32
   */
  registerId: number;
  /**
   * Team name
   * @minLength 1
   */
  teamName: string;
  /**
   * Team tag
   * @minLength 1
   */
  teamTag: string;
  /** Player names */
  playerNames: string[];
  /** Players */
  players: Int32Item[];
  /** Has opp */
  hasOpp: boolean;
  /** Is reserved */
  isReserved: boolean;
  /**
   * Registered at
   * @format int64
   */
  registeredAt: number;
  /** Can register */
  canUnregister: boolean;
  /**
   * Portal team detail page hyperlink
   * @minLength 1
   */
  url: string;
}

export interface ChildRegistrationTeamListItemGetChildRegistrationsResp {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
  /**
   * Child id
   * @format int32
   */
  childId: number;
  /**
   * Parent name
   * @minLength 1
   */
  parentName: string;
  /**
   * Stage name
   * @minLength 1
   */
  stageName: string;
  /**
   * Child name
   * @minLength 1
   */
  childName: string;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Team size
   * @format int32
   */
  teamSize: number;
  /** Registrations */
  registrations?: ChildRegistrationTeamListItem[] | null;
}

export interface ChildRegistrationTeamListItemGetChildRegistrationsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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

export interface ClearCacheReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  eventId: number;
}

export type ClearCacheResp = object;

export interface ClearCacheRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ClearCacheResp;
}

export type ClearMatchesResp = object;

export interface ClearMatchesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ClearMatchesResp;
}

export type ClearTeamDetailCacheResp = object;

export interface ClearTeamDetailCacheRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ClearTeamDetailCacheResp;
}

export type ClearUpcomingCacheResp = object;

export interface ClearUpcomingCacheRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ClearUpcomingCacheResp;
}

export interface Country {
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

export interface CountryOption {
  /**
   * Country id
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * Country name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * Country code
   * @minLength 0
   * @maxLength 2
   */
  code: string;
  /**
   * Flag image url
   * @minLength 0
   * @maxLength 255
   */
  flagImageUrl?: string | null;
}

export interface CrewFile {
  /**
   * File Id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Uploaded at
   * @format int64
   */
  uploadedAt: number;
  /**
   * Size
   * @format int32
   */
  size: number;
  /**
   * Mine type
   * @minLength 1
   */
  mineType: string;
  /**
   * Folder id
   * @format int32
   */
  folderId: number;
  /**
   * User id
   * @format int32
   */
  userId: number;
  /**
   * Username
   * @minLength 1
   */
  userName: string;
  /**
   * Url safe name
   * @minLength 1
   */
  url_Safe_UserName: string;
  /**
   * Path
   * @minLength 1
   */
  path: string;
}

export interface CrewSettingReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  userId: number;
  isCrew: boolean;
}

export type CrewSettingResp = object;

export interface CrewSettingRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: CrewSettingResp;
}

export interface CurrencyItem {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  /**
   * @minLength 0
   * @maxLength 30
   */
  code: string;
}

export interface DelArticleResp {
  /**
   * Article id
   * @format int32
   */
  articleId: number;
}

export interface DelArticleRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelArticleResp;
}

export type DelBroadcastTalentResp = object;

export interface DelBroadcastTalentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelBroadcastTalentResp;
}

export type DelChildMediaItemResp = object;

export interface DelChildMediaItemRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelChildMediaItemResp;
}

export interface DelChildReq {
  /** Is force to delete */
  isForce?: boolean | null;
}

export type DelChildResp = object;

export interface DelChildRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelChildResp;
}

export type DelEventBoxResp = object;

export interface DelEventBoxRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelEventBoxResp;
}

export type DelEventPageResp = object;

export interface DelEventPageRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelEventPageResp;
}

export type DelEventResp = object;

export interface DelEventRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelEventResp;
}

export type DelFileByHashResp = object;

export interface DelFileByHashRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelFileByHashResp;
}

export type DelFileResp = object;

export interface DelFileRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelFileResp;
}

export type DelFolderResp = object;

export interface DelFolderRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelFolderResp;
}

export type DelFrontendMenuResp = object;

export interface DelFrontendMenuRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelFrontendMenuResp;
}

export type DelFrontendResp = object;

export interface DelFrontendRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelFrontendResp;
}

export interface DelFuncResp {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId: number;
}

export interface DelFuncRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelFuncResp;
}

export type DelGameAccountResp = object;

export interface DelGameAccountRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelGameRegionResp;
}

export interface DelGameResp {
  /**
   * Game id
   * @format int32
   */
  gameId: number;
}

export interface DelGameRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelGameResp;
}

export interface DelGroupResp {
  /**
   * Group id
   * @format int32
   */
  groupId: number;
}

export interface DelGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelGroupResp;
}

export type DelHeroResp = object;

export interface DelHeroRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelHeroResp;
}

export type DelMLBBBattleSpellResp = object;

export interface DelMLBBBattleSpellRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelMLBBBattleSpellResp;
}

export type DelMLBBEmblemResp = object;

export interface DelMLBBEmblemRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelMLBBEmblemResp;
}

export type DelMLBBEqpResp = object;

export interface DelMLBBEqpRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelMLBBEqpResp;
}

export type DelMapResp = object;

export interface DelMapRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelMapResp;
}

export type DelMatchResp = object;

export interface DelMatchRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelMatchResp;
}

export type DelMediaItemResp = object;

export interface DelMediaItemRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelMediaVodResp;
}

export type DelModeResp = object;

export interface DelModeRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelModeResp;
}

export interface DelNotificationTemplateResp {
  /**
   * Notification Template Id
   * @format int32
   */
  notificationTemplateId: number;
}

export interface DelNotificationTemplateRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelNotificationTemplateResp;
}

export interface DelOneSignalAppResp {
  /**
   * One Signal App Id
   * @format int32
   */
  oneSignalAppId: number;
}

export interface DelOneSignalAppRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelOneSignalAppResp;
}

export interface DelPageReq {
  pageIds: number[];
}

export interface DelPageResp {
  /** Page id */
  pageId: number[];
}

export interface DelPageRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelPageResp;
}

export type DelPlayerMediaItemResp = object;

export interface DelPlayerMediaItemRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelPlayerMediaItemResp;
}

export type DelPlayerResp = object;

export interface DelPlayerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelPlayerResp;
}

export type DelReplaceOpponentsResp = object;

export interface DelReplaceOpponentsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelReplaceOpponentsResp;
}

export interface DelRoleResp {
  /**
   * Role id
   * @format int32
   */
  roleId: number;
}

export interface DelRoleRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelRoleResp;
}

export type DelRoundResp = object;

export interface DelRoundRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelRoundResp;
}

export type DelServerResp = object;

export interface DelServerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelServerResp;
}

export type DelSideResp = object;

export interface DelSideRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelSideResp;
}

export type DelSiteSectionsResp = object;

export interface DelSiteSectionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelSiteSectionsResp;
}

export type DelSponsorResp = object;

export interface DelSponsorRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelSponsorResp;
}

export type DelStreamResp = object;

export interface DelStreamRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelStreamResp;
}

export type DelTeamPlayerResp = object;

export interface DelTeamPlayerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelTeamPlayerResp;
}

export type DelTeamResp = object;

export interface DelTeamRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelTeamResp;
}

export type DelUserResp = object;

export interface DelUserRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DelUserResp;
}

export type DelVenueResp = object;

export interface DelVenueRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  parentId: number;
}

export interface DeleteParentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: DeleteParentResp;
}

export interface DraftPlayerOption {
  /** @format int32 */
  registrationId: number;
  /** player options */
  playerOptions: Int32Item[];
}

export interface EarningListItem {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId: number;
  /** Is hidden */
  isHidden: boolean;
  /**
   * Parent tournament name
   * @minLength 1
   */
  name: string;
  /**
   * Parent tournament url
   * @minLength 1
   */
  url: string;
  /**
   * Frontend name
   * @minLength 1
   */
  frontendName: string;
  /**
   * Frontend short name
   * @minLength 1
   */
  feName: string;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /**
   * Game url safe name
   * @minLength 1
   */
  gameUrlSafeName: string;
  /**
   * Game icon url
   * @minLength 1
   */
  gameIconUrl: string;
  prizePoolCurrency?: EnumCurrency;
  /** Prize pool currency code */
  prizePoolCurrencyCode?: string | null;
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
  prizePoolStatus: EnumPrizePoolStatus;
  /**
   * Prize pool status name
   * @minLength 1
   */
  prizePoolStatusName: string;
  /**
   * Starting at
   * @format int64
   */
  startingAt?: number | null;
  status: EnumTournamentStatus;
}

export interface EnableUserReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  userId: number;
  /** Enable = true/ Disable=false */
  enable: boolean;
}

export type EnableUserResp = object;

export interface EnableUserRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: EnableUserResp;
}

/** @format int32 */
export enum EnumArticleState {
  Published = 1,
  Unpublished = 2,
  Deleted = 3,
  Featured = 4,
}

/** @format int32 */
export enum EnumArticleType {
  News = 1,
  Features = 2,
  Guides = 3,
}

/** @format int32 */
export enum EnumBannerOpenType {
  NewTab = 1,
  ExistingPage = 2,
}

/** @format int32 */
export enum EnumBoMatchStatus {
  NotCompleted = 0,
  Completed = 1,
  Canceled = 2,
  Upcoming = 3,
  Live = 4,
}

/** @format int32 */
export enum EnumChildTournament {
  Group = 1,
  Knockout = 2,
  BattleRoyale = 3,
}

/** @format int32 */
export enum EnumCurrency {
  USD = 1,
  EUR = 2,
  CNY = 3,
  RUB = 4,
  GBP = 5,
  PHP = 6,
  AUD = 7,
  BGN = 8,
  BRL = 9,
  CAD = 10,
  CZK = 11,
  DKK = 12,
  HKD = 13,
  HUF = 14,
  IDR = 15,
  ILS = 16,
  INR = 17,
  KRW = 18,
  MXN = 19,
  MYR = 20,
  NZD = 21,
  PLN = 22,
  RON = 23,
  SEK = 24,
  SGD = 25,
  THB = 26,
  TRY = 27,
  ZAR = 28,
  JPY = 29,
}

/** @format int32 */
export enum EnumEarningPrizeStatus {
  Enable = 1,
  Disable = 2,
  Delete = 3,
}

/** @format int32 */
export enum EnumEventBoxType {
  None = 0,
  TitleBox = 1,
  PageMenuBar = 2,
  CKECustomBox = 3,
  FeatureArticleBox = 4,
  FeatureVODBox = 5,
  ParticipantsBox = 6,
  BracketGroupBox = 7,
  TournamentListBox = 8,
  SponsorShowcaseBox = 9,
  RelatedArticlesBox = 10,
  RelatedEventsBox = 11,
  RelatedVideosBox = 12,
  MainEventShowcaseBox = 13,
  CustomBox = 14,
  MatchTickerBox = 15,
  FeatureTournamentBox = 16,
  RelatedTournamentsBox = 17,
}

/** @format int32 */
export enum EnumFieldSort {
  Asc = 0,
  Desc = 1,
}

/** @format int32 */
export enum EnumFuncType {
  Main = 1,
  Button = 2,
}

/** @format int32 */
export enum EnumGameDraftType {
  Ban = 0,
  Pick = 1,
}

/** @format int32 */
export enum EnumGameResult {
  Win = 0,
  Draw = 1,
  Forfeit = 2,
  Disq = 3,
}

/** @format int32 */
export enum EnumGender {
  None = 0,
  Male = 1,
  Female = 2,
  OtherUnspecified = 3,
}

/** @format int32 */
export enum EnumGridStateOption {
  WithGirdLinked = 1,
  WithoutGridLinked = 2,
}

/** @format int32 */
export enum EnumMapSelection {
  Specified = 0,
  UserSelected = 1,
}

/** @format int32 */
export enum EnumMatchStatus {
  NotCompleted = 0,
  Completed = 1,
  Canceled = 2,
}

/** @format int32 */
export enum EnumMenuPlatform {
  Web = 1,
  MobileWeb = 2,
  MobileApp = 3,
}

/** @format int32 */
export enum EnumMsgPlatform {
  Telegram = 1,
}

/** @format int32 */
export enum EnumParentTournamentState {
  All = 0,
  Live = 1,
  Upcoming = 2,
  Completed = 3,
  Canceled = 4,
  Featured = 5,
}

/** @format int32 */
export enum EnumParentTournamentType {
  MultiStage = 1,
}

/** @format int32 */
export enum EnumPlatform {
  PLATFORM_TWITCHTV = 1,
  PLATFORM_YOUTUBE_CHANNEL = 10,
  PLATFORM_YOUTUBE_STREAM = 11,
  PLATFORM_FACEBOOK = 12,
  PLATFORM_OTHER = 99,
}

/** @format int32 */
export enum EnumPointsAwarded {
  PerGame = 0,
  PerMatch = 1,
  PerGameFull = 2,
  ByResultFull = 3,
  ByResult = 4,
}

/** @format int32 */
export enum EnumPrizePoolStatus {
  NoPrizePool = 0,
  NoPrizePoolLogged = 1,
  NoStructureDefined = 2,
  NoWinnersBacklogged = 3,
  MissingWinners = 4,
  Complete = 5,
}

/** @format int32 */
export enum EnumRet {
  Success = 0,
  Unauthorized = 10001,
  PermissionDenied = 10002,
  InvalidAuthorizationToken = 10003,
  AuthorizationTokenExpired = 10004,
  InvalidApiKey = 10005,
  InvalidParamsErrorStart = 20000,
  InvalidParams = 20001,
  NameRepeated = 20002,
  Using = 20003,
  InvalidWebhookEvent = 20004,
  FileSizeIsZero = 20005,
  FileSizeTooBig = 20006,
  ExtensionInvalid = 20007,
  DimensionsTooSmall = 20008,
  DimensionsTooBig = 20009,
  NotImage = 20010,
  AspectRatioIsWrong = 20011,
  FileNotExist = 20012,
  UploadTypeNotExist = 20013,
  FolderNotExist = 20014,
  ParentFolderNotExist = 20015,
  ContentTypeInvalid = 20016,
  MissingHeaders = 20017,
  UserIdExist = 20018,
  EmailExist = 20019,
  Exist = 20020,
  StateLimit = 20021,
  MaximumOfTags = 20022,
  StreamIdExist = 20023,
  PlayerIdExit = 20024,
  PersonalStreamIdExit = 20025,
  MediaItemIdExit = 20026,
  FanClubAlreadyMember = 20027,
  OtherPlatformRequiresStreamUrl = 20028,
  TagMaxCharacters = 20029,
  PlatformRequiresStreamId = 20030,
  TournamentsGameAccountInvalidNameFormat = 20031,
  TournamentsGameAccountAlreadyExists = 20032,
  HasForbiddenPermissionParams = 20033,
  InvalidPermissionParams = 20034,
  NoContestant = 20035,
  PrizePoolNotMathStructure = 20036,
  PrizePoolDistributionNotMatchPlacement = 20037,
  PasswordIncorrect = 20038,
  ExceededTeamSize = 20039,
  NotCompleted = 20040,
  UsernameExist = 20041,
  NoCalculation = 20042,
  NoJob = 20043,
  InvalidParamsErrorEnd = 29999,
  NotFoundErrorsStart = 30000,
  NotExist = 30001,
  UserNotExist = 30002,
  PlayerNotFound = 30003,
  TeamNotFound = 30004,
  ChannelDoesNotExist = 30005,
  NotFoundErrorsEnd = 39999,
  ConflictErrorsStart = 40000,
  UsersUserAlreadyDeleted = 40001,
  ConflictErrorsEnd = 40999,
  ServerErrorsStart = 50000,
  Exception = 50001,
  Fail = 50002,
  DeleteFail = 50003,
  GetJwtKeyFail = 50004,
  InternalServerError = 50005,
  ServerIsBusy = 50006,
  TooManyRequests = 50007,
  ServerErrorsEnd = 59999,
  ForbiddenErrorsStart = 60000,
  Disallow = 60001,
  ForbiddenErrorsEnd = 69999,
}

/** @format int32 */
export enum EnumRoundType {
  Normal = 0,
  UpperBracket = 1,
  LowerBracket = 2,
  Tiebreaker = 3,
  ThirdPlacePlayoff = 4,
  EmptyUpperBracket = 5,
  EmptyLowerBracket = 6,
}

/** @format int32 */
export enum EnumSorting {
  CreatedAtASC = 1,
  CreatedAtDESC = 2,
  UpdatedAtASC = 3,
  UpdatedAtDESC = 4,
  ViewsASC = 5,
  ViewsDESC = 6,
}

/** @format int32 */
export enum EnumState {
  Disabled = 0,
  Enabled = 1,
  Deleted = 2,
}

/** @format int32 */
export enum EnumTeamSortOption {
  RankingAsc = 1,
  RankingDesc = 2,
}

/** @format int32 */
export enum EnumTgMsgStatus {
  UnPublish = 0,
  Schedule = 1,
  Publish = 2,
  Delete = 3,
  GameChannelSchedule = 4,
}

/** @format int32 */
export enum EnumTgMsgType {
  Article = 1,
  Match = 2,
}

/** @format int32 */
export enum EnumTgTriggerSource {
  System = 1,
  Manual = 2,
}

/** @format int32 */
export enum EnumTournamentFilters {
  All = 0,
  Live = 1,
  Upcoming = 2,
  Completed = 3,
  Canceled = 4,
  Featured = 5,
}

/** @format int32 */
export enum EnumTournamentRelatedType {
  Article = 1,
  Sponsor = 2,
  Video = 3,
}

/** @format int32 */
export enum EnumTournamentStatus {
  Upcoming = 0,
  Live = 1,
  Canceled = 2,
  Completed = 3,
}

export interface EventPage {
  /**
   * Event Page Id
   * @format int32
   */
  id: number;
  /**
   * Event page name
   * @minLength 1
   */
  name: string;
  /**
   * Event page UrlSafeName
   * @minLength 1
   */
  urlSafeName: string;
  /**
   * Event page number
   * @format int32
   */
  number: number;
  /** Event page boxes */
  boxes?: EventPageBox[] | null;
}

export interface EventPageBox {
  /**
   * Event page box id
   * @format int32
   */
  id: number;
  type: EnumEventBoxType;
  /** @format int32 */
  style: number;
  /** @format int32 */
  position: number;
}

export interface FolderDetail {
  /**
   * Folder id
   * @format int32
   */
  id: number;
  /** Folder name */
  name?: string | null;
  /**
   * Folder path
   * @minLength 1
   */
  path: string;
}

export interface FrontendBasicInfo {
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  shortName: string;
  /** @minLength 1 */
  url: string;
  /** @minLength 1 */
  emailDomain: string;
  /** @format int32 */
  localeId: number;
  /** @minLength 1 */
  localeName: string;
  isHidden: boolean;
  /** @format int32 */
  aboutPageId?: number | null;
  aboutPageTitle?: string | null;
  /** @format int32 */
  jobsPageId?: number | null;
  jobsPageTitle?: string | null;
  /** @format int32 */
  privacyPageId?: number | null;
  privacyPageTitle?: string | null;
  /** @format int32 */
  supportPageId?: number | null;
  supportPageTitle?: string | null;
  /** @format int32 */
  termsPageId?: number | null;
  termsPageTitle?: string | null;
}

export interface FrontendGoogleSetting {
  appEnv?: string | null;
  recaptcha?: Recaptcha;
  googleAdSense?: GoogleAdSense;
  googleAdManager?: GoogleAdManager;
  googleAnalytics?: GoogleAnalytics;
  googleTagManager?: GoogleTagManager;
}

export interface FuncItem {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId: number;
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
  /**
   * Func name
   * @minLength 1
   */
  name: string;
  /**
   * Func code
   * @minLength 1
   */
  code: string;
  type: EnumFuncType;
  /**
   * Func type name
   * @minLength 1
   */
  typeName: string;
  /**
   * Func position
   * @format int32
   */
  position: number;
  state: EnumState;
  /**
   * State name
   * @minLength 1
   */
  stateName: string;
  /**
   * Func url
   * @minLength 1
   */
  url: string;
  /**
   * Func icon
   * @minLength 1
   */
  icon: string;
  /** Sub funcs */
  subFuncs: FuncItem[];
}

export interface FuzzyFolderDetail {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  path: string;
}

export interface GameBasicInfo {
  /**
   * Game Id
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * Game Name
   * @minLength 0
   * @maxLength 20
   */
  name: string;
  /**
   * Game UrlSafeName
   * @minLength 0
   * @maxLength 20
   */
  urlSafeName: string;
}

export interface GameListItem {
  /**
   * Game id
   * @format int32
   */
  id: number;
  /**
   * Game name
   * @minLength 1
   */
  name: string;
  /**
   * Game url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /** Has player rankings */
  hasPlayerRankings: boolean;
  /** Has team rankings */
  hasTeamRankings: boolean;
  /** Has streams */
  hasStreams: boolean;
  /**
   * Grid id
   * @format int32
   */
  gridId?: number | null;
  /** Is legacy */
  isLegacy: boolean;
  /**
   * Icon image url
   * @minLength 1
   */
  iconImageUrl: string;
  /** Is off season */
  isOffSeason: boolean;
  /**
   * Off season start at
   * @format int64
   */
  offSeasonStartAt?: number | null;
  /**
   * Off season end at
   * @format int64
   */
  offSeasonEndAt?: number | null;
  /** Translation */
  translations: Translation[];
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

export interface GameResultBattleRoyalePlayer {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  playerId: number;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  kills?: number | null;
}

export interface GameResultDraft {
  /**
   * sorting no
   * @format int32
   */
  number: number;
  type: EnumGameDraftType;
  /**
   * Team/opponent id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  registrationId: number;
  /**
   * Game hero id
   * @format int32
   */
  heroId: number;
  /**
   * Player Id
   * @format int32
   */
  playerId?: number | null;
}

export interface GameResultRoundSet {
  /**
   * sorting no
   * @format int32
   */
  number?: number;
  /** Is over time */
  isOverTime?: boolean;
  /**
   * Sides [CS:GO 0:Team1->CT/Team2->T, 1: Team2->CT/Team1->T], [Valorant 0:Team1->A/Team2->D, 1:Team2->A/Team1->D]
   * @format int32
   */
  sides?: number;
  /**
   * Team 1 score
   * @format int32
   */
  team1Score?: number;
  /**
   * Team 2 score
   * @format int32
   */
  team2Score?: number;
}

export interface GeTournamentRelatedResp {
  /** Tournament related data */
  relatedData: Int32Item[];
}

export interface GeTournamentRelatedRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GeTournamentRelatedResp;
}

export interface GenderOption {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface GetAccountResp {
  /**
   * User Id
   * @format int32
   */
  id: number;
  username?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  /** @minLength 1 */
  email: string;
  gender?: EnumGender;
  /** @format int32 */
  countryId?: number | null;
  countryName?: string | null;
  city?: string | null;
  /** @format date */
  dateOfBirth?: string | null;
  aboutMe?: string | null;
}

export interface GetAccountRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetAccountResp;
}

export interface GetApiLogResp {
  log: ApiLogDetail;
}

export interface GetApiLogRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetApiLogResp;
}

export interface GetApiLogsResp {
  /** Api Logs */
  logs: ApiLogListItem[];
  paging: PagingRespBase;
}

export interface GetApiLogsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetApiLogsResp;
}

export interface GetArticleResp {
  articleDetail: ArticleDetail;
  /** Players */
  players: Int32Item[];
  /** Teams */
  teams: Int32Item[];
  /** Tournaments */
  tournaments: Int32Item[];
  quickPoll: RelatedQuickPoll;
  /** Site sections */
  siteSections: Int16Item[];
}

export interface GetArticleRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetArticleResp;
}

export interface GetArticleTypesResp {
  /** Types */
  types: Int16ItemWithSubItem[];
}

export interface GetArticleTypesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetArticleTypesResp;
}

export interface GetArticlesResp {
  /** Articles */
  articles: ArticleListItem[];
  paging: PagingRespBase;
}

export interface GetArticlesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetArticlesResp;
}

export interface GetBannerDetailResp {
  /** @format int32 */
  id: number;
  /** @format int32 */
  frontendId: number;
  /** @format int32 */
  siteSectionId: number;
  /** @minLength 1 */
  siteSectionName: string;
  altText?: string | null;
  enableHyperlink: boolean;
  openType?: EnumBannerOpenType;
  url?: string | null;
  /**
   * Banner image path
   * @minLength 1
   */
  imagePath: string;
}

export interface GetBannerDetailRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetBannerDetailResp;
}

export interface GetBannersResp {
  banners?: SiteSectionBanner[] | null;
}

export interface GetBannersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetBannersResp;
}

export interface GetBrResultDetailResp {
  isPlayerBased: boolean;
  /** @format int32 */
  pointsPerKill: number;
  /** @format int32 */
  registrationId: number;
  name?: string | null;
  /** @format int32 */
  placement?: number | null;
  /** @format int32 */
  placementPoints?: number | null;
  /** @format int32 */
  kills?: number | null;
  /** @format int32 */
  killPoints?: number | null;
  /** @format int32 */
  pointsAddition?: number | null;
  /** @format int32 */
  pointsDeduction?: number | null;
  /** @format int32 */
  totalPoints?: number | null;
  players?: GetBrResultPlayer[] | null;
}

export interface GetBrResultDetailRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetBrResultDetailResp;
}

export interface GetBrResultPlayer {
  /** @format int32 */
  playerId?: number;
  name?: string | null;
  /** @format int32 */
  kills?: number | null;
}

export interface GetBracketMatch {
  /** @format int32 */
  matchId: number;
  /** @format int32 */
  matchNumber: number;
  /** @format int32 */
  winnerRegistrationId?: number | null;
  /** @format int32 */
  nextMatchId?: number | null;
  /** @format int32 */
  nextMatchPlacement?: number | null;
  /** @format int32 */
  team1RegistrationId?: number | null;
  team1Name?: string | null;
  /** @format int32 */
  team1Score?: number | null;
  team1IsSeed: boolean;
  team1IsQualification: boolean;
  /** @format int32 */
  team2RegistrationId?: number | null;
  team2Name?: string | null;
  /** @format int32 */
  team2Score?: number | null;
  team2IsSeed: boolean;
  team2IsQualification: boolean;
}

export interface GetBracketRound {
  /** @format int32 */
  roundId: number;
  roundType: EnumRoundType;
  /** @format int32 */
  roundNumber: number;
  /** @minLength 1 */
  roundName: string;
  matches: GetBracketMatch[];
}

export interface GetBroadcastTalentResp {
  /**
   * Broadcast talent id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /**
   * Gender
   * @format int32
   */
  gender: number;
  /** Is active */
  isActive: boolean;
  /** About */
  about?: string | null;
  /**
   * Date of birth
   * @format date
   */
  dateOfBirth?: string | null;
  /** Header image path */
  headerImagePath?: string | null;
  /** Image pth */
  imagePath?: string | null;
  /** Social facebook */
  socialFacebook?: string | null;
  /** Social twitter */
  socialTwitter?: string | null;
  /** Social youtube */
  socialYoutube?: string | null;
  /** Web site */
  website?: string | null;
  /** Roles */
  roles: Int16Item[];
  primaryGame: BroadcastTalentGame;
  country: BroadcastTalentCountry;
  language: BroadcastTalentLanguage;
  player: BroadcastTalentPlayer;
  personalStream: BroadcastTalentStream;
}

export interface GetBroadcastTalentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetBroadcastTalentResp;
}

export interface GetBroadcastTalentRoleOptionsResp {
  /** Roles */
  roles: Int16Item[];
}

export interface GetBroadcastTalentRoleOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetBroadcastTalentRoleOptionsResp;
}

export interface GetBroadcastTalents {
  /**
   * Broadcast talent id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /**
   * Gender
   * @format int32
   */
  gender: number;
  /** Is active */
  isActive: boolean;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /** Roles */
  roles: string[];
  primaryGame: BroadcastTalentGame;
  country: BroadcastTalentCountry;
  language: BroadcastTalentLanguage;
}

export interface GetBroadcastTalentsResp {
  /** Broadcast talents */
  broadcastTalents: GetBroadcastTalents[];
  paging: PagingRespBase;
}

export interface GetBroadcastTalentsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetBroadcastTalentsResp;
}

export interface GetChildBracketResp {
  /**
   * Parent tournament id
   * @minLength 1
   */
  parentTournamentName: string;
  /**
   * Stage name
   * @minLength 1
   */
  stageName: string;
  /**
   * Child tournament name
   * @minLength 1
   */
  childTournamentName: string;
  /** Child tournament rounds */
  rounds: GetBracketRound[];
}

export interface GetChildBracketRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetChildBracketResp;
}

export interface GetChildDetailResp {
  /**
   * Child tournament id
   * @format int32
   */
  childId: number;
  /**
   * Child name
   * @minLength 1
   */
  childName: string;
  /**
   * Child url safe name
   * @minLength 1
   */
  childUrlSafeName: string;
  childType: EnumChildTournament;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  childStatus: EnumTournamentStatus;
  /**
   * Child start at
   * @format int64
   */
  childStartAt: number;
  /** Child is hidden */
  childIsHidden: boolean;
  /** Child is lan */
  childIsLan: boolean;
  /**
   * Child venue id
   * @format int32
   */
  childVenueId?: number | null;
  /** Child venue name */
  childVenueName?: string | null;
  prizePoolStatus: EnumPrizePoolStatus;
  /**
   * Prize pool
   * @format double
   */
  prizePool?: number | null;
  prizePoolCurrency?: EnumCurrency;
  /**
   * Prize pool usd
   * @format double
   */
  prizePoolUsd?: number | null;
  /**
   * Team size
   * @format int32
   */
  teamSize: number;
  /**
   * Qualify participants
   * @format int32
   */
  qualifyParticipants?: number | null;
  /**
   * Rounds
   * @format int32
   */
  rounds?: number | null;
  pointAwarded?: EnumPointsAwarded;
  /**
   * Points win
   * @format int32
   */
  pointsWin?: number | null;
  /**
   * Points draw
   * @format int32
   */
  pointsDraw?: number | null;
  /**
   * Child creator id
   * @format int32
   */
  childCreatorId: number;
  /**
   * Child creator name
   * @minLength 1
   */
  childCreatorName: string;
  /**
   * Ranking importance
   * @format double
   */
  rankingImportance: number;
  /**
   * Child created at
   * @format int64
   */
  childCreatedAt: number;
  /**
   * Child updated at
   * @format int64
   */
  childUpdatedAt: number;
  /**
   * Parent tournament id
   * @format int32
   */
  parentId: number;
  /**
   * Parent tournament name
   * @minLength 1
   */
  parentName: string;
  /**
   * Parent tournament url safe name
   * @minLength 1
   */
  parentUrlSafeName: string;
  /**
   * Stage name
   * @minLength 1
   */
  stageName: string;
  parentType: EnumParentTournamentType;
  parentStatus: EnumTournamentStatus;
  /**
   * Parent tournament start at
   * @format int64
   */
  parentStartAt: number;
  /** Parent tournament is hidden */
  parentIsHidden: boolean;
  /** Parent tournament is lan */
  parentIsLan: boolean;
  /**
   * Parent tournament venue id
   * @format int32
   */
  parentVenueId?: number | null;
  /** Parent venue name */
  parentVenueName?: string | null;
  /** Description */
  description?: string | null;
  /** Parent tournament is featured */
  isFeatured: boolean;
  /**
   * Parent tournament creator id
   * @format int32
   */
  parentCreatorId: number;
  /**
   * Parent tournament creator name
   * @minLength 1
   */
  parentCreatorName: string;
  /**
   * Parent tournament created at
   * @format int64
   */
  parentCreatedAt: number;
  /**
   * Parent tournament updated at
   * @format int64
   */
  parentUpdatedAt: number;
  /** Telegram auto psuh */
  isTgPush: boolean;
}

export interface GetChildDetailRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetChildDetailResp;
}

export interface GetChildEarningPrizePoolResp {
  /**
   * Child id
   * @format int32
   */
  childId: number;
  /**
   * Parent tournament name
   * @minLength 1
   */
  parentName: string;
  /**
   * Stage name
   * @minLength 1
   */
  stageName: string;
  /**
   * Child tournament name
   * @minLength 1
   */
  childName: string;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /**
   * Team size
   * @format int32
   */
  teamSize: number;
  prizePoolCurrency?: EnumCurrency;
  /** Prize pool currency code */
  prizePoolCurrencyCode?: string | null;
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
  /**
   * Exchange rate
   * @format double
   */
  exchangeRate?: number | null;
  /**
   * Is player based
   * true: player based
   * false: team based
   */
  isPlayerBased: boolean;
  /** Prize placement */
  prizePlacements?: PrizePlacement[] | null;
}

export interface GetChildEarningPrizePoolRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetChildEarningPrizePoolResp;
}

export interface GetChildEarningsResp {
  /** Child earnings */
  stages: StagingEarningListItem[];
}

export interface GetChildEarningsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetChildEarningsResp;
}

export interface GetChildMediaItem {
  /** @format int32 */
  parentId: number;
  /** @format int32 */
  childId: number;
  /** @format int32 */
  mediaItemId: number;
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  type: string;
  /** @minLength 1 */
  urlSafeTitle: string;
  /** @format int32 */
  viewCount: number;
}

export interface GetChildMediaItemsResp {
  /** @minLength 1 */
  parentTournamentName: string;
  /** @minLength 1 */
  stageName: string;
  /** @minLength 1 */
  childTournamentName: string;
  mediaItems: GetChildMediaItem[];
  paging: PagingRespBase;
}

export interface GetChildMediaItemsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetChildMediaItemsResp;
}

export interface GetChildStageInfoResp {
  /**
   * Child tournament id
   * @format int32
   */
  childId?: number;
  /**
   * Parent tournament id
   * @format int32
   */
  parentId?: number;
  /**
   * Current stage id
   * @format int32
   */
  currentStageId?: number;
  /** Stages options */
  stages: Int32Item[];
}

export interface GetChildStageInfoRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetChildStageInfoResp;
}

export interface GetChildTeamRegistrationResp {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
  /**
   * Child id
   * @format int32
   */
  childId: number;
  /**
   * Register id
   * @format int32
   */
  registerId: number;
  /**
   * Team id
   * @format int32
   */
  teamId: number;
  /**
   * Team name
   * @minLength 1
   */
  teamName: string;
  /** Is reserved */
  isReserved: boolean;
  /**
   * Team size
   * @format int32
   */
  teamSize: number;
  /** Players */
  players: Int32CheckItem[];
}

export interface GetChildTeamRegistrationRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetChildTeamRegistrationResp;
}

export interface GetChildTournamentResp {
  /**
   * Child tournament id
   * @format int32
   */
  childTournamentId: number;
  /**
   * Parent tournament id
   * @format int32
   */
  parentTournamentId: number;
  /**
   * Parent tournament name
   * @minLength 1
   */
  parentName: string;
  /**
   * Stage name
   * @minLength 1
   */
  stageName: string;
  /**
   * Child tournament name
   * @minLength 1
   */
  childName: string;
  type: EnumChildTournament;
  /**
   * Stage id
   * @format int32
   */
  stageId: number;
  /**
   * Child tournament name
   * @minLength 1
   */
  name: string;
  /** Is lan */
  isLan: boolean;
  /**
   * Venue id
   * @format int32
   */
  venueId?: number | null;
  /** VenueName */
  venueName?: string | null;
  /** Is hidden */
  isHidden: boolean;
  prizePoolStatus: EnumPrizePoolStatus;
  prizePoolCurrency?: EnumCurrency;
  /**
   * Prize pool
   * @format double
   */
  prizePool?: number | null;
  /**
   * Exchange Rate
   * @format double
   */
  exchangeRate?: number | null;
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
  status: EnumTournamentStatus;
  /**
   * Ranking Importance
   * @format double
   */
  rankingImportance: number;
  /**
   * Grid Id
   * @format int32
   */
  gridId?: number | null;
  /**
   * Start at
   * @format int64
   */
  startingAt: number;
  /**
   * Rounds
   * @format int32
   */
  rounds?: number | null;
  pointsAwarded?: EnumPointsAwarded;
  /**
   * Points for win
   * @format int32
   */
  pointsWin?: number | null;
  /**
   * Points for draw
   * @format int32
   */
  pointsDraw?: number | null;
  /**
   * Game Mode Id
   * @format int32
   */
  gameModeId?: number | null;
  /** Is Telegram psuh */
  isTgPush: boolean;
}

export interface GetChildTournamentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetChildTournamentResp;
}

export interface GetContactTypesResp {
  /** Contact types */
  contactTypes: ByteItem[];
}

export interface GetContactTypesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetContactTypesResp;
}

export interface GetCountriesResp {
  /** Countries */
  countries: Country[];
  paging: PagingRespBase;
}

export interface GetCountriesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetCountriesResp;
}

export interface GetCountryOptionsResp {
  /** Countries */
  countries: CountryOption[];
}

export interface GetCountryOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetCountryOptionsResp;
}

export interface GetCountryResp {
  country: Country;
}

export interface GetCountryRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetCountryResp;
}

export interface GetCrewFilesResp {
  files: CrewFile[];
  paging: PagingRespBase;
}

export interface GetCrewFilesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetCrewFilesResp;
}

export interface GetCrewFoldersResp {
  /** Parent */
  parent: ParentFolder[];
  /** Folders */
  folders: FolderDetail[];
  paging: PagingRespBase;
}

export interface GetCrewFoldersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetCrewFoldersResp;
}

export interface GetCrewPerformanceResp {
  /** @format int32 */
  articlesCreated?: number;
  /** @format int32 */
  articlesPublished?: number;
  /** @format int32 */
  newsCreated?: number;
  /** @format int32 */
  featuresCreated?: number;
  /** @format int32 */
  articlesProofread?: number;
  /** @format int32 */
  matchGamesResulted?: number;
  /** @format int32 */
  matchGamesResultUpdated?: number;
  /** @format int32 */
  matchGamesDrafted?: number;
  /** @format int32 */
  matchGamesWithMaps?: number;
  /** @format int32 */
  matchGamesWithRoundSets?: number;
  /** @format int32 */
  tournamentsCreated?: number;
  /** @format int32 */
  childTournamentsCreated?: number;
  /** @format int32 */
  voDsCreated?: number;
  /** @format int32 */
  streamsCreated?: number;
}

export interface GetCrewPerformanceRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetCrewPerformanceResp;
}

export interface GetCurrencyOptionsResp {
  /** Currencies */
  currencies: CurrencyItem[];
}

export interface GetCurrencyOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetCurrencyOptionsResp;
}

export interface GetCurrentExchangeRateResp {
  /**
   * Exchange rate
   * @format double
   */
  exchangeRate: number;
  /**
   * Usd amount
   * @format double
   */
  usdAmount: number;
}

export interface GetEarningsResp {
  /** Earnings */
  earnings: EarningListItem[];
  paging: PagingRespBase;
}

export interface GetEarningsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetEarningsResp;
}

export interface GetEarningsStsResp {
  /** @minLength 1 */
  gameSection: string;
  /** @format int32 */
  tournaments: number;
  /** @format double */
  totalAmountUSD: number;
  /** @format int32 */
  prizePoolsLogged: number;
  /** @format int32 */
  estimatedQualifiers: number;
  /** @format int32 */
  estimatedPlayoffs: number;
}

export interface GetEarningsStsRespListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetEarningsStsResp[] | null;
}

export interface GetEventBoxResp {
  /**
   * Event box Id
   * @format int32
   */
  id: number;
  /** @format int32 */
  eventPageId: number;
  type: EnumEventBoxType;
  /** @format int32 */
  style: number;
  /** @format int32 */
  position: number;
  /** @minLength 1 */
  content: string;
}

export interface GetEventBoxRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetEventBoxResp;
}

export interface GetEventPagesResp {
  /**
   * Event Id
   * @format int32
   */
  id: number;
  /**
   * Event Name
   * @minLength 1
   */
  name: string;
  /**
   * Event UrlSafeName
   * @minLength 1
   */
  urlSafeName: string;
  /** @minLength 1 */
  frontendUrl: string;
  /** Event pages */
  pages?: EventPage[] | null;
}

export interface GetEventPagesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetEventPagesResp;
}

export interface GetEventResp {
  /**
   * Event id
   * @format int32
   */
  id: number;
  /**
   * Event name
   * @minLength 1
   */
  name: string;
  /** Organizers */
  organizers: Int16Item[];
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /** Is hidden */
  isHidden: boolean;
  /**
   * Starting at
   * @format int64
   */
  startingAt: number;
  /**
   * Ending at
   * @format int64
   */
  endingAt: number;
  /**
   * Frontend id
   * @format int32
   */
  frontendId: number;
  /** Is lan */
  isLan: boolean;
  /** City */
  city?: string | null;
  /**
   * Country id
   * @format int32
   */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Games */
  games: Int16Item[];
}

export interface GetEventRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetEventResp;
}

export interface GetEventsItem {
  /**
   * Event id
   * @format int32
   */
  id: number;
  /**
   * Event name
   * @minLength 1
   */
  name: string;
  /**
   * Event url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /** Is hidden */
  isHidden: boolean;
  /**
   * Starting at
   * @format int64
   */
  startingAt: number;
  /**
   * Ending at
   * @format int64
   */
  endingAt: number;
  /**
   * View count
   * @format int32
   */
  viewCount: number;
  /**
   * Updated at
   * @format int64
   */
  updatedAt: number;
  /**
   * Created at
   * @format int64
   */
  createdAt: number;
  /**
   * Frontend id
   * @format int32
   */
  frontendId: number;
  /**
   * Frontend short name
   * @minLength 1
   */
  feShortName: string;
  /** Game ids */
  games?: GameBasicInfo[] | null;
  /** Organizers */
  organizers: string[];
  /**
   * Url
   * @minLength 1
   */
  url: string;
  createdBy?: string | null;
  updatedBy?: string | null;
}

export interface GetEventsResp {
  /** Maps */
  events: GetEventsItem[];
  paging: PagingRespBase;
}

export interface GetEventsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetEventsResp;
}

export interface GetFrontendItem {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  shortName: string;
  /** @minLength 1 */
  name: string;
  isHidden: boolean;
  /** @format int32 */
  localeId: number;
  /** @minLength 1 */
  localeName: string;
}

export interface GetFrontendLocaleOptionsResp {
  /** Locale options */
  localeOptions: Record<string, Int16Item[]>;
}

export interface GetFrontendLocaleOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFrontendLocaleOptionsResp;
}

export interface GetFrontendMenu {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  parentId: number;
  /** @format int32 */
  position: number;
  state: EnumState;
}

export interface GetFrontendMenuDetailResp {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  parentId?: number;
  parentName?: string | null;
  state?: EnumState;
  /** @format int32 */
  siteSectionId?: number | null;
  siteSectionName?: string | null;
  /** @format int32 */
  position?: number;
  isUseCustomUrl?: boolean;
  customUrl?: string | null;
}

export interface GetFrontendMenuDetailRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFrontendMenuDetailResp;
}

export interface GetFrontendMenusResp {
  /** @format int32 */
  frontendId: number;
  platform: EnumMenuPlatform;
  menuItems: GetFrontendMenu[];
}

export interface GetFrontendMenusRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFrontendMenusResp;
}

export interface GetFrontendOptionsResp {
  /** Frontend options */
  frontendOptions: Int16Item[];
}

export interface GetFrontendOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFrontendOptionsResp;
}

export interface GetFrontendResp {
  /** @format int32 */
  id: number;
  basicInfo?: FrontendBasicInfo;
  googleSettings?: FrontendGoogleSetting;
  ads?: string | null;
  robots?: string | null;
}

export interface GetFrontendRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFrontendResp;
}

export interface GetFrontendsResp {
  /** Frontends */
  frontends: GetFrontendItem[];
  paging: PagingRespBase;
}

export interface GetFrontendsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFrontendsResp;
}

export interface GetFuncOptionsResp {
  /** Func options */
  funcOptions: UInt16Item[];
}

export interface GetFuncOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuncOptionsResp;
}

export interface GetFuncResp {
  /**
   * Func id
   * @format int32
   */
  funcId: number;
  /**
   * Func name
   * @minLength 1
   */
  name: string;
  /**
   * Func code
   * @minLength 1
   */
  code: string;
  type: EnumFuncType;
  /**
   * Type name
   * @minLength 1
   */
  typeName: string;
  /**
   * Func position
   * @format int32
   */
  position: number;
  state: EnumState;
  /**
   * State name
   * @minLength 1
   */
  stateName: string;
  /**
   * Func url
   * @minLength 1
   */
  url: string;
  /**
   * Func icon
   * @minLength 1
   */
  icon: string;
  /**
   * Created At
   * @format int64
   */
  createdAt: number;
  /**
   * Updated At
   * @format int64
   */
  updatedAt: number;
}

export interface GetFuncRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuncResp;
}

export interface GetFuncTypesResp {
  /** Func types */
  funcTypes: ByteItem[];
}

export interface GetFuncTypesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuncTypesResp;
}

export interface GetFuncsResp {
  /** Funcs */
  funcs: FuncItem[];
}

export interface GetFuncsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuncsResp;
}

export interface GetFuzzyArticlesResp {
  /** Fuzzy articles */
  fuzzyArticles: Int32Item[];
}

export interface GetFuzzyArticlesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyArticlesResp;
}

export interface GetFuzzyBroadcastTalentsResp {
  /** Fuzzy broadcast talents */
  fuzzyBroadcastTalents: Int32Item[];
}

export interface GetFuzzyBroadcastTalentsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyBroadcastTalentsResp;
}

export interface GetFuzzyEventsResp {
  /** Fuzzy events */
  fuzzyEvents: Int32Item[];
}

export interface GetFuzzyEventsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyEventsResp;
}

export interface GetFuzzyFoldersResp {
  folders: FuzzyFolderDetail[];
}

export interface GetFuzzyFoldersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyFoldersResp;
}

export interface GetFuzzyGameRaceResp {
  /** Fuzzy game races */
  fuzzyGames: Int32Item[];
}

export interface GetFuzzyGameRaceRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyGameRaceResp;
}

export interface GetFuzzyGamesResp {
  /** Fuzzy games */
  fuzzyGames: Int32Item[];
}

export interface GetFuzzyGamesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyGamesResp;
}

export interface GetFuzzyMapsResp {
  /** Fuzzy maps */
  fuzzyMaps: Int16Item[];
}

export interface GetFuzzyMapsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyMapsResp;
}

export interface GetFuzzyMediaStreamsResp {
  fuzzyMediaItems: Int32Item[];
}

export interface GetFuzzyMediaStreamsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyMediaStreamsResp;
}

export interface GetFuzzyMediaVideosResp {
  fuzzyMediaItems: Int32Item[];
}

export interface GetFuzzyMediaVideosRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyMediaVideosResp;
}

export interface GetFuzzyPlayersResp {
  /** Fuzzy players */
  fuzzyPlayers: Int32Item[];
}

export interface GetFuzzyPlayersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyPlayersResp;
}

export interface GetFuzzySponsorsResp {
  /** Fuzzy sponsors */
  fuzzySponsors: Int16Item[];
}

export interface GetFuzzySponsorsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzySponsorsResp;
}

export interface GetFuzzyTeamsResp {
  /** Fuzzy teams */
  fuzzyTeams: Int32Item[];
}

export interface GetFuzzyTeamsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyTeamsResp;
}

export interface GetFuzzyTournamentsResp {
  /** Fuzzy tournaments */
  fuzzyTournaments?: Int32Item[] | null;
}

export interface GetFuzzyTournamentsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyTournamentsResp;
}

export interface GetFuzzyUsersByGroupResp {
  /** Fuzzy users */
  users: GroupUserListItem[];
}

export interface GetFuzzyUsersByGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyUsersByGroupResp;
}

export interface GetFuzzyUsersResp {
  /** Fuzzy users */
  fuzzyUsers: Int32Item[];
}

export interface GetFuzzyUsersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyUsersResp;
}

export interface GetFuzzyVenuesResp {
  /** Fuzzy venues */
  fuzzyVenues: Int32Item[];
}

export interface GetFuzzyVenuesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetFuzzyVenuesResp;
}

export interface GetGameAccountDetail {
  /**
   * Game account id
   * @format int32
   */
  gameAccountId: number;
  /**
   * Player id
   * @format int32
   */
  playerId: number;
  /**
   * Game account name
   * @minLength 1
   */
  gameAccountName: string;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /**
   * Game url safe name
   * @minLength 1
   */
  gameUrlSafeName: string;
  /**
   * Server id
   * @format int32
   */
  serverId: number;
  /**
   * Server name
   * @minLength 1
   */
  serverName: string;
  /** Is delete */
  isDeleted: boolean;
}

export interface GetGameAccountResp {
  /**
   * Game account id
   * @format int32
   */
  gameAccountId: number;
  /**
   * Player id
   * @format int32
   */
  playerId: number;
  /**
   * Game account name
   * @minLength 1
   */
  gameAccountName: string;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /** @format int32 */
  serverId?: number | null;
}

export interface GetGameAccountRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGameAccountResp;
}

export interface GetGameAccountsResp {
  /** Game accounts */
  gameAccounts: GetGameAccountDetail[];
  paging: PagingRespBase;
}

export interface GetGameAccountsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGameAccountsResp;
}

export interface GetGameDraftResp {
  /** Is player based */
  isPlayerBased: boolean;
  /** Team options */
  teamOptions: Int32Item[];
  /** Hero options */
  heroOptions: Int32Item[];
  team1PlayerOptions: DraftPlayerOption;
  team2PlayerOptions: DraftPlayerOption;
  /** Draft items */
  draftItems: GameResultDraft[];
}

export interface GetGameDraftRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGameDraftResp;
}

export interface GetGameOpponent {
  /**
   * Registration Id
   * @format int32
   */
  registrationId?: number | null;
  /** Team Name */
  name?: string | null;
  /**
   * Score
   * @format int32
   */
  score?: number | null;
  /**
   * Games side id
   * @format int32
   */
  gameSideId?: number | null;
  /** current players on the team */
  lineup?: Int32Item[] | null;
  /** stand ins players */
  standIns?: Int32Item[] | null;
}

export interface GetGameOptionsResp {
  /** Games */
  games: Int16Item[];
}

export interface GetGameOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  gameId: number;
  /** Countries */
  countries: Int16Item[];
}

export interface GetGameRegionRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGameRegionTranslationResp;
}

export interface GetGameRegionsResp {
  /** Game regions */
  gameRegions: GameRegionListItem[];
  paging: PagingRespBase;
}

export interface GetGameRegionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGameRegionsResp;
}

export interface GetGameResp {
  /**
   * Game id
   * @format int32
   */
  id: number;
  /**
   * Game name
   * @minLength 1
   */
  name: string;
  /** Has player rankings */
  hasPlayerRankings: boolean;
  /** Has team rankings */
  hasTeamRankings: boolean;
  /** Has streams */
  hasStreams: boolean;
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
  isLegacy: boolean;
  /**
   * Replay count
   * @format int32
   */
  replayCount: number;
  /**
   * Recommended replay count
   * @format int32
   */
  recommendedReplayCount: number;
}

export interface GetGameRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGameResp;
}

export interface GetGamesResp {
  /** Games */
  games: GameListItem[];
  paging: PagingRespBase;
}

export interface GetGamesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGamesResp;
}

export interface GetGamesResultedResp {
  /** Match games resulted */
  matchGames: MatchGameResult[];
  paging: PagingRespBase;
}

export interface GetGamesResultedRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGamesResultedResp;
}

export interface GetGenderOptionsResp {
  /** Gender */
  genders: GenderOption[];
}

export interface GetGenderOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGenderOptionsResp;
}

export interface GetGridMatchesResp {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  tournamentName: string;
  /** @minLength 1 */
  opponent1Name: string;
  /** @minLength 1 */
  opponent2Name: string;
  /** @minLength 1 */
  gameName: string;
  /** @format int32 */
  gamesPerMatchSet: number;
  /** @format int64 */
  dateTime: number;
}

export interface GetGridMatchesRespListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGridMatchesResp[] | null;
}

export interface GetGridPlayersResp {
  /** Grid Players */
  players: StringItem[];
}

export interface GetGridPlayersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGridPlayersResp;
}

export interface GetGridTeamsResp {
  /** teams */
  teams: GridTeam[];
}

export interface GetGridTeamsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGridTeamsResp;
}

export interface GetGridTournamentsResp {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface GetGridTournamentsRespListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGridTournamentsResp[] | null;
}

export interface GetGroupBlankPermissionsResp {
  /** Frontend permissions */
  frontendPermissions: Int16Item[];
  /** Backoffice permissions */
  backofficePermissions: SimpleBackOfficePermissionItem[];
}

export interface GetGroupBlankPermissionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGroupBlankPermissionsResp;
}

export interface GetGroupOptionsResp {
  /** Groups */
  groups: UInt32Item[];
}

export interface GetGroupOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  /** Frontend permission options */
  frontendPermissionOptions: Int16Item[];
  /** Backoffice permissions */
  backofficePermissions: SimpleBackOfficePermissionItem[];
}

export interface GetGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGroupResp;
}

export interface GetGroupTemplatesResp {
  /** Templates */
  templates: GroupTemplate[];
}

export interface GetGroupTemplatesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGroupTemplatesResp;
}

export interface GetGroupsResp {
  /** Groups */
  groups: GroupListItem[];
  paging: PagingRespBase;
}

export interface GetGroupsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetGroupsResp;
}

export interface GetHero {
  /**
   * Hero Id
   * @format int32
   */
  id: number;
  /**
   * Hero Name
   * @minLength 1
   */
  name: string;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /** Translations */
  translations: GetHeroesTranslation[];
}

export interface GetHeroLocale {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  bcp47Identifier: string;
  /** @minLength 1 */
  displayName: string;
}

export interface GetHeroResp {
  /**
   * Hero Id
   * @format int32
   */
  id: number;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /** Icon file name */
  iconFileName?: string | null;
  /** Mobile Icon file name */
  mobileIconFileName?: string | null;
  /**
   * Moonton hero id
   * @format int32
   */
  mtHeroId?: number | null;
}

export interface GetHeroRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetHeroResp;
}

export interface GetHeroTranslation {
  /** @minLength 1 */
  name: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Tagline
   * @minLength 1
   */
  tagline: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /** @minLength 1 */
  status: string;
  locale: GetHeroLocale;
}

export interface GetHeroTranslationsResp {
  /**
   * Hero Id
   * @format int32
   */
  id: number;
  /**
   * Hero Name
   * @minLength 1
   */
  name: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Tagline
   * @minLength 1
   */
  tagline: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  translations: GetHeroTranslation[];
}

export interface GetHeroTranslationsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetHeroTranslationsResp;
}

export interface GetHeroesResp {
  /** Heroes */
  heroes: GetHero[];
  paging: PagingRespBase;
}

export interface GetHeroesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetHeroesResp;
}

export interface GetHeroesTranslation {
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  status: string;
  locale: GetHeroLocale;
}

export interface GetLanguagesResp {
  /** Language options */
  languageOptions: LanguageOption[];
}

export interface GetLanguagesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetLanguagesResp;
}

export interface GetLocaleOptionsResp {
  /** Locales */
  locales: Int16Item[];
}

export interface GetLocaleOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetLocaleOptionsResp;
}

export interface GetLogLevelsResp {
  /** Log Levels */
  logLevels: ByteItem[];
}

export interface GetLogLevelsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetLogLevelsResp;
}

export interface GetMLBBBattileDetailResp {
  battleId?: string | null;
  roomName?: string | null;
  team1Name?: string | null;
  team2Name?: string | null;
  /** @format int64 */
  startTime?: number;
  status?: string | null;
}

export interface GetMLBBBattileDetailRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMLBBBattileDetailResp;
}

export interface GetMLBBBattileListResp {
  /**
   * 戰鬥Id
   * @minLength 1
   */
  battleId: string;
  /**
   * 戰鬥開始時間 (已轉為UTC+0)
   * @format int64
   */
  reportTime: number;
  /**
   * 裁判遊戲Id
   * @format int32
   */
  judgeId: number;
}

export interface GetMLBBBattileListRespListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMLBBBattileListResp[] | null;
}

export interface GetMLBBBattleSpellDetailResp {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  battleSpellName: string;
}

export interface GetMLBBBattleSpellDetailRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMLBBBattleSpellDetailResp;
}

export interface GetMLBBBattleSpellsItem {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  battleSpellName: string;
  updatedBy?: string | null;
  /** @format int64 */
  updatedAt?: number | null;
  createdBy?: string | null;
  /** @format int64 */
  createdAt?: number | null;
}

export interface GetMLBBBattleSpellsResp {
  battleSpells: GetMLBBBattleSpellsItem[];
  paging: PagingRespBase;
}

export interface GetMLBBBattleSpellsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMLBBBattleSpellsResp;
}

export interface GetMLBBEmblemDetailResp {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  emblemName: string;
  /** @format int32 */
  emblemType: number;
  /** @minLength 1 */
  emblemTypeName: string;
}

export interface GetMLBBEmblemDetailRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMLBBEmblemDetailResp;
}

export interface GetMLBBEmblemsItem {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  emblemName: string;
  /** @format int32 */
  emblemType: number;
  /** @minLength 1 */
  emblemTypeName: string;
  updatedBy?: string | null;
  /** @format int64 */
  updatedAt?: number | null;
  createdBy?: string | null;
  /** @format int64 */
  createdAt?: number | null;
}

export interface GetMLBBEmblemsResp {
  emblems: GetMLBBEmblemsItem[];
  paging: PagingRespBase;
}

export interface GetMLBBEmblemsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMLBBEmblemsResp;
}

export interface GetMLBBEqpDetailResp {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  equipmentName: string;
  imagePath?: string | null;
}

export interface GetMLBBEqpDetailRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMLBBEqpDetailResp;
}

export interface GetMLBBEqpsItem {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  equipmentName: string;
  updatedBy?: string | null;
  /** @format int64 */
  updatedAt?: number | null;
  createdBy?: string | null;
  /** @format int64 */
  createdAt?: number | null;
}

export interface GetMLBBEqpsResp {
  equipments: GetMLBBEqpsItem[];
  paging: PagingRespBase;
}

export interface GetMLBBEqpsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMLBBEqpsResp;
}

export interface GetMap {
  /**
   * Map Id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /** Translations */
  translations: GetMapTranslation[];
}

export interface GetMapLocale {
  /**
   * Id
   * @format int32
   */
  id: number;
  /**
   * Bcp47Identifier
   * @minLength 1
   */
  bcp47Identifier: string;
  /**
   * Display name
   * @minLength 1
   */
  displayName: string;
}

export interface GetMapResp {
  /**
   * Map Id
   * @format int32
   */
  id: number;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Image file name */
  imageFileName?: string | null;
}

export interface GetMapRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMapResp;
}

export interface GetMapTranslation {
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Status
   * @minLength 1
   */
  status: string;
  locale: GetMapLocale;
}

export interface GetMapTranslationsResp {
  /**
   * Id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Translations */
  translations?: GetMapTranslation[] | null;
}

export interface GetMapTranslationsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMapTranslationsResp;
}

export interface GetMapsResp {
  /** Maps */
  maps: GetMap[];
  paging: PagingRespBase;
}

export interface GetMapsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMapsResp;
}

export interface GetMatchGameBrResultItem {
  /** @format int32 */
  placement?: number | null;
  /** @format int32 */
  registrationId?: number;
  name?: string | null;
  withResult?: boolean;
}

export interface GetMatchGameBrResults {
  /** @format int32 */
  pointsPerKill?: number;
  oppnents?: GetMatchGameBrResultItem[] | null;
}

export interface GetMatchGameResp {
  /**
   * Match game id
   * @format int32
   */
  matchGameId: number;
  /**
   * Round Name
   * @minLength 1
   */
  roundName: string;
  /**
   * Match Name
   * @minLength 1
   */
  matchName: string;
  /**
   * Match game number
   * @format int32
   */
  gameNumber: number;
  tournamentType: EnumChildTournament;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /** Opponent options */
  opponentOptions: Int32Item[];
  /**
   * Winner
   * @format int32
   */
  winner?: number | null;
  result?: EnumGameResult;
  /**
   * Map id
   * @format int32
   */
  mapId?: number | null;
  /** Map name */
  mapName?: string | null;
  /** Vods */
  vods: Int32Item[];
  team1?: GetGameOpponent;
  team2?: GetGameOpponent;
  brResults?: GetMatchGameBrResults;
  /**
   * Parent tournament team size
   * @format int32
   */
  teamSize?: number;
  /** Moonton battle id (On Mobile Legends needs to set) */
  mtBattleId?: string | null;
}

export interface GetMatchGameRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMatchGameResp;
}

export interface GetMatchGamesResp {
  /** Round options */
  roundOptions: Int32Item[];
  childTournamentType: EnumChildTournament;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /** Matches */
  matches: MatchGames[];
}

export interface GetMatchGamesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMatchGamesResp;
}

export interface GetMatchesOpponent {
  /**
   * child tournament matches opponents Id
   * @format int32
   */
  id: number;
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
  isSeed?: boolean;
  isQualification?: boolean;
}

export interface GetMatchesReportsResp {
  /** Heroes */
  matches: MatchesReport[];
  paging: PagingRespBase;
}

export interface GetMatchesReportsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMatchesReportsResp;
}

export interface GetMatchesResp {
  /** @format int32 */
  id: number;
  /** @format int32 */
  number: number;
  hyperlink?: string | null;
  opponents: GetMatchesOpponent[];
  /** @format int64 */
  startingAt: number;
  streams: Int32Item[];
  /** @format int32 */
  gamesPerMatch?: number | null;
  /** @format int32 */
  gridId?: number | null;
  /** @format int32 */
  nextMatchId?: number | null;
  /** @format int32 */
  nextMatchPlacement?: number | null;
  /** @format int32 */
  tournamentGridId?: number | null;
  status?: EnumBoMatchStatus;
}

export interface GetMatchesRespListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMatchesResp[] | null;
}

export interface GetMediaItems {
  /**
   * Broadcast talent id
   * @format int32
   */
  broadcastTalentId: number;
  /**
   * Media item id
   * @format int32
   */
  mediaItemId: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Type
   * @minLength 1
   */
  type: string;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeTitle: string;
  /**
   * View count
   * @format int32
   */
  viewCount: number;
}

export interface GetMediaItemsResp {
  mediaItems: GetMediaItems[];
  paging: PagingRespBase;
}

export interface GetMediaItemsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMediaItemsResp;
}

export interface GetMediaVodHostOptionsResp {
  /** Hosts */
  hosts: Int16Item[];
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
  tags: Int32Item[];
  /** Is in game */
  isInGame: boolean;
  /** Is featured */
  isFeatured: boolean;
  /** Related players */
  players: Int32Item[];
  /** Related teams */
  teams: Int32Item[];
}

export interface GetMediaVodRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMediaVodResp;
}

export interface GetMediaVodsResp {
  /** Vods */
  vods: MediaVodListItem[];
  paging: PagingRespBase;
}

export interface GetMediaVodsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetMediaVodsResp;
}

export interface GetMode {
  /**
   * Mode Id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Abbreviation */
  abbreviation?: string | null;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /** Translations */
  translations: GetModeTranslation[];
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
  id: number;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Abbreviation */
  abbreviation?: string | null;
}

export interface GetModeRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetModeResp;
}

export interface GetModeTranslation {
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  abbreviation: string;
  /** @minLength 1 */
  status: string;
  locale: GetModeLocale;
}

export interface GetModeTranslationsResp {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  abbreviation: string;
  translations: GetModeTranslation[];
}

export interface GetModeTranslationsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetModeTranslationsResp;
}

export interface GetModesResp {
  /** Modes */
  modes: GetMode[];
  paging: PagingRespBase;
}

export interface GetModesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetModesResp;
}

export interface GetNotificationTemplateResp {
  detail: NotificationTemplateDetail;
  arguments: NotificationTemplateArgument[];
}

export interface GetNotificationTemplateRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetNotificationTemplateResp;
}

export interface GetNotificationTemplatesResp {
  /** Notification Templates */
  notificationTemplates: NotificationTemplateListItem[];
  paging?: PagingRespBase;
}

export interface GetNotificationTemplatesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetNotificationTemplatesResp;
}

export interface GetNotificationTypeOptionsResp {
  /** Notification Type Options */
  notificationTypeOptions: Int16Item[];
}

export interface GetNotificationTypeOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetNotificationTypeOptionsResp;
}

export interface GetOneSignalAppResp {
  oneSignalAppDetail: OneSignalAppListItem;
}

export interface GetOneSignalAppRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetOneSignalAppResp;
}

export interface GetOneSignalAppsResp {
  /** Messaging One Signal Apps */
  onesignalApps: OneSignalAppListItem[];
  paging: PagingRespBase;
}

export interface GetOneSignalAppsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetOneSignalAppsResp;
}

export interface GetOpponentsItem {
  /**
   * Id
   * @format int32
   */
  id: number;
  /**
   * Placement
   * @format int32
   */
  placement?: number | null;
  /**
   * Registration id
   * @format int32
   */
  registrationId: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Point adjustment
   * @format int32
   */
  pointAdjustment: number;
  /**
   * Game/Match count
   * @format int32
   */
  count: number;
  /**
   * Win count
   * @format int32
   */
  winCount: number;
  /**
   * Draw count
   * @format int32
   */
  drawCount: number;
  /**
   * Loss count
   * @format int32
   */
  lossCount: number;
  /**
   * not include points adjustment
   * @format int32
   */
  points: number;
  /**
   * PointsAdjustment + Points
   * @format int32
   */
  totalPoints: number;
}

export interface GetOpponentsResp {
  /**
   * Parent tournament id
   * @format int32
   */
  parentTournamentId: number;
  /**
   * Child tournament id
   * @format int32
   */
  childTournamentId: number;
  /**
   * Parent tournament name
   * @minLength 1
   */
  parentTournamentName: string;
  /**
   * Stage name
   * @minLength 1
   */
  stageName: string;
  /**
   * Child tournament name
   * @minLength 1
   */
  childTournamentName: string;
  pointsAwarded?: EnumPointsAwarded;
  /** Opponents */
  opponents: GetOpponentsItem[];
}

export interface GetOpponentsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetOpponentsResp;
}

export interface GetPageResp {
  /**
   * Page id
   * @format int32
   */
  pageId: number;
  /**
   * Frontend id
   * @format int32
   */
  frontendId: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Content
   * @minLength 1
   */
  content: string;
  /**
   * Extra css
   * @minLength 1
   */
  extraCss: string;
  /**
   * Time spent
   * @format int32
   */
  timeSpent: number;
  /** Comments enabled */
  commentsEnabled: boolean;
}

export interface GetPageRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetPageResp;
}

export interface GetPagesResp {
  /** Pages */
  pages: PageListItem[];
  paging: PagingRespBase;
}

export interface GetPagesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetPagesResp;
}

export interface GetParentBroadcastTalentsResp {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId: number;
  /**
   * Parent tournament name
   * @minLength 1
   */
  parentName: string;
  /** Broadcast talents */
  broadcastTalents: ParentBroadcastTalentListItem[];
  paging: PagingRespBase;
}

export interface GetParentBroadcastTalentsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetParentBroadcastTalentsResp;
}

export interface GetParentDetailResp {
  parentDetail: ParentTournamentDetail;
  /** Stage details */
  stageDetails: ParentStageDetail[];
}

export interface GetParentDetailRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetParentDetailResp;
}

export interface GetParentResp {
  parentDetail: ParentTournamentEditDetail;
  /** Parent tournament sponsors */
  sponsors: Int16OrderItem[];
  /** Parent tournament maps */
  maps: Int16Item[];
}

export interface GetParentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetParentResp;
}

export interface GetParentStage {
  /**
   * Stage Id
   * @format int32
   */
  stageId: number;
  /**
   * Stage Order
   * @format int32
   */
  order: number;
  /**
   * Stage Name
   * @minLength 1
   */
  stageName: string;
  /**
   * Stage UrlSafeName
   * @minLength 1
   */
  urlSafeName: string;
  /** Child tournaments */
  childTournaments: GetParentStageChild[];
}

export interface GetParentStageChild {
  /**
   * Child tournament Id
   * @format int32
   */
  childId: number;
  /**
   * Child tournament Name
   * @minLength 1
   */
  childName: string;
  /**
   * Child tournament UrlSafeName
   * @minLength 1
   */
  childUrlSafeName: string;
  childType: EnumChildTournament;
  /**
   * Child tournament type name
   * @minLength 1
   */
  childTypeName: string;
  /**
   * Child tournament starting datetime
   * @format int64
   */
  startAt: number;
  /**
   * Child tournament ranking importance
   * @format double
   */
  ranking: number;
  childStatus: EnumTournamentStatus;
  /**
   * Child status name
   * @minLength 1
   */
  childStatusName: string;
  /**
   * Group Embed Url
   * @minLength 1
   */
  groupEmbedUrl: string;
  /** Has started */
  hasStarted: boolean;
  /** Is hidden */
  isHidden: boolean;
}

export interface GetParentStagesForEditResp {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
  /**
   * Parent name
   * @minLength 1
   */
  parentName: string;
  /** Stages */
  stages: Int32OrderItem[];
}

export interface GetParentStagesForEditRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetParentStagesForEditResp;
}

export interface GetParentStagesResp {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId: number;
  /**
   * Parent tournament name
   * @minLength 1
   */
  parentName: string;
  /**
   * FrontEndId
   * @format int32
   */
  frontEndId?: number | null;
  /**
   * Frontend short name
   * @minLength 1
   */
  feName: string;
  /**
   * Parent tournament UrlSafeName
   * @minLength 1
   */
  parentUrlSafeName: string;
  parentStatus: EnumTournamentStatus;
  /**
   * Parent tournament name
   * @minLength 1
   */
  parentStatusName: string;
  /**
   * GameId
   * @format int32
   */
  gameId: number;
  /**
   * Game Name
   * @minLength 1
   */
  gameName: string;
  /**
   * Game icon url
   * @minLength 1
   */
  gameIconUrl: string;
  /**
   * Game UrlSafeName
   * @minLength 1
   */
  gameUrlSafeName: string;
  /** The GRID field is only displayed to the user when the parent tournament game = CSGO, Valorant or Dota 2 */
  showGridDataProvider: boolean;
  /** Is Player Base */
  isPlayerBase: boolean;
  /** Stages */
  stages: GetParentStage[];
}

export interface GetParentStagesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetParentStagesResp;
}

export interface GetParentTournamentStateOptionsResp {
  /** Tournament state options */
  states: Int16Item[];
}

export interface GetParentTournamentStateOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetParentTournamentStateOptionsResp;
}

export interface GetParentsResp {
  /** Parent tournaments */
  parents: ParentTournamentListItem[];
  paging: PagingRespBase;
}

export interface GetParentsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetParentsResp;
}

export interface GetPlayerMediaItems {
  /**
   * Player id
   * @format int32
   */
  playerId: number;
  /**
   * Media item id
   * @format int32
   */
  mediaItemId: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Type
   * @minLength 1
   */
  type: string;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeTitle: string;
  /**
   * View count
   * @format int32
   */
  viewCount: number;
}

export interface GetPlayerMediaItemsResp {
  /** Media items */
  mediaItems: GetPlayerMediaItems[];
  paging: PagingRespBase;
}

export interface GetPlayerMediaItemsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetPlayerMediaItemsResp;
}

export interface GetPlayerResp {
  /**
   * Player id
   * @format int32
   */
  playerId: number;
  /**
   * User id
   * @format int32
   */
  userId?: number | null;
  /**
   * Nickname (Name)
   * @minLength 1
   */
  nickName: string;
  /** Is active */
  isActive: boolean;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  gender: EnumGender;
  /**
   * Gender name
   * @minLength 1
   */
  genderName: string;
  /**
   * Date of birth
   * @format date
   */
  dateOfBirth?: string | null;
  /**
   * Country id
   * @format int32
   */
  countryId?: number | null;
  /** Country */
  country?: string | null;
  /**
   * Initial rating
   * @format int32
   */
  initialRating?: number | null;
  /**
   * Primary game id
   * @format int32
   */
  primaryGameId?: number | null;
  /** Primary game */
  primaryGame?: string | null;
  /** Description */
  description?: string | null;
  /** Image file name */
  imageFileName?: string | null;
  /** Facebook */
  facebook?: string | null;
  /** Twitter */
  twitter?: string | null;
  /** Youtube */
  youtube?: string | null;
  /** Grid Player Id */
  gridId?: string | null;
}

export interface GetPlayerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetPlayerResp;
}

export interface GetPlayersDetail {
  /**
   * Player id
   * @format int32
   */
  playerId: number;
  /**
   * Nickname (Name)
   * @minLength 1
   */
  nickName: string;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeName: string;
  gender: EnumGender;
  /**
   * Gender name
   * @minLength 1
   */
  genderName: string;
  /** Country name */
  countryName?: string | null;
  /** Country code */
  countryCode?: string | null;
  /**
   * Primary game id
   * @format int32
   */
  primaryGameId?: number | null;
  /** Primary game */
  primaryGame?: string | null;
  /** Team names */
  teamNames?: string[] | null;
  /** Primary game icon url */
  primaryGameIconUrl?: string | null;
  /** Primary game url safe name */
  primaryGameUrlSafeName?: string | null;
  /** Is active */
  isActive: boolean;
  /**
   * Created at
   * @format int64
   */
  createdAt: number;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /** Grid id */
  gridId?: string | null;
  /** With grid linked */
  withGridLinked: boolean;
}

export interface GetPlayersResp {
  /** Players */
  players: GetPlayersDetail[];
  paging: PagingRespBase;
}

export interface GetPlayersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetPlayersResp;
}

export interface GetPointsAdjustmentResp {
  /** @format int32 */
  id: number;
  /** @format int32 */
  registrationId: number;
  /** @minLength 1 */
  name: string;
  /** @format int32 */
  placementPoints: number;
  /** @format int32 */
  killPoints: number;
  /** @format int32 */
  gamePointsAddition: number;
  /** @format int32 */
  gamePointsDeduction: number;
  /** @format int32 */
  pointsAddition: number;
  /** @format int32 */
  pointsDeduction: number;
  /** @format int32 */
  totalPoints: number;
}

export interface GetPointsAdjustmentRespListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetPointsAdjustmentResp[] | null;
}

export interface GetPointsAwardedOptionsResp {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface GetPointsAwardedOptionsRespListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetPointsAwardedOptionsResp[] | null;
}

export interface GetPreviousLineupsResp {
  /** Team1 current players on the team */
  team1Lineup?: Int32Item[] | null;
  /** Team1 stand ins players */
  team1StandIns?: Int32Item[] | null;
  /** Team2 current players on the team */
  team2Lineup?: Int32Item[] | null;
  /** Team2 stand ins players */
  team2StandIns?: Int32Item[] | null;
}

export interface GetPreviousLineupsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetPreviousLineupsResp;
}

export interface GetPrizePoolStatusOptionsResp {
  /** Prize pool status */
  prizePoolStatus: Int16Item[];
}

export interface GetPrizePoolStatusOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetPrizePoolStatusOptionsResp;
}

export interface GetRegisteredPlayersResp {
  /** Team1 current players on the team */
  team1Lineup?: Int32Item[] | null;
  /** Team2 current players on the team */
  team2Lineup?: Int32Item[] | null;
}

export interface GetRegisteredPlayersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetRegisteredPlayersResp;
}

export interface GetRegistrationListResp {
  /** Heroes */
  users: UserRegistration[];
  paging: PagingRespBase;
}

export interface GetRegistrationListRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetRegistrationListResp;
}

export interface GetReplaceOpponentsResp {
  /** @format int32 */
  id: number;
  /** @format int32 */
  registrationId: number;
  opponentName?: string | null;
  /** @format int32 */
  replaceByRegistrationId: number;
  replaceOpponentName?: string | null;
  /** @format int64 */
  replacedDateTime: number;
}

export interface GetReplaceOpponentsRespListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetReplaceOpponentsResp[] | null;
}

export interface GetRoleBlankPermissionsResp {
  /** Frontend permissions */
  frontendPermissions: Int16Item[];
  /** Backoffice permissions */
  backofficePermissions: SimpleBackOfficePermissionItem[];
}

export interface GetRoleBlankPermissionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetRoleBlankPermissionsResp;
}

export interface GetRoleOptionsByGroupResp {
  /** Roles */
  roles: UInt32Item[];
}

export interface GetRoleOptionsByGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetRoleResp;
}

export interface GetRoleTemplatesByGroupResp {
  /** Templates */
  templates: RoleTemplate[];
}

export interface GetRoleTemplatesByGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetRoleTemplatesByGroupResp;
}

export interface GetRolesByGroupResp {
  /** Roles */
  roles: RoleListItem[];
  paging: PagingRespBase;
}

export interface GetRolesByGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetRolesByGroupResp;
}

export interface GetRoundResp {
  /**
   * Id
   * @format int32
   */
  id: number;
  pointsAwarded?: EnumPointsAwarded;
  /**
   * Parent tournament name
   * @minLength 1
   */
  parentName: string;
  /**
   * Stage tournament name
   * @minLength 1
   */
  stageName: string;
  /**
   * Child tournament name
   * @minLength 1
   */
  childName: string;
  /**
   * Round name
   * @minLength 1
   */
  roundName: string;
  /**
   * Game Id
   * @format int32
   */
  gameId: number;
  type: EnumRoundType;
  /** Is hidden */
  isHidden: boolean;
  /**
   * Number
   * @format int32
   */
  number: number;
  /**
   * Game per match
   * @format int32
   */
  gamesPerMatch: number;
  /** Mapping points */
  mappingPoints: RoundMappingPointsItem[];
}

export interface GetRoundRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetRoundResp;
}

export interface GetRoundSetsItem {
  /**
   * sorting no
   * @format int32
   */
  number: number;
  /** Is over time */
  isOverTime: boolean;
  /**
   * game side [CS:GO 0:Team1->CT/Team2->T, 1: Team2->CT/Team1->T], [Valorant 0:Team1->A/Team2->D, 1:Team2->A/Team1->D]
   * @format int32
   */
  sides: number;
  /**
   * Team1 Name
   * @minLength 1
   */
  team1Name: string;
  /**
   * Team 1 score
   * @format int32
   */
  team1Score: number;
  /**
   * Team2 Name
   * @minLength 1
   */
  team2Name: string;
  /**
   * Team 2 score
   * @format int32
   */
  team2Score: number;
}

export interface GetRoundSetsResp {
  /** Round sets items */
  roundSetsItems: GetRoundSetsItem[];
}

export interface GetRoundSetsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetRoundSetsResp;
}

export interface GetRoundsItem {
  /**
   * Round Id
   * @format int32
   */
  id: number;
  /**
   * Round Name
   * @minLength 1
   */
  name: string;
  /**
   * Round Number
   * @format int32
   */
  number: number;
  type: EnumRoundType;
  /**
   * Games per match
   * @format int32
   */
  gamesPerMatch: number;
}

export interface GetRoundsResp {
  /**
   * Parent tournament id
   * @minLength 1
   */
  parentTournamentName: string;
  /**
   * Stage name
   * @minLength 1
   */
  stageName: string;
  /**
   * Child tournament name
   * @minLength 1
   */
  childTournamentName: string;
  tournamentType: EnumChildTournament;
  /** Rounds */
  rounds: GetRoundsItem[];
}

export interface GetRoundsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetRoundsResp;
}

export interface GetServerOptionsResp {
  /** @format int32 */
  serverId: number;
  /** @format int32 */
  gameId: number;
  /** @minLength 1 */
  name: string;
  isFrozen: boolean;
}

export interface GetServerOptionsRespListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetServerOptionsResp[] | null;
}

export interface GetServerResp {
  /**
   * Server id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Is frozen */
  isFrozen: boolean;
  /** Account name format */
  accountNameFormat?: string | null;
  /**
   * Account name regex
   * @minLength 1
   */
  accountNameRegex: string;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /** @minLength 1 */
  gameName: string;
  gameIsLegacy: boolean;
}

export interface GetServerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetServerResp;
}

export interface GetServers {
  /**
   * Server id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /** Is frozen */
  isFrozen: boolean;
  /** Account name format */
  accountNameFormat?: string | null;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /**
   * Game icon image url
   * @minLength 1
   */
  gameIconImageUrl: string;
}

export interface GetServersResp {
  /** Servers */
  servers: GetServers[];
  paging: PagingRespBase;
}

export interface GetServersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetServersResp;
}

export interface GetSide {
  /**
   * Side Id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /** Translations */
  translations: GetSideTranslation[];
}

export interface GetSideLocale {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  bcp47Identifier: string;
  /** @minLength 1 */
  displayName: string;
}

export interface GetSideResp {
  /**
   * Side Id
   * @format int32
   */
  id: number;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Image file name */
  iconFileName?: string | null;
}

export interface GetSideRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetSideResp;
}

export interface GetSideTranslation {
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  status: string;
  locale: GetSideLocale;
}

export interface GetSideTranslationsResp {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  translations: GetSideTranslation[];
}

export interface GetSideTranslationsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetSideTranslationsResp;
}

export interface GetSidesResp {
  /** Sites */
  sides: GetSide[];
  paging: PagingRespBase;
}

export interface GetSidesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetSidesResp;
}

export interface GetSiteSectionResp {
  /**
   * Site section id
   * @format int32
   */
  id: number;
  /** @format int32 */
  gameId?: number | null;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Hidden */
  hidden: boolean;
}

export interface GetSiteSectionRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetSiteSectionResp;
}

export interface GetSiteSections {
  /**
   * Site section id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /** Hidden */
  hidden: boolean;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /**
   * Game url safe name
   * @minLength 1
   */
  gameUrlSafeName: string;
}

export interface GetSiteSectionsOptionsResp {
  /** Site section options */
  siteSectionOptions: Int16Item[];
}

export interface GetSiteSectionsOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetSiteSectionsOptionsResp;
}

export interface GetSiteSectionsResp {
  /** Site sections */
  siteSections: GetSiteSections[];
  paging: PagingRespBase;
}

export interface GetSiteSectionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetSiteSectionsResp;
}

export interface GetSponsorResp {
  /**
   * Sponsor id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Image file name */
  imageFileName?: string | null;
  /** Small logo image */
  smallLogoImg?: string | null;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export interface GetSponsorRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetSponsorResp;
}

export interface GetSponsors {
  /**
   * Sponsor id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Image file name */
  imageFileName?: string | null;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Created at
   * @format int64
   */
  createdAt: number;
  /**
   * Updated at
   * @format int64
   */
  updatedAt?: number | null;
  /**
   * Created by
   * @format int32
   */
  createdBy: number;
  /**
   * Username
   * @minLength 1
   */
  userName: string;
}

export interface GetSponsorsResp {
  /** Sponsors */
  sponsors: GetSponsors[];
  paging: PagingRespBase;
}

export interface GetSponsorsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetSponsorsResp;
}

export interface GetStateOptionsResp {
  /** Func states */
  states: ByteItem[];
}

export interface GetStateOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetStateOptionsResp;
}

export interface GetStreamResp {
  /**
   * Stream media id
   * @format int32
   */
  id: number;
  /**
   * Platform Id (TwitchTV = 1,Youtube_Channel = 10,Youtube_Stream = 11 Facebook = 12,Other = 99)
   * @format int32
   */
  platform: number;
  /**
   * Stream id
   * @minLength 1
   */
  streamId: string;
  /** Stream url */
  streamUrl?: string | null;
  /** Screen cap url */
  screenCapUrl?: string | null;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Language id
   * @format int32
   */
  languageId: number;
  /** Is event stream */
  isEventStream: boolean;
  /** Is pro player */
  isProPlayer: boolean;
  /** Is celeb caster */
  isCelebCaster: boolean;
  /**
   * Next broadcast at
   * @format int64
   */
  nextBroadcastAt?: number | null;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /** Is featured */
  isFeatured: boolean;
  /** Description */
  description?: string | null;
  /** Tags */
  tags: MediaTag[];
}

export interface GetStreamRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetStreamResp;
}

export interface GetStreams {
  /**
   * Stream media id
   * @format int32
   */
  id: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Platform
   * @format int32
   */
  platform: number;
  /**
   * Stream id
   * @minLength 1
   */
  streamId: string;
  /** Stream url */
  streamUrl?: string | null;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /** Is live */
  isLive: boolean;
  /**
   * User id
   * @format int32
   */
  userId: number;
  /**
   * Created at
   * @format int64
   */
  createdAt: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /**
   * Game url safe name
   * @minLength 1
   */
  gameUrlSafeName: string;
  /**
   * Username
   * @minLength 1
   */
  userName: string;
}

export interface GetStreamsResp {
  /** Streams */
  streams: GetStreams[];
  paging: PagingRespBase;
}

export interface GetStreamsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetStreamsResp;
}

export interface GetSystemLogResp {
  log: SystemLogDetail;
}

export interface GetSystemLogRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetSystemLogResp;
}

export interface GetSystemLogsResp {
  /** Api Logs */
  logs: SystemLogListItem[];
  paging: PagingRespBase;
}

export interface GetSystemLogsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetSystemLogsResp;
}

export interface GetTeamPlayer {
  /**
   * Team player id
   * @format int32
   */
  teamPlayerId: number;
  /**
   * Player id
   * @format int32
   */
  playerId: number;
  /**
   * Team id
   * @format int32
   */
  teamId: number;
  /**
   * Player name
   * @minLength 1
   */
  playerName: string;
  /**
   * Player url safe name
   * @minLength 1
   */
  playerUrlSafeName: string;
  /**
   * Join date
   * @format int64
   */
  joinDate: number;
  /**
   * Leave date
   * @format int64
   */
  leaveDate?: number | null;
  /** Is hidden */
  isHidden: boolean;
  /**
   * Position
   * @minLength 1
   */
  position: string;
}

export interface GetTeamPlayerOptionsResp {
  /** Players */
  players: Int32Item[];
}

export interface GetTeamPlayerOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetTeamPlayerOptionsResp;
}

export interface GetTeamPlayerResp {
  /**
   * Team player id
   * @format int32
   */
  teamPlayerId: number;
  /**
   * Player id
   * @format int32
   */
  playerId: number;
  /**
   * Team id
   * @format int32
   */
  teamId: number;
  /**
   * Join date
   * @format int64
   */
  joinDate: number;
  /**
   * Leave date
   * @format int64
   */
  leaveDate?: number | null;
  /** Is hidden */
  isHidden: boolean;
}

export interface GetTeamPlayerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetTeamPlayerResp;
}

export interface GetTeamPlayersResp {
  /** Players */
  players: GetTeamPlayer[];
  paging: PagingRespBase;
}

export interface GetTeamPlayersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetTeamPlayersResp;
}

export interface GetTeamRatingLogResp {
  /** @format int32 */
  teamId: number;
  /** @minLength 1 */
  teamName: string;
  /** @format int32 */
  teamRating: number;
  logs: TeamRatingLog[];
  paging: PagingRespBase;
}

export interface GetTeamRatingLogRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetTeamRatingLogResp;
}

export interface GetTeamResp {
  /**
   * Team id
   * @format int32
   */
  teamId: number;
  /**
   * Team name
   * @minLength 1
   */
  teamName: string;
  /**
   * Team tag
   * @minLength 1
   */
  teamTag: string;
  /**
   * Owner id
   * @format int32
   */
  ownerId?: number | null;
  /** Owner name */
  ownerName?: string | null;
  /**
   * Captain id
   * @format int32
   */
  captainId?: number | null;
  /** Captain name */
  captainName?: string | null;
  /**
   * Manage id
   * @format int32
   */
  manageId?: number | null;
  /** Manage name */
  manageName?: string | null;
  /** Excluded ranking */
  excludedRankings: boolean;
  /** Image file name */
  imageFileName?: string | null;
  /**
   * Game id
   * @format int32
   */
  gameId?: number;
  /** Game name */
  gameName?: string | null;
  /**
   * Country id
   * @format int32
   */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Description */
  description?: string | null;
  /** Facebook */
  facebook?: string | null;
  /** Twitter */
  twitter?: string | null;
  /** Youtube */
  youtube?: string | null;
  /** Grid Team Id */
  gridId?: string | null;
}

export interface GetTeamRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetTeamResp;
}

export interface GetTeamsDetail {
  /**
   * Team id
   * @format int32
   */
  teamId: number;
  /**
   * Team name
   * @minLength 1
   */
  teamName: string;
  /**
   * Team url safe name
   * @minLength 1
   */
  teamUrlSafeName: string;
  /**
   * Team tag
   * @minLength 1
   */
  teamTag: string;
  /**
   * Country id
   * @format int32
   */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Country code */
  countryCode?: string | null;
  /**
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /**
   * Game url safe name
   * @minLength 1
   */
  gameUrlSafeName: string;
  /** Is ranked */
  isRanked: boolean;
  /**
   * Updated at
   * @format int64
   */
  updatedAt?: number | null;
  /**
   * Updated by
   * @format int32
   */
  updatedBy?: number | null;
  /** Username */
  username?: string | null;
  /**
   * Created by
   * @format int32
   */
  createdBy?: number | null;
  createdUsername?: string | null;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Global ranking
   * @format int32
   */
  globalRanking?: number | null;
  /** Grid id */
  gridId?: string | null;
  /** With grid linked */
  withGridLinked: boolean;
}

export interface GetTeamsResp {
  /** Teams */
  teams: GetTeamsDetail[];
  paging: PagingRespBase;
}

export interface GetTeamsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetTeamsResp;
}

export interface GetTgNotificationsResp {
  /** Telegram notifications */
  notifications: TgNotification[];
  paging: PagingRespBase;
}

export interface GetTgNotificationsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetTgNotificationsResp;
}

export interface GetTournamentViewershipResp {
  /** Tournaments */
  tournaments: TournamentViewership[];
  paging: PagingRespBase;
}

export interface GetTournamentViewershipRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetTournamentViewershipResp;
}

export interface GetUserForPlayerResp {
  /**
   * User id
   * @format int32
   */
  userId: number;
  /**
   * Username
   * @minLength 1
   */
  userName: string;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /**
   * Country id
   * @format int32
   */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /**
   * Date of birth
   * @format date
   */
  dateOfBirth?: string | null;
  gender?: EnumGender;
  /**
   * Primary game id
   * @format int32
   */
  primaryGameId?: number | null;
  /** Primary game */
  primaryGame?: string | null;
}

export interface GetUserForPlayerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetUserForPlayerResp;
}

export interface GetUserPermissionsResp {
  /** Groups */
  groups: string[];
  /** Roles */
  roles: string[];
}

export interface GetUserPermissionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetUserPermissionsResp;
}

export interface GetUserResp {
  /**
   * User id
   * @format int32
   */
  userId: number;
  /**
   * Username
   * @minLength 1
   */
  userName: string;
  /** Password */
  password?: string | null;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /**
   * Email
   * @minLength 1
   */
  email: string;
  /** City */
  city?: string | null;
  /**
   * Country id
   * @format int32
   */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /**
   * Date of birth
   * @format date
   */
  dateOfBirth?: string | null;
  gender?: EnumGender;
  /** About */
  aboutMe?: string | null;
  /** Avatar image path */
  avatarImagePath?: string | null;
  isCrew?: boolean;
}

export interface GetUserRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetUserResp;
}

export interface GetUserSessionResp {
  userProfile: UserProfile;
  menuList: MenuItem[];
  funcItem: Record<string, Record<string, number>>;
}

export interface GetUserSessionRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetUserSessionResp;
}

export interface GetUsers {
  /**
   * User id
   * @format int32
   */
  userId: number;
  /**
   * Username
   * @minLength 1
   */
  userName: string;
  /**
   * Email
   * @minLength 1
   */
  email: string;
  /** Email verified */
  emailVerified: boolean;
  /**
   * Updated at
   * @format int64
   */
  updatedAt?: number | null;
  /**
   * Updated username
   * @minLength 1
   */
  updatedUserName: string;
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
  /**
   * Email verified at
   * @format int64
   */
  emailVerifiedAt?: number | null;
  /** Is crew */
  isCrew?: boolean;
}

export interface GetUsersByGroupResp {
  /** Users */
  users: GroupUserListItem[];
}

export interface GetUsersByGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetUsersByGroupResp;
}

export interface GetUsersByRoleResp {
  /** Users */
  users: RoleUserListItem[];
}

export interface GetUsersByRoleRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetUsersByRoleResp;
}

export interface GetUsersResp {
  /** Users */
  users: GetUsers[];
  paging: PagingRespBase;
}

export interface GetUsersRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetUsersResp;
}

export interface GetVenueResp {
  /**
   * Venue id
   * @format int32
   */
  id: number;
  /**
   * City
   * @minLength 1
   */
  city: string;
  /** Coordinates */
  coordinates?: string | null;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Image file name */
  imageFileName?: string | null;
  /**
   * Country id
   * @format int32
   */
  countryId: number;
  /** Address */
  address?: string | null;
}

export interface GetVenueRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetVenueResp;
}

export interface GetVenues {
  /**
   * Venue id
   * @format int32
   */
  id: number;
  /**
   * City
   * @minLength 1
   */
  city: string;
  /** Coordinates */
  coordinates?: string | null;
  /** Has coordinates */
  hasCoordinates: boolean;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /** Image file name */
  imageFileName?: string | null;
  /** Has image */
  hasImage: boolean;
  /**
   * Created at
   * @format int64
   */
  createdAt: number;
  /**
   * Updated at
   * @format int64
   */
  updatedAt?: number | null;
  /**
   * Country name
   * @minLength 1
   */
  countryName: string;
  /**
   * Username
   * @minLength 1
   */
  username: string;
}

export interface GetVenuesResp {
  /** Venues */
  venues: GetVenues[];
  paging: PagingRespBase;
}

export interface GetVenuesRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetVenuesResp;
}

export interface GetViewershipResp {
  articles: Viewership[];
  paging: PagingRespBase;
}

export interface GetViewershipRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetViewershipResp;
}

export interface GetViewershipSummaryResp {
  /** @format int32 */
  articles: number;
  /** @format int32 */
  views: number;
  /** @format int32 */
  timeSpent: number;
  /** @format double */
  avgTimeSpent: number;
  /** @format int32 */
  quickPolls: number;
}

export interface GetViewershipSummaryRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: GetViewershipSummaryResp;
}

export interface GoogleAdManager {
  enabled?: boolean;
  /** @format int64 */
  networkCode?: number;
}

export interface GoogleAdSense {
  enabled?: boolean;
  publisherId?: string | null;
}

export interface GoogleAnalytics {
  reportingTimeZone?: string | null;
}

export interface GoogleTagManager {
  id?: string | null;
  enabled?: boolean;
  queryParams?: QueryParams;
}

export interface GridTeam {
  /** @minLength 1 */
  id: string;
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  logoUrl: string;
}

export interface GroupListItem {
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
  /**
   * Updated At
   * @format int64
   */
  updatedAt: number;
  /**
   * User name
   * @minLength 1
   */
  updatedUserName: string;
  /** Frontend names */
  frontendNames: string[];
}

export interface GroupTemplate {
  /**
   * Group template id
   * @format int32
   */
  templateId: number;
  /**
   * Group template name
   * @minLength 1
   */
  name: string;
  /** Frontend permissions */
  frontendPermissions: Int16Item[];
  /** Backoffice permissions */
  backofficePermissions: SimpleBackOfficePermissionItem[];
}

export interface GroupUserListItem {
  /**
   * User id
   * @format int32
   */
  userId: number;
  /**
   * User name
   * @minLength 1
   */
  userName: string;
}

export interface Int16Item {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface Int16ItemListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: Int16Item[] | null;
}

export interface Int16ItemWithSubItem {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
  subItems: Int16Item[];
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
  id: number;
  /** @minLength 1 */
  name: string;
  checked: boolean;
}

export interface Int32Item {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface Int32ItemListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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

export interface LanguageOption {
  /**
   * Language id
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * Language name
   * @minLength 0
   * @maxLength 100
   */
  name: string;
}

/** @format int32 */
export enum LogLevel {
  Trace = 0,
  Debug = 1,
  Information = 2,
  Warning = 3,
  Error = 4,
  Critical = 5,
  None = 6,
}

export interface LoginReq {
  /**
   * @minLength 0
   * @maxLength 250
   */
  login: string;
}

export type LogoutResp = object;

export interface LogoutRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: LogoutResp;
}

export interface MatchGameItem {
  /** @format int32 */
  matchGameId: number;
  /** @format int32 */
  number: number;
  enabled: boolean;
}

export interface MatchGameResult {
  /** @format int32 */
  gameId: number;
  /** @format int32 */
  matchId: number;
  /** @format int32 */
  roundId: number;
  /** @format int32 */
  parentId: number;
  /** @format int32 */
  childId: number;
  tournamentType: EnumChildTournament;
  isPlayerBased: boolean;
  opponent1?: string | null;
  opponent2?: string | null;
  result?: string | null;
  score?: string | null;
  resultedBy?: string | null;
  /** @format date-time */
  resultAt?: string | null;
  map?: string | null;
  mapSetBy?: string | null;
  draftBy?: string | null;
  roundSetBy?: string | null;
  resultedByUrl?: string | null;
  mapSetByUrl?: string | null;
  draftByUrl?: string | null;
  roundSetByUrl?: string | null;
}

export interface MatchGames {
  /**
   * Match id
   * @format int32
   */
  matchId: number;
  /** Match game */
  matchName?: string | null;
  /**
   * Starting at
   * @format int64
   */
  startingAt: number;
  /**
   * Games per match
   * @format int32
   */
  gamesPerMatch: number;
  /**
   * Hyper link
   * @minLength 1
   */
  hyperlink: string;
  /** Games */
  games: MatchGameItem[];
  status?: EnumBoMatchStatus;
}

export interface MatchesReport {
  /** @format int32 */
  rowId: number;
  /** @minLength 1 */
  match: string;
  /** @format date-time */
  matchStartingTime: string;
  /** @format date-time */
  matchResultedTime: string;
  /** @minLength 1 */
  game: string;
  /** @minLength 1 */
  tournament: string;
  /** @format double */
  ri: number;
  /** @format int32 */
  games: number;
  /** @format int32 */
  vods: number;
  /** @minLength 1 */
  hosts: string;
  /** @format date-time */
  lastVOD?: string | null;
  /** @minLength 1 */
  user: string;
  delay?: string | null;
  matchUrl?: string | null;
  tournamentUrl?: string | null;
  userUrl?: string | null;
}

export interface MediaTag {
  /**
   * Media Tag Id
   * @format int32
   */
  id: number;
  /**
   * Media Item Id
   * @format int32
   */
  mediaItemId: number;
  /**
   * Media Item Name
   * @minLength 1
   */
  name: string;
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
  funcId: number;
  /**
   * Backoffice func name
   * @minLength 1
   */
  name: string;
  /**
   * Parent func id
   * @format int32
   */
  parentId: number;
  /**
   * Func level
   * @format int32
   */
  level: number;
  /**
   * Func position
   * @format int32
   */
  position: number;
  /** Api url */
  url?: string | null;
  /** Sub Menus */
  subMenus: MenuItem[];
}

export interface MessagePushReq {
  platform: EnumMsgPlatform;
  /**
   * Message type (Tg: article = 1, match = 2)
   * @format int32
   */
  type: number;
  /**
   * Source Id
   * @format int32
   */
  sourceId: number;
}

export type MessagePushResp = object;

export interface MessagePushRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: MessagePushResp;
}

export interface MessageRetractionReq {
  platform: EnumMsgPlatform;
  /**
   * Message type (Tg: article = 1, match = 2)
   * @format int32
   */
  type: number;
  /**
   * Source Id
   * @format int32
   */
  sourceId: number;
}

export type MessageRetractionResp = object;

export interface MessageRetractionRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: MessageRetractionResp;
}

export interface ModAccountReq {
  /**
   * @minLength 0
   * @maxLength 50
   */
  firstName?: string | null;
  /**
   * @minLength 0
   * @maxLength 50
   */
  lastName?: string | null;
  gender?: EnumGender;
  /**
   * @minLength 0
   * @maxLength 255
   */
  city?: string | null;
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  countryId?: number | null;
  /**
   * @minLength 0
   * @maxLength 500
   */
  aboutMe?: string | null;
}

export type ModAccountResp = object;

export interface ModAccountRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModAccountResp;
}

export type ModArticleResp = object;

export interface ModArticleRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModArticleResp;
}

export type ModBannerResp = object;

export interface ModBannerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModBannerResp;
}

export interface ModBrResultReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  matchGameId: number;
  /**
   * Br points per kill
   * @format int32
   * @min 0
   * @max 32767
   */
  pointsPerKill: number;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  registrationId: number;
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  placement?: number | null;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  placementPoints?: number | null;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  kills?: number | null;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  pointsAddition?: number | null;
  /**
   * @format int32
   * @min 0
   * @max 2147483647
   */
  pointsDeduction?: number | null;
  players?: GameResultBattleRoyalePlayer[] | null;
}

export type ModBrResultResp = object;

export interface ModBrResultRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModBrResultResp;
}

export type ModBroadcastTalentResp = object;

export interface ModBroadcastTalentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  prizePlacements?: ModPrizePoolPlacement[] | null;
}

export interface ModChildEarningPrizePoolStatusReq {
  status: EnumEarningPrizeStatus;
}

export interface ModChildEarningPrizePoolStatusResp {
  /**
   * Child id
   * @format int32
   */
  childId: number;
}

export interface ModChildEarningPrizePoolStatusRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  /**
   * Game Mode Id
   * @format int32
   * @min 1
   * @max 32767
   */
  gameModeId?: number | null;
  /** Is tg push */
  isTgPush: boolean;
}

export type ModChildResp = object;

export interface ModChildRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModChildResp;
}

export interface ModChildStageReq {
  /**
   * Stage id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  stageId: number;
}

export interface ModChildTeamRegistrationReq {
  /** Is reserved */
  isReserved: boolean;
  /** Player ids */
  playerIds?: number[] | null;
}

export interface ModEventBoxReq {
  /**
   * Box Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * Position
   * @format int32
   * @min 1
   * @max 127
   */
  position: number;
  /**
   * Content
   * @minLength 0
   * @maxLength 20000
   */
  content: string;
}

export type ModEventBoxResp = object;

export interface ModEventBoxRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModEventBoxResp;
}

export interface ModEventPageReq {
  /**
   * Event page id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * Event page name
   * @minLength 0
   * @maxLength 60
   */
  name: string;
}

export type ModEventPageResp = object;

export interface ModEventPageRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModEventPageResp;
}

export interface ModEventReq {
  /**
   * Event id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * Event name
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Organizer ids
   * @maxItems 20
   * @minItems 1
   */
  organizerIds: number[];
  /**
   * Description
   * @minLength 0
   * @maxLength 10000
   */
  description: string;
  /** Is hidden */
  isHidden: boolean;
  /**
   * Starting at
   * @format int64
   * @min 1
   */
  startingAt: number;
  /**
   * Ending at
   * @format int64
   * @min 1
   */
  endingAt: number;
  /**
   * Frontend id
   * @format int32
   * @min 0
   * @max 32767
   */
  frontendId: number;
  /** Is lan */
  isLan: boolean;
  /**
   * City
   * @minLength 0
   * @maxLength 100
   */
  city?: string | null;
  /**
   * Country id
   * @format int32
   * @min 1
   * @max 32767
   */
  countryId?: number | null;
  /**
   * Game ids
   * @maxItems 20
   * @minItems 1
   */
  games: number[];
}

export type ModEventResp = object;

export interface ModEventRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModEventResp;
}

export interface ModFileResp {
  /** @format int32 */
  fileId: number;
  /** @format int32 */
  folderId: number;
  /** @minLength 1 */
  fileName: string;
}

export interface ModFileRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModFileResp;
}

export interface ModFolderResp {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface ModFolderRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModFolderResp;
}

export interface ModFrontendAdsReq {
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * @minLength 0
   * @maxLength 1048576
   */
  ads?: string | null;
}

export type ModFrontendAdsResp = object;

export interface ModFrontendAdsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModFrontendAdsResp;
}

export interface ModFrontendBasicInfoReq {
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * @minLength 0
   * @maxLength 5
   */
  shortName: string;
  /**
   * @minLength 0
   * @maxLength 255
   */
  url: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  emailDomain: string;
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  localeId: number;
  isHidden?: boolean;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  aboutPageId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  jobsPageId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  privacyPageId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  supportPageId?: number | null;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  termsPageId?: number | null;
}

export type ModFrontendBasicInfoResp = object;

export interface ModFrontendBasicInfoRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModFrontendBasicInfoResp;
}

export interface ModFrontendGoogleSettingsReq {
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * App environment (ex: staging, production)
   * @minLength 0
   * @maxLength 10
   */
  appEnv: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  siteKey: string;
  /** Google Ad sense enabled */
  adSenseEnabled: boolean;
  /**
   * Google Ad sense publisherId
   * @minLength 0
   * @maxLength 30
   */
  publisherId: string;
  /** Google Ad Manager enabled */
  adManagerEnabled: boolean;
  /**
   * Google Ad Manager Network code
   * @format int64
   */
  networkCode: number;
  /**
   * Google analytics reportingTimeZone
   * @minLength 0
   * @maxLength 50
   */
  reportingTimeZone: string;
  /**
   * Google tag manager id
   * @minLength 0
   * @maxLength 25
   */
  tagId: string;
  /** Google tag manager enabled */
  tagEnabled: boolean;
  /**
   * Google tag manager query params gtm auth
   * @minLength 0
   * @maxLength 50
   */
  gtmAuth: string;
  /**
   * Google tag manager query params gtm preview
   * @minLength 0
   * @maxLength 25
   */
  gtmPreview: string;
  /**
   * Google tag manager query params gtm cookies win
   * @minLength 0
   * @maxLength 25
   */
  gtmCookiesWin: string;
}

export type ModFrontendGoogleSettingsResp = object;

export interface ModFrontendGoogleSettingsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModFrontendGoogleSettingsResp;
}

export interface ModFrontendMenuReq {
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * @minLength 0
   * @maxLength 40
   */
  name: string;
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  siteSectionId?: number | null;
  /**
   * @format int32
   * @min 0
   * @max 32767
   */
  parentId: number;
  state: EnumState;
  isUseCustomUrl: boolean;
  /**
   * @minLength 0
   * @maxLength 255
   */
  customUrl?: string | null;
}

export type ModFrontendMenuResp = object;

export interface ModFrontendMenuRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModFrontendMenuResp;
}

export interface ModFrontendRobotsReq {
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * @minLength 0
   * @maxLength 2500
   */
  robots?: string | null;
}

export type ModFrontendRobotsResp = object;

export interface ModFrontendRobotsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModFrontendRobotsResp;
}

export interface ModFuncResp {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId: number;
}

export interface ModFuncRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModGameAccountResp;
}

export interface ModGameDraftReq {
  /** @format int32 */
  matchGameId?: number;
  items?: GameResultDraft[] | null;
}

export type ModGameDraftResp = object;

export interface ModGameDraftRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModGameDraftResp;
}

export interface ModGameOffSeasonReq {
  /**
   * Start at
   * @format int64
   */
  startAt: number;
  /**
   * End at
   * @format int64
   */
  endAt: number;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModGameRegionTranslationResp;
}

export interface ModGameResp {
  /**
   * Game id
   * @format int32
   */
  gameId: number;
}

export interface ModGameRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  groupId: number;
}

export interface ModGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModGroupResp;
}

export type ModHeroResp = object;

export interface ModHeroRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModHeroTranslationsResp;
}

export interface ModMLBBBattleSpellReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * @minLength 0
   * @maxLength 100
   */
  battleSpellName: string;
}

export type ModMLBBBattleSpellResp = object;

export interface ModMLBBBattleSpellRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModMLBBBattleSpellResp;
}

export interface ModMLBBEmblemReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * @minLength 0
   * @maxLength 100
   */
  emblemName: string;
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  emblemType: number;
  /**
   * @minLength 0
   * @maxLength 50
   */
  emblemTypeName: string;
}

export type ModMLBBEmblemResp = object;

export interface ModMLBBEmblemRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModMLBBEmblemResp;
}

export type ModMLBBEqpResp = object;

export interface ModMLBBEqpRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModMLBBEqpResp;
}

export type ModMapResp = object;

export interface ModMapRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModMapTranslationsResp;
}

export type ModMatchArchivedResp = object;

export interface ModMatchArchivedRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModMatchArchivedResp;
}

export interface ModMatchGameReq {
  /**
   * Match-Game Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  matchGameId: number;
  /**
   * Winner RegistrationId
   * @format int32
   * @min 1
   * @max 2147483647
   */
  winnerId?: number | null;
  result?: EnumGameResult;
  /**
   * Team1 score
   * @format int32
   * @min 0
   * @max 32767
   */
  team1Score?: number | null;
  /**
   * Team2 score
   * @format int32
   * @min 0
   * @max 32767
   */
  team2Score?: number | null;
  /**
   * Map Id
   * @format int32
   * @min 1
   * @max 32767
   */
  mapId?: number | null;
  /**
   * Team1 games side id
   * @format int32
   * @min 1
   * @max 32767
   */
  team1GameSideId?: number | null;
  /**
   * Team2 games side id
   * @format int32
   * @min 1
   * @max 32767
   */
  team2GameSideId?: number | null;
  /** Media items */
  vods?: number[] | null;
  /** Team1 lineup(playerId) */
  team1Lineup?: number[] | null;
  /** Team2 lineup(playerId) */
  team2Lineup?: number[] | null;
  /** Team1 StandIns(playerId) */
  team1StandIns?: number[] | null;
  /** Team2 StandIns(playerId) */
  team2StandIns?: number[] | null;
  /** Moonton battle id (On Mobile Legends needs to set) */
  mtBattleId?: string | null;
}

export type ModMatchGameResp = object;

export interface ModMatchGameRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModMatchGameResp;
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

export interface ModMatchStatusReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  matchId: number;
  status: EnumMatchStatus;
}

export type ModMatchStatusResp = object;

export interface ModMatchStatusRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModMatchStatusResp;
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
   * @min 0
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
   * @min 0
   * @max 2147483647
   */
  startTime?: number | null;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModMediaVodResp;
}

export interface ModMenuOptions {
  /** @format int32 */
  id: number;
  state?: EnumState;
  /** @format int32 */
  parentId?: number | null;
  /** @format int32 */
  position?: number | null;
}

export interface ModMenuOptionsReq {
  menus: ModMenuOptions[];
}

export type ModMenuOptionsResp = object;

export interface ModMenuOptionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModMenuOptionsResp;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  notificationTemplateId: number;
}

export interface ModNotificationTemplateRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  oneSignalAppId: number;
}

export interface ModOneSignalAppRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  pageId: number;
}

export interface ModPageRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModPageResp;
}

export interface ModParentResp {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
}

export interface ModParentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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

export interface ModParentStatusReq {
  status: EnumTournamentStatus;
}

export interface ModParentStatusResp {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
}

export interface ModParentStatusRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModParentStatusResp;
}

export interface ModPasswordReq {
  /**
   * Original Password
   * @minLength 8
   * @maxLength 72
   */
  originalPassword: string;
  /**
   * New Password
   * @minLength 8
   * @maxLength 72
   */
  newPassword: string;
  /**
   * New Password verify
   * @minLength 8
   * @maxLength 72
   */
  passwordVerify: string;
}

export type ModPasswordResp = object;

export interface ModPasswordRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModPasswordResp;
}

export type ModPlayerResp = object;

export interface ModPlayerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModPlayerResp;
}

export interface ModPointsAdjustmentItem {
  /**
   * child tournament match opponents id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * Points addition
   * @format int32
   * @min 0
   * @max 2147483647
   */
  pointsAddition?: number;
  /**
   * Points deduction
   * @format int32
   * @min 0
   * @max 2147483647
   */
  pointsDeduction?: number;
}

export interface ModPointsAdjustmentReq {
  oppoents?: ModPointsAdjustmentItem[] | null;
}

export type ModPointsAdjustmentResp = object;

export interface ModPointsAdjustmentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModPointsAdjustmentResp;
}

export interface ModPrizePoolDistribution {
  /**
   * Id (Distribution id)
   * Id = 0 -> Add new
   * @format int32
   */
  id?: number;
  /**
   * Team id
   * @format int32
   */
  teamId?: number | null;
  /** Player ids */
  playerIds?: number[] | null;
}

export interface ModPrizePoolPlacement {
  /**
   * Placement id
   * Unknown: -1
   * Know: > 0
   * @format int32
   */
  placementId: number;
  /**
   * Placement from
   * @format int32
   */
  placementFrom: number;
  /**
   * Placement to
   * @format int32
   */
  placementTo: number;
  /**
   * Prize amount
   * @format double
   */
  prizeAmount: number;
  /** Distributions */
  distributions?: ModPrizePoolDistribution[] | null;
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
  /**
   * Replaced date time
   * @format int64
   * @min 1
   */
  replacedDateTime?: number;
}

export interface ModReplaceOpponentsReq {
  /** @format int32 */
  childId?: number;
  replaceOpponents?: ModReplaceOpponents[] | null;
}

export type ModReplaceOpponentsResp = object;

export interface ModReplaceOpponentsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  roleId: number;
}

export interface ModRoleRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModRoleResp;
}

export interface ModRoundReq {
  roundType?: EnumRoundType;
  /**
   * Round Name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * Round Number
   * @format int32
   * @min 1
   * @max 32767
   */
  number: number;
  /**
   * Games per match
   * @format int32
   * @min 1
   * @max 32767
   */
  gamesPerMatch: number;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModRoundResp;
}

export interface ModRoundSetsReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  matchGameId: number;
  items?: GameResultRoundSet[] | null;
}

export type ModRoundSetsResp = object;

export interface ModRoundSetsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModRoundSetsResp;
}

export interface ModServerReq {
  /**
   * Server Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * Server Name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /** Is Frozen */
  isFrozen: boolean;
  /**
   * Game Id
   * @format int32
   * @min 1
   * @max 32767
   */
  gameId: number;
}

export type ModServerResp = object;

export interface ModServerRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModServerResp;
}

export type ModSideResp = object;

export interface ModSideRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModSideTranslationsResp;
}

export interface ModSiteSectionsReq {
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * @format int32
   * @min 1
   * @max 32767
   */
  gameId?: number | null;
  /**
   * @minLength 1
   * @maxLength 40
   */
  name?: string | null;
  hidden?: boolean | null;
}

export type ModSiteSectionsResp = object;

export interface ModSiteSectionsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModSiteSectionsResp;
}

export type ModSponsorResp = object;

export interface ModSponsorRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModSponsorResp;
}

export type ModStreamResp = object;

export interface ModStreamRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModTeamPlayerResp;
}

export type ModTeamResp = object;

export interface ModTeamRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModTeamResp;
}

export interface ModTgPushReq {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId: number;
  isAutoPush: boolean;
}

export type ModUserResp = object;

export interface ModUserRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModUserResp;
}

export type ModVenueResp = object;

export interface ModVenueRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ModVenueResp;
}

export interface NotificationTemplateArgument {
  name?: string | null;
  scope?: string | null;
  example?: string | null;
}

export interface NotificationTemplateDetail {
  /**
   * Notification template id
   * @format int32
   */
  id: number;
  /**
   * Frontend id
   * @format int32
   */
  frontEndId: number;
  /**
   * Messaging notification type id
   * @format int32
   */
  messagingNotificationTypeId?: number | null;
  /**
   * Type identifier
   * @minLength 1
   */
  typeIdentifier: string;
  /** Web supported */
  webSupported: boolean;
  /**
   * Web title
   * @minLength 1
   */
  webTitle: string;
  /**
   * Web body
   * @minLength 1
   */
  webBody: string;
  /** Push supported */
  pushSupported: boolean;
  /** Push title */
  pushTitle?: string | null;
  /** Push body */
  pushBody?: string | null;
  /** Email supported */
  emailSupported: boolean;
  /** Email subject */
  emailSubject?: string | null;
  /** Email text body */
  emailTextBody?: string | null;
  /** Email html body */
  emailHtmlBody?: string | null;
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

export interface OAuthTokenReq {
  /**
   * GrantType = refresh_token
   * @minLength 0
   * @maxLength 20
   */
  grantType: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  refreshToken: string;
  /**
   * @minLength 0
   * @maxLength 50
   */
  clientId: string;
  /**
   * @minLength 0
   * @maxLength 100
   */
  clientSecret: string;
}

export interface OAuthTokenResp {
  accessToken?: string | null;
  refreshToken?: string | null;
  /** @format int64 */
  expiresAt?: number;
}

export interface OAuthTokenRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: OAuthTokenResp;
}

export interface ObjectApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: any;
}

export interface OneSignalAppListItem {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  appId: string;
  /** @minLength 1 */
  apiKey: string;
  /** @minLength 1 */
  safariWebId: string;
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
  pageId: number;
  /**
   * Frontend name
   * @minLength 1
   */
  feName: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Author
   * @minLength 1
   */
  author: string;
  /**
   * Edited At
   * @format int64
   */
  updatedAt?: number | null;
  /**
   * View count
   * @format int32
   */
  viewCount: number;
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
  broadcastTalentId: number;
  /**
   * Name (NickName)
   * @minLength 1
   */
  name: string;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /** Roles */
  roles: string[];
  /**
   * Country
   * @minLength 1
   */
  country: string;
  /**
   * Language
   * @minLength 1
   */
  language: string;
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
  id: number;
  /**
   * ParentId
   * @format int32
   */
  parentId?: number | null;
  /** Folder name */
  name?: string | null;
  /**
   * Folder path
   * @minLength 1
   */
  path: string;
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
  /**
   * Type name
   * @minLength 1
   */
  typeName: string;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  status: EnumTournamentStatus;
  /**
   * Status name
   * @minLength 1
   */
  statusName: string;
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
   * Game id
   * @format int32
   */
  gameId: number;
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
   * Game id
   * @format int32
   */
  gameId: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /**
   * Game url safe name
   * @minLength 1
   */
  gameUrlSafeName: string;
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
  status: EnumTournamentStatus;
  /**
   * Status name
   * @minLength 1
   */
  statusName: string;
  /** Has sponsor */
  hasSponsor: boolean;
  /** Has venue */
  hasVenue: boolean;
  /** Is hidden */
  isHidden: boolean;
}

export interface PrizePlacement {
  /**
   * Id
   * @format int32
   */
  placementId: number;
  /**
   * Placement from
   * @format int32
   */
  placementFrom: number;
  /**
   * Placement to
   * @format int32
   */
  placementTo: number;
  /**
   * Prize amount
   * @format double
   */
  prizeAmount: number;
  /** Distributions */
  distributions: PrizePoolDistributionListItem[];
}

export interface PrizePoolDistributionListItem {
  /**
   * Id (Distribution id)
   * @format int32
   */
  id: number;
  /**
   * Team id
   * @format int32
   */
  teamId?: number | null;
  /**
   * Team name
   * @minLength 1
   */
  teamName: string;
  /** Player items */
  playerItems: Int32Item[];
}

export interface QueryParams {
  gtm_auth?: string | null;
  gtm_preview?: string | null;
  gtm_cookies_win?: string | null;
}

export type RecalculatePointsResp = object;

export interface RecalculatePointsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: RecalculatePointsResp;
}

export interface Recaptcha {
  siteKey?: string | null;
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
  options: Option[];
}

export interface ResetPasswordReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  userId: number;
}

export interface ResetPasswordResp {
  /** @minLength 1 */
  password: string;
}

export interface ResetPasswordRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: ResetPasswordResp;
}

export type RestartTournamentResp = object;

export interface RestartTournamentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: RestartTournamentResp;
}

export interface RoleListItem {
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
   * Group id
   * @format int32
   */
  groupId: number;
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
  /**
   * Updated At
   * @format int64
   */
  updatedAt?: number;
  /**
   * User name
   * @minLength 1
   */
  updatedUserName: string;
  /** Frontend names */
  frontendNames: string[];
}

export interface RoleTemplate {
  /**
   * Role template id
   * @format int32
   */
  templateId: number;
  /**
   * Role template name
   * @minLength 1
   */
  name: string;
  /** Frontend permissions */
  frontendPermissions: Int16Item[];
  /** Backoffice permissions */
  backofficePermissions: SimpleBackOfficePermissionItem[];
}

export interface RoleUserListItem {
  /**
   * User id
   * @format int32
   */
  userId: number;
  /**
   * User name
   * @minLength 1
   */
  userName: string;
}

export interface RoundMappingPointsItem {
  score1: RoundPointsItem;
  score2: RoundPointsItem;
}

export interface RoundPointsItem {
  /**
   * Score
   * @format int32
   */
  score: number;
  /**
   * Points
   * @format int32
   */
  points: number;
}

export interface SeoMetaDataOption {
  /** @format int32 */
  id?: number;
  name?: string | null;
  /** @format int32 */
  lengthLimit?: number;
}

export interface SeoMetaDataOptionListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: SeoMetaDataOption[] | null;
}

export interface SeoMetadata {
  /** @format int32 */
  id?: number;
  content?: string | null;
}

export interface SetupPasswordReq {
  /**
   * Token
   * @minLength 0
   * @maxLength 100
   */
  token: string;
  /**
   * Email
   * @format email
   * @minLength 1
   * @maxLength 60
   */
  email?: string | null;
  /**
   * New Password
   * @minLength 8
   * @maxLength 72
   */
  newPassword: string;
  /**
   * New Password verify
   * @minLength 8
   * @maxLength 72
   */
  passwordVerify: string;
}

export interface SimpleBackOfficePermissionItem {
  /**
   * Backoffice func id
   * @format int32
   */
  funcId: number;
  /**
   * Backoffice func name
   * @minLength 1
   */
  name: string;
  /** Checked */
  checked: boolean;
  /** Sub */
  subFuncs: SimpleBackOfficePermissionItem[];
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

export interface SiteSectionBanner {
  /**
   * Core frontends site sections banner id
   * @format int32
   */
  id: number;
  /** @minLength 1 */
  siteSectionName: string;
  /** @minLength 1 */
  imagePath: string;
  /** @format int64 */
  updatedAt: number;
  /** @minLength 1 */
  updatedBy: string;
}

export interface StagingEarningListItem {
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
  /**
   * Stage order
   * @format int32
   */
  order: number;
  /** Child earnings */
  childEarnings: ChildEarningListItem[];
}

export type StartTournamentResp = object;

export interface StartTournamentRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: StartTournamentResp;
}

export interface StringItem {
  /** @minLength 1 */
  id: string;
  /** @minLength 1 */
  name: string;
}

export interface StringItemListApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: StringItem[] | null;
}

export interface SystemLogDetail {
  /**
   * Id
   * @format int64
   */
  id: number;
  /**
   * Trace id
   * @minLength 1
   */
  traceId: string;
  /**
   * Prefix
   * @minLength 1
   */
  prefix: string;
  /**
   * Server name
   * @minLength 1
   */
  serverName: string;
  level: LogLevel;
  /**
   * Logger
   * @minLength 1
   */
  logger: string;
  /**
   * Method
   * @minLength 1
   */
  method: string;
  /**
   * Message
   * @minLength 1
   */
  message: string;
  /**
   * Message payload
   * @minLength 1
   */
  messagePayload: string;
  /**
   * Exception
   * @minLength 1
   */
  exception: string;
  /**
   * Recorded at
   * @format int64
   */
  recordedAt: number;
}

export interface SystemLogListItem {
  /**
   * Id
   * @format int64
   */
  id: number;
  /**
   * Trace Id
   * @minLength 1
   */
  traceId: string;
  /**
   * Prefix
   * @minLength 1
   */
  prefix: string;
  /**
   * Server Name
   * @minLength 1
   */
  serverName: string;
  level: LogLevel;
  /**
   * Logger
   * @minLength 1
   */
  logger: string;
  /**
   * Method
   * @minLength 1
   */
  method: string;
  /**
   * Message
   * @minLength 1
   */
  message: string;
  /**
   * Record At
   * @format int64
   */
  recordedAt: number;
}

export interface TeamRatingLog {
  /** @format int32 */
  id: number;
  /** @format int64 */
  settleDate: number;
  /** @format int32 */
  ratingChange: number;
  /** @format int32 */
  beforeRating: number;
  /** @format int32 */
  afterRating: number;
  /** @minLength 1 */
  reason: string;
  /** @format int32 */
  userId: number;
  /** @minLength 1 */
  userName: string;
  /** @format int64 */
  createdAt: number;
}

export interface TgNotification {
  /** @format int32 */
  id?: number;
  type?: EnumTgMsgType;
  typeDescription?: string | null;
  /** @format int32 */
  sourceId?: number;
  status?: EnumTgMsgStatus;
  statusDescription?: string | null;
  /** @format int64 */
  createdAt?: number;
  /** @format int64 */
  publishAt?: number;
  /** @format int32 */
  createdBy?: number;
  userName?: string | null;
  triggerSource?: EnumTgTriggerSource;
  triggerDescription?: string | null;
}

export interface TournamentViewership {
  /** @format int32 */
  rowId?: number;
  tournament?: string | null;
  game?: string | null;
  creator?: string | null;
  /** @format int64 */
  created?: number;
  /** @format int32 */
  articles?: number;
  /** @format int32 */
  articlesViews?: number;
  /** @format int32 */
  tournamentViews?: number;
  /** @format int32 */
  matches?: number;
  /** @format int32 */
  matchViews?: number;
  /** @format int32 */
  vods?: number;
  /** @format int32 */
  vodViews?: number;
  /** @format int32 */
  totalViews?: number;
  tournamentUrl?: string | null;
  userUrl?: string | null;
}

export interface Translation {
  /** @minLength 1 */
  name: string;
  /** @minLength 1 */
  status: string;
  locale: TranslationLocale;
}

export interface TranslationLocale {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  bcp47Identifier: string;
  /** @minLength 1 */
  displayName: string;
}

export interface UInt16Item {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface UInt32Item {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
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
  userIds: number[];
}

export interface UnAssignGroupRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
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
  userIds: number[];
}

export interface UnAssignRoleRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: UnAssignRoleResp;
}

export type UpdateRoundsResp = object;

export interface UpdateRoundsRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: UpdateRoundsResp;
}

export type UpdateStreamResp = object;

export interface UpdateStreamRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: UpdateStreamResp;
}

export interface UpdateTeamRatingReq {
  /**
   * @format int32
   * @min 1
   * @max 2147483647
   */
  teamId: number;
  /**
   * @format int32
   * @min -32768
   * @max 32767
   */
  ratingChange: number;
  /**
   * @minLength 0
   * @maxLength 160
   */
  reason: string;
}

export type UpdateTeamRatingResp = object;

export interface UpdateTeamRatingRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: UpdateTeamRatingResp;
}

export interface UploadFileResp {
  filePath?: string | null;
}

export interface UploadFileRespApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  data?: UploadFileResp;
}

export interface UserProfile {
  /**
   * Username
   * @minLength 1
   */
  userName: string;
  /** Avatar image */
  avatarImage?: string | null;
}

export interface UserRegistration {
  /** @format int32 */
  id?: number;
  username?: string | null;
  email?: string | null;
  /** @format int64 */
  registerAt?: number;
  /** @format int64 */
  registerCompletedAt?: number | null;
}

export interface Viewership {
  /** @format int32 */
  rowId: number;
  /** @minLength 1 */
  title: string;
  sections: string[];
  /** @minLength 1 */
  author: string;
  /** @minLength 1 */
  proofreader: string;
  /** @format int64 */
  created: number;
  /** @format int32 */
  views: number;
  /** @format int32 */
  timeSpent: number;
  qp: boolean;
  /** @minLength 1 */
  articleUrl: string;
  /** @minLength 1 */
  authorUrl: string;
  /** @minLength 1 */
  proofreaderUrl: string;
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
    [ContentType.FormData]: (input: FormData) =>
      (Array.from(input.keys()) || []).reduce((formData, key) => {
        const property = input.get(key);
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
 * @title BackofficeApi v5
 * @version v5
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Account
     * @name V5AccountList
     * @summary Get account detail
     * @request GET:/api/v5/account
     * @secure
     */
    v5AccountList: (params: RequestParams = {}) =>
      this.request<any, GetAccountRespApiRespBase>({
        path: `/api/v5/account`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name V5AccountPartialUpdate
     * @summary Modify account
     * @request PATCH:/api/v5/account
     * @secure
     */
    v5AccountPartialUpdate: (data: ModAccountReq, params: RequestParams = {}) =>
      this.request<any, ModAccountRespApiRespBase>({
        path: `/api/v5/account`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name V5AccountPermissionsList
     * @summary Get account permissions
     * @request GET:/api/v5/account/permissions
     * @secure
     */
    v5AccountPermissionsList: (params: RequestParams = {}) =>
      this.request<any, GetUserPermissionsRespApiRespBase>({
        path: `/api/v5/account/permissions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name V5AccountPasswordPartialUpdate
     * @summary Change password
     * @request PATCH:/api/v5/account/password
     * @secure
     */
    v5AccountPasswordPartialUpdate: (data: ModPasswordReq, params: RequestParams = {}) =>
      this.request<any, ModPasswordRespApiRespBase>({
        path: `/api/v5/account/password`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name V5ArticlesTypesList
     * @summary Get all article types and subtypes
     * @request GET:/api/v5/articles/types
     * @secure
     */
    v5ArticlesTypesList: (params: RequestParams = {}) =>
      this.request<any, GetArticleTypesRespApiRespBase>({
        path: `/api/v5/articles/types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name V5ArticlesList
     * @summary Get articles by condition
     * @request GET:/api/v5/articles
     * @secure
     */
    v5ArticlesList: (
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
         * publish user name
         * @minLength 0
         * @maxLength 20
         */
        Publisher?: string;
        /**
         * proofread user name
         * @minLength 0
         * @maxLength 20
         */
        Proofreader?: string;
        /** Article type */
        ArticleType?: EnumArticleType;
        /**
         * publish From
         * @format int64
         */
        PublishFrom?: number;
        /**
         * publish To
         * @format int64
         */
        PublishTo?: number;
        /**
         * proofread From
         * @format int64
         */
        ProofreadFrom?: number;
        /**
         * proofread To
         * @format int64
         */
        ProofreadTo?: number;
        /** null = not sorting ,CreatedAtASC = 1,CreatedAtDESC = 2,UpdatedAtASC = 3,UpdatedAtDESC = 4,ViewsASC = 5,ViewsDESC = 6 */
        Sorting?: EnumSorting[];
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
        path: `/api/v5/articles`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name V5ArticlesCreate
     * @summary Add new article
     * @request POST:/api/v5/articles
     * @secure
     */
    v5ArticlesCreate: (
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
        /** Metadata */
        Metadata?: string;
        /** Is telegram push */
        IsTgPush?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddArticleRespApiRespBase>({
        path: `/api/v5/articles`,
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
     * @name V5ArticlesDetail
     * @summary Get article
     * @request GET:/api/v5/articles/{id}
     * @secure
     */
    v5ArticlesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetArticleRespApiRespBase>({
        path: `/api/v5/articles/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name V5ArticlesPartialUpdate
     * @summary Modify article
     * @request PATCH:/api/v5/articles/{id}
     * @secure
     */
    v5ArticlesPartialUpdate: (
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
        /** Metadata */
        Metadata?: string;
        /** Is telegram push */
        IsTgPush?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModArticleRespApiRespBase>({
        path: `/api/v5/articles/${id}`,
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
     * @name V5ArticlesDelete
     * @summary Delete article
     * @request DELETE:/api/v5/articles/{id}
     * @secure
     */
    v5ArticlesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelArticleRespApiRespBase>({
        path: `/api/v5/articles/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name V5ArticlesFuzzyList
     * @summary Get fuzzy article
     * @request GET:/api/v5/articles/fuzzy
     * @secure
     */
    v5ArticlesFuzzyList: (
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
      this.request<any, GetFuzzyArticlesRespApiRespBase>({
        path: `/api/v5/articles/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BoAuth
     * @name V5LogoutCreate
     * @summary Logout
     * @request POST:/api/v5/logout
     * @secure
     */
    v5LogoutCreate: (
      query?: {
        /** RefreshToken */
        refreshToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, LogoutRespApiRespBase>({
        path: `/api/v5/logout`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BoAuth
     * @name V5LoginCreate
     * @summary Login
     * @request POST:/api/v5/login
     * @secure
     */
    v5LoginCreate: (data: LoginReq, params: RequestParams = {}) =>
      this.request<any, OAuthTokenRespApiRespBase>({
        path: `/api/v5/login`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BoAuth
     * @name V5OauthTokenCreate
     * @summary refresh token
     * @request POST:/api/v5/oauth/token
     * @secure
     */
    v5OauthTokenCreate: (data: OAuthTokenReq, params: RequestParams = {}) =>
      this.request<any, OAuthTokenRespApiRespBase>({
        path: `/api/v5/oauth/token`,
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
     * @name V5BroadcasttalentsFuzzyList
     * @summary Get fuzzy broadcast talents
     * @request GET:/api/v5/broadcasttalents/fuzzy
     * @secure
     */
    v5BroadcasttalentsFuzzyList: (
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
        path: `/api/v5/broadcasttalents/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V5BroadcasttalentsList
     * @summary Get broadcast talents by condition
     * @request GET:/api/v5/broadcasttalents
     * @secure
     */
    v5BroadcasttalentsList: (
      query?: {
        /**
         * Broadcast talent Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id?: number;
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
        path: `/api/v5/broadcasttalents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V5BroadcasttalentsCreate
     * @summary Add new broadcast talent
     * @request POST:/api/v5/broadcasttalents
     * @secure
     */
    v5BroadcasttalentsCreate: (
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
        path: `/api/v5/broadcasttalents`,
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
     * @name V5BroadcasttalentsDetail
     * @summary Get broadcast talent
     * @request GET:/api/v5/broadcasttalents/{id}
     * @secure
     */
    v5BroadcasttalentsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetBroadcastTalentRespApiRespBase>({
        path: `/api/v5/broadcasttalents/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V5BroadcasttalentsPartialUpdate
     * @summary Modify broadcast talent
     * @request PATCH:/api/v5/broadcasttalents/{id}
     * @secure
     */
    v5BroadcasttalentsPartialUpdate: (
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
        /** Is remove ProfileImage */
        IsRemoveProfileImage?: boolean;
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
        path: `/api/v5/broadcasttalents/${id}`,
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
     * @name V5BroadcasttalentsDelete
     * @summary Delete broadcast talent
     * @request DELETE:/api/v5/broadcasttalents/{id}
     * @secure
     */
    v5BroadcasttalentsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelBroadcastTalentRespApiRespBase>({
        path: `/api/v5/broadcasttalents/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V5BroadcasttalentsMediaItemsList
     * @summary Get broadcast talents Media items
     * @request GET:/api/v5/broadcasttalents/media-items
     * @secure
     */
    v5BroadcasttalentsMediaItemsList: (
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
        path: `/api/v5/broadcasttalents/media-items`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name V5BroadcasttalentsMediaItemsCreate
     * @summary Add broadcast talent new Media items
     * @request POST:/api/v5/broadcasttalents/media-items
     * @secure
     */
    v5BroadcasttalentsMediaItemsCreate: (data: AddMediaItemsReq, params: RequestParams = {}) =>
      this.request<any, AddMediaItemsRespApiRespBase>({
        path: `/api/v5/broadcasttalents/media-items`,
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
     * @name V5BroadcasttalentsMediaItemsDelete
     * @summary Delete broadcast talent Media item
     * @request DELETE:/api/v5/broadcasttalents/{broadcastid}/media-items/{mediaitemid}
     * @secure
     */
    v5BroadcasttalentsMediaItemsDelete: (broadcastid: number, mediaitemid: number, params: RequestParams = {}) =>
      this.request<any, DelMediaItemRespApiRespBase>({
        path: `/api/v5/broadcasttalents/${broadcastid}/media-items/${mediaitemid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comm
     * @name V5CommMsgPushCreate
     * @summary Message Push
     * @request POST:/api/v5/comm/msg-push
     * @secure
     */
    v5CommMsgPushCreate: (data: MessagePushReq, params: RequestParams = {}) =>
      this.request<any, MessagePushRespApiRespBase>({
        path: `/api/v5/comm/msg-push`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Comm
     * @name V5CommMsgRetractionDelete
     * @summary Message Retraction
     * @request DELETE:/api/v5/comm/msg-retraction
     * @secure
     */
    v5CommMsgRetractionDelete: (data: MessageRetractionReq, params: RequestParams = {}) =>
      this.request<any, MessageRetractionRespApiRespBase>({
        path: `/api/v5/comm/msg-retraction`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Countries
     * @name V5CountriesList
     * @summary Get countries by condition
     * @request GET:/api/v5/countries
     * @secure
     */
    v5CountriesList: (
      query?: {
        /**
         * Country id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id?: number;
        /**
         * Country name
         * @minLength 0
         * @maxLength 50
         */
        Name?: string;
        /**
         * Country code
         * @minLength 0
         * @maxLength 2
         */
        Code?: string;
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
      this.request<any, GetCountriesRespApiRespBase>({
        path: `/api/v5/countries`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Countries
     * @name V5CountriesCreate
     * @summary Add country
     * @request POST:/api/v5/countries
     * @secure
     */
    v5CountriesCreate: (
      data: {
        /**
         * Country id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id: number;
        /**
         * Country name
         * @minLength 0
         * @maxLength 50
         */
        Name: string;
        /**
         * Country code
         * @minLength 0
         * @maxLength 2
         */
        Code: string;
        /**
         * Flag image file
         * @format binary
         */
        FlagImageFile: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddCountryRespApiRespBase>({
        path: `/api/v5/countries`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Countries
     * @name V5CountriesDetail
     * @summary Get country
     * @request GET:/api/v5/countries/{id}
     * @secure
     */
    v5CountriesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetCountryRespApiRespBase>({
        path: `/api/v5/countries/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Countries
     * @name V5CountriesPartialUpdate
     * @summary Modify country
     * @request PATCH:/api/v5/countries/{id}
     * @secure
     */
    v5CountriesPartialUpdate: (
      id: number,
      data: {
        /**
         * Country id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id: number;
        /**
         * Country name
         * @minLength 0
         * @maxLength 50
         */
        Name: string;
        /**
         * Country code
         * @minLength 0
         * @maxLength 2
         */
        Code: string;
        /**
         * Flag image file
         * @format binary
         */
        FlagImageFile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/countries/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Countries
     * @name V5CountriesDelete
     * @summary Delete country
     * @request DELETE:/api/v5/countries/{id}
     * @secure
     */
    v5CountriesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/countries/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Currency
     * @name V5CurrencyCurrentExchangeRateList
     * @summary Get current exchange rate
     * @request GET:/api/v5/currency/current-exchange-rate
     * @secure
     */
    v5CurrencyCurrentExchangeRateList: (
      query: {
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
        Currency: EnumCurrency;
        /**
         * Amount
         * @format double
         */
        Amount: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetCurrentExchangeRateResp>({
        path: `/api/v5/currency/current-exchange-rate`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Earnings
     * @name V5EarningsList
     * @summary Get earnings
     * @request GET:/api/v5/earnings
     * @secure
     */
    v5EarningsList: (
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
        /** 0/null:All, 1: Live, 2:Upcoming, 3:Completed, 4: Canceled, 5:Featured */
        TournamentFilter?: EnumTournamentFilters;
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
        path: `/api/v5/earnings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Earnings
     * @name V5EarningsDetail
     * @summary Get child earnings by parent
     * @request GET:/api/v5/earnings/{parentId}
     * @secure
     */
    v5EarningsDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, GetChildEarningsRespApiRespBase>({
        path: `/api/v5/earnings/${parentId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Earnings
     * @name V5EarningsChildDetail
     * @summary Get child earning prize pool
     * @request GET:/api/v5/earnings/child/{childId}
     * @secure
     */
    v5EarningsChildDetail: (childId: number, params: RequestParams = {}) =>
      this.request<any, GetChildEarningPrizePoolRespApiRespBase>({
        path: `/api/v5/earnings/child/${childId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Earnings
     * @name V5EarningsChildPartialUpdate
     * @summary Modify child prize pool
     * @request PATCH:/api/v5/earnings/child/{childId}
     * @secure
     */
    v5EarningsChildPartialUpdate: (childId: number, data: ModChildEarningPrizePoolReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/earnings/child/${childId}`,
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
     * @name V5EarningsChildStatusPartialUpdate
     * @summary Modify child prize pool status
     * @request PATCH:/api/v5/earnings/child/{childId}/status
     * @secure
     */
    v5EarningsChildStatusPartialUpdate: (
      childId: number,
      data: ModChildEarningPrizePoolStatusReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModChildEarningPrizePoolStatusRespApiRespBase>({
        path: `/api/v5/earnings/child/${childId}/status`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsList
     * @summary Get events by conditions
     * @request GET:/api/v5/events
     * @secure
     */
    v5EventsList: (
      query?: {
        /**
         * Event Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id?: number;
        /**
         * Event Name
         * @minLength 0
         * @maxLength 80
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
         * Frontend Id
         * 0: ALL
         * @format int32
         * @min 0
         * @max 32767
         */
        FrontendId?: number;
        /** Hidden */
        IsHidden?: boolean;
        /**
         * Organizer id
         * @format int32
         * @min 0
         * @max 32767
         */
        OrganizerId?: number;
        /**
         * Created at from
         * @format int64
         * @min 1
         */
        CreatedFrom?: number;
        /**
         * Created at to
         * @format int64
         * @min 1
         */
        CreatedTo?: number;
        /**
         * Starting at from
         * @format int64
         * @min 1
         */
        StartingFrom?: number;
        /**
         * Starting at to
         * @format int64
         * @min 1
         */
        StartingTo?: number;
        /**
         * Created by
         * @format int32
         * @min 1
         * @max 2147483647
         */
        CreatedBy?: number;
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
      this.request<any, GetEventsRespApiRespBase>({
        path: `/api/v5/events`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsCreate
     * @summary Add new event
     * @request POST:/api/v5/events
     * @secure
     */
    v5EventsCreate: (data: AddEventReq, params: RequestParams = {}) =>
      this.request<any, AddEventRespApiRespBase>({
        path: `/api/v5/events`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsDetail
     * @summary Get event detail
     * @request GET:/api/v5/events/{id}
     * @secure
     */
    v5EventsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetEventRespApiRespBase>({
        path: `/api/v5/events/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsPartialUpdate
     * @summary Modify event
     * @request PATCH:/api/v5/events/{id}
     * @secure
     */
    v5EventsPartialUpdate: (id: number, data: ModEventReq, params: RequestParams = {}) =>
      this.request<any, ModEventRespApiRespBase>({
        path: `/api/v5/events/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsDelete
     * @summary Delete event
     * @request DELETE:/api/v5/events/{id}
     * @secure
     */
    v5EventsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelEventRespApiRespBase>({
        path: `/api/v5/events/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsPagesList
     * @summary Get event pages
     * @request GET:/api/v5/events/pages
     * @secure
     */
    v5EventsPagesList: (
      query: {
        /**
         * Event id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        EventId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetEventPagesRespApiRespBase>({
        path: `/api/v5/events/pages`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsPagesCreate
     * @summary Add new event page
     * @request POST:/api/v5/events/pages
     * @secure
     */
    v5EventsPagesCreate: (data: AddEventPageReq, params: RequestParams = {}) =>
      this.request<any, AddEventPageRespApiRespBase>({
        path: `/api/v5/events/pages`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsPagesPartialUpdate
     * @summary Modify event page
     * @request PATCH:/api/v5/events/pages/{id}
     * @secure
     */
    v5EventsPagesPartialUpdate: (id: number, data: ModEventPageReq, params: RequestParams = {}) =>
      this.request<any, ModEventPageRespApiRespBase>({
        path: `/api/v5/events/pages/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsPagesDelete
     * @summary Delete event page
     * @request DELETE:/api/v5/events/pages/{id}
     * @secure
     */
    v5EventsPagesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelEventPageRespApiRespBase>({
        path: `/api/v5/events/pages/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsBoxesDetail
     * @summary Get event page box detail
     * @request GET:/api/v5/events/boxes/{id}
     * @secure
     */
    v5EventsBoxesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetEventBoxRespApiRespBase>({
        path: `/api/v5/events/boxes/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsBoxesPartialUpdate
     * @summary Modify event page box
     * @request PATCH:/api/v5/events/boxes/{id}
     * @secure
     */
    v5EventsBoxesPartialUpdate: (id: number, data: ModEventBoxReq, params: RequestParams = {}) =>
      this.request<any, ModEventBoxRespApiRespBase>({
        path: `/api/v5/events/boxes/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsBoxesDelete
     * @summary Delete event page box
     * @request DELETE:/api/v5/events/boxes/{id}
     * @secure
     */
    v5EventsBoxesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelEventBoxRespApiRespBase>({
        path: `/api/v5/events/boxes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsBoxesCreate
     * @summary Add new event page box
     * @request POST:/api/v5/events/boxes
     * @secure
     */
    v5EventsBoxesCreate: (data: AddEventBoxReq, params: RequestParams = {}) =>
      this.request<any, AddEventBoxRespApiRespBase>({
        path: `/api/v5/events/boxes`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsBoxesTypeList
     * @summary Get boxes type options
     * @request GET:/api/v5/events/boxes-type
     * @secure
     */
    v5EventsBoxesTypeList: (params: RequestParams = {}) =>
      this.request<any, ByteItemListApiRespBase>({
        path: `/api/v5/events/boxes-type`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsBoxesAdjustPositionPartialUpdate
     * @summary Modify event page boxes position
     * @request PATCH:/api/v5/events/boxes/adjust-position
     * @secure
     */
    v5EventsBoxesAdjustPositionPartialUpdate: (data: AdjustBoxesReq, params: RequestParams = {}) =>
      this.request<any, AdjustBoxesRespApiRespBase>({
        path: `/api/v5/events/boxes/adjust-position`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsFuzzyList
     * @summary Get fuzzy events
     * @request GET:/api/v5/events/fuzzy
     * @secure
     */
    v5EventsFuzzyList: (
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
      this.request<any, GetFuzzyEventsRespApiRespBase>({
        path: `/api/v5/events/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name V5EventsClearCachePartialUpdate
     * @summary Clear portal cache
     * @request PATCH:/api/v5/events/clear-cache
     * @secure
     */
    v5EventsClearCachePartialUpdate: (data: ClearCacheReq, params: RequestParams = {}) =>
      this.request<any, ClearCacheRespApiRespBase>({
        path: `/api/v5/events/clear-cache`,
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
     * @name V5FilesCrewFoldersList
     * @summary Get folders
     * @request GET:/api/v5/files/crew-folders
     * @secure
     */
    v5FilesCrewFoldersList: (
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
        path: `/api/v5/files/crew-folders`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V5FilesCrewFoldersCreate
     * @summary Add folder
     * @request POST:/api/v5/files/crew-folders
     * @secure
     */
    v5FilesCrewFoldersCreate: (
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
        path: `/api/v5/files/crew-folders`,
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
     * @name V5FilesCrewFilesList
     * @summary Get files
     * @request GET:/api/v5/files/crew-files
     * @secure
     */
    v5FilesCrewFilesList: (
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
        path: `/api/v5/files/crew-files`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V5FilesCrewFilesCreate
     * @summary Add crew file
     * @request POST:/api/v5/files/crew-files
     * @secure
     */
    v5FilesCrewFilesCreate: (
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
        path: `/api/v5/files/crew-files`,
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
     * @name V5FilesCrewFoldersPartialUpdate
     * @summary Modify folder
     * @request PATCH:/api/v5/files/crew-folders/{id}
     * @secure
     */
    v5FilesCrewFoldersPartialUpdate: (
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
        path: `/api/v5/files/crew-folders/${id}`,
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
     * @name V5FilesCrewFoldersDelete
     * @summary Delete folder
     * @request DELETE:/api/v5/files/crew-folders/{id}
     * @secure
     */
    v5FilesCrewFoldersDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelFolderRespApiRespBase>({
        path: `/api/v5/files/crew-folders/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V5FilesFuzzyFoldersList
     * @summary Get fuzzy folders
     * @request GET:/api/v5/files/fuzzy-folders
     * @secure
     */
    v5FilesFuzzyFoldersList: (
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
        path: `/api/v5/files/fuzzy-folders`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V5FilesCrewFilesPartialUpdate
     * @summary Modify file
     * @request PATCH:/api/v5/files/crew-files/{id}
     * @secure
     */
    v5FilesCrewFilesPartialUpdate: (
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
        path: `/api/v5/files/crew-files/${id}`,
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
     * @name V5FilesCrewFilesDelete
     * @summary Delete file
     * @request DELETE:/api/v5/files/crew-files/{id}
     * @secure
     */
    v5FilesCrewFilesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelFileRespApiRespBase>({
        path: `/api/v5/files/crew-files/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Files
     * @name V5FilesUploadFileCreate
     * @summary Upload file
     * @request POST:/api/v5/files/upload-file
     * @secure
     */
    v5FilesUploadFileCreate: (
      data: {
        /**
         * @minLength 0
         * @maxLength 100
         */
        UploadType: string;
        /** @format binary */
        File: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, UploadFileRespApiRespBase>({
        path: `/api/v5/files/upload-file`,
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
     * @name V5FilesDeleteFileDelete
     * @summary Delete file by file(hash) path
     * @request DELETE:/api/v5/files/delete-file
     * @secure
     */
    v5FilesDeleteFileDelete: (
      query: {
        /**
         * Image hash path
         * @minLength 0
         * @maxLength 255
         */
        FilePath: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, DelFileByHashRespApiRespBase>({
        path: `/api/v5/files/delete-file`,
        method: "DELETE",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsList
     * @summary Get frontends by condition
     * @request GET:/api/v5/frontends
     * @secure
     */
    v5FrontendsList: (
      query?: {
        /**
         * Frontend Id
         * @format int32
         */
        Id?: number;
        /** Frontend Name */
        Name?: string;
        /** Is Hidden */
        IsHidden?: boolean;
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
      this.request<any, GetFrontendsRespApiRespBase>({
        path: `/api/v5/frontends`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsCreate
     * @summary Add frontend basic info
     * @request POST:/api/v5/frontends
     * @secure
     */
    v5FrontendsCreate: (data: AddFrontendReq, params: RequestParams = {}) =>
      this.request<any, AddFrontendRespApiRespBase>({
        path: `/api/v5/frontends`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsDetail
     * @summary Get frontend detail by user permissions
     * @request GET:/api/v5/frontends/{id}
     * @secure
     */
    v5FrontendsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetFrontendRespApiRespBase>({
        path: `/api/v5/frontends/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsDelete
     * @summary Delete frontend
     * @request DELETE:/api/v5/frontends/{id}
     * @secure
     */
    v5FrontendsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelFrontendRespApiRespBase>({
        path: `/api/v5/frontends/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsBasicInfoPartialUpdate
     * @summary Modify frontend Basic info
     * @request PATCH:/api/v5/frontends/{id}/basic-info
     * @secure
     */
    v5FrontendsBasicInfoPartialUpdate: (id: number, data: ModFrontendBasicInfoReq, params: RequestParams = {}) =>
      this.request<any, ModFrontendBasicInfoRespApiRespBase>({
        path: `/api/v5/frontends/${id}/basic-info`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsGoogleSettingsPartialUpdate
     * @summary Modify frontend google settings
     * @request PATCH:/api/v5/frontends/{id}/google-settings
     * @secure
     */
    v5FrontendsGoogleSettingsPartialUpdate: (
      id: number,
      data: ModFrontendGoogleSettingsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModFrontendGoogleSettingsRespApiRespBase>({
        path: `/api/v5/frontends/${id}/google-settings`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsAdsPartialUpdate
     * @summary Modify frontend ads
     * @request PATCH:/api/v5/frontends/{id}/ads
     * @secure
     */
    v5FrontendsAdsPartialUpdate: (id: number, data: ModFrontendAdsReq, params: RequestParams = {}) =>
      this.request<any, ModFrontendAdsRespApiRespBase>({
        path: `/api/v5/frontends/${id}/ads`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsRobotsPartialUpdate
     * @summary Modify frontend robots
     * @request PATCH:/api/v5/frontends/{id}/robots
     * @secure
     */
    v5FrontendsRobotsPartialUpdate: (id: number, data: ModFrontendRobotsReq, params: RequestParams = {}) =>
      this.request<any, ModFrontendRobotsRespApiRespBase>({
        path: `/api/v5/frontends/${id}/robots`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsMenusList
     * @summary Get frontend menus by condition
     * @request GET:/api/v5/frontends/menus
     * @secure
     */
    v5FrontendsMenusList: (
      query: {
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId: number;
        Platform: EnumMenuPlatform;
        IsIncludeHidden?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFrontendMenusRespApiRespBase>({
        path: `/api/v5/frontends/menus`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsMenusDetail
     * @summary Get frontend menu detail
     * @request GET:/api/v5/frontends/menus/{id}
     * @secure
     */
    v5FrontendsMenusDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetFrontendMenuDetailRespApiRespBase>({
        path: `/api/v5/frontends/menus/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsMenuCreate
     * @summary Add frontend menu
     * @request POST:/api/v5/frontends/menu
     * @secure
     */
    v5FrontendsMenuCreate: (data: AddFrontendMenuReq, params: RequestParams = {}) =>
      this.request<any, AddFrontendMenuRespApiRespBase>({
        path: `/api/v5/frontends/menu`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsMenuPartialUpdate
     * @summary Modify frontend menu
     * @request PATCH:/api/v5/frontends/menu/{id}
     * @secure
     */
    v5FrontendsMenuPartialUpdate: (id: number, data: ModFrontendMenuReq, params: RequestParams = {}) =>
      this.request<any, ModFrontendMenuRespApiRespBase>({
        path: `/api/v5/frontends/menu/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsMenuDelete
     * @summary Delete frontend menu
     * @request DELETE:/api/v5/frontends/menu/{id}
     * @secure
     */
    v5FrontendsMenuDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelFrontendMenuRespApiRespBase>({
        path: `/api/v5/frontends/menu/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsAdjustMenuPartialUpdate
     * @summary Modify frontend menu options
     * @request PATCH:/api/v5/frontends/adjust-menu
     * @secure
     */
    v5FrontendsAdjustMenuPartialUpdate: (data: ModMenuOptionsReq, params: RequestParams = {}) =>
      this.request<any, ModMenuOptionsRespApiRespBase>({
        path: `/api/v5/frontends/adjust-menu`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsBannersList
     * @summary Get frontend banners by condition
     * @request GET:/api/v5/frontends/banners
     * @secure
     */
    v5FrontendsBannersList: (
      query: {
        /**
         * Core frontend id
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetBannersRespApiRespBase>({
        path: `/api/v5/frontends/banners`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsBannersCreate
     * @summary Add frontend site section banner
     * @request POST:/api/v5/frontends/banners
     * @secure
     */
    v5FrontendsBannersCreate: (
      data: {
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId: number;
        /**
         * @format int32
         * @min 0
         * @max 32767
         */
        SiteSectionId: number;
        /**
         * @minLength 0
         * @maxLength 255
         */
        AltText?: string;
        EnableHyperlink: boolean;
        OpenType?: EnumBannerOpenType;
        /**
         * @minLength 0
         * @maxLength 512
         */
        Url?: string;
        /**
         * Banner image file
         * @format binary
         */
        BannerImageFile: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddBannerRespApiRespBase>({
        path: `/api/v5/frontends/banners`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsBannersPartialUpdate
     * @summary Modify frontend site section banner
     * @request PATCH:/api/v5/frontends/banners
     * @secure
     */
    v5FrontendsBannersPartialUpdate: (
      data: {
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        Id: number;
        /**
         * @minLength 0
         * @maxLength 255
         */
        AltText?: string;
        EnableHyperlink: boolean;
        OpenType?: EnumBannerOpenType;
        /**
         * @minLength 0
         * @maxLength 512
         */
        Url?: string;
        /**
         * Banner image file
         * @format binary
         */
        BannerImageFile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModBannerRespApiRespBase>({
        path: `/api/v5/frontends/banners`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsBannersDetail
     * @summary Get frontend site section banner detail
     * @request GET:/api/v5/frontends/banners/{id}
     * @secure
     */
    v5FrontendsBannersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetBannerDetailRespApiRespBase>({
        path: `/api/v5/frontends/banners/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name V5FrontendsBannersSiteSectionsList
     * @summary Get banner site sections
     * @request GET:/api/v5/frontends/banners/site-sections
     * @secure
     */
    v5FrontendsBannersSiteSectionsList: (
      query: {
        /**
         * Core frontend id
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontendId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, Int32ItemListApiRespBase>({
        path: `/api/v5/frontends/banners/site-sections`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V5FuncsTypesList
     * @summary Get Func Types
     * @request GET:/api/v5/funcs/types
     * @secure
     */
    v5FuncsTypesList: (params: RequestParams = {}) =>
      this.request<any, GetFuncTypesRespApiRespBase>({
        path: `/api/v5/funcs/types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V5FuncsOptionsList
     * @summary Get Func Options
     * @request GET:/api/v5/funcs/options
     * @secure
     */
    v5FuncsOptionsList: (params: RequestParams = {}) =>
      this.request<any, GetFuncOptionsRespApiRespBase>({
        path: `/api/v5/funcs/options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V5FuncsList
     * @summary Get Funcs
     * @request GET:/api/v5/funcs
     * @secure
     */
    v5FuncsList: (params: RequestParams = {}) =>
      this.request<any, GetFuncsRespApiRespBase>({
        path: `/api/v5/funcs`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V5FuncsCreate
     * @summary Add Func
     * @request POST:/api/v5/funcs
     * @secure
     */
    v5FuncsCreate: (
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
        path: `/api/v5/funcs`,
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
     * @name V5FuncsDetail
     * @summary Get Func
     * @request GET:/api/v5/funcs/{id}
     * @secure
     */
    v5FuncsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetFuncRespApiRespBase>({
        path: `/api/v5/funcs/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Funcs
     * @name V5FuncsPartialUpdate
     * @summary Modify Func
     * @request PATCH:/api/v5/funcs/{id}
     * @secure
     */
    v5FuncsPartialUpdate: (
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
        path: `/api/v5/funcs/${id}`,
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
     * @name V5FuncsDelete
     * @summary Delete Func
     * @request DELETE:/api/v5/funcs/{id}
     * @secure
     */
    v5FuncsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelFuncRespApiRespBase>({
        path: `/api/v5/funcs/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRaces
     * @name V5GameracesFuzzyList
     * @summary Get fuzzy game races
     * @request GET:/api/v5/gameraces/fuzzy
     * @secure
     */
    v5GameracesFuzzyList: (
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
        path: `/api/v5/gameraces/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V5GameRegionsList
     * @summary Get game regions
     * @request GET:/api/v5/game-regions
     * @secure
     */
    v5GameRegionsList: (
      query?: {
        /**
         * Region id
         * @format int32
         * @min 1
         * @max 32767
         */
        RegionId?: number;
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
        path: `/api/v5/game-regions`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V5GameRegionsCreate
     * @summary Add game region
     * @request POST:/api/v5/game-regions
     * @secure
     */
    v5GameRegionsCreate: (data: AddGameRegionReq, params: RequestParams = {}) =>
      this.request<any, AddGameRegionRespApiRespBase>({
        path: `/api/v5/game-regions`,
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
     * @name V5GameRegionsDetail
     * @summary Get game region detail
     * @request GET:/api/v5/game-regions/{id}
     * @secure
     */
    v5GameRegionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetGameRegionRespApiRespBase>({
        path: `/api/v5/game-regions/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V5GameRegionsPartialUpdate
     * @summary Modify game region
     * @request PATCH:/api/v5/game-regions/{id}
     * @secure
     */
    v5GameRegionsPartialUpdate: (id: number, data: ModGameRegionReq, params: RequestParams = {}) =>
      this.request<any, ModGameRegionRespApiRespBase>({
        path: `/api/v5/game-regions/${id}`,
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
     * @name V5GameRegionsDelete
     * @summary Delete game region
     * @request DELETE:/api/v5/game-regions/{id}
     * @secure
     */
    v5GameRegionsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelGameRegionRespApiRespBase>({
        path: `/api/v5/game-regions/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V5GameRegionsTranslationsDetail
     * @summary Get game region translations
     * @request GET:/api/v5/game-regions/{id}/translations
     * @secure
     */
    v5GameRegionsTranslationsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetGameRegionTranslationRespApiRespBase>({
        path: `/api/v5/game-regions/${id}/translations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameRegions
     * @name V5GameRegionsTranslationsPartialUpdate
     * @summary Modify game region translation
     * @request PATCH:/api/v5/game-regions/{id}/translations
     * @secure
     */
    v5GameRegionsTranslationsPartialUpdate: (
      id: number,
      data: ModGameRegionTranslationReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModGameRegionTranslationRespApiRespBase>({
        path: `/api/v5/game-regions/${id}/translations`,
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
     * @name V5GamesList
     * @summary Get games by condition
     * @request GET:/api/v5/games
     * @secure
     */
    v5GamesList: (
      query?: {
        /**
         * Games Id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id?: number;
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
        path: `/api/v5/games`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V5GamesCreate
     * @summary Add game
     * @request POST:/api/v5/games
     * @secure
     */
    v5GamesCreate: (
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
        path: `/api/v5/games`,
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
     * @name V5GamesDetail
     * @summary Get game
     * @request GET:/api/v5/games/{id}
     * @secure
     */
    v5GamesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetGameRespApiRespBase>({
        path: `/api/v5/games/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V5GamesPartialUpdate
     * @summary Modify game
     * @request PATCH:/api/v5/games/{id}
     * @secure
     */
    v5GamesPartialUpdate: (
      id: number,
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
      params: RequestParams = {},
    ) =>
      this.request<any, ModGameRespApiRespBase>({
        path: `/api/v5/games/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V5GamesDelete
     * @summary Delete game
     * @request DELETE:/api/v5/games/{id}
     * @secure
     */
    v5GamesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelGameRespApiRespBase>({
        path: `/api/v5/games/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V5GamesGameOffSeasonPartialUpdate
     * @summary Modify game off season
     * @request PATCH:/api/v5/games/{id}/game-off-season
     * @secure
     */
    v5GamesGameOffSeasonPartialUpdate: (id: number, data: ModGameOffSeasonReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/games/${id}/game-off-season`,
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
     * @name V5GamesGameOffSeasonDelete
     * @summary Clear game off season
     * @request DELETE:/api/v5/games/{id}/game-off-season
     * @secure
     */
    v5GamesGameOffSeasonDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/games/${id}/game-off-season`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Games
     * @name V5GamesTranslationsPartialUpdate
     * @summary Modify game translations
     * @request PATCH:/api/v5/games/{id}/translations
     * @secure
     */
    v5GamesTranslationsPartialUpdate: (id: number, data: ModGameTranslationsReq, params: RequestParams = {}) =>
      this.request<any, ModGameTranslationsRespApiRespBase>({
        path: `/api/v5/games/${id}/translations`,
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
     * @name V5GamesFuzzyList
     * @summary Get fuzzy games
     * @request GET:/api/v5/games/fuzzy
     * @secure
     */
    v5GamesFuzzyList: (
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
        path: `/api/v5/games/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V5GamesidesList
     * @summary Get sides by condition
     * @request GET:/api/v5/gamesides
     * @secure
     */
    v5GamesidesList: (
      query?: {
        /**
         * Side Id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id?: number;
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
        path: `/api/v5/gamesides`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V5GamesidesCreate
     * @summary Add new game side
     * @request POST:/api/v5/gamesides
     * @secure
     */
    v5GamesidesCreate: (
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
        path: `/api/v5/gamesides`,
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
     * @name V5GamesidesDetail
     * @summary Get game side
     * @request GET:/api/v5/gamesides/{id}
     * @secure
     */
    v5GamesidesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetSideRespApiRespBase>({
        path: `/api/v5/gamesides/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V5GamesidesPartialUpdate
     * @summary Modify game side
     * @request PATCH:/api/v5/gamesides/{id}
     * @secure
     */
    v5GamesidesPartialUpdate: (
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
        path: `/api/v5/gamesides/${id}`,
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
     * @name V5GamesidesDelete
     * @summary Delete game side
     * @request DELETE:/api/v5/gamesides/{id}
     * @secure
     */
    v5GamesidesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelSideRespApiRespBase>({
        path: `/api/v5/gamesides/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V5GamesidesTranslationsDetail
     * @summary Get game side translations
     * @request GET:/api/v5/gamesides/{id}/translations
     * @secure
     */
    v5GamesidesTranslationsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetSideTranslationsRespApiRespBase>({
        path: `/api/v5/gamesides/${id}/translations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags GameSides
     * @name V5GamesidesTranslationsPartialUpdate
     * @summary Modify game side translations
     * @request PATCH:/api/v5/gamesides/{id}/translations
     * @secure
     */
    v5GamesidesTranslationsPartialUpdate: (id: number, data: ModSideTranslationsReq, params: RequestParams = {}) =>
      this.request<any, ModSideTranslationsRespApiRespBase>({
        path: `/api/v5/gamesides/${id}/translations`,
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
     * @name V5GroupsGroupOptionsList
     * @summary Get group options
     * @request GET:/api/v5/groups/group-options
     * @secure
     */
    v5GroupsGroupOptionsList: (params: RequestParams = {}) =>
      this.request<any, GetGroupOptionsRespApiRespBase>({
        path: `/api/v5/groups/group-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V5GroupsGroupOptionsByUserList
     * @summary Get group options by user
     * @request GET:/api/v5/groups/group-options-by-user
     * @secure
     */
    v5GroupsGroupOptionsByUserList: (params: RequestParams = {}) =>
      this.request<any, GetGroupOptionsRespApiRespBase>({
        path: `/api/v5/groups/group-options-by-user`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V5GroupsList
     * @summary Get Groups
     * @request GET:/api/v5/groups
     * @secure
     */
    v5GroupsList: (
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
        path: `/api/v5/groups`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V5GroupsCreate
     * @summary Add group
     * @request POST:/api/v5/groups
     * @secure
     */
    v5GroupsCreate: (data: AddGroupReq, params: RequestParams = {}) =>
      this.request<any, AddGroupRespApiRespBase>({
        path: `/api/v5/groups`,
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
     * @name V5GroupsDetail
     * @summary Get Group
     * @request GET:/api/v5/groups/{id}
     * @secure
     */
    v5GroupsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetGroupRespApiRespBase>({
        path: `/api/v5/groups/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V5GroupsPartialUpdate
     * @summary Modify Group
     * @request PATCH:/api/v5/groups/{id}
     * @secure
     */
    v5GroupsPartialUpdate: (id: number, data: ModGroupReq, params: RequestParams = {}) =>
      this.request<any, ModGroupRespApiRespBase>({
        path: `/api/v5/groups/${id}`,
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
     * @name V5GroupsDelete
     * @summary Delete Group
     * @request DELETE:/api/v5/groups/{id}
     * @secure
     */
    v5GroupsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelGroupRespApiRespBase>({
        path: `/api/v5/groups/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V5GroupsBlankPermissionsList
     * @summary Get group blank permissions
     * @request GET:/api/v5/groups/blank-permissions
     * @secure
     */
    v5GroupsBlankPermissionsList: (params: RequestParams = {}) =>
      this.request<any, GetGroupBlankPermissionsRespApiRespBase>({
        path: `/api/v5/groups/blank-permissions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V5GroupsTemplatesList
     * @summary Get Group Templates
     * @request GET:/api/v5/groups/templates
     * @secure
     */
    v5GroupsTemplatesList: (params: RequestParams = {}) =>
      this.request<any, GetGroupTemplatesRespApiRespBase>({
        path: `/api/v5/groups/templates`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V5GroupsAssignGroupPartialUpdate
     * @summary Assign group to user
     * @request PATCH:/api/v5/groups/assign-group
     * @secure
     */
    v5GroupsAssignGroupPartialUpdate: (data: AssignGroupReq, params: RequestParams = {}) =>
      this.request<any, AssignGroupRespApiRespBase>({
        path: `/api/v5/groups/assign-group`,
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
     * @name V5GroupsUnassignGroupDelete
     * @summary UnAssign group from user
     * @request DELETE:/api/v5/groups/unassign-group
     * @secure
     */
    v5GroupsUnassignGroupDelete: (data: UnAssignGroupReq, params: RequestParams = {}) =>
      this.request<any, UnAssignGroupRespApiRespBase>({
        path: `/api/v5/groups/unassign-group`,
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
     * @name V5GroupsUsersDetail
     * @summary Get users by group
     * @request GET:/api/v5/groups/{id}/users
     * @secure
     */
    v5GroupsUsersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetUsersByGroupRespApiRespBase>({
        path: `/api/v5/groups/${id}/users`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Groups
     * @name V5GroupsFuzzyUsersDetail
     * @summary Get fuzzy users by group
     * @request GET:/api/v5/groups/{id}/fuzzy-users
     * @secure
     */
    v5GroupsFuzzyUsersDetail: (
      id: number,
      query: {
        /**
         * Fuzzy prefix
         * @minLength 1
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
      this.request<any, GetFuzzyUsersByGroupRespApiRespBase>({
        path: `/api/v5/groups/${id}/fuzzy-users`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V5HeroesList
     * @summary Get heroes by condition
     * @request GET:/api/v5/heroes
     * @secure
     */
    v5HeroesList: (
      query?: {
        /**
         * Game hero id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id?: number;
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
        path: `/api/v5/heroes`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V5HeroesCreate
     * @summary Add new game Hero
     * @request POST:/api/v5/heroes
     * @secure
     */
    v5HeroesCreate: (
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
         * Icon file
         * @format binary
         */
        IconFile?: File;
        /**
         * Mobile Icon file
         * @format binary
         */
        MobileIconFile?: File;
        /**
         * Moonton hero id
         * @format int32
         */
        MtHeroId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddHeroRespApiRespBase>({
        path: `/api/v5/heroes`,
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
     * @name V5HeroesDetail
     * @summary Get game hero
     * @request GET:/api/v5/heroes/{id}
     * @secure
     */
    v5HeroesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetHeroRespApiRespBase>({
        path: `/api/v5/heroes/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V5HeroesPartialUpdate
     * @summary Modify game Hero
     * @request PATCH:/api/v5/heroes/{id}
     * @secure
     */
    v5HeroesPartialUpdate: (
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
         * Icon file
         * @format binary
         */
        IconFile?: File;
        /**
         * Mobile Icon file
         * @format binary
         */
        MobileIconFile?: File;
        /**
         * Moonton hero id
         * @format int32
         */
        MtHeroId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModHeroRespApiRespBase>({
        path: `/api/v5/heroes/${id}`,
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
     * @name V5HeroesDelete
     * @summary Delete game Hero
     * @request DELETE:/api/v5/heroes/{id}
     * @secure
     */
    v5HeroesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelHeroRespApiRespBase>({
        path: `/api/v5/heroes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V5HeroesTranslationsDetail
     * @summary Get game hero translations
     * @request GET:/api/v5/heroes/{id}/translations
     * @secure
     */
    v5HeroesTranslationsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetHeroTranslationsRespApiRespBase>({
        path: `/api/v5/heroes/${id}/translations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Heroes
     * @name V5HeroesTranslationsPartialUpdate
     * @summary Modify game Hero translations
     * @request PATCH:/api/v5/heroes/{id}/translations
     * @secure
     */
    v5HeroesTranslationsPartialUpdate: (id: number, data: ModHeroTranslationsReq, params: RequestParams = {}) =>
      this.request<any, ModHeroTranslationsRespApiRespBase>({
        path: `/api/v5/heroes/${id}/translations`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V5LogsLogLevelsList
     * @summary Get Log Levels
     * @request GET:/api/v5/logs/log-levels
     * @secure
     */
    v5LogsLogLevelsList: (params: RequestParams = {}) =>
      this.request<any, GetLogLevelsRespApiRespBase>({
        path: `/api/v5/logs/log-levels`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V5LogsApiLogsList
     * @summary Get Api Logs
     * @request GET:/api/v5/logs/api-logs
     * @secure
     */
    v5LogsApiLogsList: (
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
         * Updated user id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        UpdatedUserId?: number;
        /**
         * Http method
         * @minLength 0
         * @maxLength 8
         */
        Method?: string;
        /**
         * Host
         * @minLength 0
         * @maxLength 100
         */
        Host?: string;
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
        path: `/api/v5/logs/api-logs`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V5LogsApiLogsDetail
     * @summary Get Api log
     * @request GET:/api/v5/logs/api-logs/{id}
     * @secure
     */
    v5LogsApiLogsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetApiLogRespApiRespBase>({
        path: `/api/v5/logs/api-logs/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V5LogsSystemLogsList
     * @summary Get System Logs
     * @request GET:/api/v5/logs/system-logs
     * @secure
     */
    v5LogsSystemLogsList: (
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
        path: `/api/v5/logs/system-logs`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V5LogsSystemLogsDetail
     * @summary Get System Log
     * @request GET:/api/v5/logs/system-logs/{id}
     * @secure
     */
    v5LogsSystemLogsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetSystemLogRespApiRespBase>({
        path: `/api/v5/logs/system-logs/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Logs
     * @name V5LogsCreate
     * @summary Add log
     * @request POST:/api/v5/logs
     * @secure
     */
    v5LogsCreate: (data: AddLogReq, params: RequestParams = {}) =>
      this.request<any, AddLogRespApiRespBase>({
        path: `/api/v5/logs`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V5MapsList
     * @summary Get maps by condition
     * @request GET:/api/v5/maps
     * @secure
     */
    v5MapsList: (
      query?: {
        /**
         * Map Id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id?: number;
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
        path: `/api/v5/maps`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V5MapsCreate
     * @summary Add new game map
     * @request POST:/api/v5/maps
     * @secure
     */
    v5MapsCreate: (
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
        path: `/api/v5/maps`,
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
     * @name V5MapsDetail
     * @summary Get game map
     * @request GET:/api/v5/maps/{id}
     * @secure
     */
    v5MapsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetMapRespApiRespBase>({
        path: `/api/v5/maps/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V5MapsPartialUpdate
     * @summary Modify game map
     * @request PATCH:/api/v5/maps/{id}
     * @secure
     */
    v5MapsPartialUpdate: (
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
        path: `/api/v5/maps/${id}`,
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
     * @name V5MapsDelete
     * @summary Delete game map
     * @request DELETE:/api/v5/maps/{id}
     * @secure
     */
    v5MapsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelMapRespApiRespBase>({
        path: `/api/v5/maps/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V5MapsTranslationsDetail
     * @summary Get game map translations
     * @request GET:/api/v5/maps/{id}/translations
     * @secure
     */
    v5MapsTranslationsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetMapTranslationsRespApiRespBase>({
        path: `/api/v5/maps/${id}/translations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Maps
     * @name V5MapsTranslationsPartialUpdate
     * @summary Modify game map translations
     * @request PATCH:/api/v5/maps/{id}/translations
     * @secure
     */
    v5MapsTranslationsPartialUpdate: (id: number, data: ModMapTranslationsReq, params: RequestParams = {}) =>
      this.request<any, ModMapTranslationsRespApiRespBase>({
        path: `/api/v5/maps/${id}/translations`,
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
     * @name V5MapsFuzzyList
     * @summary Get fuzzy maps
     * @request GET:/api/v5/maps/fuzzy
     * @secure
     */
    v5MapsFuzzyList: (
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
        path: `/api/v5/maps/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V5MediaStreamsList
     * @summary Get media streams by condition
     * @request GET:/api/v5/media/streams
     * @secure
     */
    v5MediaStreamsList: (
      query?: {
        /**
         * Media item Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id?: number;
        /**
         * Title
         * @minLength 0
         * @maxLength 60
         */
        Title?: string;
        /**
         * Created user id
         * @format int32
         * @min -2147483648
         * @max 2147483647
         */
        CreatedUserId?: number;
        /** Platform Id (TwitchTV = 1,Youtube_Channel = 10,Youtube_Stream = 11 Facebook = 12,Other = 99) */
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
        path: `/api/v5/media/streams`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V5MediaStreamsCreate
     * @summary Add new media stream
     * @request POST:/api/v5/media/streams
     * @secure
     */
    v5MediaStreamsCreate: (
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
        path: `/api/v5/media/streams`,
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
     * @name V5MediaStreamsDetail
     * @summary Get media stream detail
     * @request GET:/api/v5/media/streams/{id}
     * @secure
     */
    v5MediaStreamsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetStreamRespApiRespBase>({
        path: `/api/v5/media/streams/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V5MediaStreamsPartialUpdate
     * @summary Modify media stream
     * @request PATCH:/api/v5/media/streams/{id}
     * @secure
     */
    v5MediaStreamsPartialUpdate: (
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
        path: `/api/v5/media/streams/${id}`,
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
     * @name V5MediaStreamsDelete
     * @summary Delete media stream
     * @request DELETE:/api/v5/media/streams/{id}
     * @secure
     */
    v5MediaStreamsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelStreamRespApiRespBase>({
        path: `/api/v5/media/streams/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V5MediaFuzzyStreamsList
     * @summary Get fuzzy media streams
     * @request GET:/api/v5/media/fuzzy-streams
     * @secure
     */
    v5MediaFuzzyStreamsList: (
      query?: {
        /**
         * FuzzyPrefix
         * @minLength 0
         * @maxLength 60
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
        path: `/api/v5/media/fuzzy-streams`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V5MediaFuzzyVideosList
     * @summary Get fuzzy media videos
     * @request GET:/api/v5/media/fuzzy-videos
     * @secure
     */
    v5MediaFuzzyVideosList: (
      query?: {
        /**
         * FuzzyPrefix
         * @minLength 0
         * @maxLength 60
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
        path: `/api/v5/media/fuzzy-videos`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Media
     * @name V5MediaStreamsRemoteUpdatePartialUpdate
     * @summary Remote update media stream
     * @request PATCH:/api/v5/media/streams/remote-update
     * @secure
     */
    v5MediaStreamsRemoteUpdatePartialUpdate: (
      data: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        MediaItemId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, UpdateStreamRespApiRespBase>({
        path: `/api/v5/media/streams/remote-update`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V5MediaVodsHostOptionsList
     * @summary Get media vod host options
     * @request GET:/api/v5/media/vods/host-options
     * @secure
     */
    v5MediaVodsHostOptionsList: (params: RequestParams = {}) =>
      this.request<any, GetMediaVodHostOptionsResp>({
        path: `/api/v5/media/vods/host-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V5MediaVodsList
     * @summary Get media Vods
     * @request GET:/api/v5/media/vods
     * @secure
     */
    v5MediaVodsList: (
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
         * Created user id
         * @format int32
         * @min -2147483648
         * @max 2147483647
         */
        CreatedUserId?: number;
        /** Is Featured */
        IsFeatured?: boolean;
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
        path: `/api/v5/media/vods`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V5MediaVodsCreate
     * @summary Add media vod
     * @request POST:/api/v5/media/vods
     * @secure
     */
    v5MediaVodsCreate: (data: AddMediaVodReq, params: RequestParams = {}) =>
      this.request<any, AddMediaVodRespApiRespBase>({
        path: `/api/v5/media/vods`,
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
     * @name V5MediaVodsDetail
     * @summary Get media vod
     * @request GET:/api/v5/media/vods/{id}
     * @secure
     */
    v5MediaVodsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetMediaVodRespApiRespBase>({
        path: `/api/v5/media/vods/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V5MediaVodsPartialUpdate
     * @summary Modify media vod
     * @request PATCH:/api/v5/media/vods/{id}
     * @secure
     */
    v5MediaVodsPartialUpdate: (id: number, data: ModMediaVodReq, params: RequestParams = {}) =>
      this.request<any, ModMediaVodRespApiRespBase>({
        path: `/api/v5/media/vods/${id}`,
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
     * @name V5MediaVodsDelete
     * @summary Delete media vod
     * @request DELETE:/api/v5/media/vods/{id}
     * @secure
     */
    v5MediaVodsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelMediaVodRespApiRespBase>({
        path: `/api/v5/media/vods/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags MediaVods
     * @name V5MediaVodsDownloadCsvList
     * @summary Download media vods csv
     * @request GET:/api/v5/media/vods/download-csv
     * @secure
     */
    v5MediaVodsDownloadCsvList: (
      query?: {
        /**
         * Site section ids
         * Format=1,2,3,4,5,6
         */
        SiteSectionIdsStr?: string;
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
         * Created user id
         * @format int32
         * @min -2147483648
         * @max 2147483647
         */
        CreatedUserId?: number;
        /** Is Featured */
        IsFeatured?: boolean;
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
        path: `/api/v5/media/vods/download-csv`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbEquipmentsList
     * @summary Get Equipments
     * @request GET:/api/v5/mlbb/equipments
     * @secure
     */
    v5MlbbEquipmentsList: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id?: number;
        /**
         * Equipment En Name
         * @minLength 1
         * @maxLength 100
         */
        EquipmentName?: string;
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
      this.request<any, GetMLBBEqpsRespApiRespBase>({
        path: `/api/v5/mlbb/equipments`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbEquipmentsCreate
     * @summary Add Equipment
     * @request POST:/api/v5/mlbb/equipments
     * @secure
     */
    v5MlbbEquipmentsCreate: (
      data: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id: number;
        /**
         * @minLength 0
         * @maxLength 100
         */
        EquipmentName: string;
        /** @format binary */
        Image?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddMLBBEqpRespApiRespBase>({
        path: `/api/v5/mlbb/equipments`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbEquipmentsDetail
     * @summary Get Equipment detail
     * @request GET:/api/v5/mlbb/equipments/{id}
     * @secure
     */
    v5MlbbEquipmentsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetMLBBEqpDetailRespApiRespBase>({
        path: `/api/v5/mlbb/equipments/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbEquipmentsPartialUpdate
     * @summary Modify Equipment
     * @request PATCH:/api/v5/mlbb/equipments/{id}
     * @secure
     */
    v5MlbbEquipmentsPartialUpdate: (
      id: number,
      data: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id: number;
        /**
         * @minLength 0
         * @maxLength 100
         */
        EquipmentName: string;
        /** @format binary */
        Image?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModMLBBEqpRespApiRespBase>({
        path: `/api/v5/mlbb/equipments/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbEquipmentsDelete
     * @summary Delete Equipment
     * @request DELETE:/api/v5/mlbb/equipments/{id}
     * @secure
     */
    v5MlbbEquipmentsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelMLBBEqpRespApiRespBase>({
        path: `/api/v5/mlbb/equipments/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbBattleSpellsList
     * @summary Get Battle Spells
     * @request GET:/api/v5/mlbb/battle-spells
     * @secure
     */
    v5MlbbBattleSpellsList: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id?: number;
        /**
         * Battle Spell En Name
         * @minLength 1
         * @maxLength 100
         */
        BattleSpellName?: string;
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
      this.request<any, GetMLBBBattleSpellsRespApiRespBase>({
        path: `/api/v5/mlbb/battle-spells`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbBattleSpellsCreate
     * @summary Add Battle Spell
     * @request POST:/api/v5/mlbb/battle-spells
     * @secure
     */
    v5MlbbBattleSpellsCreate: (data: AddMLBBBattleSpellReq, params: RequestParams = {}) =>
      this.request<any, AddMLBBBattleSpellRespApiRespBase>({
        path: `/api/v5/mlbb/battle-spells`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbBattleSpellsDetail
     * @summary Get Battle Spell detail
     * @request GET:/api/v5/mlbb/battle-spells/{id}
     * @secure
     */
    v5MlbbBattleSpellsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetMLBBBattleSpellDetailRespApiRespBase>({
        path: `/api/v5/mlbb/battle-spells/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbBattleSpellsPartialUpdate
     * @summary Modify Battle Spell
     * @request PATCH:/api/v5/mlbb/battle-spells/{id}
     * @secure
     */
    v5MlbbBattleSpellsPartialUpdate: (id: number, data: ModMLBBBattleSpellReq, params: RequestParams = {}) =>
      this.request<any, ModMLBBBattleSpellRespApiRespBase>({
        path: `/api/v5/mlbb/battle-spells/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbBattleSpellsDelete
     * @summary Delete Battle Spell
     * @request DELETE:/api/v5/mlbb/battle-spells/{id}
     * @secure
     */
    v5MlbbBattleSpellsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelMLBBBattleSpellRespApiRespBase>({
        path: `/api/v5/mlbb/battle-spells/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbEmblemsList
     * @summary Get Emblems
     * @request GET:/api/v5/mlbb/emblems
     * @secure
     */
    v5MlbbEmblemsList: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id?: number;
        /**
         * Emblem En Name
         * @minLength 1
         * @maxLength 100
         */
        EmblemName?: string;
        /**
         * Emblem type
         * @format int32
         */
        EmblemType?: number;
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
      this.request<any, GetMLBBEmblemsRespApiRespBase>({
        path: `/api/v5/mlbb/emblems`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbEmblemsCreate
     * @summary Add Emblem
     * @request POST:/api/v5/mlbb/emblems
     * @secure
     */
    v5MlbbEmblemsCreate: (data: AddMLBBEmblemReq, params: RequestParams = {}) =>
      this.request<any, AddMLBBEmblemRespApiRespBase>({
        path: `/api/v5/mlbb/emblems`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbEmblemsDetail
     * @summary Get Emblem detail
     * @request GET:/api/v5/mlbb/emblems/{id}
     * @secure
     */
    v5MlbbEmblemsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetMLBBEmblemDetailRespApiRespBase>({
        path: `/api/v5/mlbb/emblems/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbEmblemsPartialUpdate
     * @summary Modify Emblem
     * @request PATCH:/api/v5/mlbb/emblems/{id}
     * @secure
     */
    v5MlbbEmblemsPartialUpdate: (id: number, data: ModMLBBEmblemReq, params: RequestParams = {}) =>
      this.request<any, ModMLBBEmblemRespApiRespBase>({
        path: `/api/v5/mlbb/emblems/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Mlbb
     * @name V5MlbbEmblemsDelete
     * @summary Delete Emblem
     * @request DELETE:/api/v5/mlbb/emblems/{id}
     * @secure
     */
    v5MlbbEmblemsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelMLBBEmblemRespApiRespBase>({
        path: `/api/v5/mlbb/emblems/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V5ModesList
     * @summary Get modes by condition
     * @request GET:/api/v5/modes
     * @secure
     */
    v5ModesList: (
      query?: {
        /**
         * Modes Id
         * @format int32
         * @min 1
         * @max 32767
         */
        Id?: number;
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
        path: `/api/v5/modes`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V5ModesCreate
     * @summary Add new game mode
     * @request POST:/api/v5/modes
     * @secure
     */
    v5ModesCreate: (data: AddModeReq, params: RequestParams = {}) =>
      this.request<any, AddModeRespApiRespBase>({
        path: `/api/v5/modes`,
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
     * @name V5ModesDetail
     * @summary Get game mode
     * @request GET:/api/v5/modes/{id}
     * @secure
     */
    v5ModesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetModeRespApiRespBase>({
        path: `/api/v5/modes/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V5ModesPartialUpdate
     * @summary Modify game mode
     * @request PATCH:/api/v5/modes/{id}
     * @secure
     */
    v5ModesPartialUpdate: (id: number, data: ModModeReq, params: RequestParams = {}) =>
      this.request<any, ModModeRespApiRespBase>({
        path: `/api/v5/modes/${id}`,
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
     * @name V5ModesDelete
     * @summary Delete game mode
     * @request DELETE:/api/v5/modes/{id}
     * @secure
     */
    v5ModesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelModeRespApiRespBase>({
        path: `/api/v5/modes/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V5ModesTranslationsDetail
     * @summary Get game mode translations
     * @request GET:/api/v5/modes/{id}/translations
     * @secure
     */
    v5ModesTranslationsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetModeTranslationsRespApiRespBase>({
        path: `/api/v5/modes/${id}/translations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Modes
     * @name V5ModesTranslationsPartialUpdate
     * @summary Modify game mode translations
     * @request PATCH:/api/v5/modes/{id}/translations
     * @secure
     */
    v5ModesTranslationsPartialUpdate: (id: number, data: ModModeTranslationsReq, params: RequestParams = {}) =>
      this.request<any, ModModeTranslationsRespApiRespBase>({
        path: `/api/v5/modes/${id}/translations`,
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
     * @name V5ModesOptionsList
     * @summary Get modes options
     * @request GET:/api/v5/modes/options
     * @secure
     */
    v5ModesOptionsList: (
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
        path: `/api/v5/modes/options`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name V5MessagingNotificationTemplatesList
     * @summary Get Notification Templates
     * @request GET:/api/v5/messaging-notification-templates
     * @secure
     */
    v5MessagingNotificationTemplatesList: (
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
        path: `/api/v5/messaging-notification-templates`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name V5MessagingNotificationTemplatesCreate
     * @summary Add Notification Template
     * @request POST:/api/v5/messaging-notification-templates
     * @secure
     */
    v5MessagingNotificationTemplatesCreate: (data: AddNotificationTemplateReq, params: RequestParams = {}) =>
      this.request<any, AddNotificationTemplateRespApiRespBase>({
        path: `/api/v5/messaging-notification-templates`,
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
     * @name V5MessagingNotificationTemplatesDetail
     * @summary Get Notification Template
     * @request GET:/api/v5/messaging-notification-templates/{id}
     * @secure
     */
    v5MessagingNotificationTemplatesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetNotificationTemplateRespApiRespBase>({
        path: `/api/v5/messaging-notification-templates/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags NotificationTemplates
     * @name V5MessagingNotificationTemplatesPartialUpdate
     * @summary Modify Notification Template
     * @request PATCH:/api/v5/messaging-notification-templates/{id}
     * @secure
     */
    v5MessagingNotificationTemplatesPartialUpdate: (
      id: number,
      data: ModNotificationTemplateReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModNotificationTemplateRespApiRespBase>({
        path: `/api/v5/messaging-notification-templates/${id}`,
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
     * @name V5MessagingNotificationTemplatesDelete
     * @summary Delete Notification Template
     * @request DELETE:/api/v5/messaging-notification-templates/{id}
     * @secure
     */
    v5MessagingNotificationTemplatesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelNotificationTemplateRespApiRespBase>({
        path: `/api/v5/messaging-notification-templates/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneSignalApps
     * @name V5MessagingOnesignalAppsList
     * @summary Get One Signal Apps
     * @request GET:/api/v5/messaging-onesignal-apps
     * @secure
     */
    v5MessagingOnesignalAppsList: (
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
        path: `/api/v5/messaging-onesignal-apps`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneSignalApps
     * @name V5MessagingOnesignalAppsCreate
     * @summary Add One Signal App
     * @request POST:/api/v5/messaging-onesignal-apps
     * @secure
     */
    v5MessagingOnesignalAppsCreate: (data: AddOneSignalAppReq, params: RequestParams = {}) =>
      this.request<any, AddOneSignalAppRespApiRespBase>({
        path: `/api/v5/messaging-onesignal-apps`,
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
     * @name V5MessagingOnesignalAppsDetail
     * @summary Get One Signal App
     * @request GET:/api/v5/messaging-onesignal-apps/{id}
     * @secure
     */
    v5MessagingOnesignalAppsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetOneSignalAppRespApiRespBase>({
        path: `/api/v5/messaging-onesignal-apps/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags OneSignalApps
     * @name V5MessagingOnesignalAppsPartialUpdate
     * @summary Modify One Signal App
     * @request PATCH:/api/v5/messaging-onesignal-apps/{id}
     * @secure
     */
    v5MessagingOnesignalAppsPartialUpdate: (id: number, data: ModOneSignalAppReq, params: RequestParams = {}) =>
      this.request<any, ModOneSignalAppRespApiRespBase>({
        path: `/api/v5/messaging-onesignal-apps/${id}`,
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
     * @name V5MessagingOnesignalAppsDelete
     * @summary Delete One Signal App
     * @request DELETE:/api/v5/messaging-onesignal-apps/{id}
     * @secure
     */
    v5MessagingOnesignalAppsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelOneSignalAppRespApiRespBase>({
        path: `/api/v5/messaging-onesignal-apps/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsStatesList
     * @summary Get state options
     * @request GET:/api/v5/options/states
     * @secure
     */
    v5OptionsStatesList: (params: RequestParams = {}) =>
      this.request<any, GetStateOptionsRespApiRespBase>({
        path: `/api/v5/options/states`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsContactTypesList
     * @summary Get contact types
     * @request GET:/api/v5/options/contact-types
     * @secure
     */
    v5OptionsContactTypesList: (params: RequestParams = {}) =>
      this.request<any, GetContactTypesRespApiRespBase>({
        path: `/api/v5/options/contact-types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsFrontendsList
     * @summary Get frontend options
     * @request GET:/api/v5/options/frontends
     * @secure
     */
    v5OptionsFrontendsList: (
      query?: {
        /** Include all options */
        IncludeAll?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFrontendOptionsRespApiRespBase>({
        path: `/api/v5/options/frontends`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsFrontendsByUserList
     * @summary Get frontend options by user
     * @request GET:/api/v5/options/frontends-by-user
     * @secure
     */
    v5OptionsFrontendsByUserList: (
      query?: {
        /** Include all options */
        IncludeAll?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetFrontendOptionsRespApiRespBase>({
        path: `/api/v5/options/frontends-by-user`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsLocalesList
     * @summary Get locale options
     * @request GET:/api/v5/options/locales
     * @secure
     */
    v5OptionsLocalesList: (params: RequestParams = {}) =>
      this.request<any, GetLocaleOptionsRespApiRespBase>({
        path: `/api/v5/options/locales`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsFrontendLocalesList
     * @summary Get frontend locale options
     * @request GET:/api/v5/options/frontend-locales
     * @secure
     */
    v5OptionsFrontendLocalesList: (params: RequestParams = {}) =>
      this.request<any, GetFrontendLocaleOptionsRespApiRespBase>({
        path: `/api/v5/options/frontend-locales`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsSiteSectionsList
     * @summary Get site section options
     * @request GET:/api/v5/options/site-sections
     * @secure
     */
    v5OptionsSiteSectionsList: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        frontendId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetSiteSectionsOptionsRespApiRespBase>({
        path: `/api/v5/options/site-sections`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsCountriesList
     * @summary Get country options
     * @request GET:/api/v5/options/countries
     * @secure
     */
    v5OptionsCountriesList: (params: RequestParams = {}) =>
      this.request<any, GetCountryOptionsRespApiRespBase>({
        path: `/api/v5/options/countries`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsGendersList
     * @summary Get gender options
     * @request GET:/api/v5/options/genders
     * @secure
     */
    v5OptionsGendersList: (params: RequestParams = {}) =>
      this.request<any, GetGenderOptionsRespApiRespBase>({
        path: `/api/v5/options/genders`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsNotificationTypesList
     * @summary Get Notification Type Options
     * @request GET:/api/v5/options/notification-types
     * @secure
     */
    v5OptionsNotificationTypesList: (params: RequestParams = {}) =>
      this.request<any, GetNotificationTypeOptionsRespApiRespBase>({
        path: `/api/v5/options/notification-types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsLanguagesList
     * @summary Get language options
     * @request GET:/api/v5/options/languages
     * @secure
     */
    v5OptionsLanguagesList: (params: RequestParams = {}) =>
      this.request<any, GetLanguagesRespApiRespBase>({
        path: `/api/v5/options/languages`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsGamesList
     * @summary Get games options
     * @request GET:/api/v5/options/games
     * @secure
     */
    v5OptionsGamesList: (
      query?: {
        /** @default false */
        includeLegacy?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGameOptionsRespApiRespBase>({
        path: `/api/v5/options/games`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsFrontendGamesList
     * @summary Get games options by frontend
     * @request GET:/api/v5/options/frontend-games
     * @secure
     */
    v5OptionsFrontendGamesList: (
      query: {
        /**
         * @format int32
         * @min 0
         * @max 32767
         */
        frontendId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, Int16ItemListApiRespBase>({
        path: `/api/v5/options/frontend-games`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsBroadcastTalentRolesList
     * @summary Get broadcast talent roles options
     * @request GET:/api/v5/options/broadcast-talent-roles
     * @secure
     */
    v5OptionsBroadcastTalentRolesList: (params: RequestParams = {}) =>
      this.request<any, GetBroadcastTalentRoleOptionsRespApiRespBase>({
        path: `/api/v5/options/broadcast-talent-roles`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsServersList
     * @summary Get servers(locations) options
     * @request GET:/api/v5/options/servers
     * @secure
     */
    v5OptionsServersList: (
      query?: {
        /** @format int32 */
        gameId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetServerOptionsRespListApiRespBase>({
        path: `/api/v5/options/servers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsTournamentPointsAwardedList
     * @summary Get tournament points awarded options
     * @request GET:/api/v5/options/tournament/points-awarded
     * @secure
     */
    v5OptionsTournamentPointsAwardedList: (params: RequestParams = {}) =>
      this.request<any, GetPointsAwardedOptionsRespListApiRespBase>({
        path: `/api/v5/options/tournament/points-awarded`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsEarningPrizePoolStatusList
     * @summary Get earning prize pool status
     * @request GET:/api/v5/options/earning-prize-pool-status
     * @secure
     */
    v5OptionsEarningPrizePoolStatusList: (params: RequestParams = {}) =>
      this.request<any, GetPrizePoolStatusOptionsRespApiRespBase>({
        path: `/api/v5/options/earning-prize-pool-status`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsCurrenciesList
     * @summary Get currency options
     * @request GET:/api/v5/options/currencies
     * @secure
     */
    v5OptionsCurrenciesList: (params: RequestParams = {}) =>
      this.request<any, GetCurrencyOptionsRespApiRespBase>({
        path: `/api/v5/options/currencies`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsTournamentStatesList
     * @summary Get tournament state options
     * @request GET:/api/v5/options/tournament-states
     * @secure
     */
    v5OptionsTournamentStatesList: (params: RequestParams = {}) =>
      this.request<any, GetParentTournamentStateOptionsRespApiRespBase>({
        path: `/api/v5/options/tournament-states`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsTournamentOpponentsList
     * @summary Get tournament opponents options
     * @request GET:/api/v5/options/tournament-opponents
     * @secure
     */
    v5OptionsTournamentOpponentsList: (
      query?: {
        /**
         * Child tournament id
         * @format int32
         */
        childTournamentId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, Int32ItemListApiRespBase>({
        path: `/api/v5/options/tournament-opponents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsGameResultsList
     * @summary Get game result options
     * @request GET:/api/v5/options/game-results
     * @secure
     */
    v5OptionsGameResultsList: (params: RequestParams = {}) =>
      this.request<any, Int16ItemListApiRespBase>({
        path: `/api/v5/options/game-results`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsGameSidesList
     * @summary Get game side options
     * @request GET:/api/v5/options/game-sides
     * @secure
     */
    v5OptionsGameSidesList: (
      query: {
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, Int16ItemListApiRespBase>({
        path: `/api/v5/options/game-sides`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsSeoMetadataList
     * @summary Get seo metadata options
     * @request GET:/api/v5/options/seo-metadata
     * @secure
     */
    v5OptionsSeoMetadataList: (params: RequestParams = {}) =>
      this.request<any, SeoMetaDataOptionListApiRespBase>({
        path: `/api/v5/options/seo-metadata`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsServicePrefixesList
     * @summary Get service prefixes
     * @request GET:/api/v5/options/service-prefixes
     * @secure
     */
    v5OptionsServicePrefixesList: (params: RequestParams = {}) =>
      this.request<any, StringItemListApiRespBase>({
        path: `/api/v5/options/service-prefixes`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsHttpMethodsList
     * @summary Get service prefixes
     * @request GET:/api/v5/options/http-methods
     * @secure
     */
    v5OptionsHttpMethodsList: (params: RequestParams = {}) =>
      this.request<any, StringItemListApiRespBase>({
        path: `/api/v5/options/http-methods`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsApiActionsDownloadCsvList
     * @summary Get api actions
     * @request GET:/api/v5/options/api-actions/download-csv
     * @secure
     */
    v5OptionsApiActionsDownloadCsvList: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/v5/options/api-actions/download-csv`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsGridStateOptionsList
     * @summary Get grid state options
     * @request GET:/api/v5/options/grid-state-options
     * @secure
     */
    v5OptionsGridStateOptionsList: (params: RequestParams = {}) =>
      this.request<any, ByteItemListApiRespBase>({
        path: `/api/v5/options/grid-state-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name V5OptionsTeamSortOptionsList
     * @summary Get team sort options
     * @request GET:/api/v5/options/team-sort-options
     * @secure
     */
    v5OptionsTeamSortOptionsList: (params: RequestParams = {}) =>
      this.request<any, ByteItemListApiRespBase>({
        path: `/api/v5/options/team-sort-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pages
     * @name V5PagesList
     * @summary Get pages byt conditions
     * @request GET:/api/v5/pages
     * @secure
     */
    v5PagesList: (
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
        path: `/api/v5/pages`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pages
     * @name V5PagesCreate
     * @summary Add page
     * @request POST:/api/v5/pages
     * @secure
     */
    v5PagesCreate: (data: AddPageReq, params: RequestParams = {}) =>
      this.request<any, AddPageRespApiRespBase>({
        path: `/api/v5/pages`,
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
     * @name V5PagesDelete
     * @summary Delete page
     * @request DELETE:/api/v5/pages
     * @secure
     */
    v5PagesDelete: (data: DelPageReq, params: RequestParams = {}) =>
      this.request<any, DelPageRespApiRespBase>({
        path: `/api/v5/pages`,
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
     * @name V5PagesDetail
     * @summary Get page
     * @request GET:/api/v5/pages/{id}
     * @secure
     */
    v5PagesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetPageRespApiRespBase>({
        path: `/api/v5/pages/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pages
     * @name V5PagesPartialUpdate
     * @summary Modify page
     * @request PATCH:/api/v5/pages/{id}
     * @secure
     */
    v5PagesPartialUpdate: (id: number, data: ModPageReq, params: RequestParams = {}) =>
      this.request<any, ModPageRespApiRespBase>({
        path: `/api/v5/pages/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pages
     * @name V5PagesFuzzyList
     * @summary Get fuzzy pages
     * @request GET:/api/v5/pages/fuzzy
     * @secure
     */
    v5PagesFuzzyList: (
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
      this.request<any, Int32ItemListApiRespBase>({
        path: `/api/v5/pages/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V5PlayersList
     * @summary Get players
     * @request GET:/api/v5/players
     * @secure
     */
    v5PlayersList: (
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
         * Grid state
         * 1: With GRID linked
         * 2: Without GRID linked
         */
        GridState?: EnumGridStateOption;
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
        path: `/api/v5/players`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V5PlayersCreate
     * @summary Add player
     * @request POST:/api/v5/players
     * @secure
     */
    v5PlayersCreate: (
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
        /**
         * Grid Player Id
         * @minLength 0
         * @maxLength 12
         */
        GridId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddPlayerRespApiRespBase>({
        path: `/api/v5/players`,
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
     * @name V5PlayersDetail
     * @summary Get player
     * @request GET:/api/v5/players/{id}
     * @secure
     */
    v5PlayersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetPlayerRespApiRespBase>({
        path: `/api/v5/players/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V5PlayersPartialUpdate
     * @summary Modify player
     * @request PATCH:/api/v5/players/{id}
     * @secure
     */
    v5PlayersPartialUpdate: (
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
        /**
         * Grid Player Id
         * @minLength 0
         * @maxLength 12
         */
        GridId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModPlayerRespApiRespBase>({
        path: `/api/v5/players/${id}`,
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
     * @name V5PlayersDelete
     * @summary Delete player
     * @request DELETE:/api/v5/players/{id}
     * @secure
     */
    v5PlayersDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelPlayerRespApiRespBase>({
        path: `/api/v5/players/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V5PlayersFuzzyList
     * @summary Get fuzzy players
     * @request GET:/api/v5/players/fuzzy
     * @secure
     */
    v5PlayersFuzzyList: (
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
        path: `/api/v5/players/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V5PlayersUsersDetail
     * @summary Get User
     * @request GET:/api/v5/players/users/{id}
     * @secure
     */
    v5PlayersUsersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetUserForPlayerRespApiRespBase>({
        path: `/api/v5/players/users/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V5PlayersMediaItemsDetail
     * @summary Get player Media items
     * @request GET:/api/v5/players/{playerid}/media-items
     * @secure
     */
    v5PlayersMediaItemsDetail: (
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
        path: `/api/v5/players/${playerid}/media-items`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V5PlayersMediaItemsCreate
     * @summary Add player new Media items
     * @request POST:/api/v5/players/{playerid}/media-items
     * @secure
     */
    v5PlayersMediaItemsCreate: (
      playerid: number,
      query: {
        /** Media item Ids */
        MediaItems: number[];
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddPlayerMediaItemRespApiRespBase>({
        path: `/api/v5/players/${playerid}/media-items`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V5PlayersMediaItemsDelete
     * @summary Delete player Media item
     * @request DELETE:/api/v5/players/{playerid}/media-items/{mediaitemid}
     * @secure
     */
    v5PlayersMediaItemsDelete: (playerid: number, mediaitemid: number, params: RequestParams = {}) =>
      this.request<any, DelPlayerMediaItemRespApiRespBase>({
        path: `/api/v5/players/${playerid}/media-items/${mediaitemid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name V5PlayersGridPlayersList
     * @summary Get grid players option
     * @request GET:/api/v5/players/grid-players
     * @secure
     */
    v5PlayersGridPlayersList: (
      query: {
        /**
         * @minLength 0
         * @maxLength 50
         */
        FuzzyPrefix: string;
        /**
         * default: 20
         * @format int32
         * @min 20
         * @max 50
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGridPlayersRespApiRespBase>({
        path: `/api/v5/players/grid-players`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name V5ReportsArticlesViewershipSummaryList
     * @summary Get articles viewership summary
     * @request GET:/api/v5/reports/articles/viewership-summary
     * @secure
     */
    v5ReportsArticlesViewershipSummaryList: (
      query: {
        /** @format int64 */
        From: number;
        /** @format int64 */
        To: number;
        /**
         * LocaleId
         * @format int32
         * @min 1
         * @max 32767
         */
        Locale?: number;
        /** Site section id */
        SiteSections?: number[];
        /**
         * Parent tournament name
         * @minLength 0
         * @maxLength 80
         */
        Tournaments?: string;
        /**
         * Proofreader (fuzzy search)
         * @minLength 0
         * @maxLength 20
         */
        Proofreader?: string;
        /**
         * Author (fuzzy search)
         * @minLength 0
         * @maxLength 20
         */
        Author?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetViewershipSummaryRespApiRespBase>({
        path: `/api/v5/reports/articles/viewership-summary`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name V5ReportsArticlesViewershipList
     * @summary Get articles viewership
     * @request GET:/api/v5/reports/articles/viewership
     * @secure
     */
    v5ReportsArticlesViewershipList: (
      query: {
        /** @format int64 */
        From: number;
        /** @format int64 */
        To: number;
        /**
         * LocaleId
         * @format int32
         * @min 1
         * @max 32767
         */
        Locale?: number;
        /** Site section id */
        SiteSections?: number[];
        /**
         * Parent tournament name
         * @minLength 0
         * @maxLength 80
         */
        Tournaments?: string;
        /**
         * Proofreader (fuzzy search)
         * @minLength 0
         * @maxLength 20
         */
        Proofreader?: string;
        /**
         * Author (fuzzy search)
         * @minLength 0
         * @maxLength 20
         */
        Author?: string;
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
      this.request<any, GetViewershipRespApiRespBase>({
        path: `/api/v5/reports/articles/viewership`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name V5ReportsMatchesList
     * @summary Get child tournament matches and vods report
     * @request GET:/api/v5/reports/matches
     * @secure
     */
    v5ReportsMatchesList: (
      query: {
        /**
         * @format int64
         * @min 1
         */
        From: number;
        /**
         * @format int64
         * @min 1
         */
        To: number;
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
      this.request<any, GetMatchesReportsRespApiRespBase>({
        path: `/api/v5/reports/matches`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name V5ReportsMatchesDownloadExcelList
     * @summary Download child tournament matches and VODs report excel
     * @request GET:/api/v5/reports/matches/download-excel
     * @secure
     */
    v5ReportsMatchesDownloadExcelList: (
      query: {
        /**
         * @format int64
         * @min 1
         */
        From: number;
        /**
         * @format int64
         * @min 1
         */
        To: number;
        /**
         * @format int32
         * @min -12
         * @max 14
         */
        TimeZone: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v5/reports/matches/download-excel`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name V5ReportsTournamentsViewershipList
     * @summary Get tournament viewership
     * @request GET:/api/v5/reports/tournaments/viewership
     * @secure
     */
    v5ReportsTournamentsViewershipList: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentTournamentId?: number;
        /**
         * @minLength 0
         * @maxLength 80
         */
        TournamentName?: string;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        FrontEndId?: number;
        IsHidden?: boolean;
        IsLan?: boolean;
        /**
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
        VenueId?: number;
        /**
         * @format int64
         * @min 1
         */
        CreatedAtFrom?: number;
        /**
         * @format int64
         * @min 1
         */
        CreatedAtTo?: number;
        /**
         * @format int64
         * @min 1
         */
        StartingAtFrom?: number;
        /**
         * @format int64
         * @min 1
         */
        StartingAtTo?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        CreatedBy?: number;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        MapId?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        SponsorId?: number;
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
      this.request<any, GetTournamentViewershipRespApiRespBase>({
        path: `/api/v5/reports/tournaments/viewership`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name V5ReportsEarningsStatisticsList
     * @summary Get earnings statistics
     * @request GET:/api/v5/reports/earnings-statistics
     * @secure
     */
    v5ReportsEarningsStatisticsList: (params: RequestParams = {}) =>
      this.request<any, GetEarningsStsRespListApiRespBase>({
        path: `/api/v5/reports/earnings-statistics`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name V5ReportsCrewPerformanceList
     * @summary Get crew performance
     * @request GET:/api/v5/reports/crew-performance
     * @secure
     */
    v5ReportsCrewPerformanceList: (
      query: {
        /**
         * @format int64
         * @min 1
         */
        From: number;
        /**
         * @format int64
         * @min 1
         */
        To: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        UserId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetCrewPerformanceRespApiRespBase>({
        path: `/api/v5/reports/crew-performance`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name V5ReportsCrewPerformanceMatchGamesList
     * @summary Get crew performance match games resulted
     * @request GET:/api/v5/reports/crew-performance/match-games
     * @secure
     */
    v5ReportsCrewPerformanceMatchGamesList: (
      query: {
        /**
         * @format int64
         * @min 1
         */
        From: number;
        /**
         * @format int64
         * @min 1
         */
        To: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ResultedBy?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        UpdatedBy?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        DraftedBy?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        MapBy?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        RoundSetBy?: number;
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
      this.request<any, GetGamesResultedRespApiRespBase>({
        path: `/api/v5/reports/crew-performance/match-games`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name V5ReportsRegistrationsList
     * @summary Get registration list
     * @request GET:/api/v5/reports/registrations
     * @secure
     */
    v5ReportsRegistrationsList: (
      query: {
        /**
         * @format int64
         * @min 1
         */
        From: number;
        /**
         * @format int64
         * @min 1
         */
        To: number;
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
      this.request<any, GetRegistrationListRespApiRespBase>({
        path: `/api/v5/reports/registrations`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Reports
     * @name V5ReportsRegistrationsDownloadExcelList
     * @summary Download registrations report excel
     * @request GET:/api/v5/reports/registrations/download-excel
     * @secure
     */
    v5ReportsRegistrationsDownloadExcelList: (
      query: {
        /**
         * @format int64
         * @min 1
         */
        From: number;
        /**
         * @format int64
         * @min 1
         */
        To: number;
        /**
         * @format int32
         * @min -12
         * @max 14
         */
        TimeZone: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/v5/reports/registrations/download-excel`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V5RolesRoleOptionsList
     * @summary Get role options
     * @request GET:/api/v5/roles/role-options
     * @secure
     */
    v5RolesRoleOptionsList: (params: RequestParams = {}) =>
      this.request<any, GetRoleOptionsByGroupRespApiRespBase>({
        path: `/api/v5/roles/role-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V5RolesUsersDetail
     * @summary Get users by role
     * @request GET:/api/v5/roles/users/{id}
     * @secure
     */
    v5RolesUsersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetUsersByRoleRespApiRespBase>({
        path: `/api/v5/roles/users/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V5RolesList
     * @summary Get roles
     * @request GET:/api/v5/roles
     * @secure
     */
    v5RolesList: (
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
        path: `/api/v5/roles`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V5RolesCreate
     * @summary Add role
     * @request POST:/api/v5/roles
     * @secure
     */
    v5RolesCreate: (data: AddRoleReq, params: RequestParams = {}) =>
      this.request<any, AddRoleRespApiRespBase>({
        path: `/api/v5/roles`,
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
     * @name V5RolesDetail
     * @summary Get role
     * @request GET:/api/v5/roles/{id}
     * @secure
     */
    v5RolesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetRoleRespApiRespBase>({
        path: `/api/v5/roles/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V5RolesPartialUpdate
     * @summary Modify Role
     * @request PATCH:/api/v5/roles/{id}
     * @secure
     */
    v5RolesPartialUpdate: (id: number, data: ModRoleReq, params: RequestParams = {}) =>
      this.request<any, ModRoleRespApiRespBase>({
        path: `/api/v5/roles/${id}`,
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
     * @name V5RolesDelete
     * @summary Delete role
     * @request DELETE:/api/v5/roles/{id}
     * @secure
     */
    v5RolesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelRoleRespApiRespBase>({
        path: `/api/v5/roles/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V5RolesAssignRolePartialUpdate
     * @summary Assign role
     * @request PATCH:/api/v5/roles/assign-role
     * @secure
     */
    v5RolesAssignRolePartialUpdate: (data: AssignRoleReq, params: RequestParams = {}) =>
      this.request<any, AssignRoleRespApiRespBase>({
        path: `/api/v5/roles/assign-role`,
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
     * @name V5RolesUnassignRoleDelete
     * @summary UnAssign role
     * @request DELETE:/api/v5/roles/unassign-role
     * @secure
     */
    v5RolesUnassignRoleDelete: (data: UnAssignRoleReq, params: RequestParams = {}) =>
      this.request<any, UnAssignRoleRespApiRespBase>({
        path: `/api/v5/roles/unassign-role`,
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
     * @name V5RolesBlankPermissionsList
     * @summary Get role blank permissions
     * @request GET:/api/v5/roles/blank-permissions
     * @secure
     */
    v5RolesBlankPermissionsList: (params: RequestParams = {}) =>
      this.request<any, GetRoleBlankPermissionsRespApiRespBase>({
        path: `/api/v5/roles/blank-permissions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Roles
     * @name V5RolesTemplatesDetail
     * @summary Get role templates by group
     * @request GET:/api/v5/roles/templates/{id}
     * @secure
     */
    v5RolesTemplatesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetRoleTemplatesByGroupRespApiRespBase>({
        path: `/api/v5/roles/templates/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Servers
     * @name V5ServersList
     * @summary Get servers by condition
     * @request GET:/api/v5/servers
     * @secure
     */
    v5ServersList: (
      query?: {
        /**
         * Servers Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id?: number;
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
        path: `/api/v5/servers`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Servers
     * @name V5ServersCreate
     * @summary Add new tournaments server
     * @request POST:/api/v5/servers
     * @secure
     */
    v5ServersCreate: (data: AddServerReq, params: RequestParams = {}) =>
      this.request<any, AddServerRespApiRespBase>({
        path: `/api/v5/servers`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Servers
     * @name V5ServersDetail
     * @summary Get tournaments server detail
     * @request GET:/api/v5/servers/{id}
     * @secure
     */
    v5ServersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetServerRespApiRespBase>({
        path: `/api/v5/servers/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Servers
     * @name V5ServersPartialUpdate
     * @summary Modify tournaments server
     * @request PATCH:/api/v5/servers/{id}
     * @secure
     */
    v5ServersPartialUpdate: (id: number, data: ModServerReq, params: RequestParams = {}) =>
      this.request<any, ModServerRespApiRespBase>({
        path: `/api/v5/servers/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Servers
     * @name V5ServersDelete
     * @summary Delete tournaments server
     * @request DELETE:/api/v5/servers/{id}
     * @secure
     */
    v5ServersDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelServerRespApiRespBase>({
        path: `/api/v5/servers/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSections
     * @name V5SitesectionsSiteSectionsList
     * @summary Get Site-Sections
     * @request GET:/api/v5/sitesections/site-sections
     * @secure
     */
    v5SitesectionsSiteSectionsList: (
      query?: {
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        Id?: number;
        /**
         * @minLength 1
         * @maxLength 40
         */
        Name?: string;
        /**
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        Hidden?: boolean;
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
        path: `/api/v5/sitesections/site-sections`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSections
     * @name V5SitesectionsSiteSectionsCreate
     * @summary Add Site-Sections
     * @request POST:/api/v5/sitesections/site-sections
     * @secure
     */
    v5SitesectionsSiteSectionsCreate: (data: AddSiteSectionsReq, params: RequestParams = {}) =>
      this.request<any, AddSiteSectionsRespApiRespBase>({
        path: `/api/v5/sitesections/site-sections`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSections
     * @name V5SitesectionsSiteSectionsDetail
     * @summary Get Site-Section
     * @request GET:/api/v5/sitesections/site-sections/{id}
     * @secure
     */
    v5SitesectionsSiteSectionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetSiteSectionRespApiRespBase>({
        path: `/api/v5/sitesections/site-sections/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSections
     * @name V5SitesectionsSiteSectionsPartialUpdate
     * @summary Modify Site-Sections
     * @request PATCH:/api/v5/sitesections/site-sections/{id}
     * @secure
     */
    v5SitesectionsSiteSectionsPartialUpdate: (id: number, data: ModSiteSectionsReq, params: RequestParams = {}) =>
      this.request<any, ModSiteSectionsRespApiRespBase>({
        path: `/api/v5/sitesections/site-sections/${id}`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSections
     * @name V5SitesectionsSiteSectionsDelete
     * @summary Delete Site-Sections
     * @request DELETE:/api/v5/sitesections/site-sections/{id}
     * @secure
     */
    v5SitesectionsSiteSectionsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelSiteSectionsRespApiRespBase>({
        path: `/api/v5/sitesections/site-sections/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name V5SponsorsList
     * @summary Get tournaments sponsors by condition
     * @request GET:/api/v5/sponsors
     * @secure
     */
    v5SponsorsList: (
      query?: {
        /**
         * Sponsors Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id?: number;
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
        path: `/api/v5/sponsors`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name V5SponsorsCreate
     * @summary Add new Tournaments Sponsor
     * @request POST:/api/v5/sponsors
     * @secure
     */
    v5SponsorsCreate: (
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
         * Sponsor small logo image file
         * @format binary
         */
        SmallImageFile?: File;
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
        path: `/api/v5/sponsors`,
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
     * @name V5SponsorsDetail
     * @summary Get Tournaments Sponsor
     * @request GET:/api/v5/sponsors/{id}
     * @secure
     */
    v5SponsorsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetSponsorRespApiRespBase>({
        path: `/api/v5/sponsors/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name V5SponsorsPartialUpdate
     * @summary Modify Tournaments Sponsor
     * @request PATCH:/api/v5/sponsors/{id}
     * @secure
     */
    v5SponsorsPartialUpdate: (
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
         * Sponsor small logo image file
         * @format binary
         */
        SmallImageFile?: File;
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
        path: `/api/v5/sponsors/${id}`,
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
     * @name V5SponsorsDelete
     * @summary Delete Tournaments Sponsor
     * @request DELETE:/api/v5/sponsors/{id}
     * @secure
     */
    v5SponsorsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelSponsorRespApiRespBase>({
        path: `/api/v5/sponsors/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name V5SponsorsFuzzyList
     * @summary Get fuzzy sponsors
     * @request GET:/api/v5/sponsors/fuzzy
     * @secure
     */
    v5SponsorsFuzzyList: (
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
        path: `/api/v5/sponsors/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsList
     * @summary Get teams
     * @request GET:/api/v5/teams
     * @secure
     */
    v5TeamsList: (
      query?: {
        /**
         * TeamName
         * @minLength 1
         * @maxLength 50
         */
        TeamName?: string;
        /**
         * TeamTag
         * @minLength 1
         * @maxLength 20
         */
        TeamTag?: string;
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
         * Grid state
         * 1: With GRID linked
         * 2: Without GRID linked
         */
        GridState?: EnumGridStateOption;
        /**
         * Sort by
         * 1: Rankings, from high to low (1st - 9999th)
         * 2: Rankings, from low to high (9999th - 1st)
         */
        SortBy?: EnumTeamSortOption;
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
        path: `/api/v5/teams`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsCreate
     * @summary Add team
     * @request POST:/api/v5/teams
     * @secure
     */
    v5TeamsCreate: (
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
        /**
         * Grid Team Id
         * @minLength 0
         * @maxLength 12
         */
        GridId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddTeamRespApiRespBase>({
        path: `/api/v5/teams`,
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
     * @name V5TeamsDetail
     * @summary Get team detail
     * @request GET:/api/v5/teams/{id}
     * @secure
     */
    v5TeamsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetTeamRespApiRespBase>({
        path: `/api/v5/teams/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsPartialUpdate
     * @summary Modify team
     * @request PATCH:/api/v5/teams/{id}
     * @secure
     */
    v5TeamsPartialUpdate: (
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
        /**
         * Grid Team Id
         * @minLength 0
         * @maxLength 12
         */
        GridId?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModTeamRespApiRespBase>({
        path: `/api/v5/teams/${id}`,
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
     * @name V5TeamsDelete
     * @summary Delete team
     * @request DELETE:/api/v5/teams/{id}
     * @secure
     */
    v5TeamsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelTeamRespApiRespBase>({
        path: `/api/v5/teams/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsTeamPlayersDetail
     * @summary Get team players
     * @request GET:/api/v5/teams/{teamid}/team-players
     * @secure
     */
    v5TeamsTeamPlayersDetail: (
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
        path: `/api/v5/teams/${teamid}/team-players`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsTeamPlayersCreate
     * @summary Add team player
     * @request POST:/api/v5/teams/{teamid}/team-players
     * @secure
     */
    v5TeamsTeamPlayersCreate: (teamid: number, data: AddTeamPlayerReq, params: RequestParams = {}) =>
      this.request<any, AddTeamPlayerRespApiRespBase>({
        path: `/api/v5/teams/${teamid}/team-players`,
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
     * @name V5TeamsTeamPlayersDetail2
     * @summary Get team player
     * @request GET:/api/v5/teams/{teamid}/team-players/{teamplayerid}
     * @originalName v5TeamsTeamPlayersDetail
     * @duplicate
     * @secure
     */
    v5TeamsTeamPlayersDetail2: (teamid: number, teamplayerid: number, params: RequestParams = {}) =>
      this.request<any, GetTeamPlayerRespApiRespBase>({
        path: `/api/v5/teams/${teamid}/team-players/${teamplayerid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsTeamPlayersPartialUpdate
     * @summary Modify team player
     * @request PATCH:/api/v5/teams/{teamid}/team-players/{teamplayerid}
     * @secure
     */
    v5TeamsTeamPlayersPartialUpdate: (
      teamid: number,
      teamplayerid: number,
      data: ModTeamPlayerReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModTeamPlayerRespApiRespBase>({
        path: `/api/v5/teams/${teamid}/team-players/${teamplayerid}`,
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
     * @name V5TeamsTeamPlayersDelete
     * @summary Delete team player
     * @request DELETE:/api/v5/teams/{teamid}/team-players/{teamplayerid}
     * @secure
     */
    v5TeamsTeamPlayersDelete: (teamid: number, teamplayerid: number, params: RequestParams = {}) =>
      this.request<any, DelTeamPlayerRespApiRespBase>({
        path: `/api/v5/teams/${teamid}/team-players/${teamplayerid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsFuzzyList
     * @summary Get fuzzy teams
     * @request GET:/api/v5/teams/fuzzy
     * @secure
     */
    v5TeamsFuzzyList: (
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
        path: `/api/v5/teams/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsTeamPlayerOptionsDetail
     * @summary Get team player options for tournament registrations
     * @request GET:/api/v5/teams/{teamId}/team-player-options
     * @secure
     */
    v5TeamsTeamPlayerOptionsDetail: (teamId: number, params: RequestParams = {}) =>
      this.request<any, GetTeamPlayerOptionsRespApiRespBase>({
        path: `/api/v5/teams/${teamId}/team-player-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsGridTeamsList
     * @summary Get grid teams option
     * @request GET:/api/v5/teams/grid-teams
     * @secure
     */
    v5TeamsGridTeamsList: (
      query: {
        /**
         * @minLength 0
         * @maxLength 50
         */
        FuzzyPrefix: string;
        /**
         * default: 20
         * @format int32
         * @min 20
         * @max 50
         */
        MaxCount?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGridTeamsRespApiRespBase>({
        path: `/api/v5/teams/grid-teams`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsRatingLogsDetail
     * @summary Get team rating adjustment logs
     * @request GET:/api/v5/teams/{teamId}/rating-logs
     * @secure
     */
    v5TeamsRatingLogsDetail: (
      teamId: number,
      query: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        TeamId: number;
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
      this.request<any, GetTeamRatingLogRespApiRespBase>({
        path: `/api/v5/teams/${teamId}/rating-logs`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name V5TeamsRatingsCreate
     * @summary Update team rating
     * @request POST:/api/v5/teams/{teamId}/ratings
     * @secure
     */
    v5TeamsRatingsCreate: (teamId: number, data: UpdateTeamRatingReq, params: RequestParams = {}) =>
      this.request<any, UpdateTeamRatingRespApiRespBase>({
        path: `/api/v5/teams/${teamId}/ratings`,
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
     * @name V5TeamsClearCachePartialUpdate
     * @summary Clear portal team detail cache
     * @request PATCH:/api/v5/teams/{teamId}/clear-cache
     * @secure
     */
    v5TeamsClearCachePartialUpdate: (teamId: number, params: RequestParams = {}) =>
      this.request<any, ClearTeamDetailCacheRespApiRespBase>({
        path: `/api/v5/teams/${teamId}/clear-cache`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Telegram
     * @name V5TelegramNotificationsList
     * @summary Get tg notifications by condition
     * @request GET:/api/v5/telegram/notifications
     * @secure
     */
    v5TelegramNotificationsList: (
      query?: {
        Type?: EnumTgMsgType;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        SourceId?: number;
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
      this.request<any, GetTgNotificationsRespApiRespBase>({
        path: `/api/v5/telegram/notifications`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsFuzzyList
     * @summary Get fuzzy tournaments
     * @request GET:/api/v5/tournaments/fuzzy
     * @secure
     */
    v5TournamentsFuzzyList: (
      query: {
        /**
         * Fuzzy prefix
         * @minLength 0
         * @maxLength 80
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
      this.request<any, GetFuzzyTournamentsRespApiRespBase>({
        path: `/api/v5/tournaments/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRelatedDataList
     * @summary Get tournaments related data
     * @request GET:/api/v5/tournaments/related-data
     * @secure
     */
    v5TournamentsRelatedDataList: (
      query: {
        /** Article = 1,Sponsor = 2,Video = 3 */
        RelatedType: EnumTournamentRelatedType;
        /**
         * Parent tournament id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GeTournamentRelatedRespApiRespBase>({
        path: `/api/v5/tournaments/related-data`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsClearMatchesList
     * @summary Clear portal matches cache
     * @request GET:/api/v5/tournaments/clear-matches
     * @secure
     */
    v5TournamentsClearMatchesList: (params: RequestParams = {}) =>
      this.request<any, ClearMatchesRespApiRespBase>({
        path: `/api/v5/tournaments/clear-matches`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsBroadcastTalentsDetail
     * @summary Get parent tournament broadcast talents
     * @request GET:/api/v5/tournaments/parents/{parentId}/broadcast-talents
     * @secure
     */
    v5TournamentsParentsBroadcastTalentsDetail: (
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
        path: `/api/v5/tournaments/parents/${parentId}/broadcast-talents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsBroadcastTalentsCreate
     * @summary Add parent tournament broadcast talent
     * @request POST:/api/v5/tournaments/parents/{parentId}/broadcast-talents
     * @secure
     */
    v5TournamentsParentsBroadcastTalentsCreate: (
      parentId: number,
      data: AddParentBroadcastTalentsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/broadcast-talents`,
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
     * @name V5TournamentsParentsBroadcastTalentsDelete
     * @summary Delete parent tournament broadcast talents
     * @request DELETE:/api/v5/tournaments/parents/{parentId}/broadcast-talents/{broadcastTalentId}
     * @secure
     */
    v5TournamentsParentsBroadcastTalentsDelete: (
      parentId: number,
      broadcastTalentId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/broadcast-talents/${broadcastTalentId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsStagesChildrenCreate
     * @summary Add child tournament
     * @request POST:/api/v5/tournaments/parents/{parentid}/stages/{stageid}/children
     * @secure
     */
    v5TournamentsParentsStagesChildrenCreate: (
      parentid: number,
      stageid: number,
      data: AddChildReq,
      params: RequestParams = {},
    ) =>
      this.request<any, AddChildRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/stages/${stageid}/children`,
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
     * @name V5TournamentsParentsStagesMultipleTournamentsCreate
     * @summary Add multiple child tournaments
     * @request POST:/api/v5/tournaments/parents/{parentid}/stages/{stageid}/multiple-tournaments
     * @secure
     */
    v5TournamentsParentsStagesMultipleTournamentsCreate: (
      parentid: number,
      stageid: number,
      data: AddChildReq[],
      params: RequestParams = {},
    ) =>
      this.request<any, AddMultipleChildTournamentsRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/stages/${stageid}/multiple-tournaments`,
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
     * @name V5TournamentsParentsChildrenDetail
     * @summary Get child tournament for edit
     * @request GET:/api/v5/tournaments/parents/{parentid}/children/{childid}
     * @secure
     */
    v5TournamentsParentsChildrenDetail: (parentid: number, childid: number, params: RequestParams = {}) =>
      this.request<any, GetChildTournamentRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenPartialUpdate
     * @summary Modify child tournament
     * @request PATCH:/api/v5/tournaments/parents/{parentid}/children/{childid}
     * @secure
     */
    v5TournamentsParentsChildrenPartialUpdate: (
      parentid: number,
      childid: number,
      data: ModChildReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModChildRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}`,
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
     * @name V5TournamentsParentsChildrenDelete
     * @summary Delete child tournaments
     * @request DELETE:/api/v5/tournaments/parents/{parentid}/children/{childid}
     * @secure
     */
    v5TournamentsParentsChildrenDelete: (
      parentid: number,
      childid: number,
      data: DelChildReq,
      params: RequestParams = {},
    ) =>
      this.request<any, DelChildRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}`,
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
     * @name V5TournamentsParentsChildrenDetailDetail
     * @summary Get child tournament for detail
     * @request GET:/api/v5/tournaments/parents/{parentid}/children/{childid}/detail
     * @secure
     */
    v5TournamentsParentsChildrenDetailDetail: (parentid: number, childid: number, params: RequestParams = {}) =>
      this.request<any, GetChildDetailRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/detail`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenBracketDetail
     * @summary Get child tournament for bracket
     * @request GET:/api/v5/tournaments/parents/{parentid}/children/{childid}/bracket
     * @secure
     */
    v5TournamentsParentsChildrenBracketDetail: (parentid: number, childid: number, params: RequestParams = {}) =>
      this.request<any, GetChildBracketRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/bracket`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenStartTournamentPartialUpdate
     * @summary Start child tournament
     * @request PATCH:/api/v5/tournaments/parents/{parentid}/children/{childid}/start-tournament
     * @secure
     */
    v5TournamentsParentsChildrenStartTournamentPartialUpdate: (
      parentid: number,
      childid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, StartTournamentRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/start-tournament`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenRestartTournamentPartialUpdate
     * @summary Restart child tournament
     * @request PATCH:/api/v5/tournaments/parents/{parentid}/children/{childid}/restart-tournament
     * @secure
     */
    v5TournamentsParentsChildrenRestartTournamentPartialUpdate: (
      parentid: number,
      childid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, RestartTournamentRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/restart-tournament`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenUpdateRoundsPartialUpdate
     * @summary Update rounds
     * @request PATCH:/api/v5/tournaments/parents/{parentid}/children/{childid}/update-rounds
     * @secure
     */
    v5TournamentsParentsChildrenUpdateRoundsPartialUpdate: (
      parentid: number,
      childid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, UpdateRoundsRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/update-rounds`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenRecalculatePointsPartialUpdate
     * @summary group type child tournament recalculate points
     * @request PATCH:/api/v5/tournaments/parents/{parentid}/children/{childid}/recalculate-points
     * @secure
     */
    v5TournamentsParentsChildrenRecalculatePointsPartialUpdate: (
      parentid: number,
      childid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, RecalculatePointsRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/recalculate-points`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsDataProvidersGridTournamentsList
     * @summary Get grid tournaments
     * @request GET:/api/v5/tournaments/data-providers/grid/tournaments
     * @secure
     */
    v5TournamentsDataProvidersGridTournamentsList: (
      query: {
        /**
         * Game Id
         * @format int32
         * @min 1
         * @max 32767
         */
        GameId?: number;
        /**
         * Prefix can be name or id
         * @minLength 0
         * @maxLength 30
         */
        Prefix: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetGridTournamentsRespListApiRespBase>({
        path: `/api/v5/tournaments/data-providers/grid/tournaments`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsDataProvidersGridMatchesList
     * @summary Get grid matches
     * @request GET:/api/v5/tournaments/data-providers/grid/matches
     * @secure
     */
    v5TournamentsDataProvidersGridMatchesList: (
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
        path: `/api/v5/tournaments/data-providers/grid/matches`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenMediaItemsDetail
     * @summary Get child tournament Media items
     * @request GET:/api/v5/tournaments/parents/{parentid}/children/{childid}/media-items
     * @secure
     */
    v5TournamentsParentsChildrenMediaItemsDetail: (
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
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/media-items`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenMediaItemsCreate
     * @summary Add child tournament new Media items
     * @request POST:/api/v5/tournaments/parents/{parentid}/children/{childid}/media-items
     * @secure
     */
    v5TournamentsParentsChildrenMediaItemsCreate: (
      parentid: number,
      childid: number,
      data: AddChildMediaItemReq,
      params: RequestParams = {},
    ) =>
      this.request<any, AddChildMediaItemRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/media-items`,
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
     * @name V5TournamentsParentsChildrenMediaItemsDelete
     * @summary Delete child tournament Media item
     * @request DELETE:/api/v5/tournaments/parents/{parentid}/children/{childid}/media-items/{mediaitemid}
     * @secure
     */
    v5TournamentsParentsChildrenMediaItemsDelete: (
      parentid: number,
      childid: number,
      mediaitemid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, DelChildMediaItemRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/media-items/${mediaitemid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsDataProvidersMlbbBattileListList
     * @summary Get MLBB Battle List
     * @request GET:/api/v5/tournaments/data-providers/mlbb/battile-list
     * @secure
     */
    v5TournamentsDataProvidersMlbbBattileListList: (
      query?: {
        /**
         * @minLength 0
         * @maxLength 30
         */
        RoomName?: string;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        JudgeId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetMLBBBattileListRespListApiRespBase>({
        path: `/api/v5/tournaments/data-providers/mlbb/battile-list`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsDataProvidersMlbbBattleDetailList
     * @summary Get MLBB Battle Detail
     * @request GET:/api/v5/tournaments/data-providers/mlbb/battle-detail
     * @secure
     */
    v5TournamentsDataProvidersMlbbBattleDetailList: (
      query: {
        /**
         * @minLength 0
         * @maxLength 30
         */
        BattleId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetMLBBBattileDetailRespApiRespBase>({
        path: `/api/v5/tournaments/data-providers/mlbb/battle-detail`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsGameAccountsList
     * @summary Get GameAccounts
     * @request GET:/api/v5/tournaments/game-accounts
     * @secure
     */
    v5TournamentsGameAccountsList: (
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
        path: `/api/v5/tournaments/game-accounts`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsGameAccountsCreate
     * @summary Add GameAccount
     * @request POST:/api/v5/tournaments/game-accounts
     * @secure
     */
    v5TournamentsGameAccountsCreate: (
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
        path: `/api/v5/tournaments/game-accounts`,
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
     * @name V5TournamentsGameAccountsDetail
     * @summary Get GameAccount
     * @request GET:/api/v5/tournaments/game-accounts/{id}
     * @secure
     */
    v5TournamentsGameAccountsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetGameAccountRespApiRespBase>({
        path: `/api/v5/tournaments/game-accounts/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsGameAccountsPartialUpdate
     * @summary Modify GameAccount
     * @request PATCH:/api/v5/tournaments/game-accounts/{id}
     * @secure
     */
    v5TournamentsGameAccountsPartialUpdate: (id: number, data: ModGameAccountReq, params: RequestParams = {}) =>
      this.request<any, ModGameAccountRespApiRespBase>({
        path: `/api/v5/tournaments/game-accounts/${id}`,
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
     * @name V5TournamentsGameAccountsDelete
     * @summary Delete GameAccount
     * @request DELETE:/api/v5/tournaments/game-accounts/{id}
     * @secure
     */
    v5TournamentsGameAccountsDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelGameAccountRespApiRespBase>({
        path: `/api/v5/tournaments/game-accounts/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchGamesDetail
     * @summary Get child tournament match games
     * @request GET:/api/v5/tournaments/rounds/{roundid}/match-games
     * @secure
     */
    v5TournamentsRoundsMatchGamesDetail: (roundid: number, params: RequestParams = {}) =>
      this.request<any, GetMatchGamesRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/match-games`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchGamesDetail2
     * @summary Get child tournament match game detail
     * @request GET:/api/v5/tournaments/rounds/{roundid}/match-games/{matchgameid}
     * @originalName v5TournamentsRoundsMatchGamesDetail
     * @duplicate
     * @secure
     */
    v5TournamentsRoundsMatchGamesDetail2: (roundid: number, matchgameid: number, params: RequestParams = {}) =>
      this.request<any, GetMatchGameRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/match-games/${matchgameid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchGamesPartialUpdate
     * @summary Modify child tournament match game
     * @request PATCH:/api/v5/tournaments/rounds/{roundid}/match-games/{matchgameid}
     * @secure
     */
    v5TournamentsRoundsMatchGamesPartialUpdate: (
      roundid: number,
      matchgameid: number,
      data: ModMatchGameReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModMatchGameRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/match-games/${matchgameid}`,
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
     * @name V5TournamentsRoundsMatchGamesDraftDetail
     * @summary Get child tournament match game draft
     * @request GET:/api/v5/tournaments/rounds/{roundid}/match-games/{matchgameid}/draft
     * @secure
     */
    v5TournamentsRoundsMatchGamesDraftDetail: (roundid: number, matchgameid: number, params: RequestParams = {}) =>
      this.request<any, GetGameDraftRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/match-games/${matchgameid}/draft`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchGamesDraftPartialUpdate
     * @summary Modify child tournament match game draft
     * @request PATCH:/api/v5/tournaments/rounds/{roundid}/match-games/{matchgameid}/draft
     * @secure
     */
    v5TournamentsRoundsMatchGamesDraftPartialUpdate: (
      roundid: number,
      matchgameid: number,
      data: ModGameDraftReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModGameDraftRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/match-games/${matchgameid}/draft`,
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
     * @name V5TournamentsRoundsMatchGamesRoundSetsDetail
     * @summary Get child tournament match game round sets
     * @request GET:/api/v5/tournaments/rounds/{roundid}/match-games/{matchgameid}/round-sets
     * @secure
     */
    v5TournamentsRoundsMatchGamesRoundSetsDetail: (roundid: number, matchgameid: number, params: RequestParams = {}) =>
      this.request<any, GetRoundSetsRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/match-games/${matchgameid}/round-sets`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchGamesRoundSetsPartialUpdate
     * @summary Modify child tournament match game round sets
     * @request PATCH:/api/v5/tournaments/rounds/{roundid}/match-games/{matchgameid}/round-sets
     * @secure
     */
    v5TournamentsRoundsMatchGamesRoundSetsPartialUpdate: (
      roundid: number,
      matchgameid: number,
      data: ModRoundSetsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModRoundSetsRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/match-games/${matchgameid}/round-sets`,
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
     * @name V5TournamentsRoundsMatchGamesBrResultDetail
     * @summary Get child tournament match game br result detail
     * @request GET:/api/v5/tournaments/rounds/{roundid}/match-games/{matchgameid}/br-result
     * @secure
     */
    v5TournamentsRoundsMatchGamesBrResultDetail: (
      roundid: number,
      matchgameid: number,
      query: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        RegistrationId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetBrResultDetailRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/match-games/${matchgameid}/br-result`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchGamesBrResultPartialUpdate
     * @summary Modify child tournament match game br result
     * @request PATCH:/api/v5/tournaments/rounds/{roundid}/match-games/{matchgameid}/br-result
     * @secure
     */
    v5TournamentsRoundsMatchGamesBrResultPartialUpdate: (
      roundid: number,
      matchgameid: number,
      data: ModBrResultReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModBrResultRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/match-games/${matchgameid}/br-result`,
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
     * @name V5TournamentsMatchGamesPreviousLineupsList
     * @summary Get previous game lineups and standins
     * @request GET:/api/v5/tournaments/match-games/previous-lineups
     * @secure
     */
    v5TournamentsMatchGamesPreviousLineupsList: (
      query: {
        /**
         * Tournament game Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetPreviousLineupsRespApiRespBase>({
        path: `/api/v5/tournaments/match-games/previous-lineups`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsMatchGamesRegisteredPlayersList
     * @summary Get current registered players
     * @request GET:/api/v5/tournaments/match-games/registered-players
     * @secure
     */
    v5TournamentsMatchGamesRegisteredPlayersList: (
      query: {
        /**
         * Tournament game Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetRegisteredPlayersRespApiRespBase>({
        path: `/api/v5/tournaments/match-games/registered-players`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchesDetail
     * @summary Get child tournament matches or archived matches
     * @request GET:/api/v5/tournaments/rounds/{roundid}/matches
     * @secure
     */
    v5TournamentsRoundsMatchesDetail: (
      roundid: number,
      query?: {
        /**
         * Is archived
         * @default false
         */
        isArchived?: boolean;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        matchId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, GetMatchesRespListApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/matches`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchesPartialUpdate
     * @summary Modify child tournament matches
     * @request PATCH:/api/v5/tournaments/rounds/{roundid}/matches
     * @secure
     */
    v5TournamentsRoundsMatchesPartialUpdate: (roundid: number, data: ModMatchesReq, params: RequestParams = {}) =>
      this.request<any, ModMatchesRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/matches`,
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
     * @name V5TournamentsRoundsMatchesCreate
     * @summary Add new child tournament matches
     * @request POST:/api/v5/tournaments/rounds/{roundid}/matches
     * @secure
     */
    v5TournamentsRoundsMatchesCreate: (roundid: number, data: AddMatchReq, params: RequestParams = {}) =>
      this.request<any, AddMatchRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/matches`,
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
     * @name V5TournamentsRoundsMatchesDelete
     * @summary Delete child tournament match
     * @request DELETE:/api/v5/tournaments/rounds/{roundid}/matches/{matchid}
     * @secure
     */
    v5TournamentsRoundsMatchesDelete: (roundid: number, matchid: number, params: RequestParams = {}) =>
      this.request<any, DelMatchRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/matches/${matchid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchesPartialUpdate2
     * @summary Modify child tournament match archived
     * @request PATCH:/api/v5/tournaments/rounds/{roundid}/matches/{matchid}
     * @originalName v5TournamentsRoundsMatchesPartialUpdate
     * @duplicate
     * @secure
     */
    v5TournamentsRoundsMatchesPartialUpdate2: (roundid: number, matchid: number, params: RequestParams = {}) =>
      this.request<any, ModMatchArchivedRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/matches/${matchid}`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsChildrenReplaceOpponentsDetail
     * @summary Get child tournament replace opponents
     * @request GET:/api/v5/tournaments/children/{childid}/replace-opponents
     * @secure
     */
    v5TournamentsChildrenReplaceOpponentsDetail: (childid: number, params: RequestParams = {}) =>
      this.request<any, GetReplaceOpponentsRespListApiRespBase>({
        path: `/api/v5/tournaments/children/${childid}/replace-opponents`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsChildrenReplaceOpponentsPartialUpdate
     * @summary Add/Modify child tournament replace opponents
     * @request PATCH:/api/v5/tournaments/children/{childid}/replace-opponents
     * @secure
     */
    v5TournamentsChildrenReplaceOpponentsPartialUpdate: (
      childid: number,
      data: ModReplaceOpponentsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModReplaceOpponentsRespApiRespBase>({
        path: `/api/v5/tournaments/children/${childid}/replace-opponents`,
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
     * @name V5TournamentsChildrenReplaceOpponentsDelete
     * @summary Delete child tournament replace opponents
     * @request DELETE:/api/v5/tournaments/children/{childid}/replace-opponents/{id}
     * @secure
     */
    v5TournamentsChildrenReplaceOpponentsDelete: (childid: number, id: number, params: RequestParams = {}) =>
      this.request<any, DelReplaceOpponentsRespApiRespBase>({
        path: `/api/v5/tournaments/children/${childid}/replace-opponents/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchesPointsAdjustmentDetail
     * @summary Get child tournament match points adjustment
     * @request GET:/api/v5/tournaments/rounds/{roundid}/matches/{matchid}/points-adjustment
     * @secure
     */
    v5TournamentsRoundsMatchesPointsAdjustmentDetail: (roundid: number, matchid: number, params: RequestParams = {}) =>
      this.request<any, GetPointsAdjustmentRespListApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/matches/${matchid}/points-adjustment`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsRoundsMatchesPointsAdjustmentPartialUpdate
     * @summary Modify child tournament match points adjustment
     * @request PATCH:/api/v5/tournaments/rounds/{roundid}/matches/{matchid}/points-adjustment
     * @secure
     */
    v5TournamentsRoundsMatchesPointsAdjustmentPartialUpdate: (
      roundid: number,
      matchid: number,
      data: ModPointsAdjustmentReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModPointsAdjustmentRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/matches/${matchid}/points-adjustment`,
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
     * @name V5TournamentsRoundsMatchesStatusPartialUpdate
     * @summary Modify child tournament match status
     * @request PATCH:/api/v5/tournaments/rounds/{roundid}/matches/{matchid}/status
     * @secure
     */
    v5TournamentsRoundsMatchesStatusPartialUpdate: (
      roundid: number,
      matchid: number,
      data: ModMatchStatusReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModMatchStatusRespApiRespBase>({
        path: `/api/v5/tournaments/rounds/${roundid}/matches/${matchid}/status`,
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
     * @name V5TournamentsMatchesUpcomingClearCachePartialUpdate
     * @summary Clear portal upcoming matches cache
     * @request PATCH:/api/v5/tournaments/matches/upcoming/clear-cache
     * @secure
     */
    v5TournamentsMatchesUpcomingClearCachePartialUpdate: (params: RequestParams = {}) =>
      this.request<any, ClearUpcomingCacheRespApiRespBase>({
        path: `/api/v5/tournaments/matches/upcoming/clear-cache`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenOpponentsDetail
     * @summary Get child tournament opponents
     * @request GET:/api/v5/tournaments/parents/{parentid}/children/{childid}/opponents
     * @secure
     */
    v5TournamentsParentsChildrenOpponentsDetail: (parentid: number, childid: number, params: RequestParams = {}) =>
      this.request<any, GetOpponentsRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/opponents`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenOpponentsPartialUpdate
     * @summary Modify child tournament opponents
     * @request PATCH:/api/v5/tournaments/parents/{parentid}/children/{childid}/opponents
     * @secure
     */
    v5TournamentsParentsChildrenOpponentsPartialUpdate: (
      parentid: number,
      childid: number,
      data: ModOpponentsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModOpponentsRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/opponents`,
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
     * @name V5TournamentsParentsChildTypesDetail
     * @summary Get child tournament types by parent tournament
     * @request GET:/api/v5/tournaments/parents/{parentId}/child-types
     * @secure
     */
    v5TournamentsParentsChildTypesDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, Int16ItemListApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/child-types`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsGameMapsDetail
     * @summary Get game maps by parent tournament
     * @request GET:/api/v5/tournaments/parents/{parentId}/game-maps
     * @secure
     */
    v5TournamentsParentsGameMapsDetail: (
      parentId: number,
      query: {
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
      this.request<any, Int16ItemListApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/game-maps`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsMatchGamesTeamSelectionsList
     * @summary Get opponent team selection options
     * @request GET:/api/v5/tournaments/match-games/team-selections
     * @secure
     */
    v5TournamentsMatchGamesTeamSelectionsList: (
      query: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        RegistrationId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, Int32ItemListApiRespBase>({
        path: `/api/v5/tournaments/match-games/team-selections`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenBracketMatchesDetail
     * @summary Get child tournament bracket match options
     * @request GET:/api/v5/tournaments/parents/{parentid}/children/{childid}/bracket-matches
     * @secure
     */
    v5TournamentsParentsChildrenBracketMatchesDetail: (parentid: number, childid: number, params: RequestParams = {}) =>
      this.request<any, Int32ItemListApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/bracket-matches`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsList
     * @summary Get parent tournaments
     * @request GET:/api/v5/tournaments/parents
     * @secure
     */
    v5TournamentsParentsList: (
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
         * @min 0
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
         * @min 1
         * @max 2147483647
         */
        VenueId?: number;
        /**
         * Parent tournament id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentId?: number;
        /**
         * Created from
         * @format int64
         * @min 1
         */
        CreatedFrom?: number;
        /**
         * Created to
         * @format int64
         * @min 1
         */
        CreatedTo?: number;
        /**
         * Starting from
         * @format int64
         * @min 1
         */
        StartingFrom?: number;
        /**
         * Starting to
         * @format int64
         * @min 1
         */
        StartingTo?: number;
        /**
         * Created user id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        CreatedUserId?: number;
        /**
         * Map id
         * @format int32
         * @min 1
         * @max 32767
         */
        MapId?: number;
        /**
         * Sponsor id
         * @format int32
         * @min 1
         * @max 32767
         */
        SponsorId?: number;
        /**
         * State
         * All = 0
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
        path: `/api/v5/tournaments/parents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsCreate
     * @summary Add parent tournament
     * @request POST:/api/v5/tournaments/parents
     * @secure
     */
    v5TournamentsParentsCreate: (
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
         * @min 0
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
        SponsorIds: string;
        /** Map ids */
        MapIds: string;
        /**
         * Image file
         * @format binary
         */
        ImageFile?: File;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, AddParentRespApiRespBase>({
        path: `/api/v5/tournaments/parents`,
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
     * @name V5TournamentsParentsDetail
     * @summary Get parent tournament for edit
     * @request GET:/api/v5/tournaments/parents/{parentId}
     * @secure
     */
    v5TournamentsParentsDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, GetParentRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsPartialUpdate
     * @summary Modify parent tournament
     * @request PATCH:/api/v5/tournaments/parents/{parentId}
     * @secure
     */
    v5TournamentsParentsPartialUpdate: (
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
         * @min 0
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
        /** Sponsor ids */
        SponsorIds: string;
        /** Map ids */
        MapIds: string;
        /**
         * Image file
         * @format binary
         */
        ImageFile?: File;
        /** if IsRemoveImage = true will remove Image and set ImageFilePath = null */
        IsRemoveImage?: boolean;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ModParentRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}`,
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
     * @name V5TournamentsParentsDelete
     * @summary Delete parent tournaments
     * @request DELETE:/api/v5/tournaments/parents/{parentId}
     * @secure
     */
    v5TournamentsParentsDelete: (parentId: number, data: DeleteParentReq, params: RequestParams = {}) =>
      this.request<any, DeleteParentRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}`,
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
     * @name V5TournamentsParentsDetailDetail
     * @summary Get parent tournament for detail
     * @request GET:/api/v5/tournaments/parents/{parentId}/detail
     * @secure
     */
    v5TournamentsParentsDetailDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, GetParentDetailRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/detail`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsStatusPartialUpdate
     * @summary Modify parent tournament status
     * @request PATCH:/api/v5/tournaments/parents/{parentId}/status
     * @secure
     */
    v5TournamentsParentsStatusPartialUpdate: (parentId: number, data: ModParentStatusReq, params: RequestParams = {}) =>
      this.request<any, ModParentStatusRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/status`,
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
     * @name V5TournamentsParentsTgPushPartialUpdate
     * @summary Modify TG Auto push
     * @request PATCH:/api/v5/tournaments/parents/{parentId}/tg-push
     * @secure
     */
    v5TournamentsParentsTgPushPartialUpdate: (parentId: number, data: ModTgPushReq, params: RequestParams = {}) =>
      this.request<any, ObjectApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/tg-push`,
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
     * @name V5TournamentsParentsChildrenTeamRegistrationsDetail
     * @summary Get child team registrations
     * @request GET:/api/v5/tournaments/parents/{parentId}/children/{childId}/team-registrations
     * @secure
     */
    v5TournamentsParentsChildrenTeamRegistrationsDetail: (
      parentId: number,
      childId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ChildRegistrationTeamListItemGetChildRegistrationsRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/team-registrations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenTeamRegistrationsCreate
     * @summary Add child team registrations
     * @request POST:/api/v5/tournaments/parents/{parentId}/children/{childId}/team-registrations
     * @secure
     */
    v5TournamentsParentsChildrenTeamRegistrationsCreate: (
      parentId: number,
      childId: number,
      data: AddChildTeamRegistrationsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/team-registrations`,
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
     * @name V5TournamentsParentsChildrenTeamRegistrationsDetail2
     * @summary Get child team registration
     * @request GET:/api/v5/tournaments/parents/{parentId}/children/{childId}/team-registrations/{registerId}
     * @originalName v5TournamentsParentsChildrenTeamRegistrationsDetail
     * @duplicate
     * @secure
     */
    v5TournamentsParentsChildrenTeamRegistrationsDetail2: (
      parentId: number,
      childId: number,
      registerId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, GetChildTeamRegistrationRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/team-registrations/${registerId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenTeamRegistrationsPartialUpdate
     * @summary Modify child team registration
     * @request PATCH:/api/v5/tournaments/parents/{parentId}/children/{childId}/team-registrations/{registerId}
     * @secure
     */
    v5TournamentsParentsChildrenTeamRegistrationsPartialUpdate: (
      parentId: number,
      childId: number,
      registerId: number,
      data: ModChildTeamRegistrationReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/team-registrations/${registerId}`,
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
     * @name V5TournamentsParentsChildrenTeamRegistrationsDelete
     * @summary Delete child team registration
     * @request DELETE:/api/v5/tournaments/parents/{parentId}/children/{childId}/team-registrations/{registerId}
     * @secure
     */
    v5TournamentsParentsChildrenTeamRegistrationsDelete: (
      parentId: number,
      childId: number,
      registerId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/team-registrations/${registerId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenPlayerRegistrationsDetail
     * @summary Get child player registrations
     * @request GET:/api/v5/tournaments/parents/{parentId}/children/{childId}/player-registrations
     * @secure
     */
    v5TournamentsParentsChildrenPlayerRegistrationsDetail: (
      parentId: number,
      childId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ChildRegistrationPlayerListItemGetChildRegistrationsRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/player-registrations`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenPlayerRegistrationsCreate
     * @summary Add child player registrations
     * @request POST:/api/v5/tournaments/parents/{parentId}/children/{childId}/player-registrations
     * @secure
     */
    v5TournamentsParentsChildrenPlayerRegistrationsCreate: (
      parentId: number,
      childId: number,
      data: AddChildPlayerRegistrationsReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/player-registrations`,
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
     * @name V5TournamentsParentsChildrenPlayerRegistrationsPartialUpdate
     * @summary Modify child player registration
     * @request PATCH:/api/v5/tournaments/parents/{parentId}/children/{childId}/player-registrations/{registerId}
     * @secure
     */
    v5TournamentsParentsChildrenPlayerRegistrationsPartialUpdate: (
      parentId: number,
      childId: number,
      registerId: number,
      data: ModChildPlayerRegistrationReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/player-registrations/${registerId}`,
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
     * @name V5TournamentsParentsChildrenPlayerRegistrationsDelete
     * @summary Delete child player registration
     * @request DELETE:/api/v5/tournaments/parents/{parentId}/children/{childId}/player-registrations/{registerId}
     * @secure
     */
    v5TournamentsParentsChildrenPlayerRegistrationsDelete: (
      parentId: number,
      childId: number,
      registerId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/player-registrations/${registerId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenRegistrationsSyncUpPartialUpdate
     * @summary Sync up child registration info
     * @request PATCH:/api/v5/tournaments/parents/{parentId}/children/{childId}/registrations/{registerId}/sync-up
     * @secure
     */
    v5TournamentsParentsChildrenRegistrationsSyncUpPartialUpdate: (
      parentId: number,
      childId: number,
      registerId: number,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/registrations/${registerId}/sync-up`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenRoundsDetail
     * @summary Get child tournament rounds
     * @request GET:/api/v5/tournaments/parents/{parentid}/children/{childid}/rounds
     * @secure
     */
    v5TournamentsParentsChildrenRoundsDetail: (parentid: number, childid: number, params: RequestParams = {}) =>
      this.request<any, GetRoundsRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/rounds`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenRoundsCreate
     * @summary Add new child tournament round
     * @request POST:/api/v5/tournaments/parents/{parentid}/children/{childid}/rounds
     * @secure
     */
    v5TournamentsParentsChildrenRoundsCreate: (
      parentid: number,
      childid: number,
      data: AddRoundReq,
      params: RequestParams = {},
    ) =>
      this.request<any, AddRoundRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/rounds`,
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
     * @name V5TournamentsParentsChildrenRoundsDetail2
     * @summary Get child tournament round detail
     * @request GET:/api/v5/tournaments/parents/{parentid}/children/{childid}/rounds/{roundid}
     * @originalName v5TournamentsParentsChildrenRoundsDetail
     * @duplicate
     * @secure
     */
    v5TournamentsParentsChildrenRoundsDetail2: (
      parentid: number,
      childid: number,
      roundid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, GetRoundRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/rounds/${roundid}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenRoundsPartialUpdate
     * @summary Modify child tournament round
     * @request PATCH:/api/v5/tournaments/parents/{parentid}/children/{childid}/rounds/{roundid}
     * @secure
     */
    v5TournamentsParentsChildrenRoundsPartialUpdate: (
      parentid: number,
      childid: number,
      roundid: number,
      data: ModRoundReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ModRoundRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/rounds/${roundid}`,
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
     * @name V5TournamentsParentsChildrenRoundsDelete
     * @summary Delete child tournament round
     * @request DELETE:/api/v5/tournaments/parents/{parentid}/children/{childid}/rounds/{roundid}
     * @secure
     */
    v5TournamentsParentsChildrenRoundsDelete: (
      parentid: number,
      childid: number,
      roundid: number,
      params: RequestParams = {},
    ) =>
      this.request<any, DelRoundRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentid}/children/${childid}/rounds/${roundid}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsStagesDetail
     * @summary Get parent stages
     * @request GET:/api/v5/tournaments/parents/{parentId}/stages
     * @secure
     */
    v5TournamentsParentsStagesDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, GetParentStagesRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/stages`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsStagesPartialUpdate
     * @summary Modify parent stages
     * @request PATCH:/api/v5/tournaments/parents/{parentId}/stages
     * @secure
     */
    v5TournamentsParentsStagesPartialUpdate: (parentId: number, data: ModParentStagesReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/stages`,
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
     * @name V5TournamentsParentsChildrenStageDetail
     * @summary Get child stage info
     * @request GET:/api/v5/tournaments/parents/{parentId}/children/{childId}/stage
     * @secure
     */
    v5TournamentsParentsChildrenStageDetail: (parentId: number, childId: number, params: RequestParams = {}) =>
      this.request<any, GetChildStageInfoRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/stage`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsChildrenStagePartialUpdate
     * @summary Mod child stage info
     * @request PATCH:/api/v5/tournaments/parents/{parentId}/children/{childId}/stage
     * @secure
     */
    v5TournamentsParentsChildrenStagePartialUpdate: (
      parentId: number,
      childId: number,
      data: ModChildStageReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/children/${childId}/stage`,
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
     * @name V5TournamentsParentsStagesForEditDetail
     * @summary Get parent stages for edit
     * @request GET:/api/v5/tournaments/parents/{parentId}/stages-for-edit
     * @secure
     */
    v5TournamentsParentsStagesForEditDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, GetParentStagesForEditRespApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/stages-for-edit`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name V5TournamentsParentsStagesPartialUpdate2
     * @summary Modify parent stage
     * @request PATCH:/api/v5/tournaments/parents/{parentId}/stages/{stageId}
     * @originalName v5TournamentsParentsStagesPartialUpdate
     * @duplicate
     * @secure
     */
    v5TournamentsParentsStagesPartialUpdate2: (
      parentId: number,
      stageId: number,
      data: ModParentStageReq,
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/stages/${stageId}`,
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
     * @name V5TournamentsParentsStagesDelete
     * @summary Delete parent stage
     * @request DELETE:/api/v5/tournaments/parents/{parentId}/stages/{stageId}
     * @secure
     */
    v5TournamentsParentsStagesDelete: (parentId: number, stageId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/tournaments/parents/${parentId}/stages/${stageId}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersList
     * @summary Get users
     * @request GET:/api/v5/users
     * @secure
     */
    v5UsersList: (
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
        /** Is crew */
        IsCrew?: boolean;
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
        path: `/api/v5/users`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersDetail
     * @summary Get User
     * @request GET:/api/v5/users/{id}
     * @secure
     */
    v5UsersDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetUserRespApiRespBase>({
        path: `/api/v5/users/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersPartialUpdate
     * @summary Modify user
     * @request PATCH:/api/v5/users/{id}
     * @secure
     */
    v5UsersPartialUpdate: (
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
        path: `/api/v5/users/${id}`,
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
     * @name V5UsersDelete
     * @summary Delete user
     * @request DELETE:/api/v5/users/{id}
     * @secure
     */
    v5UsersDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelUserRespApiRespBase>({
        path: `/api/v5/users/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersPermissionsDetail
     * @summary Get User permissions
     * @request GET:/api/v5/users/{id}/permissions
     * @secure
     */
    v5UsersPermissionsDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetUserPermissionsRespApiRespBase>({
        path: `/api/v5/users/${id}/permissions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersFuzzyList
     * @summary Get fuzzy users
     * @request GET:/api/v5/users/fuzzy
     * @secure
     */
    v5UsersFuzzyList: (
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
        path: `/api/v5/users/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersCrewSettingPartialUpdate
     * @summary User crew setting
     * @request PATCH:/api/v5/users/{id}/crew-setting
     * @secure
     */
    v5UsersCrewSettingPartialUpdate: (id: number, data: CrewSettingReq, params: RequestParams = {}) =>
      this.request<any, CrewSettingRespApiRespBase>({
        path: `/api/v5/users/${id}/crew-setting`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersResetPwdPartialUpdate
     * @summary Reset bo auth password
     * @request PATCH:/api/v5/users/{id}/reset-pwd
     * @secure
     */
    v5UsersResetPwdPartialUpdate: (id: number, data: ResetPasswordReq, params: RequestParams = {}) =>
      this.request<any, ResetPasswordRespApiRespBase>({
        path: `/api/v5/users/${id}/reset-pwd`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersEnablePartialUpdate
     * @summary Enable/Disable user account
     * @request PATCH:/api/v5/users/{id}/enable
     * @secure
     */
    v5UsersEnablePartialUpdate: (id: number, data: EnableUserReq, params: RequestParams = {}) =>
      this.request<any, EnableUserRespApiRespBase>({
        path: `/api/v5/users/${id}/enable`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersCheckSetupPasswordUrlValidCreate
     * @summary Check if setup password url is valid?
     * @request POST:/api/v5/users/check-setup-password-url-valid
     * @secure
     */
    v5UsersCheckSetupPasswordUrlValidCreate: (data: CheckResetPasswordTokenReq, params: RequestParams = {}) =>
      this.request<any, CheckResetPasswordTokenRespApiRespBase>({
        path: `/api/v5/users/check-setup-password-url-valid`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersSetupPasswordPartialUpdate
     * @summary Setup password
     * @request PATCH:/api/v5/users/setup-password
     * @secure
     */
    v5UsersSetupPasswordPartialUpdate: (data: SetupPasswordReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/users/setup-password`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Users
     * @name V5UsersResendSetupPasswordEmailCreate
     * @summary User crew setting
     * @request POST:/api/v5/users/{id}/resend-setup-password-email
     * @secure
     */
    v5UsersResendSetupPasswordEmailCreate: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v5/users/${id}/resend-setup-password-email`,
        method: "POST",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags UserSession
     * @name V5UsersessionList
     * @summary Get user menu and userprofile
     * @request GET:/api/v5/usersession
     * @secure
     */
    v5UsersessionList: (params: RequestParams = {}) =>
      this.request<any, GetUserSessionRespApiRespBase>({
        path: `/api/v5/usersession`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Venues
     * @name V5VenuesList
     * @summary Get venues by condition
     * @request GET:/api/v5/venues
     * @secure
     */
    v5VenuesList: (
      query?: {
        /**
         * Venues Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Id?: number;
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
        path: `/api/v5/venues`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Venues
     * @name V5VenuesCreate
     * @summary Add new tournaments venue
     * @request POST:/api/v5/venues
     * @secure
     */
    v5VenuesCreate: (
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
        path: `/api/v5/venues`,
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
     * @name V5VenuesDetail
     * @summary Get tournaments venue detail
     * @request GET:/api/v5/venues/{id}
     * @secure
     */
    v5VenuesDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, GetVenueRespApiRespBase>({
        path: `/api/v5/venues/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Venues
     * @name V5VenuesPartialUpdate
     * @summary Modify tournaments venue
     * @request PATCH:/api/v5/venues/{id}
     * @secure
     */
    v5VenuesPartialUpdate: (
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
        path: `/api/v5/venues/${id}`,
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
     * @name V5VenuesDelete
     * @summary Delete tournaments venue
     * @request DELETE:/api/v5/venues/{id}
     * @secure
     */
    v5VenuesDelete: (id: number, params: RequestParams = {}) =>
      this.request<any, DelVenueRespApiRespBase>({
        path: `/api/v5/venues/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Venues
     * @name V5VenuesFuzzyList
     * @summary Get fuzzy venue
     * @request GET:/api/v5/venues/fuzzy
     * @secure
     */
    v5VenuesFuzzyList: (
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
      this.request<any, GetFuzzyVenuesRespApiRespBase>({
        path: `/api/v5/venues/fuzzy`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
}
