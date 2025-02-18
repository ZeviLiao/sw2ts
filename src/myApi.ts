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

export type ApiRespBaseOfLogoutResp = ApiRespBase & {
  data?: LogoutResp | null;
};

export type LogoutResp = object;

export interface ApiRespBase {
  ret: EnumRet;
  /** @minLength 1 */
  msg: string;
  /** @minLength 1 */
  traceId: string;
  /** @format int32 */
  statusCode?: number;
}

export enum EnumRet {
  Success = 0,
  Unauthorized = 10001,
  PermissionDenied = 10002,
  InvalidAuthorizationToken = 10003,
  AuthorizationTokenExpired = 10004,
  InvalidApiKey = 10005,
  MovedPermanently = 10006,
  AcceptedErrorsStart = 19000,
  VerificationCodeInProgress = 19001,
  AcceptedErrorEnd = 19999,
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
  InvalidHost = 20044,
  VerificationCodeFailed = 20045,
  UrlSafeNameRepeated = 20046,
  ShortUrlSafeNameRepeated = 20047,
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
  ResourceLocked = 40002,
  ConflictErrorsEnd = 40999,
  GoneErrorsStart = 41000,
  VerificationCodeExpired = 41001,
  GoneErrorsEnd = 41999,
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
  VerificationCodeFailedReturnToLogin = 60002,
  ForbiddenErrorsEnd = 67999,
  LockedErrorsStart = 68000,
  AccountLocked = 68001,
  LockedErrorsEnd = 68999,
  TooManyRequestsErrorsStart = 69000,
  ResendVerificationCodeCooldown = 69001,
  TooManyRequestsErrorsEnd = 69999,
}

export type ApiRespBaseOfGetUserNotificationsResp = ApiRespBase & {
  data?: GetUserNotificationsResp | null;
};

export interface GetUserNotificationsResp {
  /** User notifications */
  notifications: UserNotificationListItem[];
  /** Paging */
  paging: PagingRespBase;
}

export interface UserNotificationListItem {
  /**
   * Notification id
   * @format int32
   */
  id: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Body
   * @minLength 1
   */
  body: string;
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

export type ApiRespBaseOfDismissUserNotificationResp = ApiRespBase & {
  data?: DismissUserNotificationResp | null;
};

export interface DismissUserNotificationResp {
  /**
   * User Notification Id
   * @format int32
   */
  userNotificationId: number;
}

export type ApiRespBaseOfGetUserProfileResp = ApiRespBase & {
  data?: GetUserProfileResp | null;
};

export interface GetUserProfileResp {
  /**
   * User id
   * @format int32
   */
  id: number;
  /**
   * Email
   * @minLength 1
   */
  email: string;
  /**
   * Username
   * @minLength 1
   */
  userName: string;
  /**
   * Url safe username
   * @minLength 1
   */
  urlSafeUserName: string;
  /** Is registration completed */
  isRegistrationCompleted: boolean;
  /** Profile */
  profile: GetUserProfile;
  /** User permission */
  permission: UserPermission;
  pushNotifications?: PushNotifications;
}

export interface GetUserProfile {
  /** About me */
  aboutMe?: string | null;
  /** Avatar image path */
  avatarImagePath?: string | null;
  /** City */
  city?: string | null;
  /**
   * Date of birth
   * @format date
   */
  dateOfBirth?: string | null;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /** Gender */
  gender?: number | null;
  /** Signature */
  signature?: string | null;
  /** Newsletter opted in */
  newsletterOptedIn: boolean;
  /** Promotions opted in */
  promotionsOptedIn: boolean;
  /** Updates opted in */
  updatesOptedIn: boolean;
  /** Send Pm Notifications */
  sendPmNotifications: boolean;
  /** Send Comment Notifications  */
  sendCommentNotifications: boolean;
  /** Country */
  country: GetUserCountry;
  /** Primary game */
  primaryGame: GetUserPrimaryGame;
}

export interface GetUserCountry {
  /** Country id */
  id: number;
  /**
   * Country name
   * @minLength 1
   */
  name: string;
}

export interface GetUserPrimaryGame {
  /** Game id */
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
}

export interface UserPermission {
  /** Can edit article */
  canEditArticle: boolean;
  /** Can edit tournament */
  canEditTournament: boolean;
  /** Can edit match */
  canEditMatch: boolean;
}

export interface PushNotifications {
  appId?: string | null;
  identityVerification?: string | null;
  safariWebId?: string | null;
}

export type ApiRespBaseOfModUserProfileResp = ApiRespBase & {
  data?: ModUserProfileResp | null;
};

export interface ModUserProfileResp {
  /**
   * User id
   * @format int32
   */
  id: number;
  /**
   * Email
   * @minLength 1
   */
  email: string;
  /**
   * Username
   * @minLength 1
   */
  userName: string;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeUserName: string;
  /** User profile */
  profile: GetUserProfile;
}

export type ApiRespBaseOfModPasswordResp = ApiRespBase & {
  data?: ModPasswordResp | null;
};

export type ModPasswordResp = object;

export interface ModPasswordReq {
  /**
   * @minLength 1
   * @maxLength 72
   */
  password: string;
  /**
   * @minLength 1
   * @maxLength 72
   */
  passwordVerify: string;
}

export type ApiRespBaseOfDelUserAccountResp = ApiRespBase & {
  data?: DelUserAccountResp | null;
};

export type DelUserAccountResp = object;

export interface DelUserAccountReq {
  /**
   * Password
   * @minLength 1
   * @maxLength 72
   */
  password: string;
}

export type ApiRespBaseOfGetFollowResp = ApiRespBase & {
  data?: GetFollowResp | null;
};

export interface GetFollowResp {
  /** Player fan clubs */
  playerFanClubs: GetFollowPlayerFanClub[];
  /** Team fan club */
  teamFanClubs: GetFollowTeamFanClub[];
}

export interface GetFollowPlayerFanClub {
  /**
   * Fans id
   * @format int32
   */
  fansId: number;
  /**
   * Fan club id
   * @format int32
   */
  fanClubId: number;
  /** Active subscriber settings */
  activeSubscriberSettings: ActiveSubscriberSettings;
  /** Player */
  player: GetFollowPlayer;
}

export interface ActiveSubscriberSettings {
  /** Send mail */
  sendMail: boolean;
  /** Show match notifications */
  showMatchNotifications: boolean;
}

export interface GetFollowPlayer {
  /**
   * Player id
   * @format int32
   */
  id: number;
  /**
   * Player name
   * @minLength 1
   */
  name: string;
  /**
   * Player url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /**
   * Image file name
   * @minLength 1
   */
  imageFileName: string;
  /** Primary game */
  primaryGame: GetFollowGame;
}

export interface GetFollowGame {
  /** Game id */
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
}

export interface GetFollowTeamFanClub {
  /**
   * Fans id
   * @format int32
   */
  fansId: number;
  /**
   * Fan club id
   * @format int32
   */
  fanClubId: number;
  /** Active subscriber settings */
  activeSubscriberSettings: ActiveSubscriberSettings;
  /** Team */
  team: GetFollowTeam;
}

export interface GetFollowTeam {
  /**
   * Team id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
  /**
   * Team url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /**
   * Image file name
   * @minLength 1
   */
  imageFileName: string;
  /** Game */
  game: GetFollowGame;
}

export type ApiRespBaseOfModFollowReq = ApiRespBase & {
  data?: ModFollowReq | null;
};

export interface ModFollowReq {
  /**
   * Fans Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  fansId: number;
  /** SendMail */
  sendMail: boolean;
  /** ShowMatchNotifications */
  showMatchNotifications: boolean;
}

export type ApiRespBaseOfDelFollowResp = ApiRespBase & {
  data?: DelFollowResp | null;
};

export type DelFollowResp = object;

export type ApiRespBaseOfListOfGetUserStreamOptionsResp = ApiRespBase & {
  data?: GetUserStreamOptionsResp[] | null;
};

export interface GetUserStreamOptionsResp {
  /** Streams  */
  streams: ItemOfInteger[];
}

export interface ItemOfInteger {
  /** @format int32 */
  id: number;
  /** @minLength 1 */
  name: string;
}

export type ApiRespBaseOfListOfGetUserStreamsResp = ApiRespBase & {
  data?: GetUserStreamsResp[] | null;
};

export interface GetUserStreamsResp {
  /** Streams */
  streams: GetUserStream[];
  /** Paging */
  paging: PagingRespBase;
}

export interface GetUserStream {
  /**
   * media streams id
   * @format int32
   */
  id: number;
  /** Is live */
  isLive: boolean;
  /** Platform */
  platform: number;
  /** screen cap url */
  screenCapUrl?: string | null;
  /**
   * Stream id
   * @minLength 1
   */
  streamId: string;
  /**
   * Viewer count
   * @format int32
   */
  viewerCount: number;
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
   * Stream url safe name
   * @minLength 1
   */
  streamUrlSafeName: string;
  /**
   * View count
   * @format int32
   */
  viewCount: number;
  /**
   * User id
   * @format int32
   */
  userId: number;
  /** Game id */
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
}

export type ApiRespBaseOfGetUserStreamDetailResp = ApiRespBase & {
  data?: GetUserStreamDetailResp | null;
};

export interface GetUserStreamDetailResp {
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
   * Type
   * @minLength 1
   */
  type: string;
  /** Platform */
  platform: number;
  /**
   * Stream id
   * @minLength 1
   */
  streamId: string;
  /** Description */
  description?: string | null;
  /** Game */
  game: GetStreamDetailGame;
  /** Language */
  language: GetStreamDetailLanguage;
  /** Tag */
  tags: GetStreamDetailTag[];
}

export interface GetStreamDetailGame {
  /** Game id */
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
}

export interface GetStreamDetailLanguage {
  /** Language id */
  id: number;
  /**
   * Language name
   * @minLength 1
   */
  name: string;
  /**
   * Language code
   * @minLength 1
   */
  code: string;
}

export interface GetStreamDetailTag {
  /**
   * Stream tag id
   * @format int32
   */
  id: number;
  /**
   * Name
   * @minLength 1
   */
  name: string;
}

export type ApiRespBaseOfModStreamResp = ApiRespBase & {
  data?: ModStreamResp | null;
};

export type ModStreamResp = object;

export interface ModStreamReq {
  /**
   * Media stream Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * Game Id
   * @min 1
   * @max 32767
   */
  gameId: number;
  /**
   * Language Id
   * @min 1
   * @max 32767
   */
  languageId: number;
  /**
   * Title
   * @minLength 1
   * @maxLength 60
   */
  title: string;
  /**
   * Description
   * @minLength 1
   * @maxLength 255
   */
  description?: string | null;
  /**
   * Platform Id
   * @min 1
   * @max 32767
   */
  platform: number;
  /**
   * StreamId
   * @minLength 1
   * @maxLength 25
   */
  streamId: string;
  /** Tags */
  tags?: ModStreamTag[];
}

export interface ModStreamTag {
  /**
   * media_media_item_tags id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  tagId?: number | null;
  /**
   * Tag name
   * @minLength 1
   * @maxLength 25
   */
  tagName?: string;
}

export type ApiRespBaseOfAddStreamResp = ApiRespBase & {
  data?: AddStreamResp | null;
};

export type AddStreamResp = object;

export interface AddStreamReq {
  /**
   * Title
   * @minLength 1
   * @maxLength 60
   */
  title: string;
  /**
   * Game Id
   * @min 1
   * @max 32767
   */
  gameId: number;
  /**
   * Language Id
   * @min 1
   * @max 32767
   */
  languageId: number;
  /**
   * Description
   * @minLength 1
   * @maxLength 255
   */
  description?: string | null;
  /**
   * Platform Id : TWITCHTV = 1, YOUTUBE_CHANNEL = 10
   * @min 1
   * @max 32767
   */
  platform: number;
  /**
   * StreamId
   * @minLength 1
   * @maxLength 25
   */
  streamId: string;
  /** Tags Names */
  tagNames?: string[];
}

export type ApiRespBaseOfDelStreamResp = ApiRespBase & {
  data?: DelStreamResp | null;
};

export type DelStreamResp = object;

export interface SetFollowReq {
  /**
   * Identity type
   * @min 1
   * @max 2
   */
  identityType: EnumIdentityType;
  /**
   * Identity type id (player id or team id)
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
}

export enum EnumIdentityType {
  Player = 1,
  Team = 2,
}

export interface CompleteRegistrationReq {
  /**
   * Username
   * @minLength 1
   * @pattern ^[a-zA-Z0-9\-._]{1,20}$
   */
  username: string;
  /**
   * Country id
   * @min 1
   * @max 32767
   */
  countryId: number;
}

export type ApiRespBaseOfGetArticlesV6Resp = ApiRespBase & {
  data?: GetArticlesV6Resp | null;
};

export interface GetArticlesV6Resp {
  /** Articles */
  articles: ArticleListItemV6[];
  /** Paging */
  paging: PagingRespBase;
}

export interface ArticleListItemV6 {
  /**
   * Article id
   * @format int32
   */
  id: number;
  /** Frontend Id */
  frontendId?: number | null;
  /** Article subtype id */
  type: EnumArticleType;
  /**
   * Type Name
   * @minLength 1
   */
  typeName: string;
  /**
   * Url Safe Type
   * @minLength 1
   */
  urlSafeType: string;
  /**
   * Article title
   * @minLength 1
   */
  title: string;
  /**
   * Url safe title
   * @minLength 1
   */
  urlSafeTitle: string;
  /** Section Ids */
  sectionIds: number[];
  /** Display Section Id */
  displaySectionId: number;
  /**
   * Display section url safe name
   * @minLength 1
   */
  displaySectionUrlSafeName: string;
  /**
   * Published At
   * @format int64
   */
  publishedAt: number;
  /**
   * Headline image path for web
   * @minLength 1
   */
  headlineImagePath: string;
  /**
   * Headline image path for web
   * @minLength 1
   */
  headlineImageText: string;
  /** Headline image path for mobile app */
  squareHeadlineImageUrl?: string | null;
  /**
   * Article teaser for short content
   * @minLength 1
   */
  teaser: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Comments
   * @format int32
   */
  comments: number;
  /** Author username */
  authorUserName?: string | null;
  /** Author first name */
  authorFirstName?: string | null;
  /** Author last name */
  authorLastName?: string | null;
  isMultipleAuthors?: boolean;
}

export enum EnumArticleType {
  News = 1,
  Features = 2,
  Guides = 3,
}

export type ApiRespBaseOfGetArticlesResp = ApiRespBase & {
  data?: GetArticlesResp | null;
};

export interface GetArticlesResp {
  /** Articles */
  articles: ArticleListItem[];
  /** Paging */
  paging: PagingRespBase;
}

export interface ArticleListItem {
  /**
   * Article id
   * @format int32
   */
  id: number;
  /** Frontend Id */
  frontendId?: number | null;
  /** Article subtype id */
  type: EnumArticleType;
  /**
   * Type Name
   * @minLength 1
   */
  typeName: string;
  /**
   * Url Safe Type
   * @minLength 1
   */
  urlSafeType: string;
  /**
   * Article title
   * @minLength 1
   */
  title: string;
  /**
   * Url safe title
   * @minLength 1
   */
  urlSafeTitle: string;
  /** Section Ids */
  sectionIds: number[];
  /** Display Section Id */
  displaySectionId: number;
  /**
   * Display section url safe name
   * @minLength 1
   */
  displaySectionUrlSafeName: string;
  /**
   * Published At
   * @format int64
   */
  publishedAt: number;
  /**
   * Headline image path for web
   * @minLength 1
   */
  headlineImagePath: string;
  /**
   * Headline image path for web
   * @minLength 1
   */
  headlineImageText: string;
  /** Headline image path for mobile app */
  squareHeadlineImageUrl?: string | null;
  /**
   * Article teaser for short content
   * @minLength 1
   */
  teaser: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Comments
   * @format int32
   */
  comments: number;
  /** Author username */
  authorUserName?: string | null;
  /** Author first name */
  authorFirstName?: string | null;
  /** Author last name */
  authorLastName?: string | null;
  /**
   * author count
   * @format int32
   */
  authors?: number;
}

export type ApiRespBaseOfGetArticleDetailV6Resp = ApiRespBase & {
  data?: GetArticleDetailV6Resp | null;
};

export interface GetArticleDetailV6Resp {
  /** Article */
  articleDetail: ArticleDetailV6;
  /** Can edit articles */
  canEditArticles: boolean;
  /** MetaTags */
  metaTags: Record<string, string>;
  /** Seo meta data */
  seoMetaData: Record<string, string>;
}

export interface ArticleDetailV6 {
  /**
   * Article id
   * @format int32
   */
  id: number;
  /** Front end id */
  frontendId?: number | null;
  /** Article Type */
  type: EnumArticleType;
  /**
   * Article type name
   * @minLength 1
   */
  typeName: string;
  /**
   * Type name for url
   * @minLength 1
   */
  typeNameForUrl: string;
  /** Article SubType Id */
  subType: number;
  /**
   * Article SubType Name
   * @minLength 1
   */
  subTypeName: string;
  /**
   * Article title
   * @minLength 1
   */
  title: string;
  /**
   * Url safe title
   * @minLength 1
   */
  urlSafeTitle: string;
  /**
   * Headline image path for web
   * @minLength 1
   */
  headlineImagePath: string;
  /**
   * Headline image path for web
   * @minLength 1
   */
  headlineImageText: string;
  /** Headline image path for mobile app */
  squareHeadlineImageUrl?: string | null;
  /**
   * Article teaser for short content
   * @minLength 1
   */
  teaser: string;
  /**
   * Short content
   * @minLength 1
   */
  shortContent: string;
  /**
   * Short content max length
   * @format int32
   */
  shortContentMaxLen: number;
  /**
   * Processed article content
   * @minLength 1
   */
  contentProcessed: string;
  /** Redirect to external article url */
  redirectUrl?: string | null;
  /**
   * Published at
   * @format int64
   */
  publishedAt: number;
  /**
   * Updated at
   * @format int64
   */
  updatedAt: number;
  /** Display Section Id */
  displaySectionId: number;
  /**
   * Display section url safe name
   * @minLength 1
   */
  displaySectionUrlSafeName: string;
  siteSectionIds?: string;
  /** Section Ids */
  sectionIds: number[];
  /** Authors */
  authors: UserDetail[];
  /** Related Teams */
  relatedArticles: RelatedArticle[];
  /** Related Teams */
  teams: Team[];
  /** Related Tournaments */
  tournaments: Tournament[];
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /** Seo meta data */
  seoMetaData?: string | null;
  /** Is published */
  isPublished: boolean;
  /**
   * Ratings
   * @format float
   */
  ratings?: number | null;
  /** Ratings recommendation */
  recommendation?: string | null;
}

export interface UserDetail {
  /**
   * User Id
   * @format int32
   */
  id?: number;
  /** User name */
  userName?: string | null;
  /**
   * User url safe name
   * ///
   */
  urlSafeName?: string;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /** About me */
  aboutMe?: string | null;
  /** Avatar image path */
  avatarImagePath?: string | null;
  /** Url */
  url?: string | null;
}

export interface RelatedArticle {
  /**
   * Article id
   * @format int32
   */
  id: number;
  /** Article subtype id */
  type: EnumArticleType;
  /**
   * Url Safe Type
   * @minLength 1
   */
  urlSafeType: string;
  /**
   * Article title
   * @minLength 1
   */
  title: string;
  /**
   * Url safe title
   * @minLength 1
   */
  urlSafeTitle: string;
  /**
   * Published At
   * @format int64
   */
  publishedAt: number;
  /**
   * Headline image path for web
   * @minLength 1
   */
  headlineImagePath: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /** @format int32 */
  sectionCount?: number;
  /** @minLength 1 */
  siteSectionUrlSafeName: string;
  siteSectionId: number;
}

export interface Team {
  /**
   * Team id
   * @format int32
   */
  id?: number;
  /** Team name */
  name?: string;
  /** Player Url Safe Name */
  urlSafeName?: string;
  /** Image file name */
  imageUrl?: string | null;
  /** Url */
  url?: string | null;
  /** Country */
  country?: Country | null;
  /** Game */
  game?: GameBasicInfo;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
}

export interface Country {
  /** Country Id */
  id: number;
  /**
   * Country Name
   * @minLength 1
   */
  name: string;
  /**
   * Country Code
   * @minLength 1
   */
  code: string;
  /**
   * Country Flag Image Url
   * @minLength 1
   */
  flagImageUrl: string;
}

export interface GameBasicInfo {
  /**
   * Game Id
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

export interface Tournament {
  /**
   * Team Id
   * @format int32
   */
  id?: number;
  /** Player Name */
  name?: string;
  /** Player Url Safe Name */
  urlSafeName?: string;
  /** Image file name */
  imageFileName?: string | null;
  /** Url */
  url?: string | null;
  /** Game */
  game?: GameBasicInfo;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
}

export type ApiRespBaseOfGetArticleDetailMetaTagsResp = ApiRespBase & {
  data?: GetArticleDetailMetaTagsResp | null;
};

export interface GetArticleDetailMetaTagsResp {
  /** Article detail */
  detail: SimpleArticleDetail;
  /** MetaTags */
  metaTags: Record<string, string>;
  /** Seo meta data */
  seoMetaData: Record<string, string>;
}

export interface SimpleArticleDetail {
  /**
   * Article id
   * @format int32
   */
  id: number;
  /** Article Type */
  type: EnumArticleType;
  /**
   * Article type name
   * @minLength 1
   */
  typeName: string;
  /**
   * Type name for url
   * @minLength 1
   */
  typeNameForUrl: string;
  /** Article SubType Id */
  subType: number;
  /**
   * Article SubType Name
   * @minLength 1
   */
  subTypeName: string;
  /**
   * Published at
   * @format int64
   */
  publishedAt: number;
}

export type ApiRespBaseOfGetArticleJsonLDResp = ApiRespBase & {
  data?: GetArticleJsonLDResp | null;
};

export interface GetArticleJsonLDResp {
  /**
   * Frontend url
   * @minLength 1
   */
  frontendUrl: string;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Teaser
   * @minLength 1
   */
  teaser: string;
  /**
   * Article type
   * @minLength 1
   */
  type: string;
  /**
   * Article url
   * @minLength 1
   */
  url: string;
  /**
   * Image
   * @minLength 1
   */
  imageUrl: string;
  /**
   * Author
   * @minLength 1
   */
  authorName: string;
  /**
   * Author
   * @minLength 1
   */
  authorsName: string;
  /**
   * Author url safe name
   * @minLength 1
   */
  authorUrlSafeName: string;
  /**
   * Author url
   * @minLength 1
   */
  authorUrl: string;
  /**
   * Frontend name
   * @minLength 1
   */
  frontendName: string;
  /**
   * Publish at
   * @minLength 1
   */
  publishedAt: string;
  /**
   * Updated at
   * @minLength 1
   */
  updatedAt: string;
  /** Seo meta data */
  seoMetaData: Record<string, string>;
  authors: ArticleJsonLDAuthor[];
  /**
   * Ratings
   * @format float
   */
  ratingValue?: number | null;
}

export interface ArticleJsonLDAuthor {
  /** Author name */
  authorName?: string;
  /** Author url safe name */
  authorUrlSafeName?: string;
  /** Author url */
  authorUrl?: string;
}

export type ApiRespBaseOfGetQuickPollResp = ApiRespBase & {
  data?: GetQuickPollResp | null;
};

export interface GetQuickPollResp {
  /**
   * Quick Poll Id
   * @format int32
   */
  id: number;
  /**
   * Question
   * @minLength 1
   */
  question: string;
  /** Options */
  options: QuickPollOption[];
  /**
   * User vote option id
   * @format int32
   */
  userVoteOptionId?: number | null;
}

export type QuickPollOption = ItemOfInteger & {
  /**
   * Votes
   * @format int32
   * @min 1
   * @max 2147483647
   */
  votes: number;
  /**
   * Vote percentage
   * @format int32
   * @min 1
   * @max 100
   */
  votePercentage?: number | null;
};

export type ApiRespBaseOfGetArticleRelatedDataV6Resp = ApiRespBase & {
  data?: GetArticleRelatedDataV6Resp | null;
};

export interface GetArticleRelatedDataV6Resp {
  /** Related Players */
  relatedArticles: RelatedArticle[];
  /** Related Teams */
  teams: Team[];
  /** Related Tournaments */
  tournaments: Tournament[];
}

export type ApiRespBaseOfGetTopArticlesResp = ApiRespBase & {
  data?: GetTopArticlesResp | null;
};

export interface GetTopArticlesResp {
  /** Articles */
  articles: TopArticleItem[];
}

export interface TopArticleItem {
  /**
   * Article id
   * @format int32
   */
  id: number;
  /** Article subtype id */
  type: EnumArticleType;
  /**
   * Url Safe Type
   * @minLength 1
   */
  urlSafeType: string;
  /**
   * Article title
   * @minLength 1
   */
  title: string;
  /**
   * Url safe title
   * @minLength 1
   */
  urlSafeTitle: string;
  /**
   * Published At
   * @format int64
   */
  publishedAt: number;
  /**
   * Headline image path for web
   * @minLength 1
   */
  headlineImagePath: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /** @format int32 */
  sectionCount?: number;
  /** @minLength 1 */
  siteSectionUrlSafeName: string;
  /** @minLength 1 */
  siteSectionName: string;
  siteSectionId: number;
  /** Top article order */
  order: number;
  authorUserName?: string | null;
  authorFirstName?: string | null;
  authorLastName?: string | null;
  authors?: number;
  isMultipleAuthors?: boolean;
  teaser?: string;
  /** @format int32 */
  comments?: number;
}

export type ApiRespBaseOfGetBroadcastTalentsResp = ApiRespBase & {
  data?: GetBroadcastTalentsResp | null;
};

export interface GetBroadcastTalentsResp {
  /** Broadcast talents */
  broadcastTalents: BroadcastTalentListItem[];
  /** Paging */
  paging: PagingRespBase;
}

export interface BroadcastTalentListItem {
  /**
   * Broadcast talent id
   * @format int32
   */
  id: number;
  /** Game id */
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
  /** Game */
  game: GameBasicInfo;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /**
   * Broadcast talent name
   * @minLength 1
   */
  name: string;
  /**
   * Broadcast talent url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /** Broadcast talent image url */
  imageUrl?: string | null;
  /** Role ids */
  roleIds?: string | null;
  /** Roles */
  roles?: string[] | null;
  /** Language id */
  languageId: number;
  /**
   * Language code
   * @minLength 1
   */
  languageCode: string;
  /** Country id */
  countryId: number;
  /**
   * Country name
   * @minLength 1
   */
  countryName: string;
  /** @minLength 1 */
  countryCode: string;
  /** Flag image url */
  flagImageUrl?: string | null;
  /** Country */
  country: Country;
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export enum EnumBroadcastTalentType {
  Host = 1,
  Commentator = 2,
  Analyst = 3,
  Observer = 4,
  Interviewer = 5,
  Other = 99,
}

export enum EnumBroadcastTalentStatus {
  Retired = 1,
  Active = 2,
}

export type ApiRespBaseOfGetBroadcastTalentDetailResp = ApiRespBase & {
  data?: GetBroadcastTalentDetailResp | null;
};

export interface GetBroadcastTalentDetailResp {
  /** Broadcast talent detail */
  broadcastTalent: BroadcastTalentDetail;
}

export interface BroadcastTalentDetail {
  /**
   * Broadcast talent
   * @format int32
   */
  id: number;
  /**
   * Name (Nickname)
   * @minLength 1
   */
  name: string;
  /** Image url */
  imageUrl?: string | null;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /** Game id */
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
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /** Role ids  */
  roleIds?: string | null;
  /** Roles */
  roles?: string[] | null;
  /** Is active */
  isActive: boolean;
  /** Status */
  status: EnumBroadcastTalentStatus;
  /**
   * Status name
   * @minLength 1
   */
  statusName: string;
  /** WebSite */
  webSite?: string | null;
  /** Facebook */
  facebook?: string | null;
  /** Twitter */
  twitter?: string | null;
  /** Youtube */
  youtube?: string | null;
  /** About */
  about?: string | null;
  /** Language id */
  languageId: number;
  /**
   * Language
   * @minLength 1
   */
  language: string;
  /**
   * Language code
   * @minLength 1
   */
  languageCode: string;
  /** Country id */
  countryId: number;
  /**
   * Country name
   * @minLength 1
   */
  countryName: string;
  /**
   * Country code
   * @minLength 1
   */
  countryCode: string;
  /** Flag image url */
  flagImageUrl?: string;
  /** Country */
  country?: Country | null;
  /** Has parent tournament */
  hasParentTournaments: boolean;
  /**
   * Personal stream id
   * @format int32
   */
  personalStreamId?: number | null;
  /** Has personal stream */
  hasPersonalSteam: boolean;
  /** Has vods (Videos) */
  hasVods: boolean;
}

export type ApiRespBaseOfGetParentsResp = ApiRespBase & {
  data?: GetParentsResp | null;
};

export interface GetParentsResp {
  /** Parent tournaments */
  parents: ParentListItem[];
  /** Paging */
  paging: PagingRespBase;
}

export interface ParentListItem {
  /**
   * Parent tournament id
   * @format int32
   */
  parentId: number;
  /** Frontend id */
  frontendId?: number | null;
  /**
   * Parent name
   * @minLength 1
   */
  name: string;
  /**
   * Parent url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /** Game id */
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
  /** Game icon url */
  gameIconUrl?: string | null;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /** Image path */
  imagePath?: string | null;
  /** Prize pool currency */
  prizePoolCurrency?: EnumCurrency | null;
  /** Prize pool currency name */
  prizePoolCurrencyName?: string | null;
  /** Prize pool currency code */
  prizePoolCurrencyCode?: string | null;
  /**
   * Prize pool (locale currency)
   * @format decimal
   */
  prizePool?: number | null;
  /**
   * Prize pool (USD)
   * @format decimal
   */
  prizePoolUsd?: number | null;
  /** Status */
  status: EnumTournamentStatus;
  /**
   * Status name
   * @minLength 1
   */
  statusName: string;
  /** Is featured */
  isFeatured: boolean;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Starting at
   * @format int64
   */
  startingAt?: number | null;
  /** Sponsors */
  sponsors?: ItemOfShort[] | null;
  /**
   * Participant count
   * @format int32
   */
  participantCount: number;
  /** Participants */
  participants?: Participant[] | null;
}

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
  RSD = 30,
  KZT = 31,
  BYN = 32,
  VND = 33,
  HRK = 34,
  UAH = 35,
  NOK = 36,
  PEN = 37,
  MNT = 38,
  EGP = 39,
}

export enum EnumTournamentStatus {
  Upcoming = 0,
  Live = 1,
  Canceled = 2,
  Completed = 3,
}

export interface ItemOfShort {
  id: number;
  /** @minLength 1 */
  name: string;
}

export interface Participant {
  /**
   * Player or team id
   * @format int32
   */
  id?: number;
  /** Player or team name */
  name?: string | null;
  /** Image url */
  imageUrl?: string | null;
}

export type ApiRespBaseOfGetStreamByBroadcastTalentResp = ApiRespBase & {
  data?: GetStreamByBroadcastTalentResp | null;
};

export interface GetStreamByBroadcastTalentResp {
  /** Personal stream */
  personalStream: StreamListItem;
}

export interface StreamListItem {
  /**
   * Stream media id
   * @format int32
   */
  id: number;
  /**
   * Stream id
   * @minLength 1
   */
  streamId: string;
  /** Platform */
  platform: EnumPlatform;
  /**
   * Platform name
   * @minLength 1
   */
  platformName: string;
  /** Is live */
  isLive: boolean;
  /** Screen cap url */
  screenCapUrl?: string | null;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeTitle: string;
  /**
   * Viewer count
   * @format int32
   */
  viewerCount: number;
  /**
   * View count
   * @format int32
   */
  viewCount: number;
  /** Game id */
  gameId: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /** Stream url */
  streamUrl?: string | null;
}

export enum EnumPlatform {
  PLATFORM_TWITCHTV = 1,
  PLATFORM_YOUTUBE_CHANNEL = 10,
  PLATFORM_YOUTUBE_STREAM = 11,
  PLATFORM_FACEBOOK = 12,
  PLATFORM_OTHER = 99,
}

export type ApiRespBaseOfGetVodsByBroadcastTalentResp = ApiRespBase & {
  data?: GetVodsByBroadcastTalentResp | null;
};

export interface GetVodsByBroadcastTalentResp {
  /** Vods */
  vods: VodItem[];
  /** Paging */
  paging: PagingRespBase;
}

export interface VodItem {
  /**
   * Vod id (Media item id)
   * @format int32
   */
  id: number;
  /**
   * Vod title
   * @minLength 1
   */
  title: string;
  /**
   * Vod title url safe name
   * @minLength 1
   */
  urlSafeTitle: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /** Vod screen cap url */
  screenCapUrl?: string | null;
  /** Host */
  host: EnumVideoHost;
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
  /** Channel name */
  channelName?: string | null;
  /**
   * Match id
   * @format int32
   */
  matchId?: number | null;
  /** Match number */
  matchNumber?: number;
  /** Round number */
  roundNumber?: number;
  /** Round name */
  roundName?: string;
  /**
   * Match Game Id
   * @format int32
   */
  matchGameId?: number | null;
  /**
   * Match game number
   * @format int32
   */
  gameNumber?: number | null;
  /** Parent game id */
  parentGameId?: number | null;
  /** Game id */
  gameId?: number;
  /**
   * Created at
   * @format int64
   */
  createdAt: number;
  /** Display Section Id */
  displaySectionId: number;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /** Section Ids */
  sectionIds: number[];
  /** @format int32 */
  startTime: number;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /** Stage name */
  stageName?: string;
  /** Child name */
  childName?: string;
  /** Child type */
  childType?: EnumChildTournament;
  /** Vod match */
  match?: VodMatch | null;
}

export enum EnumVideoHost {
  Youtube = 0,
  Dailymotion = 2,
  Vimeo = 3,
  TwitchTv = 4,
  Facebook = 7,
}

export enum EnumChildTournament {
  Group = 1,
  Knockout = 2,
  BattleRoyale = 3,
}

export interface VodMatch {
  /**
   * Parent id
   * @format int32
   */
  parentId?: number;
  /** Parent name */
  parentName?: string;
  /** Parent url safe name */
  parentUrlSafeName?: string;
  /** Parent game id */
  parentGameId?: number;
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
  /** Child type */
  childType: EnumChildTournament;
  /**
   * Child type name
   * @minLength 1
   */
  childTypeName: string;
  /**
   * Match id
   * @format int32
   */
  matchId: number;
  /**
   * Match url safe name
   * @minLength 1
   */
  matchUrlSafeName: string;
  /** Match number */
  matchNumber: number;
  /** Round number */
  roundNumber: number;
  /**
   * Round name
   * @minLength 1
   */
  roundName: string;
  /**
   * Match Game Id
   * @format int32
   */
  matchGameId: number;
  /**
   * Match game number
   * @format int32
   */
  gameNumber: number;
  /** Match result */
  result?: EnumMatchResult | null;
  /** Opponents */
  opponents?: VodMatchOpponent[] | null;
}

export enum EnumMatchResult {
  Win = 0,
  Draw = 1,
  Forfeit = 2,
  Disq = 3,
  Qualif = 4,
}

export interface VodMatchOpponent {
  /**
   * Parent id
   * @format int32
   */
  parentId?: number;
  /** Parent name */
  parentName?: string;
  /** Parent url safe name */
  parentUrlSafeName?: string;
  /** Parent game id */
  parentGameId?: number;
  /** Stage name */
  stageName?: string;
  /** Child name */
  childName?: string;
  /**
   * Match id
   * @format int32
   */
  matchId?: number;
  /** Match url safe name */
  matchUrlSafeName?: string;
  /** Match result */
  result?: EnumMatchResult | null;
  /**
   * Team or Player id
   * @format int32
   */
  sourceId?: number;
  /**
   * Registered id
   * @format int32
   */
  registeredId?: number;
  /**
   * Opponent placement
   * 1: Team 1 or Player 1
   * 2: Team 2 or Player 2
   */
  opponentPlacement?: number;
  /** Opponent type */
  opponentType?: EnumOpponentType;
  /** Opponent type name */
  opponentTypeName?: string;
  /** Opponent name */
  opponentName?: string;
  /** Opponent full name */
  opponentFullName?: string;
  /** Opponent url safe name */
  opponentUrlSafeName?: string;
  /** Opponent tag */
  opponentTage?: string;
  /** Image url */
  imageUrl?: string | null;
  /** Score */
  score?: number | null;
}

export enum EnumOpponentType {
  Team = 1,
  Player = 2,
}

export type ApiRespBaseOfGetBroadcastTalentSiteSectionOptionsResp = ApiRespBase & {
  data?: GetBroadcastTalentSiteSectionOptionsResp | null;
};

export interface GetBroadcastTalentSiteSectionOptionsResp {
  /** Game regions */
  siteSections: ItemWithUrlSafeNameOfShort[];
}

export type ItemWithUrlSafeNameOfShort = ItemOfShort & {
  /** @minLength 1 */
  urlSafeName: string;
};

export type ApiRespBaseOfGetEventPageResp = ApiRespBase & {
  data?: GetEventPageResp | null;
};

export interface GetEventPageResp {
  /**
   * Active page id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  activePageId: number;
  /** Event */
  event: Event;
  /** Pages */
  page: EventPage;
  /** Page boxes */
  boxes: any[];
}

export interface Event {
  /**
   * Event id
   * @format int32
   */
  id: number;
  /**
   * Event name
   * @minLength 0
   * @maxLength 80
   */
  name: string;
  /**
   * Url safe name
   * @minLength 0
   * @maxLength 80
   */
  urlSafeName: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /** Is hidden */
  isHidden: boolean;
  /** Is lan */
  isLan: boolean;
  /**
   * Country
   * @minLength 1
   */
  country: string;
  /**
   * City
   * @minLength 1
   */
  city: string;
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
  /** Games */
  games: GameBasicInfo[];
  /** Organizers */
  organizers: Organizer[];
}

export interface Organizer {
  /**
   * Organizer id
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * Name
   * @minLength 0
   * @maxLength 30
   */
  name: string;
  /**
   * Logo image (Small logo image)
   * @minLength 0
   * @maxLength 255
   */
  logoImage: string;
  /**
   * Url
   * @minLength 0
   * @maxLength 60
   */
  url: string;
}

export interface EventPage {
  /**
   * Page id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * Page name
   * @minLength 0
   * @maxLength 60
   */
  name: string;
  /**
   * Page url safe name
   * @minLength 0
   * @maxLength 60
   */
  urlSafeName: string;
  /**
   * Page number
   * @min 1
   * @max 32767
   */
  number: number;
}

export type ApiRespBaseOfGetEventBoxParticipantsResp = ApiRespBase & {
  data?: GetEventBoxParticipantsResp | null;
};

export interface GetEventBoxParticipantsResp {
  /** Participants */
  participants: GetParticipantItem[];
}

export interface GetParticipantItem {
  /** Opponent type */
  opponentType: EnumOpponentType;
  /**
   * Opponent type name
   * @minLength 1
   */
  opponentTypeName: string;
  /**
   * Player or team id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * Player or team name
   * @minLength 0
   * @maxLength 50
   */
  name: string;
  /**
   * Player or team tag
   * @minLength 0
   * @maxLength 20
   */
  tag: string;
  /**
   * Player or team url safe name
   * @minLength 0
   * @maxLength 50
   */
  urlSafeName: string;
  /**
   * Logo image url
   * @minLength 0
   * @maxLength 255
   */
  imageUrl?: string | null;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Ranking for team
   * @format int32
   */
  ranking?: number | null;
  /** Game */
  game?: GameBasicInfo | null;
  /** Country */
  country?: Country;
}

export type ApiRespBaseOfGetEventBoxParentsResp = ApiRespBase & {
  data?: GetEventBoxParentsResp | null;
};

export interface GetEventBoxParentsResp {
  /** Parent tournaments */
  parents: ParentListItem[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetEventBoxCountriesResp = ApiRespBase & {
  data?: GetEventBoxCountriesResp | null;
};

export interface GetEventBoxCountriesResp {
  /** Countries */
  countries: ItemOfShort[];
}

export type ApiRespBaseOfGetLiveStreamResp = ApiRespBase & {
  data?: GetLiveStreamResp | null;
};

export interface GetLiveStreamResp {
  /** Stream */
  stream?: SiteSectionAllStream | null;
  /** @minLength 1 */
  teamBanner: string;
  /** @minLength 1 */
  liveStreamDefaultImage: string;
}

export interface SiteSectionAllStream {
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
   * Url safe title
   * @minLength 1
   */
  urlSafeTitle: string;
  /** Platform */
  platform: EnumPlatform;
  /**
   * Platform name
   * @minLength 1
   */
  platformName: string;
  /**
   * Stream id
   * @minLength 1
   */
  streamId: string;
  /** Is live */
  isLive: boolean;
  /**
   * Viewer count
   * @format int32
   */
  viewerCount: number;
  /** Screen cap url */
  screenCapUrl?: string | null;
  /** Screen cap cdn url */
  screenCapCdnUrl?: string | null;
  /** Stream url */
  streamUrl?: string | null;
  /**
   * Match id
   * @format int32
   */
  matchId: number;
  /**
   * Match url safe name
   * @minLength 1
   */
  matchUrlSafeName: string;
  /**
   * Match url
   * @minLength 1
   */
  matchUrl: string;
  /** Opponent count */
  opponentCount: number;
  /** Child type */
  childType: EnumChildTournament;
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
  /**
   * Parent url safe name
   * @minLength 1
   */
  parentUrlSafeName: string;
  /** Game id */
  parentGameId: number;
  /**
   * Game name
   * @minLength 1
   */
  parentGameName: string;
  /**
   * Game url safe name
   * @minLength 1
   */
  parentGameUrlSafeName: string;
  /**
   * Parent tournament url
   * @minLength 1
   */
  parentUrl: string;
  /** Match */
  match: MediaMatch;
  /** Match opponent */
  matchOpponents: MediaMatchOpponent[];
}

export interface MediaMatch {
  /**
   * Round id
   * @format int32
   */
  roundId: number;
  /**
   * Round name
   * @minLength 1
   */
  roundName: string;
  /**
   * Match id
   * @format int32
   */
  matchId: number;
  /** Match number */
  matchNumber: number;
  /**
   * Match name
   * @minLength 1
   */
  matchName: string;
}

export interface MediaMatchOpponent {
  /**
   * Match id
   * @format int32
   */
  matchId: number;
  /**
   * Registered id
   * @format int32
   */
  registeredId: number;
  /**
   * Source id (team or player id)
   * @format int32
   */
  sourceId: number;
  /** Opponent placement */
  placement: number;
  /** Opponent type */
  type: EnumOpponentType;
  /** Score */
  score?: number | null;
  /**
   * Tag
   * @minLength 1
   */
  tag: string;
  /** Image url */
  imageUrl?: string | null;
  /** Country id */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Country code */
  countryCode?: string | null;
  /** Flag image url */
  flagImageUrl?: string | null;
  /** Country */
  country?: Country | null;
  /**
   * Ranking
   * If null: not show ranking
   * @format int32
   */
  ranking?: number | null;
}

export type ApiRespBaseOfGetSiteSectionBannersResp = ApiRespBase & {
  data?: GetSiteSectionBannersResp | null;
};

export interface GetSiteSectionBannersResp {
  banners?: SiteSectionBanner[];
}

export interface SiteSectionBanner {
  siteSectionId: number;
  /** @minLength 1 */
  siteSectionUrlSafeName: string;
  altText?: string | null;
  enableHyperlink: boolean;
  /** 1 : "Open in new tab" 2: "Open in existing page" */
  openType?: EnumBannerOpenType | null;
  url?: string | null;
  /** @format int64 */
  updateAt: number;
  /** @minLength 1 */
  feShortName: string;
}

export enum EnumBannerOpenType {
  NewTab = 1,
  ExistingPage = 2,
}

export type ApiRespBaseOfVerifyUrlResp = ApiRespBase & {
  data?: VerifyUrlResp | null;
};

export interface VerifyUrlResp {
  redirectUrl?: string | null;
}

export type ApiRespBaseOfAddLogResp = ApiRespBase & {
  data?: AddLogResp | null;
};

export type AddLogResp = object;

export interface AddLogReq {
  /**
   * @minLength 0
   * @maxLength 128
   */
  traceId: string;
  /**
   * Ex: GG.Frontend.Portal/GB.Frontend.Portal
   * @minLength 0
   * @maxLength 128
   */
  prefix: string;
  /** Trace=0, Debug=1, Information=2, Warning=3, Error=4, Critical=5, None=6 */
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

export enum LogLevel {
  Trace = 0,
  Debug = 1,
  Information = 2,
  Warning = 3,
  Error = 4,
  Critical = 5,
  None = 6,
}

export type ApiRespBaseOfGetMatchDetailResp = ApiRespBase & {
  data?: GetMatchDetailResp | null;
};

export interface GetMatchDetailResp {
  /** @format int32 */
  matchId: number;
  /** @format int32 */
  parentTournamentId: number;
  /** @minLength 1 */
  parentTournamentName: string;
  /** @minLength 1 */
  parentUrlSafeName: string;
  /** Parent tournament Image path */
  parentImage?: string | null;
  /** @minLength 1 */
  siteSectionUrlSafeName: string;
  isPlayerBased: boolean;
  /** @format int32 */
  childId: number;
  /** @minLength 1 */
  childTournamentName: string;
  childTournamentType: EnumChildTournament;
  /** @format int32 */
  roundId: number;
  /** @minLength 1 */
  roundName: string;
  matchNumber: number;
  gameId: number;
  /** @minLength 1 */
  gameName: string;
  startTournament: boolean;
  /** @format int64 */
  startingAt?: number | null;
  gamesPerMatch: number;
  /** @format int32 */
  winnerRegistrationId: number;
  matchResult: EnumMatchResult;
  /** @format int32 */
  gridId: number;
  matchStatus: EnumMatchStatus;
  gameMode?: string | null;
  /** Venue name */
  venueName?: string | null;
  /** @format int32 */
  team1RegistrationId?: number | null;
  /** @format int32 */
  team2RegistrationId?: number | null;
  matchGames: MatchGameItem[];
  opponents?: MatchDetailOpponent[] | null;
  streams?: MatchDetailStream[] | null;
  /** Can edit matches */
  canEditMatches: boolean;
}

export enum EnumMatchStatus {
  NotCompleted = 0,
  Completed = 1,
  Canceled = 2,
}

export interface MatchGameItem {
  /** @format int32 */
  gameId: number;
  gameNumber: number;
  gameResult?: EnumGameResult | null;
  /** MLBB Battle Id */
  mtBattleId?: string | null;
}

export enum EnumGameResult {
  Win = 0,
  Draw = 1,
  Forfeit = 2,
  Disq = 3,
}

export interface MatchDetailOpponent {
  /** @format int32 */
  registrationId: number;
  placement: number;
  score?: number | null;
  /** @format int32 */
  placementPoints?: number | null;
  /** @format int32 */
  killPoints?: number | null;
  /** @format int32 */
  pointsAddition?: number | null;
  /** @format int32 */
  pointsDeduction?: number | null;
  opponentType: EnumOpponentType;
  /** @format int32 */
  opponentId: number;
  /** @minLength 1 */
  urlSafeName: string;
  /** @minLength 1 */
  tag: string;
  /** @format int32 */
  worldRanking: number;
  /** @minLength 1 */
  name: string;
  opponentImage?: string | null;
  countryName?: string | null;
  countryCode?: string | null;
  /** Country */
  country?: Country | null;
}

export interface MatchDetailStream {
  /** @format int32 */
  matchId: number;
  /** @format int32 */
  mediaItemId: number;
  /** @minLength 1 */
  streamId: string;
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  urlSafeTitle: string;
  screenCapUrl?: string | null;
  /** @minLength 1 */
  languageCode: string;
  platform: EnumPlatform;
  /** @format int32 */
  viewerCount: number;
  /** @minLength 1 */
  type: string;
  streamUrl?: string | null;
}

export type ApiRespBaseOfGetMatchGameDetailResp = ApiRespBase & {
  data?: GetMatchGameDetailResp | null;
};

export interface GetMatchGameDetailResp {
  /** @format int32 */
  matchGameId: number;
  gameNumber: number;
  /** @format int32 */
  mapId?: number | null;
  /** @format int32 */
  winnerRegistrationId?: number | null;
  result?: EnumGameResult | null;
  isPlayerBased: boolean;
  childTournamentType: EnumChildTournament;
  /** @minLength 1 */
  roundName: string;
  matchNumber: number;
  gameId: number;
  /** @minLength 1 */
  siteSectionUrlSafeName: string;
  /** @format int64 */
  startingAt?: number | null;
  gamesPerMatch: number;
  mapName?: string | null;
  mapImage?: string | null;
  vods?: MatchGameDetailVodItem[] | null;
  matchGameOpponents?: MatchGameOpponent[] | null;
  roundSetItems?: MatchGameRoundSetItem[] | null;
  pubgOpponents?: MatchGamePubgOpponent[] | null;
}

export interface MatchGameDetailVodItem {
  /** @format int32 */
  matchGameId: number;
  /** @format int32 */
  mediaItemId: number;
  /** @minLength 1 */
  title: string;
  host: number;
  /** @minLength 1 */
  hostVideoId: string;
  channelName?: string | null;
  screenCapUrl?: string | null;
  /** @format int32 */
  startTime: number;
}

export interface MatchGameOpponent {
  placement: number;
  opponentType: EnumOpponentType;
  /** @format int32 */
  id: number;
  /** @format int32 */
  registrationId: number;
  /** @minLength 1 */
  teamName: string;
  teamImage?: string | null;
  teamGameSide?: string | null;
  teamGameSideCode?: string | null;
  /** @format int32 */
  socre?: number | null;
  isFirstPick: boolean;
  /** @minLength 1 */
  urlSafeName: string;
  draftItems?: MatchGameDraftItem[] | null;
  lineups?: MatchGameLineup[] | null;
}

export interface MatchGameDraftItem {
  /** sorting no */
  number: number;
  /** 0:Ban 1: Pick */
  type: EnumGameDraftType;
  /** @minLength 1 */
  heroName: string;
  heroImage?: string | null;
  playerName?: string | null;
  playerImage?: string | null;
  /** @format int32 */
  playerId?: number | null;
  playerUrlSafeName?: string | null;
}

export enum EnumGameDraftType {
  Ban = 0,
  Pick = 1,
}

export interface MatchGameLineup {
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
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /**
   * Image url
   * @minLength 1
   */
  image: string;
}

export interface MatchGameRoundSetItem {
  /** sorting no */
  number: number;
  /** Is over time */
  isOverTime: boolean;
  /** Sides [CS:GO 0:Team1->CT/Team2->T, 1: Team2->CT/Team1->T], [Valorant 0:Team1->A/Team2->D, 1:Team2->A/Team1->D] */
  sides: number;
  /**
   * Team 1 score
   * @format int32
   */
  team1Score: number;
  /**
   * Team 2 score
   * @format int32
   */
  team2Score: number;
}

export interface MatchGamePubgOpponent {
  placement: number;
  /** @minLength 1 */
  teamName: string;
  teamImage?: string | null;
  opponentType: EnumOpponentType;
  /** @format int32 */
  opponentId: number;
  /** @minLength 1 */
  urlSafeName: string;
  countryCode?: string | null;
  /** Country */
  country?: Country | null;
  /**
   * Placement points
   * @format int32
   */
  points?: number | null;
  /** @format int32 */
  kills?: number | null;
  /** @format int32 */
  killPoints?: number | null;
  /** @format int32 */
  pointsAddition?: number | null;
  /** @format int32 */
  pointsDeduction?: number | null;
  /** @format int32 */
  total?: number | null;
  players?: MatchGamePlayer[] | null;
}

export interface MatchGamePlayer {
  /** @minLength 1 */
  playerName: string;
  playerImage?: string | null;
  countryCode?: string | null;
  /** Country */
  country?: Country | null;
  /** @minLength 1 */
  urlSafeName: string;
  /** @format int32 */
  playerId: number;
}

export type ApiRespBaseOfGetMatchesUpcomingResp = ApiRespBase & {
  data?: GetMatchesUpcomingResp | null;
};

export interface GetMatchesUpcomingResp {
  /** Matches */
  matches: GetMatchesUpcoming[];
  /** Paging */
  paging: PagingRespBase;
}

export interface GetMatchesUpcoming {
  /** @format int32 */
  matchId: number;
  /** @format int64 */
  startingAt: number;
  matchNumber: number;
  /** @minLength 1 */
  parentUrlSafeName: string;
  /** @minLength 1 */
  matchUrlSafeName: string;
  /** @format int32 */
  matchGridId?: number | null;
  /** @minLength 1 */
  roundName: string;
  /** @minLength 1 */
  stageName: string;
  /** @minLength 1 */
  childName: string;
  childType: EnumChildTournament;
  /** @format int32 */
  parentId: number;
  /** @minLength 1 */
  parentName: string;
  /** @minLength 1 */
  gameUrlSafeName: string;
  isPlayerBase: boolean;
  team1Tag?: string | null;
  team1Name?: string | null;
  team1Image?: string | null;
  team2Tag?: string | null;
  team2Name?: string | null;
  team2Image?: string | null;
  streamPlatforms: number[];
}

export type ApiRespBaseOfGetMatchesResultResp = ApiRespBase & {
  data?: GetMatchesResultResp | null;
};

export interface GetMatchesResultResp {
  /** Matches */
  matches: GetMatchesResult[];
  /** Paging */
  paging: PagingRespBase;
}

export interface GetMatchesResult {
  /** @format int32 */
  matchId: number;
  /** @format int64 */
  startingAt: number;
  matchNumber: number;
  /** @minLength 1 */
  parentUrlSafeName: string;
  /** @minLength 1 */
  matchUrlSafeName: string;
  /** @minLength 1 */
  roundName: string;
  /** @minLength 1 */
  stageName: string;
  /** @minLength 1 */
  childName: string;
  childType: EnumChildTournament;
  /** @format int32 */
  parentId: number;
  /** @minLength 1 */
  parentName: string;
  /** @minLength 1 */
  gameUrlSafeName: string;
  isPlayerBase: boolean;
  result?: EnumMatchResult | null;
  team1Tag?: string | null;
  team1Name?: string | null;
  team1Image?: string | null;
  team1Score?: number | null;
  team2Tag?: string | null;
  team2Name?: string | null;
  team2Image?: string | null;
  team2Score?: number | null;
  streamPlatforms: number[];
}

export type ApiRespBaseOfListOfGetUpcomingResp = ApiRespBase & {
  data?: GetUpcomingResp[] | null;
};

export interface GetUpcomingResp {
  /** @format int32 */
  matchId: number;
  /** @format int64 */
  startingAt: number;
  matchNumber: number;
  /** @minLength 1 */
  parentUrlSafeName: string;
  /** @minLength 1 */
  matchUrlSafeName: string;
  /** @format int32 */
  matchGridId?: number | null;
  /** @minLength 1 */
  roundName: string;
  /** @minLength 1 */
  stageName: string;
  /** @minLength 1 */
  childName: string;
  childType: EnumChildTournament;
  /** @format int32 */
  parentId: number;
  /** @minLength 1 */
  parentName: string;
  /** @minLength 1 */
  gameUrlSafeName: string;
  isPlayerBase: boolean;
  team1Tag?: string | null;
  team1Name?: string | null;
  team1Image?: string | null;
  team2Tag?: string | null;
  team2Name?: string | null;
  team2Image?: string | null;
}

export type ApiRespBaseOfListOfGetResultsResp = ApiRespBase & {
  data?: GetResultsResp[] | null;
};

export interface GetResultsResp {
  /** @format int32 */
  matchId: number;
  /** @format int64 */
  startingAt: number;
  matchNumber: number;
  /** @minLength 1 */
  parentUrlSafeName: string;
  /** @minLength 1 */
  matchUrlSafeName: string;
  /** @minLength 1 */
  roundName: string;
  /** @minLength 1 */
  stageName: string;
  /** @minLength 1 */
  childName: string;
  childType: EnumChildTournament;
  /** @format int32 */
  parentId: number;
  /** @minLength 1 */
  parentName: string;
  /** @minLength 1 */
  gameUrlSafeName: string;
  isPlayerBase: boolean;
  result?: EnumMatchResult | null;
  team1Tag?: string | null;
  team1Name?: string | null;
  team1Image?: string | null;
  team1Score?: number | null;
  team2Tag?: string | null;
  team2Name?: string | null;
  team2Image?: string | null;
  team2Score?: number | null;
}

export type ApiRespBaseOfGetTeamMatchResultResp = ApiRespBase & {
  data?: GetTeamMatchResultResp | null;
};

export interface GetTeamMatchResultResp {
  /** ESport team match results */
  results: GetTeamResult[];
  /** Paging */
  paging: PagingRespBase;
}

export interface GetTeamResult {
  /** @format int32 */
  parentTournamentId: number;
  /** @format int32 */
  matchId: number;
  /** @format int64 */
  startingAt?: number | null;
  /** @minLength 1 */
  parentTournamentName: string;
  /** @minLength 1 */
  parentUrlSafeName: string;
  /** @minLength 1 */
  matchUrlSafeName: string;
  /** @minLength 1 */
  siteSectionUrlSafeName: string;
  /** @format int32 */
  team1Id?: number | null;
  team1Name?: string | null;
  team1UrlSafeName?: string | null;
  team1Image?: string | null;
  team1Score?: number | null;
  /** @format int32 */
  team2Id?: number | null;
  team2Name?: string | null;
  team2UrlSafeName?: string | null;
  team2Image?: string | null;
  team2Score?: number | null;
}

export type ApiRespBaseOfGetPlayerMatchResultResp = ApiRespBase & {
  data?: GetPlayerMatchResultResp | null;
};

export interface GetPlayerMatchResultResp {
  /** ESport team match results */
  results: GetPlayerResult[];
  /** Paging */
  paging: PagingRespBase;
}

export interface GetPlayerResult {
  /** @format int32 */
  matchId: number;
  /** @format int64 */
  startingAt?: number | null;
  /** @format int32 */
  parentId: number;
  /** @minLength 1 */
  parentTournamentName: string;
  /** @minLength 1 */
  parentUrlSafeName: string;
  /** @minLength 1 */
  matchUrlSafeName: string;
  /** @minLength 1 */
  siteSectionUrlSafeName: string;
  /** @format int32 */
  team1Id?: number | null;
  team1Name?: string | null;
  team1UrlSafeName?: string | null;
  team1Image?: string | null;
  team1Score?: number | null;
  /** @format int32 */
  team2Id?: number | null;
  team2Name?: string | null;
  team2UrlSafeName?: string | null;
  team2Image?: string | null;
  team2Score?: number | null;
}

export interface AddStreamToMatchReq {
  /**
   * Child tournament Match Id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  matchId: number;
  /**
   * Media stream id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
}

export type ApiRespBaseOfListOfGetMatchStreamsResp = ApiRespBase & {
  data?: GetMatchStreamsResp[] | null;
};

export interface GetMatchStreamsResp {
  /** @format int32 */
  matchId: number;
  /** @format int32 */
  mediaItemId: number;
  /** @minLength 1 */
  streamId: string;
  /** @minLength 1 */
  title: string;
  /** @minLength 1 */
  urlSafeTitle: string;
  screenCapUrl?: string | null;
  /** @minLength 1 */
  languageCode: string;
  platform: EnumPlatform;
  /** @format int32 */
  viewerCount: number;
  /** @minLength 1 */
  type: string;
  streamUrl?: string | null;
}

export type ApiRespBaseOfGetTeamMatchEncountersResp = ApiRespBase & {
  data?: GetTeamMatchEncountersResp | null;
};

export interface GetTeamMatchEncountersResp {
  /** Encounters */
  encounters: TeamMatchEncounterInfo[];
}

export interface TeamMatchEncounterInfo {
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
   * Match id
   * @format int32
   */
  matchId: number;
  /**
   * Match url safe name
   * @minLength 1
   */
  matchUrlSafeName: string;
  /**
   * Match starting at
   * @format int64
   */
  startingAt: number;
  /** Game id */
  gameId?: number;
  /** Op1 type */
  op1Type: EnumOpponentType;
  /**
   * Op1 registration id
   * @format int32
   */
  op1RegistrationId: number;
  /**
   * Op1 id
   * @format int32
   */
  op1Id: number;
  /**
   * Op1 name
   * @minLength 1
   */
  op1Name: string;
  /** Op1 tag */
  op1Tag?: string | null;
  /** Op1 image url */
  op1ImageUrl?: string | null;
  /**
   * Op1 url safe name
   * @minLength 1
   */
  op1UrlSafeName: string;
  /** Op1 score */
  op1Score: number;
  /** Op2 type */
  op2Type: EnumOpponentType;
  /**
   * Op2 registration id
   * @format int32
   */
  op2RegistrationId: number;
  /**
   * Op2 id
   * @format int32
   */
  op2Id: number;
  /**
   * Op2 name
   * @minLength 1
   */
  op2Name: string;
  /** Op1 tag */
  op2Tag?: string | null;
  /** Op2 image url */
  op2ImageUrl?: string | null;
  /**
   * Op2 url safe name
   * @minLength 1
   */
  op2UrlSafeName: string;
  /** Op2 score */
  op2Score: number;
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export type ApiRespBaseOfListOfGetMatchesExternalResp = ApiRespBase & {
  data?: GetMatchesExternalResp[] | null;
};

export interface GetMatchesExternalResp {
  /** @format int32 */
  id?: number;
  status?: string;
  isLive?: boolean;
  datetime?: string;
  game?: Game;
  pageUrl?: string;
  tournament?: Tournament2;
  description?: string;
  streams?: MatchStream[];
  firstOpponent?: Opponent;
  secondOpponent?: Opponent;
}

export interface Game {
  name?: string;
  tag?: string;
}

export interface Tournament2 {
  name?: string;
  pageUrl?: string;
  stage?: string;
  type?: string;
}

export type MatchStream = object;

export interface Opponent {
  name?: string;
  shortName?: string;
  country?: Country2;
  pageUrl?: string;
}

export interface Country2 {
  countryCode?: string;
}

export type ApiRespBaseOfGetEventMatchUpcomingResp = ApiRespBase & {
  data?: GetEventMatchUpcomingResp | null;
};

export interface GetEventMatchUpcomingResp {
  /** Matches */
  matches: GetMatchesUpcoming[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetEventMatchResultResp = ApiRespBase & {
  data?: GetEventMatchResultResp | null;
};

export interface GetEventMatchResultResp {
  /** Matches */
  matches: GetMatchesResult[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetMLBBBattleDataResp = ApiRespBase & {
  data?: GetMLBBBattleDataResp | null;
};

export interface GetMLBBBattleDataResp {
  battleData?: GetMLBBLiveStatsResp | null;
  postData?: GetMLBBPostStatsResp | null;
}

export interface GetMLBBLiveStatsResp {
  /** @minLength 1 */
  state: string;
  /** @minLength 1 */
  stateDescription: string;
  /** @format int32 */
  gameTime: number;
  teamStats: MLBBLiveStats[];
  matchEvents: MLBBMatchEvent[];
}

export interface MLBBLiveStats {
  /** @format int32 */
  campId: number;
  /** @minLength 1 */
  teamName: string;
  /** @format int32 */
  score: number;
  /** @format int32 */
  totalGold: number;
  /** @format int32 */
  totalDamage: number;
  /** @format int32 */
  lordKills: number;
  /** @format int32 */
  turtleKills: number;
  /** @format int32 */
  turretsDestroyed: number;
  players: MLBBLiveStatsPlayer[];
  banHeroes: MLBBBanHero[];
}

export interface MLBBLiveStatsPlayer {
  /** @minLength 1 */
  playerName: string;
  /** @format int32 */
  heroId: number;
  /** @minLength 1 */
  heroName: string;
  /** @minLength 1 */
  heroImage: string;
  /** @format int32 */
  level: number;
  /** @format int32 */
  kills: number;
  /** @format int32 */
  deaths: number;
  /** @format int32 */
  assists: number;
  /** @format decimal */
  kda: number;
  /** @format int32 */
  gold: number;
  /** @format int32 */
  damage: number;
  /** @format decimal */
  damageToTurrets: number;
  /** @format int32 */
  damageTaken: number;
  /** @format int32 */
  damageEffect: number;
  /** @format int32 */
  offeredRate: number;
  /** @format decimal */
  totalHeal: number;
  emblem: ItemOfInteger;
  /** Battle Spells */
  skill: ItemOfInteger;
  equipments: MLBBEquipment[];
  runeMap: ItemOfInteger[];
}

export interface MLBBEquipment {
  /**
   * Equipment Id
   * @format int32
   */
  id: number;
  /**
   * Equipment Name
   * @minLength 1
   */
  equipmentName: string;
  /**
   * Equipment Image Path
   * @minLength 1
   */
  imagePath: string;
}

export interface MLBBBanHero {
  /** @format int32 */
  heroId?: number;
  heroName?: string;
  heroImage?: string;
}

export interface MLBBMatchEvent {
  /** @minLength 1 */
  eventType: string;
  /** PlayerName、BossName、TowerName */
  killedName?: string | null;
  killerName?: string | null;
  heroName?: string | null;
  teamName?: string | null;
  extraParam?: string[] | null;
  /**
   * Game time when the event happens Unit: second
   * @format int32
   */
  time: number;
}

export interface GetMLBBPostStatsResp {
  teamStats: MLBBPostStats[];
  matchEvents: MLBBMatchEvent[];
}

export interface MLBBPostStats {
  /** @format int32 */
  campId: number;
  /** @minLength 1 */
  teamName: string;
  /** @format int32 */
  totalGold: number;
  /** @format int32 */
  totalDamage: number;
  /** @format int32 */
  lordKills: number;
  /** @format int32 */
  turtleKills: number;
  /** @format int32 */
  crabKills: number;
  /** @format int32 */
  turretsDestroyed: number;
  /** @format int32 */
  orangeBuffs: number;
  /** @format int32 */
  purpleBuffs: number;
  lordKillsAt: number[];
  turtleKillsAt: number[];
  crabKillsAt: number[];
  turretsDestroyedAt: number[];
  orangeBuffsAt: number[];
  purpleBuffsAt: number[];
  players: MLBBPostStatsPlayer[];
  banHeroes: MLBBBanHero[];
}

export interface MLBBPostStatsPlayer {
  /** @minLength 1 */
  playerName: string;
  /** @format int32 */
  heroId: number;
  /** @minLength 1 */
  heroName: string;
  /** @minLength 1 */
  heroImage: string;
  /** @format int32 */
  level: number;
  /** @format int32 */
  kills: number;
  /** @format int32 */
  deaths: number;
  /** @format int32 */
  assists: number;
  /** @format decimal */
  kda: number;
  /** @format int32 */
  gold: number;
  /** @format int32 */
  gpm: number;
  /** @format int32 */
  damage: number;
  /** @format decimal */
  damageToTurrets: number;
  /** @format int32 */
  damageTaken: number;
  /** @format decimal */
  damageEffect: number;
  /** @format decimal */
  offeredRate: number;
  /** @format decimal */
  totalHeal: number;
  emblem: ItemOfInteger;
  /** @format int32 */
  battleSpellUsed: number;
  /** Battle Spells */
  skill: ItemOfInteger;
  equipments: MLBBEquipment[];
  runeMap: ItemOfInteger[];
}

export type ApiRespBaseOfGetMemberResp = ApiRespBase & {
  data?: GetMemberResp | null;
};

export interface GetMemberResp {
  /** Member detail */
  memberDetail: MemberDetail;
  /** Articles */
  articles?: ArticleListItem[] | null;
  /** Article paging */
  articlePaging: PagingRespBase;
}

export interface MemberDetail {
  /**
   * Member user id
   * @format int32
   */
  userId: number;
  /**
   * Username
   * @minLength 1
   */
  username: string;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /** Primary game id */
  primaryGameId?: number | null;
  /** Primary game name */
  primaryGameName?: string | null;
  /** About me */
  aboutMe?: string | null;
  /** Avatar image url */
  avatarImageUrl?: string | null;
  /** Country id */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Country code */
  countryCode?: string;
  /** Flag url */
  flagImageUrl?: string | null;
  /** Country */
  country?: Country | null;
}

export type GetMemberReq = object;

export type ApiRespBaseOfGetMemberArticlesResp = ApiRespBase & {
  data?: GetMemberArticlesResp | null;
};

export interface GetMemberArticlesResp {
  /** Articles */
  articles?: ArticleListItem[] | null;
  /** Ppaging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetCountryOptionsResp = ApiRespBase & {
  data?: GetCountryOptionsResp | null;
};

export interface GetCountryOptionsResp {
  /** Countries */
  countries: CountryOption[];
}

export interface CountryOption {
  /**
   * Country id
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

export type ApiRespBaseOfGetGameOptionsResp = ApiRespBase & {
  data?: GetGameOptionsResp | null;
};

export interface GetGameOptionsResp {
  /** Games options */
  games: GameOption[];
}

export interface GameOption {
  /**
   * Game id
   * @min 1
   * @max 32767
   */
  gameId: number;
  /**
   * Game name
   * @minLength 0
   * @maxLength 20
   */
  name: string;
}

export type ApiRespBaseOfGetLanguagesResp = ApiRespBase & {
  data?: GetLanguagesResp | null;
};

export interface GetLanguagesResp {
  /** Language options */
  languageOptions: LanguageOption[];
}

export interface LanguageOption {
  /**
   * Language id
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

export type ApiRespBaseOfGetPlatformOptionsResp = ApiRespBase & {
  data?: GetPlatformOptionsResp | null;
};

export interface GetPlatformOptionsResp {
  /** Stream platform options */
  platformOptions: PlatformOption[];
}

export interface PlatformOption {
  /**
   * Platform id
   * @min 1
   * @max 32767
   */
  id: number;
  /**
   * Platform name
   * @minLength 0
   * @maxLength 100
   */
  name: string;
}

export type ApiRespBaseOfGetCurrencyOptionsResp = ApiRespBase & {
  data?: GetCurrencyOptionsResp | null;
};

export interface GetCurrencyOptionsResp {
  /** Currencies */
  currencies: CurrencyItem[];
}

export type CurrencyItem = ItemOfShort & {
  /**
   * @minLength 0
   * @maxLength 30
   */
  code: string;
};

export type ApiRespBaseOfGetGameRegionOptionsResp = ApiRespBase & {
  data?: GetGameRegionOptionsResp | null;
};

export interface GetGameRegionOptionsResp {
  /** Game regions */
  gameRegions: ItemOfShort[];
}

export type ApiRespBaseOfGetPageResp = ApiRespBase & {
  data?: GetPageResp | null;
};

export interface GetPageResp {
  /**
   * Page id
   * @format int32
   */
  id: number;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Url safe url
   * @minLength 1
   */
  urlSafeTitle: string;
  /**
   * Content processed
   * @minLength 1
   */
  contentProcessed: string;
  /** Extra css */
  extraCss?: string | null;
  /** MetaTags */
  metaTags: Record<string, string>;
  /** Seo meta data */
  seoMetaData: Record<string, string>;
}

export type ApiRespBaseOfGetPlayerDetailResp = ApiRespBase & {
  data?: GetPlayerDetailResp | null;
};

export interface GetPlayerDetailResp {
  /** Player detail */
  playerDetail?: PlayerDetail | null;
}

export interface PlayerDetail {
  /**
   * Player id
   * @format int32
   */
  playerId: number;
  /**
   * Player name
   * @minLength 1
   */
  name: string;
  /** First name */
  firstName?: string | null;
  /** Last name */
  lastName?: string | null;
  /**
   * Player url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /**
   * Team fanclub id
   * @format int32
   */
  fanclubId: number;
  /** About */
  about?: string | null;
  /** Image url */
  imageUrl?: string | null;
  /** Social facebook */
  facebook?: string | null;
  /** Social twitter */
  twitter?: string | null;
  /** Social youtube */
  youtube?: string | null;
  /**
   * Follower count
   * @format int32
   */
  followerCount: number;
  /**
   * Has followed
   * null: not login
   * true: login and followed
   * false: login and not follow
   */
  hasFollowed?: boolean | null;
  /** Has teams */
  hasTeams?: boolean;
  /** Has vods */
  hasVods: boolean;
  /** Has performance */
  hasPerformance: boolean;
  /** Has top achievements */
  hasTopAchievements: boolean;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /** Game */
  game?: GameBasicInfo | null;
  /** Game id */
  primaryGameId: number;
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
  /** Site section */
  siteSection?: SiteSectionBasicInfo | null;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /** Country */
  country?: Country | null;
  /** Grid Player Id */
  gridId?: string | null;
  /** Country id */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Country code */
  countryCode?: string | null;
  /** Flag image url */
  flagImageUrl?: string | null;
  /** Game region */
  gameRegionId?: number | null;
  /** Game region name */
  gameRegionName?: string | null;
  /**
   * Game region ranking
   * @format int32
   */
  gameRegionRanking?: number | null;
  /**
   * Elo rating
   * @format int32
   */
  eloRating: number;
  /**
   * World ranking
   * @format int32
   */
  eloRanking: number;
  /**
   * Win count
   * @format int32
   */
  winCount: number;
  /**
   * Loss count
   * @format int32
   */
  lossCount: number;
  /**
   * Draw count
   * @format int32
   */
  drawCount: number;
  /**
   * Total match count
   * @format int32
   */
  totalMatchCount: number;
  /**
   * Win rate
   * @format decimal
   */
  winRate: number;
  /** Earning prize */
  earningPrize: PlayerEarningPrize;
  /**
   * Steak
   * Greater than 0: loss streak
   * Less than 0: win streak
   */
  streak: number;
  /** Game region ranking */
  regionRanking?: GameRegionRanking | null;
  /** Player teams history */
  playerTeamsHistoryItems?: TeamHistoryItem[] | null;
  /** Player teams  */
  playerTeams?: PlayerTeams[] | null;
  /** Team players */
  teamPlayers?: SimpleTeamPlayer[] | null;
}

export interface SiteSectionBasicInfo {
  /** Site section id */
  id: number;
  /**
   * Site section name
   * @minLength 1
   */
  name: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  urlSafeName: string;
}

export interface PlayerEarningPrize {
  /** Prize pool currency */
  prizePoolCurrency: EnumCurrency;
  /**
   * Prize pool currency name
   * @minLength 1
   */
  prizePoolCurrencyName: string;
  /**
   * Prize pool currency code
   * @minLength 1
   */
  prizePoolCurrencyCode: string;
  /**
   * Prize amount - USD
   * @format decimal
   */
  prizeAmountUsd: number;
}

export interface GameRegionRanking {
  /** Game region id */
  id: number;
  /**
   * Game region name
   * @minLength 1
   */
  name: string;
  /**
   * Game region ranking
   * @format int32
   */
  eloRanking: number;
}

export interface TeamHistoryItem {
  /**
   * Team Id
   * @format int32
   */
  id?: number;
  /** Team Name */
  name?: string;
  /** Tag */
  tag?: string;
  /** Player Url Safe Name */
  urlSafeName?: string;
  /** Image file name */
  imageUrl?: string | null;
  /** Url */
  url?: string | null;
  /** Country */
  country?: Country | null;
  /** Country id */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Country code */
  countryCode?: string | null;
  /** Flag image url */
  flagImageUrl?: string | null;
  /**
   * From at
   * @format int64
   */
  fromAt: number;
  /**
   * To at
   * @format int64
   */
  toAt?: number | null;
  /** Game */
  game: GameBasicInfo;
  /** Game id */
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
  /** Site section */
  siteSection?: SiteSectionBasicInfo | null;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /** Position */
  position?: string;
}

export interface PlayerTeams {
  /** Game id */
  gameId: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /** Current team */
  currentTeam?: TeamHistoryItem | null;
  /** Previous teams */
  previousTeams?: TeamHistoryItem[] | null;
}

export interface SimpleTeamPlayer {
  /**
   * Player Id
   * @format int32
   */
  id: number;
  /**
   * Player Name
   * @minLength 1
   */
  name: string;
  /**
   * Player Url Safe Name
   * @minLength 1
   */
  urlSafeName: string;
  /** Image file name */
  imageUrl?: string | null;
}

export type ApiRespBaseOfGetVodsByPlayerResp = ApiRespBase & {
  data?: GetVodsByPlayerResp | null;
};

export interface GetVodsByPlayerResp {
  /** Vods */
  vods: VodItem[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetTeamGameOptionsByPlayerResp = ApiRespBase & {
  data?: GetTeamGameOptionsByPlayerResp | null;
};

export interface GetTeamGameOptionsByPlayerResp {
  /** Team game options */
  teamGames?: GameFullInfo[] | null;
}

export interface GameFullInfo {
  /** Game Id */
  id: number;
  /**
   * Game Name
   * @minLength 1
   */
  name: string;
  /**
   * Game UrlSafeName
   * @minLength 1
   */
  urlSafeName: string;
  /** Game image url */
  imageUrl?: string | null;
}

export type ApiRespBaseOfGetPlayerTeamHistoryResp = ApiRespBase & {
  data?: GetPlayerTeamHistoryResp | null;
};

export interface GetPlayerTeamHistoryResp {
  /** Current team */
  currentTeam?: TeamHistoryItem | null;
  /** Previous teams */
  teamHistories: TeamHistoryItem[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetPerformanceByPlayerResp = ApiRespBase & {
  data?: GetPerformanceByPlayerResp | null;
};

export interface GetPerformanceByPlayerResp {
  all: PlayerPerformance;
  /** Last 2 months */
  last2Months: PlayerPerformanceMonth[];
  /** Last 12 months */
  last12Months: PlayerPerformanceMonth[];
  /** Last rating changes */
  lastRatingChanges: TeamRatingChange[];
  /** Last 3 match infos */
  last3MatchInfos: TeamMatchInfo[];
}

export interface PlayerPerformance {
  /**
   * Win count
   * @format int32
   */
  winCount: number;
  /**
   * Loss count
   * @format int32
   */
  lossCount: number;
  /**
   * Draw count
   * @format int32
   */
  drawCount: number;
  /**
   * Total match count
   * @format int32
   */
  totalMatchCount: number;
  /**
   * Win rate
   * @format decimal
   */
  winRate: number;
}

export interface PlayerPerformanceMonth {
  /**
   * Player id
   * @format int32
   */
  id: number;
  /**
   * Year
   * @format int32
   */
  year: number;
  /**
   * Month
   * @format int32
   */
  month: number;
  /**
   * Win count
   * @format int32
   */
  winCount: number;
  /**
   * Loss count
   * @format int32
   */
  lossCount: number;
  /**
   * Draw count
   * @format int32
   */
  drawCount: number;
  /**
   * Total match count
   * @format int32
   */
  totalMatchCount: number;
  /**
   * Win rate
   * @format decimal
   */
  winRate: number;
  /**
   * Loss rate
   * @format decimal
   */
  lossRate?: number;
}

export interface TeamRatingChange {
  /**
   * Settle date
   * @format date-time
   * @minLength 1
   */
  settleDate: string;
  /**
   * Type
   * 1: Match
   * 2: Decay
   */
  type: EnumRatingChangeType;
  /** Type name */
  typeName?: string;
  /**
   * Before rating
   * @format int32
   */
  beforeRating: number;
  /**
   * Rating change
   * @format int32
   */
  ratingChange: number;
  /**
   * After rating
   * @format int32
   */
  afterRating: number;
  /**
   * Source id
   * @format int32
   */
  sourceId: number;
  /** Match info */
  matchInfo?: TeamMatchInfo | null;
  /**
   * Updated date
   * @format date-time
   */
  updatedAt?: string;
  displayText?: string | null;
}

export enum EnumRatingChangeType {
  Match = 1,
  Decay = 2,
  Manual = 3,
}

export interface TeamMatchInfo {
  /**
   * Match id
   * @format int32
   */
  matchId: number;
  /**
   * Match url safe name
   * @minLength 1
   */
  matchUrlSafeName: string;
  /**
   * Starting at
   * @format int64
   */
  startingAt: number;
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
  /** Parent game id */
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
  /** Game */
  game?: GameBasicInfo | null;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /**
   * Parent name
   * @minLength 1
   */
  parentName: string;
  /**
   * Parent url safe name
   * @minLength 1
   */
  parentUrlSafeName: string;
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
   * Self team id
   * @format int32
   */
  selfTeamId: number;
  /**
   * Self registered id
   * @format int32
   */
  selfRegisteredId: number;
  /**
   * Self name
   * @minLength 1
   */
  selfName: string;
  /** Self score */
  selfScore: number;
  /**
   * Opponent team id
   * @format int32
   */
  opponentTeamId: number;
  /**
   * Opponent registered id
   * @format int32
   */
  opponentRegisteredId: number;
  /**
   * Opponent name
   * @minLength 1
   */
  opponentName: string;
  /** Opponent score */
  opponentScore: number;
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export type ApiRespBaseOfGetTopAchievementsByPlayerResp = ApiRespBase & {
  data?: GetTopAchievementsByPlayerResp | null;
};

export interface GetTopAchievementsByPlayerResp {
  /** Offline top achievements */
  offlineTopAchievements: TeamAchievementTournament[];
  /** Online top achievements */
  onlineTopAchievements: TeamAchievementTournament[];
}

export interface TeamAchievementTournament {
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
  /** Placement from */
  placementFrom: number;
  /** Placement to */
  placementTo: number;
  /** Prize pool currency */
  prizePoolCurrency: EnumCurrency;
  /**
   * Prize pool currency name
   * @minLength 1
   */
  prizePoolCurrencyName: string;
  /**
   * Prize pool currency code
   * @minLength 1
   */
  prizePoolCurrencyCode: string;
  /**
   * Prize amount - Locale currency
   * @format decimal
   */
  prizeAmount: number;
  /**
   * Prize amount - USD
   * @format decimal
   */
  prizeAmountUsd: number;
  /** Parent game id */
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
  /** Game */
  game?: GameBasicInfo | null;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export type ApiRespBaseOfGetGridPlayerStatsResp = ApiRespBase & {
  data?: GetGridPlayerStatsResp | null;
};

export interface GetGridPlayerStatsResp {
  /**
   * Matches Played
   * @format int32
   */
  matchesPlayed: number;
  kills: GridStatistics;
  killAssistsGiven: GridStatistics;
  killAssistsReceived: GridStatistics;
  teamkills: GridStatistics;
  teamkillAssistsGiven: GridStatistics;
  teamkillAssistsReceived: GridStatistics;
  selfkills: GridStatistics;
  deaths: GridStatistics;
}

export interface GridStatistics {
  /** @format int32 */
  sum: number;
  /** @format int32 */
  min: number;
  /** @format int32 */
  max: number;
  /** @format decimal */
  avg: number;
}

export enum EnumGridTimeWindow {
  LastWeek = 1,
  LastMonth = 2,
  Last3Month = 3,
  Last6Month = 4,
  LastYear = 5,
}

export type ApiRespBaseOfGetPlayerGamesResp = ApiRespBase & {
  data?: GetPlayerGamesResp | null;
};

export interface GetPlayerGamesResp {
  games?: PlayerGame[];
}

export interface PlayerGame {
  sectionId: number;
  /** @minLength 1 */
  sectionName: string;
  /** @minLength 1 */
  sectionUrlSafeName: string;
  /** @format int32 */
  playerId?: number;
  /** @format int32 */
  gameId?: number;
}

export type ApiRespBaseOfGetPlayerMatchHistoryResp = ApiRespBase & {
  data?: GetPlayerMatchHistoryResp | null;
};

export interface GetPlayerMatchHistoryResp {
  matches: PlayerMatch[];
  /** Paging */
  paging: PagingRespBase;
}

export interface PlayerMatch {
  /** @format int32 */
  matchId?: number;
  /** @format int64 */
  startingAt?: number | null;
  matchUrlSafeName?: string;
  /** @format int32 */
  parentId?: number;
  parentName?: string;
  parentUrlSafeName?: string;
  sectionName?: string;
  siteSectionUrlSafeName?: string;
  /** @format int32 */
  team1Id?: number;
  team1Name?: string;
  team1UrlSafeName?: string;
  team1Image?: string | null;
  team1Score?: number;
  /** @format int32 */
  team2Id?: number;
  team2Name?: string;
  team2UrlSafeName?: string;
  team2Image?: string | null;
  team2Score?: number;
  gameId?: number;
  /** @format int32 */
  playerId?: number;
}

export type ApiRespBaseOfAddPollVoteResp = ApiRespBase & {
  data?: AddPollVoteResp | null;
};

export interface AddPollVoteResp {
  /**
   * Poll id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * Poll's question
   * @minLength 0
   * @maxLength 255
   */
  question: string;
  /** Poll's options */
  options: QuickPollOption[];
  /**
   * User vote option id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  userVoteOptionId?: number | null;
}

export interface AddPollVoteReq {
  /**
   * Poll's option id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  optionId: number;
}

export type ApiRespBaseOfGetPollStandingsResp = ApiRespBase & {
  data?: GetPollStandingsResp | null;
};

export interface GetPollStandingsResp {
  /**
   * Poll id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  id: number;
  /**
   * Poll question
   * @minLength 0
   * @maxLength 255
   */
  question: string;
  /** Poll's Options */
  options: QuickPollOption[];
  /**
   * User vote option id
   * @format int32
   * @min 1
   * @max 2147483647
   */
  userVoteOptionId?: number | null;
}

export type ApiRespBaseOfGetTeamRankingsResp = ApiRespBase & {
  data?: GetTeamRankingsResp | null;
};

export interface GetTeamRankingsResp {
  /** Game rankings */
  gameRankings: GameRanking[];
}

export interface GameRanking {
  /** Game id */
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
  /** Game regions */
  gameRegions: ItemOfShort[];
  /** Ranking teams */
  rankingTeams: RankingTeam[];
  /** Paging */
  paging: PagingRespBase;
}

export interface RankingTeam {
  /**
   * Team id
   * @format int32
   */
  id: number;
  /**
   * Team name
   * @minLength 1
   */
  name: string;
  /**
   * Tag
   * @minLength 1
   */
  tag: string;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /** Image file name */
  imageUrl?: string | null;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Elo rating
   * @format int32
   */
  eloRating: number;
  /**
   * Previous elo ranking
   * @format int32
   */
  prevEloRanking: number;
  /**
   * Rank change
   * 1: Up
   * 2: Down
   * 3: Unchanged
   */
  rankChange: EnumRankingChange;
  /**
   * Rank change name
   * @minLength 1
   */
  rankChangeName: string;
  /**
   * Elo ranking
   * @format int32
   */
  eloRanking: number;
  /** Game */
  game?: GameBasicInfo | null;
  /** Game id */
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
  /** Site section */
  siteSection?: SiteSectionBasicInfo | null;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
}

export enum EnumRankingChange {
  Up = 1,
  Down = 2,
  Unchanged = 3,
}

export type ApiRespBaseOfGetTeamRankingsByGameResp = ApiRespBase & {
  data?: GetTeamRankingsByGameResp | null;
};

export interface GetTeamRankingsByGameResp {
  /** Game regions */
  gameRegions: ItemOfShort[];
  /** Ranking teams */
  rankingTeams: RankingTeam[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetTeamRankingsByGameRegionResp = ApiRespBase & {
  data?: GetTeamRankingsByGameRegionResp | null;
};

export interface GetTeamRankingsByGameRegionResp {
  /** Ranking teams */
  rankingTeams: RankingTeam[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetSiteSettingsV6Resp = ApiRespBase & {
  data?: GetSiteSettingsV6Resp | null;
};

export interface GetSiteSettingsV6Resp {
  /** Frontend Setting */
  frontendSetting: FrontendSetting;
  /** Other Frontends */
  frontends: FrontendBasicInfo[];
  /** Menus */
  menus: SiteMenuV6[];
  /** Mobile menu */
  mobileMenus: SiteMenuV6[];
  /** Site Section Map */
  siteSectionMap: Record<string, SiteSectionInfo>;
}

export interface FrontendSetting {
  /**
   * Frontend Name
   * @minLength 1
   */
  name: string;
  /**
   * Frontend url
   * @minLength 1
   */
  url: string;
  /**
   * About PageId
   * @format int32
   */
  aboutPageId: number;
  /**
   * Jobs PageId
   * @format int32
   */
  jobsPageId: number;
  /**
   * Privacy PageId
   * @format int32
   */
  privacyPageId: number;
  /**
   * Support PageId
   * @format int32
   */
  supportPageId: number;
  /**
   * Terms PageId
   * @format int32
   */
  termsPageId: number;
  /** Frontend Locale */
  locale: FrontendLocale;
  /**
   * Site code
   * @minLength 1
   */
  siteCode: string;
  /** Client Configuration */
  clientConfiguration: any;
  /** Game site section ids */
  gameSiteSectionIds: number[];
}

export interface FrontendLocale {
  /**
   * Bcp47 identifier
   * @minLength 1
   */
  bcp47Identifier: string;
}

export interface FrontendBasicInfo {
  /** Frontend Id */
  id: number;
  /**
   * Frontend Name
   * @minLength 1
   */
  name: string;
  /**
   * Frontend Url
   * @minLength 1
   */
  url: string;
}

export interface SiteMenuV6 {
  /** Menu Id */
  id: number;
  /** Site Section Id */
  siteSectionId?: number | null;
  /**
   * Menu name
   * @minLength 1
   */
  name: string;
  /** Site section url safe name */
  urlSafeName?: string | null;
  /** Sort */
  position: number;
  /** Parent id */
  parentId: number;
  level: number;
  /** Sub Menus */
  subMenus: SiteMenuV6[];
  isUseCustomUrl: boolean;
  customUrl?: string | null;
  /** 0: None 1: All-SiteSection */
  menuType: EnumMenuType;
}

export enum EnumMenuType {
  None = 0,
  All = 1,
  Articles = 2,
  Tournaments = 3,
  Matches = 4,
  Rankings = 5,
}

export interface SiteSectionInfo {
  /** Site section id */
  id: number;
  /**
   * Site section name
   * @minLength 1
   */
  name: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /** Game Info */
  game?: GameBasicInfo | null;
}

export type ApiRespBaseOfGetEsportsUrlSafeNamesResp = ApiRespBase & {
  data?: GetEsportsUrlSafeNamesResp | null;
};

export interface GetEsportsUrlSafeNamesResp {
  /** Url safe name */
  urlSafeNames: SafeUrl[];
}

export interface SafeUrl {
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeName: string;
}

export type ApiRespBaseOfSiteSectionInfo = ApiRespBase & {
  data?: SiteSectionInfo | null;
};

export type ApiRespBaseOfGetSiteAdSettingsResp = ApiRespBase & {
  data?: GetSiteAdSettingsResp | null;
};

export interface GetSiteAdSettingsResp {
  /** Ad settings */
  adSettings: AdSettings;
}

export interface AdSettings {
  /** Google ad sense setting */
  googleAdSense: GoogleAdSenseSetting;
  googleAdManager: GoogleAdManagerSetting;
  googleTagManager: GoogleTagManagerSetting;
}

export interface GoogleAdSenseSetting {
  /** Enable */
  enabled: boolean;
  /**
   * Publisher id
   * @minLength 1
   */
  publisherId: string;
}

export interface GoogleAdManagerSetting {
  /** Enable */
  enabled: boolean;
  /**
   * Network code
   * @format int64
   */
  networkCode: number;
}

export interface GoogleTagManagerSetting {
  /** Enable */
  enabled: boolean;
  /**
   * Id
   * @minLength 1
   */
  id: string;
  /** Query params */
  queryParams: GoogleTagManagerQueryParams;
}

export interface GoogleTagManagerQueryParams {
  /** @minLength 1 */
  gtm_auth: string;
  /** @minLength 1 */
  gtm_preview: string;
  /** @minLength 1 */
  gtm_cookies_win: string;
}

export enum EnumSitemapType {
  Root = 0,
  IndexPages = 1,
  Articles = 2,
  Teams = 3,
  Players = 4,
  BroadcastTalents = 5,
  Tournaments = 6,
  Matches = 7,
  SpecialPages = 8,
}

export type ApiRespBaseOfGetSiteSectionAllResp = ApiRespBase & {
  data?: GetSiteSectionAllResp | null;
};

export interface GetSiteSectionAllResp {
  /** Stream */
  stream?: SiteSectionAllStream | null;
  /** Vod */
  vod?: SiteSectionAllVod | null;
}

export interface SiteSectionAllVod {
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
   * Url safe title
   * @minLength 1
   */
  urlSafeTitle: string;
  /** Host */
  host: EnumVideoHost;
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
   * Channel name
   * @minLength 1
   */
  channelName: string;
  /**
   * View count
   * @format int32
   */
  viewCount: number;
  /**
   * Host view count
   * @format int32
   */
  hostViewCount: number;
  /** Screen cap url */
  screenCapUrl?: string | null;
  /**
   * Start time
   * @format int32
   */
  startTime: number;
  /**
   * Match id
   * @format int32
   */
  matchId: number;
  /**
   * Match url safe name
   * @minLength 1
   */
  matchUrlSafeName: string;
  /**
   * Match url
   * @minLength 1
   */
  matchUrl: string;
  /** Opponent count */
  opponentCount: number;
  /** Child type */
  childType: EnumChildTournament;
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
  /**
   * Parent url safe name
   * @minLength 1
   */
  parentUrlSafeName: string;
  /** Game id */
  parentGameId: number;
  /**
   * Game name
   * @minLength 1
   */
  parentGameName: string;
  /**
   * Game url safe name
   * @minLength 1
   */
  parentGameUrlSafeName: string;
  /**
   * Parent tournament url
   * @minLength 1
   */
  parentUrl: string;
  /** Match */
  match: MediaMatch;
  /** Match opponent */
  matchOpponents: MediaMatchOpponent[];
}

export type ApiRespBaseOfGetHomepageResp = ApiRespBase & {
  data?: GetHomepageResp | null;
};

export interface GetHomepageResp {
  /** Stream */
  stream?: SiteSectionAllStream | null;
  /** Vod */
  vod?: SiteSectionAllVod | null;
  /** Matches */
  matches: GetMatchesUpcoming[];
  /** News */
  news: ArticleListItem[];
  /** Parent tournaments */
  tournaments: ParentListItem[];
  /** Editorial */
  editorial: ArticleListItem[];
}

export enum EnumHomepagePlatform {
  Desktop = 1,
  Mobile = 2,
}

export type ApiRespBaseOfGetSponsorResp = ApiRespBase & {
  data?: GetSponsorResp | null;
};

export interface GetSponsorResp {
  /** Sponsor detail */
  sponsorDetail: SponsorDetail;
}

export interface SponsorDetail {
  /** Sponsor id */
  sponsorId: number;
  /**
   * Sponsor name
   * @minLength 1
   */
  name: string;
  /** Sponsor image url */
  imageUrl?: string | null;
  /**
   * Sponsor url link
   * @minLength 1
   */
  url: string;
  /**
   * Description
   * @minLength 1
   */
  description: string;
  /** Has parent tournaments */
  hasParentTournaments: boolean;
}

export type ApiRespBaseOfGetStreamResp = ApiRespBase & {
  data?: GetStreamResp | null;
};

export interface GetStreamResp {
  /** Stream detail */
  streamDetail: StreamDetail;
}

export interface StreamDetail {
  /**
   * Media stream id
   * @format int32
   */
  id: number;
  /** Platform */
  platform: EnumPlatform;
  /**
   * Platform name
   * @minLength 1
   */
  platformName: string;
  /**
   * Stream id
   * @minLength 1
   */
  streamId: string;
  /** Is live */
  isLive: boolean;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeTitle: string;
  /** Screen cap url */
  screenCapUrl?: string | null;
  /** Stream url */
  streamUrl?: string | null;
  /** Language id */
  languageId: number;
  /**
   * Language
   * @minLength 1
   */
  language: string;
  /**
   * Language code
   * @minLength 1
   */
  languageCode: string;
  /**
   * Viewer count
   * @format int32
   */
  viewerCount: number;
  /**
   * View count
   * @format int32
   */
  viewCount: number;
  /** Game id */
  gameId: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export type ApiRespBaseOfGetTeamDetailResp = ApiRespBase & {
  data?: GetTeamDetailResp | null;
};

export interface GetTeamDetailResp {
  /** Team detail */
  teamDetail: TeamDetail;
}

export interface TeamDetail {
  /**
   * Team id
   * @format int32
   */
  id: number;
  /**
   * Team name
   * @minLength 1
   */
  name: string;
  /**
   * Team url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /**
   * Team tag
   * @minLength 1
   */
  tag: string;
  /**
   * Team fanclub id
   * @format int32
   */
  fanclubId: number;
  /** About */
  about?: string | null;
  /** Image url */
  imageUrl?: string | null;
  /** Social facebook */
  facebook?: string | null;
  /** Social twitter */
  twitter?: string | null;
  /** Social youtube */
  youtube?: string | null;
  /**
   * Follower count
   * @format int32
   */
  followerCount: number;
  /**
   * Elo rating
   * @format int32
   */
  eloRating: number;
  /**
   * World ranking
   * @format int32
   */
  eloRanking: number;
  /**
   * Steak
   * Greater than 0: loss streak
   * Less than 0: win streak
   */
  streak: number;
  /** Game region ranking */
  regionRanking?: GameRegionRanking | null;
  /** Earning prize */
  earningPrize: TeamEarningPrize;
  /** Game region */
  gameRegionId?: number | null;
  /** Game region name */
  gameRegionName?: string | null;
  /**
   * Game region ranking
   * @format int32
   */
  gameRegionRanking?: number | null;
  /**
   * Win count
   * @format int32
   */
  winCount: number;
  /**
   * Loss count
   * @format int32
   */
  lossCount: number;
  /**
   * Draw count
   * @format int32
   */
  drawCount: number;
  /** Team performance */
  teamPerformance: TeamPerformance;
  /**
   * Has followed
   * null: not login
   * true: login and followed
   * false: login and not follow
   */
  hasFollowed?: boolean | null;
  /** Has vods */
  hasVods: boolean;
  /** Has news */
  hasNews: boolean;
  /** Has performance */
  hasPerformance: boolean;
  /** Has top achievements */
  hasTopAchievements: boolean;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /** Game */
  game?: GameBasicInfo | null;
  /** Game id */
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
  /** Site section */
  siteSection?: SiteSectionBasicInfo | null;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /** Country */
  country?: Country | null;
  /** Team Grid Id */
  gridId?: string | null;
  /** Country id */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Country code */
  countryCode?: string | null;
  /** Flag image url */
  flagImageUrl?: string | null;
  /** Players */
  players: TeamPlayerListItem[];
}

export interface TeamEarningPrize {
  /** Prize pool currency */
  prizePoolCurrency: EnumCurrency;
  /**
   * Prize pool currency name
   * @minLength 1
   */
  prizePoolCurrencyName: string;
  /**
   * Prize pool currency code
   * @minLength 1
   */
  prizePoolCurrencyCode: string;
  /**
   * Prize amount - USD
   * @format decimal
   */
  prizeAmountUsd: number;
}

export interface TeamPerformance {
  /**
   * Win count
   * @format int32
   */
  winCount: number;
  /**
   * Loss count
   * @format int32
   */
  lossCount: number;
  /**
   * Draw count
   * @format int32
   */
  drawCount: number;
  /**
   * Total match count
   * @format int32
   */
  totalMatchCount: number;
  /**
   * Win rate
   * @format decimal
   */
  winRate: number;
}

export interface TeamPlayerListItem {
  /**
   * Player id
   * @format int32
   */
  id: number;
  /**
   * Player name
   * @minLength 1
   */
  name: string;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /** Image url */
  imageUrl?: string | null;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Join team at
   * @format int64
   */
  fromAt: number;
  /**
   * Left team at
   * @format int64
   */
  toAt?: number | null;
  /** Game */
  game?: GameBasicInfo | null;
  /** Primary game id */
  primaryGameId?: number | null;
  /** Game name */
  gameName?: string | null;
  /** Game url safe name */
  gameUrlSafeName?: string | null;
  /** Site section */
  siteSection?: SiteSectionBasicInfo | null;
  /** Site section id */
  siteSectionId?: number | null;
  /** Site section name */
  siteSectionName?: string | null;
  /** Site section url safe name */
  siteSectionUrlSafeName?: string | null;
  /** Country */
  country?: Country | null;
  /** Country id */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Country code */
  countryCode?: string | null;
  /** Flag image url */
  flagImageUrl?: string | null;
}

export type ApiRespBaseOfGetVodsByTeamResp = ApiRespBase & {
  data?: GetVodsByTeamResp | null;
};

export interface GetVodsByTeamResp {
  /** Vods */
  vods: VodItem[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetArticlesByTeamResp = ApiRespBase & {
  data?: GetArticlesByTeamResp | null;
};

export interface GetArticlesByTeamResp {
  /** Articles */
  articles: ArticleListItem[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetPlayersByTeamResp = ApiRespBase & {
  data?: GetPlayersByTeamResp | null;
};

export interface GetPlayersByTeamResp {
  /** Live players */
  livePlayers: TeamPlayerListItem[];
  /** Players */
  players: TeamPlayerListItem[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetPerformanceByTeamResp = ApiRespBase & {
  data?: GetPerformanceByTeamResp | null;
};

export interface GetPerformanceByTeamResp {
  all: TeamPerformance;
  /** Last 2 months */
  last2Months: TeamPerformanceMonth[];
  /** Last 12 months */
  last12Months: TeamPerformanceMonth[];
  /** Last rating changes */
  lastRatingChanges: TeamRatingChange[];
  /** Last 3 match infos */
  last3MatchInfos: SimpleTeamMatchInfo[];
}

export interface TeamPerformanceMonth {
  /**
   * Team id
   * @format int32
   */
  id: number;
  /**
   * Year
   * @format int32
   */
  year: number;
  /**
   * Month
   * @format int32
   */
  month: number;
  /**
   * Settle time
   * @format int64
   */
  settleTime: number;
  /**
   * Win count
   * @format int32
   */
  winCount: number;
  /**
   * Loss count
   * @format int32
   */
  lossCount: number;
  /**
   * Draw count
   * @format int32
   */
  drawCount: number;
  /**
   * Total match count
   * @format int32
   */
  totalMatchCount: number;
  /**
   * Win rate
   * @format decimal
   */
  winRate: number;
  /**
   * Loss rate
   * @format decimal
   */
  lossRate?: number;
}

export type SimpleTeamMatchInfo = TeamMatchInfo & {
  /** Parent game id */
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
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
};

export type ApiRespBaseOfGetTopAchievementsByTeamResp = ApiRespBase & {
  data?: GetTopAchievementsByTeamResp | null;
};

export interface GetTopAchievementsByTeamResp {
  /** Offline top achievements */
  offlineTopAchievements: TeamAchievementTournament[];
  /** Online top achievements */
  onlineTopAchievements: TeamAchievementTournament[];
}

export type ApiRespBaseOfGetHistoryByTeamResp = ApiRespBase & {
  data?: GetHistoryByTeamResp | null;
};

export interface GetHistoryByTeamResp {
  /** Team info */
  team?: SimpleTeam;
  /** Last rating changes */
  lastRatingChanges: TeamRatingChange[];
  /** Last 3 match infos */
  last3MatchInfos: TeamMatchInfo[];
}

export interface SimpleTeam {
  /**
   * Team id
   * @format int32
   */
  id: number;
  /**
   * Team name
   * @minLength 1
   */
  name: string;
  /**
   * Team url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /**
   * Team tag
   * @minLength 1
   */
  tag: string;
  /**
   * World ranking
   * @format int32
   */
  eloRanking: number;
  /** Image url */
  imageUrl?: string | null;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /** Game */
  game?: GameBasicInfo | null;
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export type ApiRespBaseOfGetGridTeamStatsResp = ApiRespBase & {
  data?: GetGridTeamStatsResp | null;
};

export interface GetGridTeamStatsResp {
  /**
   * Matches Played
   * @format int32
   */
  matchesPlayed: number;
  kills: GridStatistics;
  killAssistsGiven: GridStatistics;
  killAssistsReceived: GridStatistics;
  teamkills: GridStatistics;
  teamkillAssistsGiven: GridStatistics;
  teamkillAssistsReceived: GridStatistics;
  selfkills: GridStatistics;
  deaths: GridStatistics;
  structuresDestroyed: GridStatistics;
  structuresCaptured: GridStatistics;
  score: GridStatistics;
}

export enum EnumTournamentState {
  All = 1,
  Ongoing = 2,
  Upcoming = 3,
  Past = 4,
  Featured = 5,
}

export type ApiRespBaseOfGetParentDetailResp = ApiRespBase & {
  data?: GetParentDetailResp | null;
};

export interface GetParentDetailResp {
  /** Parent tournament detail */
  parentDetail: ParentDetail;
  /** Has news */
  hasNews: boolean;
  /** Has broadcast talents */
  hasBroadcastTalents: boolean;
  /** Has venus */
  hasVenue: boolean;
  /** Has participants */
  hasParticipants: boolean;
  /** Vods */
  hasVods: boolean;
  /** Streams */
  hasStreams: boolean;
  /** Can edit tournament */
  canEditTournaments: boolean;
  /**
   * Return url
   * @minLength 1
   */
  returnUrl: string;
}

export interface ParentDetail {
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
  /**
   * Parent url safe name
   * @minLength 1
   */
  parentUrlSafeName: string;
  /** Parent game id */
  gameId: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /** Site section id */
  siteSectionId: number;
  /**
   * Site section name
   * @minLength 1
   */
  siteSectionName: string;
  /**
   * Site section url safe name
   * @minLength 1
   */
  siteSectionUrlSafeName: string;
  /** Parent image url */
  imageUrl?: string | null;
  /** Description */
  description?: string | null;
  /** Team size */
  teamSize: number;
  /** Prize pool currency */
  prizePoolCurrency?: EnumCurrency | null;
  /** Prize pool currency name */
  prizePoolCurrencyName?: string | null;
  /** Prize pool currency code */
  prizePoolCurrencyCode?: string | null;
  /**
   * Prize pool (Locale currency)
   * @format decimal
   */
  prizePool?: number | null;
  /**
   * Prize pool (USD)
   * @format decimal
   */
  prizePoolUsd?: number | null;
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
   * Venue country id
   * @format int32
   */
  venueCountryId?: number | null;
  /** Venue country name */
  venueCountryName?: string | null;
  /** Venue country code */
  venueCountryCode?: string | null;
  /** Status */
  status?: EnumTournamentStatus;
  /** Status name */
  statusName?: string;
  /**
   * Starting at
   * @format int64
   */
  startingAt?: number | null;
  /** Parent tournament sponsors */
  sponsors?: ItemOfShort[] | null;
  /** Parent tournament stages */
  stages: StageItem[];
  /** Simple child tournaments for more participants */
  children: SimpleChildListItem[];
}

export type StageItem = OrderItemOfInteger & {
  /**
   * Stage status
   * 0: Not yet start
   * 1: Progressing
   * 2: Completed
   */
  status?: EnumStageStatus;
  /** Stage status name */
  statusName?: string;
};

export enum EnumStageStatus {
  NotYetStart = 0,
  Progressing = 1,
  Completed = 2,
}

export type OrderItemOfInteger = ItemOfInteger & {
  /** @format int32 */
  id: number;
  order: number;
  /**
   * @minLength 1
   * @maxLength 80
   */
  name: string;
};

export interface SimpleChildListItem {
  /**
   * Parent id
   * @format int32
   */
  parentId?: number;
  /**
   * Stage id
   * @format int32
   */
  stageId?: number;
  /** Stage name */
  stageName?: string;
  /**
   * Child id
   * @format int32
   */
  childId?: number;
  /** Child name */
  childName?: string;
}

export type ApiRespBaseOfGetChildrenByStageResp = ApiRespBase & {
  data?: GetChildrenByStageResp | null;
};

export interface GetChildrenByStageResp {
  /** Child tournaments */
  childTournaments: ChildListItem[];
  /** Child prize pool */
  childPrizePools: ChildPrizePoolListItem[];
}

export interface ChildListItem {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
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
   * Child id
   * @format int32
   */
  childId: number;
  /**
   * Child name
   * @minLength 1
   */
  childName: string;
  /** Child type */
  type: EnumChildTournament;
  /**
   * Child type name
   * @minLength 1
   */
  typeName: string;
  /**
   * Child result type name
   * @minLength 1
   */
  resultTypeName: string;
  /** Child status */
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
  startingAt?: number | null;
  /** Participants */
  participants: ParticipantListItem[];
}

export interface ParticipantListItem {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
  /**
   * Child id (Exist if by child to query)
   * @format int32
   */
  childId?: number | null;
  /** Opponent type */
  opponentType: EnumOpponentType;
  /**
   * Opponent type name
   * @minLength 1
   */
  opponentTypeName: string;
  /**
   * Player or team id
   * @format int32
   */
  id: number;
  /**
   * Player or team name
   * @minLength 1
   */
  name: string;
  /**
   * Player or team tag
   * @minLength 1
   */
  tag: string;
  /**
   * Player or team url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /** Logo image url */
  imageUrl?: string | null;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Ranking for team
   * @format int32
   */
  ranking?: number | null;
  /** Country */
  country?: Country;
  /** Country id */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Country code */
  countryCode?: string | null;
  /** Flag image url */
  flagImageUrl?: string | null;
  gameId?: number;
}

export interface ChildPrizePoolListItem {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
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
   * Child id
   * @format int32
   */
  childId: number;
  /**
   * Child name
   * @minLength 1
   */
  childName: string;
  /** Placements */
  placements: ChildPlacementListItem[];
}

export interface ChildPlacementListItem {
  /**
   * Placement id
   * @format int32
   */
  placementId: number;
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
  /**
   * Stage id
   * @format int32
   */
  stageId: number;
  /**
   * Child id
   * @format int32
   */
  childId: number;
  /**
   * Child name
   * @minLength 1
   */
  childName: string;
  /** Prize pool currency */
  prizePoolCurrency: EnumCurrency;
  /**
   * Prize pool currency name
   * @minLength 1
   */
  prizePoolCurrencyName: string;
  /**
   * Prize pool currency code
   * @minLength 1
   */
  prizePoolCurrencyCode: string;
  /** Placement from */
  placementFrom: number;
  /** Placement to */
  placementTo: number;
  /**
   * Prize amount
   * @format decimal
   */
  prizeAmount: number;
  /** Winners */
  winners: DistributionWinner[];
}

export interface DistributionWinner {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
  /**
   * Child id (Exist if by child to query)
   * @format int32
   */
  childId?: number | null;
  /** Opponent type */
  opponentType: EnumOpponentType;
  /**
   * Opponent type name
   * @minLength 1
   */
  opponentTypeName: string;
  /**
   * Player or team id
   * @format int32
   */
  id: number;
  /**
   * Player or team name
   * @minLength 1
   */
  name: string;
  /**
   * Player or team tag
   * @minLength 1
   */
  tag: string;
  /**
   * Player or team url safe name
   * @minLength 1
   */
  urlSafeName: string;
  /** Logo image url */
  imageUrl?: string | null;
  /**
   * Url
   * @minLength 1
   */
  url: string;
  /**
   * Ranking for team
   * @format int32
   */
  ranking?: number | null;
  /** Country */
  country?: Country;
  /** Country id */
  countryId?: number | null;
  /** Country name */
  countryName?: string | null;
  /** Country code */
  countryCode?: string | null;
  /** Flag image url */
  flagImageUrl?: string | null;
}

export type ApiRespBaseOfGetParentArticlesResp = ApiRespBase & {
  data?: GetParentArticlesResp | null;
};

export interface GetParentArticlesResp {
  /** Articles */
  articles: ArticleListItem[];
}

export type ApiRespBaseOfGetParentBroadcastTalentsResp = ApiRespBase & {
  data?: GetParentBroadcastTalentsResp | null;
};

export interface GetParentBroadcastTalentsResp {
  /** Broadcast talents */
  broadcastTalents: BroadcastTalentListItem[];
}

export type ApiRespBaseOfGetParentVenueResp = ApiRespBase & {
  data?: GetParentVenueResp | null;
};

export interface GetParentVenueResp {
  /** Parent tournament venue */
  venue: VenueDetail;
}

export interface VenueDetail {
  /**
   * Parent id
   * @format int32
   */
  parentId: number;
  /**
   * Venue id
   * @format int32
   */
  venueId: number;
  /**
   * Venue name
   * @minLength 1
   */
  name: string;
  /**
   * Venue city
   * @minLength 1
   */
  city: string;
  /** Venue country id */
  countryId: number;
  /**
   * Country name
   * @minLength 1
   */
  countryName: string;
  /** Address */
  address?: string | null;
  /** Image url */
  imageUrl?: string | null;
}

export type ApiRespBaseOfGetChildParticipantsResp = ApiRespBase & {
  data?: GetChildParticipantsResp | null;
};

export interface GetChildParticipantsResp {
  /** Participants */
  participants: ParticipantListItem[];
}

export type ApiRespBaseOfGetParentVodsResp = ApiRespBase & {
  data?: GetParentVodsResp | null;
};

export interface GetParentVodsResp {
  /** Vods */
  vods: VodItem[];
  /** Paging */
  paging: PagingRespBase;
}

export type ApiRespBaseOfGetParentStreamsResp = ApiRespBase & {
  data?: GetParentStreamsResp | null;
};

export interface GetParentStreamsResp {
  /** Streams */
  streams: ParentStreamListItem[];
}

export interface ParentStreamListItem {
  /**
   * Media stream id
   * @format int32
   */
  id: number;
  /** Platform */
  platform: EnumPlatform;
  /**
   * Platform name
   * @minLength 1
   */
  platformName: string;
  /**
   * Stream id
   * @minLength 1
   */
  streamId: string;
  /** Is live */
  isLive: boolean;
  /**
   * Title
   * @minLength 1
   */
  title: string;
  /**
   * Url safe name
   * @minLength 1
   */
  urlSafeTitle: string;
  /** Screen cap url */
  screenCapUrl?: string | null;
  /** Language id */
  languageId: number;
  /**
   * Language
   * @minLength 1
   */
  language: string;
  /**
   * Language code
   * @minLength 1
   */
  languageCode: string;
  /**
   * Viewer count
   * @format int32
   */
  viewerCount: number;
  /**
   * View count
   * @format int32
   */
  viewCount: number;
  /** Game id */
  gameId: number;
  /**
   * Game name
   * @minLength 1
   */
  gameName: string;
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export type ApiRespBaseOfGetChildDisplayResp = ApiRespBase & {
  data?: GetChildDisplayResp | null;
};

export interface GetChildDisplayResp {
  /** @format int32 */
  parentTournamentId: number;
  /** @minLength 1 */
  parentUrlSafeName: string;
  /** @format int32 */
  childTournamentId: number;
  /** @minLength 1 */
  childTournamentName: string;
  childTournamentType: EnumChildTournament;
  pointsAwarded?: EnumPointsAwarded | null;
  qualifyParticipants?: number | null;
  /** @minLength 1 */
  gameUrlSafeName: string;
  rounds: ChildDisplayRound[];
  opponents?: ChildDisplayOpponent[] | null;
  replaceOpponents?: ChildDisplayReplaceOpponent[] | null;
}

export enum EnumPointsAwarded {
  PerGame = 0,
  PerMatch = 1,
  PerGameFull = 2,
  ByResultFull = 3,
  ByResult = 4,
}

export interface ChildDisplayRound {
  /** @format int32 */
  roundId: number;
  roundType: EnumRoundType;
  /** @minLength 1 */
  roundName: string;
  roundNumber: number;
  gamesPerMatch: number;
  isHidden: boolean;
  matches: ChildDisplayMatch[];
}

export enum EnumRoundType {
  Normal = 0,
  UpperBracket = 1,
  LowerBracket = 2,
  Tiebreaker = 3,
  ThirdPlacePlayoff = 4,
  EmptyUpperBracket = 5,
  EmptyLowerBracket = 6,
}

export interface ChildDisplayMatch {
  /** @format int32 */
  parentTournamentId: number;
  /** @minLength 1 */
  parentUrlSafeName: string;
  /** @minLength 1 */
  gameUrlSafeName: string;
  /** @format int32 */
  matchId: number;
  /** @minLength 1 */
  matchUrlSafeName: string;
  /** @format int64 */
  startingAt: number;
  /** @format int64 */
  internalStartingAt?: number;
  matchNumber: number;
  /** @format int32 */
  nextMatchId?: number | null;
  nextMatchPlacement?: number | null;
  /** @format int32 */
  winnerOpponentId?: number | null;
  isPlayerBase: boolean;
  /** @format int32 */
  teamCount: number;
  /** @format int32 */
  team1RegistrationId?: number | null;
  team1IsSeed?: boolean;
  team1IsQualification?: boolean;
  team1Tag?: string | null;
  team1Name?: string | null;
  team1Image?: string | null;
  team1Score?: number | null;
  /** @format int32 */
  team2RegistrationId?: number | null;
  team2IsSeed?: boolean;
  team2IsQualification?: boolean;
  team2Tag?: string | null;
  team2Name?: string | null;
  team2Image?: string | null;
  team2Score?: number | null;
  result?: EnumMatchResult | null;
  status?: EnumMatchStatus | null;
  hasResult?: boolean;
}

export interface ChildDisplayOpponent {
  /** @format int32 */
  registrationId: number;
  teamTag?: string | null;
  /** @minLength 1 */
  name: string;
  image?: string | null;
  /** @minLength 1 */
  urlSafeName: string;
  placement?: number | null;
  totalCount: number;
  winCount: number;
  drawCount: number;
  lossCount: number;
  points: number;
  opponentType: EnumOpponentType;
  /** @format int32 */
  sourceId: number;
}

export interface ChildDisplayReplaceOpponent {
  /** @minLength 1 */
  replacedOpponent: string;
  /** @minLength 1 */
  replacedByOpponent: string;
  /** @format int64 */
  replacementTime: number;
}

export type ApiRespBaseOfGetEmbedGroupResp = ApiRespBase & {
  data?: GetEmbedGroupResp | null;
};

export interface GetEmbedGroupResp {
  /** @format int32 */
  parentTournamentId: number;
  /** @format int32 */
  childTournamentId: number;
  /** @minLength 1 */
  childTournamentName: string;
  childTournamentType: EnumChildTournament;
  pointsAwarded?: EnumPointsAwarded | null;
  qualifyParticipants?: number | null;
  /** @minLength 1 */
  gameUrlSafeName: string;
  /** @minLength 1 */
  parentUrlSafeName: string;
  opponents?: ChildDisplayOpponent[] | null;
}

export type ApiRespBaseOfGetEmbedBracketResp = ApiRespBase & {
  data?: GetEmbedBracketResp | null;
};

export interface GetEmbedBracketResp {
  /** @format int32 */
  parentTournamentId: number;
  /** @format int32 */
  childTournamentId: number;
  /** @minLength 1 */
  childTournamentName: string;
  childTournamentType: EnumChildTournament;
  pointsAwarded?: EnumPointsAwarded | null;
  qualifyParticipants?: number | null;
  /** @minLength 1 */
  gameUrlSafeName: string;
  /** @minLength 1 */
  parentUrlSafeName: string;
  rounds: ChildDisplayRound[];
}

export type ApiRespBaseOfGetVodsResp = ApiRespBase & {
  data?: GetVodsResp | null;
};

export interface GetVodsResp {
  /** Vods */
  vods?: VodItem[] | null;
  /** Paging */
  paging?: PagingRespBase | null;
}

export type ApiRespBaseOfGetVodResp = ApiRespBase & {
  data?: GetVodResp | null;
};

export interface GetVodResp {
  /** Vod detail */
  vodDetail: VodItem;
}

export type ApiRespBaseOfObject = ApiRespBase & {
  data?: any;
};

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
  public baseUrl: string = "https://portal-api.staging.gosugamers.net";
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
 * @title PortalApi v6
 * @version v6
 * @baseUrl https://portal-api.staging.gosugamers.net
 *
 * This is a JWT authentication/authorization portal api for GosuGamers's frontend
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * No description
     *
     * @tags Account
     * @name AccountLogout
     * @summary Logout
     * @request POST:/api/v6/account/logout
     * @secure
     */
    accountLogout: (
      query?: {
        /** Refresh token */
        refreshToken?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfLogoutResp>({
        path: `/api/v6/account/logout`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountGetUserNotifications
     * @summary Get user notification
     * @request GET:/api/v6/account/notifications
     * @secure
     */
    accountGetUserNotifications: (
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
      this.request<any, ApiRespBaseOfGetUserNotificationsResp>({
        path: `/api/v6/account/notifications`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountDismissUserNotification
     * @summary Dismiss user notification
     * @request PATCH:/api/v6/account/notifications/{id}/dismiss
     * @secure
     */
    accountDismissUserNotification: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfDismissUserNotificationResp>({
        path: `/api/v6/account/notifications/${id}/dismiss`,
        method: "PATCH",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountGetUserProfile
     * @summary Get user profile
     * @request GET:/api/v6/account/setting-profile
     * @secure
     */
    accountGetUserProfile: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetUserProfileResp>({
        path: `/api/v6/account/setting-profile`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountModUserProfile
     * @summary Modify user profile
     * @request PATCH:/api/v6/account/setting-profile
     * @secure
     */
    accountModUserProfile: (
      data: {
        FirstName?: string | null;
        LastName?: string | null;
        Email?: string | null;
        CountryId?: number | null;
        AboutMe?: string | null;
        /** @format binary */
        AvatarImage?: File | null;
        Password?: string | null;
        PasswordVerify?: string | null;
        NewsletterOptedIn?: boolean | null;
        PromotionsOptedIn?: boolean | null;
        UpdatesOptedIn?: boolean | null;
        SendPmNotifications?: boolean | null;
        SendCommentNotifications?: boolean | null;
        PrimaryGameId?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfModUserProfileResp>({
        path: `/api/v6/account/setting-profile`,
        method: "PATCH",
        body: data,
        secure: true,
        type: ContentType.FormData,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountDelUserAccount
     * @summary Delete user profile
     * @request DELETE:/api/v6/account/setting-profile
     * @secure
     */
    accountDelUserAccount: (data: DelUserAccountReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfDelUserAccountResp>({
        path: `/api/v6/account/setting-profile`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountModUserPassword
     * @summary Modify user password
     * @request PATCH:/api/v6/account/password
     * @secure
     */
    accountModUserPassword: (data: ModPasswordReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfModPasswordResp>({
        path: `/api/v6/account/password`,
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
     * @name AccountGetUserFollow
     * @summary Get user follow
     * @request GET:/api/v6/account/setting-follow
     * @secure
     */
    accountGetUserFollow: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetFollowResp>({
        path: `/api/v6/account/setting-follow`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountAddFollow
     * @summary Add follow
     * @request POST:/api/v6/account/setting-follow
     * @secure
     */
    accountAddFollow: (data: SetFollowReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v6/account/setting-follow`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountRemoveFollow
     * @summary Remove follow
     * @request DELETE:/api/v6/account/setting-follow
     * @secure
     */
    accountRemoveFollow: (data: SetFollowReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v6/account/setting-follow`,
        method: "DELETE",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountModUserFollow
     * @summary Modify user follow
     * @request PATCH:/api/v6/account/setting-follow/{id}
     * @secure
     */
    accountModUserFollow: (id: number, data: ModFollowReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfModFollowReq>({
        path: `/api/v6/account/setting-follow/${id}`,
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
     * @name AccountDelUserFollow
     * @summary Delete user follow
     * @request DELETE:/api/v6/account/setting-follow/{id}
     * @secure
     */
    accountDelUserFollow: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfDelFollowResp>({
        path: `/api/v6/account/setting-follow/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountGetUserStreamOptions
     * @summary Get user stream options
     * @request GET:/api/v6/account/stream-options
     * @secure
     */
    accountGetUserStreamOptions: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfListOfGetUserStreamOptionsResp>({
        path: `/api/v6/account/stream-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountGetUserStreams
     * @summary Get user streams
     * @request GET:/api/v6/account/setting-stream
     * @secure
     */
    accountGetUserStreams: (
      query?: {
        /**
         * Page number (default : 1)
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
        /**
         * Page size (default : 10)
         * @format int32
         * @min 1
         * @max 20
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfListOfGetUserStreamsResp>({
        path: `/api/v6/account/setting-stream`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountAddUserStream
     * @summary Add user stream
     * @request POST:/api/v6/account/setting-stream
     * @secure
     */
    accountAddUserStream: (data: AddStreamReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfAddStreamResp>({
        path: `/api/v6/account/setting-stream`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountGetUserStreamDetail
     * @summary Get user stream detail
     * @request GET:/api/v6/account/setting-stream/{id}
     * @secure
     */
    accountGetUserStreamDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetUserStreamDetailResp>({
        path: `/api/v6/account/setting-stream/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountModUserStream
     * @summary Modify user stream
     * @request PATCH:/api/v6/account/setting-stream/{id}
     * @secure
     */
    accountModUserStream: (id: number, data: ModStreamReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfModStreamResp>({
        path: `/api/v6/account/setting-stream/${id}`,
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
     * @name AccountDelUserStream
     * @summary Del user stream
     * @request DELETE:/api/v6/account/setting-stream/{id}
     * @secure
     */
    accountDelUserStream: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfDelStreamResp>({
        path: `/api/v6/account/setting-stream/${id}`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountCompleteRegistration
     * @summary Complete registration
     * @request PATCH:/api/v6/account/complete-registration
     * @secure
     */
    accountCompleteRegistration: (data: CompleteRegistrationReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v6/account/complete-registration`,
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
     * @name ArticlesGetArticlesV6
     * @summary Get articles by condition V6
     * @request GET:/api/v6/articles
     * @secure
     */
    articlesGetArticlesV6: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Article type
         * @min 1
         * @max 3
         */
        ArticleType?: EnumArticleType | null;
        /** Is featured articles */
        IsFeatured?: boolean;
        /** Is popular articles */
        IsPopular?: boolean;
        /**
         * Related player id
         * @format int32
         */
        PlayerId?: number | null;
        /**
         * Related team id
         * @format int32
         */
        TeamId?: number | null;
        /**
         * Related tournament id
         * @format int32
         */
        TournamentId?: number | null;
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
      this.request<any, ApiRespBaseOfGetArticlesV6Resp>({
        path: `/api/v6/articles`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticlesV62
     * @summary Get articles by condition V6
     * @request GET:/api/v6/articles/{siteSectionName}
     * @secure
     */
    articlesGetArticlesV62: (
      siteSectionName: string,
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Article type
         * @min 1
         * @max 3
         */
        ArticleType?: EnumArticleType | null;
        /** Is featured articles */
        IsFeatured?: boolean;
        /** Is popular articles */
        IsPopular?: boolean;
        /**
         * Related player id
         * @format int32
         */
        PlayerId?: number | null;
        /**
         * Related team id
         * @format int32
         */
        TeamId?: number | null;
        /**
         * Related tournament id
         * @format int32
         */
        TournamentId?: number | null;
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
      this.request<any, ApiRespBaseOfGetArticlesV6Resp>({
        path: `/api/v6/articles/${siteSectionName}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
 * No description
 *
 * @tags Articles
 * @name ArticlesGetArticlesByType
 * @summary Get articles by type
type:
    - 0: All
    - 1: News
    - 2: Featured
    - 3: Guide
 * @request GET:/api/v6/articles/type/{type}
 * @secure
 */
    articlesGetArticlesByType: (
      type: number,
      query?: {
        /**
         * Section id
         * @min 0
         * @max 32767
         */
        SectionId?: number | null;
        /**
         * Related player id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PlayerId?: number | null;
        /**
         * Related team id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        TeamId?: number | null;
        /**
         * Related parent tournament id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        TournamentId?: number | null;
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
      this.request<any, ApiRespBaseOfGetArticlesResp>({
        path: `/api/v6/articles/type/${type}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticleDetailV6
     * @summary Get article details V6
     * @request GET:/api/v6/articles/{id}
     * @secure
     */
    articlesGetArticleDetailV6: (
      id: number,
      query?: {
        /**
         * @minLength 0
         * @maxLength 64
         */
        hash?: string | null;
        relatedSize?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetArticleDetailV6Resp>({
        path: `/api/v6/articles/${id}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticleDetailV62
     * @summary Get article details V6
     * @request GET:/api/v6/articles/detail/{id}
     * @secure
     */
    articlesGetArticleDetailV62: (
      id: number,
      query?: {
        /**
         * @minLength 0
         * @maxLength 64
         */
        hash?: string | null;
        relatedSize?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetArticleDetailV6Resp>({
        path: `/api/v6/articles/detail/${id}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticleDetailMetaTags
     * @summary Get article detail meta tags
     * @request GET:/api/v6/articles/{id}/meta-tags
     * @secure
     */
    articlesGetArticleDetailMetaTags: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetArticleDetailMetaTagsResp>({
        path: `/api/v6/articles/${id}/meta-tags`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticleDetailJsonLd
     * @summary Get article detail json
     * @request GET:/api/v6/articles/{id}/json-ld
     * @secure
     */
    articlesGetArticleDetailJsonLd: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetArticleJsonLDResp>({
        path: `/api/v6/articles/${id}/json-ld`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticleDetailV63
     * @summary Get article detail V6
     * @request GET:/api/v6/articles/{siteSectionName}/{id}
     * @secure
     */
    articlesGetArticleDetailV63: (
      siteSectionName: string,
      id: number,
      query?: {
        /**
         * @minLength 0
         * @maxLength 64
         */
        hash?: string | null;
        relatedSize?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetArticleDetailV6Resp>({
        path: `/api/v6/articles/${siteSectionName}/${id}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticleQuickPoll
     * @summary Get article quick poll
     * @request GET:/api/v6/articles/{id}/quick-poll
     * @secure
     */
    articlesGetArticleQuickPoll: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetQuickPollResp>({
        path: `/api/v6/articles/${id}/quick-poll`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticleQuickPoll2
     * @summary Get article quick poll
     * @request GET:/api/v6/articles/quick-poll/{id}
     * @secure
     */
    articlesGetArticleQuickPoll2: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetQuickPollResp>({
        path: `/api/v6/articles/quick-poll/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticleRelatedDataV6
     * @summary Get article related data V6
     * @request GET:/api/v6/articles/{id}/related
     * @secure
     */
    articlesGetArticleRelatedDataV6: (
      id: number,
      query?: {
        pageSize?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetArticleRelatedDataV6Resp>({
        path: `/api/v6/articles/${id}/related`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetTopArticles
     * @summary Get V6 top articles by condition
     * @request GET:/api/v6/articles/top-articles
     * @secure
     */
    articlesGetTopArticles: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetTopArticlesResp>({
        path: `/api/v6/articles/top-articles`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetTopArticles2
     * @summary Get V6 top articles by condition
     * @request GET:/api/v6/articles/{siteSectionName}/top-articles
     * @secure
     */
    articlesGetTopArticles2: (siteSectionName: string, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetTopArticlesResp>({
        path: `/api/v6/articles/${siteSectionName}/top-articles`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name BroadcastTalentsGetBroadcastTalents
     * @summary Get broadcast talents
     * @request GET:/api/v6/broadcasttalents
     * @secure
     */
    broadcastTalentsGetBroadcastTalents: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Prefix name
         * @minLength 1
         * @maxLength 100
         */
        PrefixName?: string | null;
        /**
         * Role type
         * null: All
         * 1: Host
         * 2: Commentator
         * 3: Analyst
         * 4: Observer
         * 5: Interviewer
         * 99: Other
         * @min 1
         * @max 99
         */
        RoleType?: EnumBroadcastTalentType | null;
        /**
         * Language type
         * null: All
         * @min 1
         * @max 32767
         */
        LanguageId?: number | null;
        /**
         * Status
         * 1: Retired
         * 2: Active
         * @min 1
         * @max 2
         */
        Status?: EnumBroadcastTalentStatus | null;
        /**
         * Page size
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetBroadcastTalentsResp>({
        path: `/api/v6/broadcasttalents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name BroadcastTalentsGetBroadcastTalent
     * @summary Get broadcast talent detail
     * @request GET:/api/v6/broadcasttalents/{broadcastTalentId}
     * @secure
     */
    broadcastTalentsGetBroadcastTalent: (
      broadcastTalentId: number,
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetBroadcastTalentDetailResp>({
        path: `/api/v6/broadcasttalents/${broadcastTalentId}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name BroadcastTalentsGetParentsByBroadcastTalent
     * @summary Get parent tournaments by broadcast talent
     * @request GET:/api/v6/broadcasttalents/{broadcastTalentId}/parents
     * @secure
     */
    broadcastTalentsGetParentsByBroadcastTalent: (
      broadcastTalentId: number,
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
      this.request<any, ApiRespBaseOfGetParentsResp>({
        path: `/api/v6/broadcasttalents/${broadcastTalentId}/parents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name BroadcastTalentsGetPersonalStreamByBroadcastTalent
     * @summary Get personal stream by broadcast talent
     * @request GET:/api/v6/broadcasttalents/{broadcastTalentId}/personal-stream
     * @secure
     */
    broadcastTalentsGetPersonalStreamByBroadcastTalent: (broadcastTalentId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetStreamByBroadcastTalentResp>({
        path: `/api/v6/broadcasttalents/${broadcastTalentId}/personal-stream`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name BroadcastTalentsGetVodsByBroadcastTalent
     * @summary Get vods by broadcast talent
     * @request GET:/api/v6/broadcasttalents/{broadcastTalentId}/vods
     * @secure
     */
    broadcastTalentsGetVodsByBroadcastTalent: (
      broadcastTalentId: number,
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Page size
         * @format int32
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetVodsByBroadcastTalentResp>({
        path: `/api/v6/broadcasttalents/${broadcastTalentId}/vods`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags BroadcastTalents
     * @name BroadcastTalentsGetSiteSectionOptionsByBroadcastTalents
     * @summary Get site section options by broadcast talents
     * @request GET:/api/v6/broadcasttalents/site-section-options
     * @secure
     */
    broadcastTalentsGetSiteSectionOptionsByBroadcastTalents: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetBroadcastTalentSiteSectionOptionsResp>({
        path: `/api/v6/broadcasttalents/site-section-options`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name EventsGetEventPage
     * @summary Get event page
     * @request GET:/api/v6/events/{id}
     * @secure
     */
    eventsGetEventPage: (
      id: number,
      query?: {
        /**
         * Page id
         * If null, get main page data
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageId?: number | null;
        /**
         * Preview hash
         * If preview, needs to pass hash param
         * @minLength 0
         * @maxLength 64
         */
        Hash?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetEventPageResp>({
        path: `/api/v6/events/${id}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name EventsGetEventBoxParticipants
     * @summary Get event box participants
     * @request GET:/api/v6/events/{id}/boxes/{boxId}/participants
     * @secure
     */
    eventsGetEventBoxParticipants: (
      id: number,
      boxId: number,
      query?: {
        /**
         * Parent id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentId?: number | null;
        /**
         * Country id
         * @min 1
         * @max 32767
         */
        CountryId?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetEventBoxParticipantsResp>({
        path: `/api/v6/events/${id}/boxes/${boxId}/participants`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name EventsGetEventBoxParents
     * @summary Get event box parent tournaments
     * @request GET:/api/v6/events/{id}/boxes/{boxId}/parents
     * @secure
     */
    eventsGetEventBoxParents: (
      id: number,
      boxId: number,
      query?: {
        /** Game id */
        GameId?: number | null;
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
      this.request<any, ApiRespBaseOfGetEventBoxParentsResp>({
        path: `/api/v6/events/${id}/boxes/${boxId}/parents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Events
     * @name EventsGetCountriesByEventBox
     * @summary Get countries by parent tournaments
     * @request GET:/api/v6/events/{id}/boxes/{boxId}/countries
     * @secure
     */
    eventsGetCountriesByEventBox: (
      id: number,
      boxId: number,
      query?: {
        /**
         * Parent id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentId?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetEventBoxCountriesResp>({
        path: `/api/v6/events/${id}/boxes/${boxId}/countries`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags FeatureTeam
     * @name FeatureTeamGetFeatureTeamLiveStream
     * @summary Get feature team live stream
     * @request GET:/api/v6/feature-team/live-stream
     * @secure
     */
    featureTeamGetFeatureTeamLiveStream: (
      query?: {
        /**
         * Team id
         * @format int32
         */
        TeamId?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetLiveStreamResp>({
        path: `/api/v6/feature-team/live-stream`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Frontends
     * @name FrontendsGetSiteSectionBanners
     * @summary Get core frontend banners
     * @request GET:/api/v6/frontends/banners
     * @secure
     */
    frontendsGetSiteSectionBanners: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetSiteSectionBannersResp>({
        path: `/api/v6/frontends/banners`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Links
     * @name LinksRedirectUrl2
     * @summary Redirect to original url
     * @request GET:/api/links/redirect
     * @secure
     */
    linksRedirectUrl2: (
      query?: {
        url?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/api/links/redirect`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Log
     * @name LogAddLog
     * @summary Add log
     * @request POST:/api/v6/log
     * @secure
     */
    logAddLog: (data: AddLogReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfAddLogResp>({
        path: `/api/v6/log`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetMatchDetail
     * @summary Get match detail
     * @request GET:/api/v6/matches
     * @secure
     */
    matchesGetMatchDetail: (
      query: {
        /**
         * Child tournament Match Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        MatchId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetMatchDetailResp>({
        path: `/api/v6/matches`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetMatchGameDetail
     * @summary Get match-game detail
     * @request GET:/api/v6/matches/match-game
     * @secure
     */
    matchesGetMatchGameDetail: (
      query: {
        /**
         * Child tournament Match-Game Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        GameId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetMatchGameDetailResp>({
        path: `/api/v6/matches/match-game`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetMatchesUpcoming
     * @summary Get matches upcoming
     * @request GET:/api/v6/matches/upcoming
     * @secure
     */
    matchesGetMatchesUpcoming: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
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
      this.request<any, ApiRespBaseOfGetMatchesUpcomingResp>({
        path: `/api/v6/matches/upcoming`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetMatchesResults
     * @summary Get matches results
     * @request GET:/api/v6/matches/results
     * @secure
     */
    matchesGetMatchesResults: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
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
      this.request<any, ApiRespBaseOfGetMatchesResultResp>({
        path: `/api/v6/matches/results`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetMatchTickerUpcoming
     * @summary Get match ticker upcoming
     * @request GET:/api/v6/matches/match-ticker/upcoming
     * @secure
     */
    matchesGetMatchTickerUpcoming: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Parent tournament id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentTournamentId?: number | null;
        /**
         * Team id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        TeamId?: number | null;
        /**
         * Player id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PlayerId?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfListOfGetUpcomingResp>({
        path: `/api/v6/matches/match-ticker/upcoming`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetMatchTickerResults
     * @summary Get match ticker results
     * @request GET:/api/v6/matches/match-ticker/results
     * @secure
     */
    matchesGetMatchTickerResults: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Parent tournament id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentTournamentId?: number | null;
        /**
         * Team id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        TeamId?: number | null;
        /**
         * Player id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PlayerId?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfListOfGetResultsResp>({
        path: `/api/v6/matches/match-ticker/results`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetTeamsMatchesResults
     * @summary Get team all matches result
     * @request GET:/api/v6/matches/teams/results
     * @secure
     */
    matchesGetTeamsMatchesResults: (
      query: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        TeamId: number;
        /**
         * @min 2000
         * @max 2100
         */
        Year?: number | null;
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
      this.request<any, ApiRespBaseOfGetTeamMatchResultResp>({
        path: `/api/v6/matches/teams/results`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetPlayersMatchesResults
     * @summary Get player all matches result
     * @request GET:/api/v6/matches/players/results
     * @secure
     */
    matchesGetPlayersMatchesResults: (
      query: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PlayerId: number;
        /**
         * @min 2000
         * @max 2100
         */
        Year?: number | null;
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
      this.request<any, ApiRespBaseOfGetPlayerMatchResultResp>({
        path: `/api/v6/matches/players/results`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetUserStreamOptions
     * @summary Add stream to match
     * @request POST:/api/v6/matches/streams
     * @secure
     */
    matchesGetUserStreamOptions: (data: AddStreamToMatchReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v6/matches/streams`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetMatchStreams
     * @summary Get match streams
     * @request GET:/api/v6/matches/streams
     * @secure
     */
    matchesGetMatchStreams: (
      query: {
        /**
         * Child tournament Match Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        MatchId: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfListOfGetMatchStreamsResp>({
        path: `/api/v6/matches/streams`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetTeamMatchEncounters
     * @summary Get match counters by two teams
     * @request GET:/api/v6/matches/encounters
     * @secure
     */
    matchesGetTeamMatchEncounters: (
      query: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Child tournament Match Id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        MatchId: number;
        /**
         * Opponent 1 team id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Op1Id: number;
        /**
         * Opponent 2 team id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Op2Id: number;
        /**
         * Count
         * @format int32
         * @min 1
         * @max 1000
         */
        Count: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetTeamMatchEncountersResp>({
        path: `/api/v6/matches/encounters`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetUpcomingMatchesExternal
     * @summary Get upcoming matches for external users
     * @request GET:/api/v6/matches/external
     * @secure
     */
    matchesGetUpcomingMatchesExternal: (
      query: {
        /**
         * @minLength 0
         * @maxLength 32
         */
        ApiKey: string;
        /**
         * @minLength 0
         * @maxLength 40
         */
        Game: string;
        /**
         * @format int32
         * @min 1
         * @max 25
         */
        MaxResults: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfListOfGetMatchesExternalResp>({
        path: `/api/v6/matches/external`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetEventMatchesUpcoming
     * @summary Get matches upcoming for event
     * @request GET:/api/v6/matches/event/upcoming
     * @secure
     */
    matchesGetEventMatchesUpcoming: (
      query: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        EventBoxId: number;
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
      this.request<any, ApiRespBaseOfGetEventMatchUpcomingResp>({
        path: `/api/v6/matches/event/upcoming`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetEventMatchesResults
     * @summary Get matches results for event
     * @request GET:/api/v6/matches/event/results
     * @secure
     */
    matchesGetEventMatchesResults: (
      query: {
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        EventBoxId: number;
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
      this.request<any, ApiRespBaseOfGetEventMatchResultResp>({
        path: `/api/v6/matches/event/results`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Matches
     * @name MatchesGetMlbbBattleData
     * @summary Get MLBB battle data
     * @request GET:/api/v6/matches/mlbb/battle-data
     * @secure
     */
    matchesGetMlbbBattleData: (
      query: {
        /**
         * MLBB Battle Id
         * @minLength 0
         * @maxLength 30
         */
        BattleId: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetMLBBBattleDataResp>({
        path: `/api/v6/matches/mlbb/battle-data`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Members
     * @name MembersGetMember
     * @summary Get member detail
     * @request GET:/api/v6/members/{userId}
     * @secure
     */
    membersGetMember: (
      userId: number,
      query?: {
        /** Request */
        req?: GetMemberReq;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetMemberResp>({
        path: `/api/v6/members/${userId}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Members
     * @name MembersGetMemberArticles
     * @summary Get member articles
     * @request GET:/api/v6/members/{userId}/articles
     * @secure
     */
    membersGetMemberArticles: (
      userId: number,
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
      this.request<any, ApiRespBaseOfGetMemberArticlesResp>({
        path: `/api/v6/members/${userId}/articles`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name OptionsGetCountryOptions
     * @summary Get country options
     * @request GET:/api/v6/options/countries
     * @secure
     */
    optionsGetCountryOptions: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetCountryOptionsResp>({
        path: `/api/v6/options/countries`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name OptionsGetGameOptions
     * @summary Get game options
     * @request GET:/api/v6/options/games
     * @secure
     */
    optionsGetGameOptions: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetGameOptionsResp>({
        path: `/api/v6/options/games`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name OptionsGetLanguageOptions
     * @summary Get language options
     * @request GET:/api/v6/options/languages
     * @secure
     */
    optionsGetLanguageOptions: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetLanguagesResp>({
        path: `/api/v6/options/languages`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name OptionsGetPlatformOptions
     * @summary Get platform options
     * @request GET:/api/v6/options/platforms
     * @secure
     */
    optionsGetPlatformOptions: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetPlatformOptionsResp>({
        path: `/api/v6/options/platforms`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name OptionsGetCurrencyOptions
     * @summary Get currencies
     * @request GET:/api/v6/options/currencies
     * @secure
     */
    optionsGetCurrencyOptions: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetCurrencyOptionsResp>({
        path: `/api/v6/options/currencies`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Options
     * @name OptionsGetGameRegionsByGame
     * @summary Get game regions by game
     * @request GET:/api/v6/options/{gameId}/game-regions
     * @secure
     */
    optionsGetGameRegionsByGame: (gameId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetGameRegionOptionsResp>({
        path: `/api/v6/options/${gameId}/game-regions`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Pages
     * @name PagesGetPage
     * @summary Get Page
     * @request GET:/api/v6/pages/{id}
     * @secure
     */
    pagesGetPage: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetPageResp>({
        path: `/api/v6/pages/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name PlayersGetPlayerDetail
     * @summary Get player detail
     * @request GET:/api/v6/players/{playerId}
     * @secure
     */
    playersGetPlayerDetail: (playerId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetPlayerDetailResp>({
        path: `/api/v6/players/${playerId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name PlayersGetVodsByPlayer
     * @summary Get vods by player
     * @request GET:/api/v6/players/{playerId}/vods
     * @secure
     */
    playersGetVodsByPlayer: (
      playerId: number,
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Page size
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetVodsByPlayerResp>({
        path: `/api/v6/players/${playerId}/vods`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name PlayersGetTeamGameOptionsByPlayer
     * @summary Get team game options by player
     * @request GET:/api/v6/players/{playerId}/team-games
     * @secure
     */
    playersGetTeamGameOptionsByPlayer: (playerId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetTeamGameOptionsByPlayerResp>({
        path: `/api/v6/players/${playerId}/team-games`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name PlayersGetPlayerTeamHistory
     * @summary Get player team histories
     * @request GET:/api/v6/players/{playerId}/team-histories
     * @secure
     */
    playersGetPlayerTeamHistory: (
      playerId: number,
      query: {
        /**
         * Game id
         * @min 1
         * @max 32767
         */
        GameId: number;
        /**
         * Page size
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetPlayerTeamHistoryResp>({
        path: `/api/v6/players/${playerId}/team-histories`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name PlayersGetPerformanceByPlayer
     * @summary Get performance by player
     * @request GET:/api/v6/players/{playerId}/performance
     * @secure
     */
    playersGetPerformanceByPlayer: (
      playerId: number,
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetPerformanceByPlayerResp>({
        path: `/api/v6/players/${playerId}/performance`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name PlayersGetTopAchievementsByTeam
     * @summary Get top achievements by player
     * @request GET:/api/v6/players/{playerId}/top-achievements
     * @secure
     */
    playersGetTopAchievementsByTeam: (
      playerId: number,
      query?: {
        /**
         * Offline count
         * @format int32
         * @min 1
         * @max 10
         */
        OfflineCount?: number | null;
        /**
         * Online count
         * @format int32
         * @min 1
         * @max 10
         */
        OnlineCount?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetTopAchievementsByPlayerResp>({
        path: `/api/v6/players/${playerId}/top-achievements`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name PlayersGetTeamHistoricalMatchStats
     * @summary Get player historical match statistics by grid
     * @request GET:/api/v6/players/{playerId}/grid-stats
     * @secure
     */
    playersGetTeamHistoricalMatchStats: (
      playerId: number,
      query: {
        /**
         * Grid Player Id
         * @minLength 0
         * @maxLength 12
         */
        GridId: string;
        /** grid statistics data time window */
        TimeWindow?: EnumGridTimeWindow;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetGridPlayerStatsResp>({
        path: `/api/v6/players/${playerId}/grid-stats`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name PlayersGetPlayerGames
     * @summary Get player play games
     * @request GET:/api/v6/players/{playerId}/games
     * @secure
     */
    playersGetPlayerGames: (playerId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetPlayerGamesResp>({
        path: `/api/v6/players/${playerId}/games`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Players
     * @name PlayersGetPlayerMatchHistory
     * @summary Get player match histories
     * @request GET:/api/v6/players/{playerId}/match-histories
     * @secure
     */
    playersGetPlayerMatchHistory: (
      playerId: number,
      query: {
        /**
         * @min 2000
         * @max 2050
         */
        Year: number;
        /**
         * @min 1
         * @max 32767
         */
        SiteSectionId: number;
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
      this.request<any, ApiRespBaseOfGetPlayerMatchHistoryResp>({
        path: `/api/v6/players/${playerId}/match-histories`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Polls
     * @name PollsAddPollVote
     * @summary Add poll vote
     * @request POST:/api/v6/polls/{id}/vote
     * @secure
     */
    pollsAddPollVote: (id: number, data: AddPollVoteReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfAddPollVoteResp>({
        path: `/api/v6/polls/${id}/vote`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Polls
     * @name PollsGetPollStandings
     * @summary Get poll standings
     * @request GET:/api/v6/polls/{id}/standings
     * @secure
     */
    pollsGetPollStandings: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetPollStandingsResp>({
        path: `/api/v6/polls/${id}/standings`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rankings
     * @name RankingsGetTeamRankings
     * @summary Get team rankings by game
     * @request GET:/api/v6/rankings/all
     * @secure
     */
    rankingsGetTeamRankings: (
      query?: {
        /**
         * Count
         * @format int32
         */
        Count?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetTeamRankingsResp>({
        path: `/api/v6/rankings/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rankings
     * @name RankingsGetTeamRankingsByGame
     * @summary Get team rankings by game
     * @request GET:/api/v6/rankings
     * @secure
     */
    rankingsGetTeamRankingsByGame: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Page size
         * @format int32
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetTeamRankingsByGameResp>({
        path: `/api/v6/rankings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Rankings
     * @name RankingsGetTeamRankingsByGameRegion
     * @summary Get team rankings by game region
     * @request GET:/api/v6/rankings/game-region
     * @secure
     */
    rankingsGetTeamRankingsByGameRegion: (
      query: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Game region id
         * @min 0
         * @max 32767
         */
        GameRegionId: number;
        /**
         * Prefix
         * @minLength 1
         * @maxLength 50
         */
        Prefix?: string | null;
        /**
         * Page size
         * @format int32
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetTeamRankingsByGameRegionResp>({
        path: `/api/v6/rankings/game-region`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Site
     * @name SiteGetSiteSettingsV6
     * @summary Get Site Settings V6
     * @request GET:/api/v6/site/settings
     * @secure
     */
    siteGetSiteSettingsV6: (
      query?: {
        /**
         * @minLength 1
         * @maxLength 32
         */
        tk?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetSiteSettingsV6Resp>({
        path: `/api/v6/site/settings`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Site
     * @name SiteGetSiteSettingsByLocaleV6
     * @summary Get Site Settings by locale V6
     * @request GET:/api/v6/site/settings-by-locale
     * @secure
     */
    siteGetSiteSettingsByLocaleV6: (
      query: {
        /**
         * Locale
         * @minLength 1
         * @maxLength 6
         */
        Locale: string;
        /**
         * Server token
         * @minLength 1
         * @maxLength 32
         */
        tk?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetSiteSettingsV6Resp>({
        path: `/api/v6/site/settings-by-locale`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Site
     * @name SiteGetESportsUrlSafeNames
     * @summary Get ESports url safe names
     * @request GET:/api/v6/site/esports-url-safe-names
     * @secure
     */
    siteGetESportsUrlSafeNames: (
      query: {
        /** Locale: en-GB, vi */
        Locale: string;
        /**
         * Server token
         * @minLength 1
         * @maxLength 32
         */
        tk?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetEsportsUrlSafeNamesResp>({
        path: `/api/v6/site/esports-url-safe-names`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Site
     * @name SiteGetSiteSection
     * @summary Get site section
     * @request GET:/api/v6/site/site-section
     * @secure
     */
    siteGetSiteSection: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Server token
         * @minLength 1
         * @maxLength 32
         */
        tk?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfSiteSectionInfo>({
        path: `/api/v6/site/site-section`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Site
     * @name SiteGetSiteAdSettingsByLocale
     * @summary Get ad settings by locale
     * @request GET:/api/v6/site/ad-settings-by-locale
     * @secure
     */
    siteGetSiteAdSettingsByLocale: (
      query: {
        /**
         * Locale
         * @minLength 1
         * @maxLength 6
         */
        Locale: string;
        /**
         * Server token
         * @minLength 1
         * @maxLength 64
         */
        tk?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetSiteAdSettingsResp>({
        path: `/api/v6/site/ad-settings-by-locale`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sitemap
     * @name SitemapGetSiteMapByType2
     * @summary Get sitemap by type
     * @request GET:/api/v5/sitemap.xml
     * @secure
     */
    sitemapGetSiteMapByType2: (
      query?: {
        /**
         * Type
         * root
         * indexPages
         * articles
         * teams
         * players
         * broadcastTalents
         * tournaments
         * matches
         * specialPages
         */
        Type?: EnumSitemapType | null;
        /**
         * Year
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Year?: number | null;
        /**
         * Quarter
         * @format byte
         * @min 1
         * @max 4
         */
        Quarter?: number | null;
        /**
         * Page no
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/api/v5/sitemap.xml`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sitemap
     * @name SitemapGetNewsSiteMap2
     * @summary Get news sitemap
     * @request GET:/api/v5/news-sitemap.xml
     * @secure
     */
    sitemapGetNewsSiteMap2: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/api/v5/news-sitemap.xml`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSection
     * @name SiteSectionGetSiteSectionAll
     * @summary Get site section all
     * @request GET:/api/v6/site-section/all
     * @secure
     */
    siteSectionGetSiteSectionAll: (
      query: {
        /**
         * Locale: en-GB, vi
         * @minLength 1
         * @maxLength 6
         */
        Locale: string;
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetSiteSectionAllResp>({
        path: `/api/v6/site-section/all`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags SiteSection
     * @name SiteSectionGetHomePage
     * @summary Get home page
     * @request GET:/api/v6/site-section/homepage
     * @secure
     */
    siteSectionGetHomePage: (
      query: {
        /** Plat form desktop = 1, mobile = 2 */
        Platform: EnumHomepagePlatform;
        /**
         * Locale: en-GB, vi
         * @minLength 1
         * @maxLength 6
         */
        Locale: string;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetHomepageResp>({
        path: `/api/v6/site-section/homepage`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name SponsorsGetSponsor
     * @summary Get sponsor detail
     * @request GET:/api/v6/sponsors/{sponsorId}
     * @secure
     */
    sponsorsGetSponsor: (sponsorId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetSponsorResp>({
        path: `/api/v6/sponsors/${sponsorId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Sponsors
     * @name SponsorsGetParentsBySponsor
     * @summary Get parent tournaments by sponsor
     * @request GET:/api/v6/sponsors/{sponsorId}/parents
     * @secure
     */
    sponsorsGetParentsBySponsor: (
      sponsorId: number,
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
      this.request<any, ApiRespBaseOfGetParentsResp>({
        path: `/api/v6/sponsors/${sponsorId}/parents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Streams
     * @name StreamsGetStream
     * @summary Get stream detail
     * @request GET:/api/v6/streams/{streamMediaId}
     * @secure
     */
    streamsGetStream: (streamMediaId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetStreamResp>({
        path: `/api/v6/streams/${streamMediaId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name TeamsGetTeamDetail
     * @summary Get team detail
     * @request GET:/api/v6/teams/{teamId}
     * @secure
     */
    teamsGetTeamDetail: (teamId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetTeamDetailResp>({
        path: `/api/v6/teams/${teamId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name TeamsGetVodsByTeam
     * @summary Get vods by team
     * @request GET:/api/v6/teams/{teamId}/vods
     * @secure
     */
    teamsGetVodsByTeam: (
      teamId: number,
      query?: {
        /**
         * Page size
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetVodsByTeamResp>({
        path: `/api/v6/teams/${teamId}/vods`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name TeamsGetNewsByTeam
     * @summary Get news by team
     * @request GET:/api/v6/teams/{teamId}/news
     * @secure
     */
    teamsGetNewsByTeam: (
      teamId: number,
      query?: {
        /**
         * Page size
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetArticlesByTeamResp>({
        path: `/api/v6/teams/${teamId}/news`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name TeamsGetPlayersByTeam
     * @summary Get players by team
     * @request GET:/api/v6/teams/{teamId}/players
     * @secure
     */
    teamsGetPlayersByTeam: (
      teamId: number,
      query?: {
        /**
         * Page size
         * @format int32
         * @min 1
         * @max 100
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetPlayersByTeamResp>({
        path: `/api/v6/teams/${teamId}/players`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name TeamsGetPerformanceByTeam
     * @summary Get performance by team
     * @request GET:/api/v6/teams/{teamId}/performance
     * @secure
     */
    teamsGetPerformanceByTeam: (teamId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetPerformanceByTeamResp>({
        path: `/api/v6/teams/${teamId}/performance`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name TeamsGetTopAchievementsByTeam
     * @summary Get top achievements by team
     * @request GET:/api/v6/teams/{teamId}/top-achievements
     * @secure
     */
    teamsGetTopAchievementsByTeam: (
      teamId: number,
      query?: {
        /**
         * Offline count
         * @format int32
         * @min 1
         * @max 10
         */
        OfflineCount?: number | null;
        /**
         * Online count
         * @format int32
         * @min 1
         * @max 10
         */
        OnlineCount?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetTopAchievementsByTeamResp>({
        path: `/api/v6/teams/${teamId}/top-achievements`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name TeamsGetHistoriesByTeam
     * @summary Get histories by team
     * @request GET:/api/v6/teams/{teamId}/histories
     * @secure
     */
    teamsGetHistoriesByTeam: (teamId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetHistoryByTeamResp>({
        path: `/api/v6/teams/${teamId}/histories`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Teams
     * @name TeamsGetTeamHistoricalMatchStats
     * @summary Get team historical match statistics by grid
     * @request GET:/api/v6/teams/{teamId}/grid-stats
     * @secure
     */
    teamsGetTeamHistoricalMatchStats: (
      teamId: number,
      query: {
        /**
         * Grid Team Id
         * @minLength 0
         * @maxLength 12
         */
        GridId: string;
        /** grid statistics data time window */
        TimeWindow?: EnumGridTimeWindow;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetGridTeamStatsResp>({
        path: `/api/v6/teams/${teamId}/grid-stats`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetFeaturedParents
     * @summary Get featured parent tournaments
     * @request GET:/api/v6/tournaments/parents/featured
     * @secure
     */
    tournamentsGetFeaturedParents: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Page no
         * @format int32
         */
        PageNo?: number;
        /**
         * Page size
         * @format int32
         */
        PageSize?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetParentsResp>({
        path: `/api/v6/tournaments/parents/featured`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetParents
     * @summary Get parent tournaments by condition
     * @request GET:/api/v6/tournaments/parents
     * @secure
     */
    tournamentsGetParents: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Prefix name
         * @minLength 1
         * @maxLength 80
         */
        PrefixName?: string | null;
        /**
         * Game id
         * @min 1
         * @max 32767
         */
        GameId?: number | null;
        /**
         * State
         * 1: All
         * 2: Ongoing
         * 3: Upcoming
         * 4: Past
         * @min 1
         * @max 4
         */
        State?: EnumTournamentState | null;
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
      this.request<any, ApiRespBaseOfGetParentsResp>({
        path: `/api/v6/tournaments/parents`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetParentDetail
     * @summary Get parent tournament detail
     * @request GET:/api/v6/tournaments/parents/{parentId}
     * @secure
     */
    tournamentsGetParentDetail: (parentId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetParentDetailResp>({
        path: `/api/v6/tournaments/parents/${parentId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetChildrenByStage
     * @summary Get child tournaments by stage
     * @request GET:/api/v6/tournaments/parents/{parentId}/stages/{stageId}/children
     * @secure
     */
    tournamentsGetChildrenByStage: (parentId: number, stageId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetChildrenByStageResp>({
        path: `/api/v6/tournaments/parents/${parentId}/stages/${stageId}/children`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetParentNews
     * @summary Get parent tournament news
     * @request GET:/api/v6/tournaments/parents/{parentId}/news
     * @secure
     */
    tournamentsGetParentNews: (
      parentId: number,
      query?: {
        /**
         * Count
         * @format int32
         */
        Count?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetParentArticlesResp>({
        path: `/api/v6/tournaments/parents/${parentId}/news`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetParentBroadcastTalents
     * @summary Get parent tournament broadcast talents
     * @request GET:/api/v6/tournaments/parents/{parentId}/broadcast-talents
     * @secure
     */
    tournamentsGetParentBroadcastTalents: (parentId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetParentBroadcastTalentsResp>({
        path: `/api/v6/tournaments/parents/${parentId}/broadcast-talents`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetParentVenue
     * @summary Get parent venue
     * @request GET:/api/v6/tournaments/parents/{parentId}/venue
     * @secure
     */
    tournamentsGetParentVenue: (parentId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetParentVenueResp>({
        path: `/api/v6/tournaments/parents/${parentId}/venue`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetChildParticipants
     * @summary Get parent/child participants
     * @request GET:/api/v6/tournaments/participants
     * @secure
     */
    tournamentsGetChildParticipants: (
      query: {
        /**
         * Parent tournament id
         * @format int32
         * @min 1
         * @max 2147483647
         */
        ParentId: number;
        /**
         * Child tournament id
         * Needed if query by child tournament
         * @format int32
         */
        ChildId?: number | null;
        /**
         * Site section id (Required if SiteSectionName is null or empty)
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name (Required if SiteSectionId is null)
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /**
         * Count
         * @format int32
         */
        Count?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetChildParticipantsResp>({
        path: `/api/v6/tournaments/participants`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetParentVods
     * @summary Get parent tournament vods
     * @request GET:/api/v6/tournaments/parents/{parentId}/vods
     * @secure
     */
    tournamentsGetParentVods: (
      parentId: number,
      query?: {
        /**
         * Page size
         * @format int32
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetParentVodsResp>({
        path: `/api/v6/tournaments/parents/${parentId}/vods`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetParentStreams
     * @summary Get parent tournament streams
     * @request GET:/api/v6/tournaments/parents/{parentId}/streams
     * @secure
     */
    tournamentsGetParentStreams: (parentId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetParentStreamsResp>({
        path: `/api/v6/tournaments/parents/${parentId}/streams`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetChildDisplay
     * @summary Get child tournament display
     * @request GET:/api/v6/tournaments/children/{childId}/display
     * @secure
     */
    tournamentsGetChildDisplay: (childId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetChildDisplayResp>({
        path: `/api/v6/tournaments/children/${childId}/display`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetChildEmbedGroup
     * @summary Get child tournament embed-group
     * @request GET:/api/v6/tournaments/children/{childId}/embed-group
     * @secure
     */
    tournamentsGetChildEmbedGroup: (childId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetEmbedGroupResp>({
        path: `/api/v6/tournaments/children/${childId}/embed-group`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tournaments
     * @name TournamentsGetChildEmbedBracket
     * @summary Get child tournament embed-bracket
     * @request GET:/api/v6/tournaments/children/{childId}/embed-bracket
     * @secure
     */
    tournamentsGetChildEmbedBracket: (childId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetEmbedBracketResp>({
        path: `/api/v6/tournaments/children/${childId}/embed-bracket`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vods
     * @name VodsGetVods
     * @summary Get vods by condition
     * @request GET:/api/v6/vods
     * @secure
     */
    vodsGetVods: (
      query?: {
        /**
         * Site section id
         * @min 1
         * @max 32767
         */
        SiteSectionId?: number | null;
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        SiteSectionName?: string | null;
        /** Only first game in match */
        OnlyFirstGame?: boolean;
        /**
         * Prefix title
         * @minLength 1
         * @maxLength 60
         */
        PrefixTitle?: string | null;
        /**
         * Page size
         * @format int32
         */
        PageSize?: number;
        /**
         * @format int32
         * @min 1
         * @max 2147483647
         */
        PageNo?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetVodsResp>({
        path: `/api/v6/vods`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Vods
     * @name VodsGetVod
     * @summary Get vod detail
     * @request GET:/api/v6/vods/{vodId}
     * @secure
     */
    vodsGetVod: (vodId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetVodResp>({
        path: `/api/v6/vods/${vodId}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuthTest
     * @name AuthTestRsaVerify
     * @summary RSA Verify
     * @request GET:/api/rsa-verify
     * @secure
     */
    authTestRsaVerify: (params: RequestParams = {}) =>
      this.request<ApiRespBaseOfObject, any>({
        path: `/api/rsa-verify`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuthTest
     * @name AuthTestGosuAuthLogin
     * @summary Gosu auth Login
     * @request GET:/api/gosu/login
     * @secure
     */
    authTestGosuAuthLogin: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/api/gosu/login`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuthTest
     * @name AuthTestGosuAuthLogout
     * @summary Gosu Auth Logout
     * @request GET:/api/gosu/logout
     * @secure
     */
    authTestGosuAuthLogout: (
      query?: {
        Token?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/api/gosu/logout`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags AuthTest
     * @name AuthTestGosuOAuthCallback
     * @summary Gosu OAuth Callback
     * @request GET:/api/gosu/oauth-callback
     * @secure
     */
    authTestGosuOAuthCallback: (
      query?: {
        Code?: string;
        State?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/api/gosu/oauth-callback`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  siteSectionName = {
    /**
     * No description
     *
     * @tags ArticlesRss
     * @name ArticlesRssGetArticlesRssFeed
     * @summary Get article rss feed
     * @request GET:/{siteSectionName}/articles/rss
     * @secure
     */
    articlesRssGetArticlesRssFeed: (
      siteSectionName: string,
      query?: {
        /** Is Top Articles */
        IsTop?: boolean | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/${siteSectionName}/articles/rss`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  articles = {
    /**
     * No description
     *
     * @tags ArticlesRss
     * @name ArticlesRssGetArticlesRssFeed2
     * @summary Get article rss feed
     * @request GET:/articles/rss
     * @secure
     */
    articlesRssGetArticlesRssFeed2: (
      query?: {
        /** Is Top Articles */
        IsTop?: boolean | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/articles/rss`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  links = {
    /**
     * No description
     *
     * @tags Links
     * @name LinksRedirectUrl
     * @summary Redirect to original url
     * @request GET:/links/redirect
     * @secure
     */
    linksRedirectUrl: (
      query?: {
        url?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/links/redirect`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Links
     * @name LinksVerifyUrl
     * @summary Verify url
     * @request GET:/links/verify-url
     * @secure
     */
    linksVerifyUrl: (
      query: {
        /**
         * @minLength 0
         * @maxLength 500
         */
        Url: string;
        /**
         * @minLength 0
         * @maxLength 500
         */
        Referer: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfVerifyUrlResp>({
        path: `/links/verify-url`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  oembed = {
    /**
     * No description
     *
     * @tags OEmbed
     * @name OEmbedGetOEmbed
     * @summary Get OEmbed
     * @request GET:/oembed
     * @secure
     */
    oEmbedGetOEmbed: (
      query: {
        /**
         * Url
         * @minLength 1
         * @maxLength 1024
         */
        Url: string;
        /**
         * Format
         * Example: json
         * @minLength 1
         * @maxLength 30
         */
        Format?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/oembed`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  sitemapXml = {
    /**
     * No description
     *
     * @tags Sitemap
     * @name SitemapGetSiteMapByType
     * @summary Get sitemap by type
     * @request GET:/sitemap.xml
     * @secure
     */
    sitemapGetSiteMapByType: (
      query?: {
        /**
         * Type
         * root
         * indexPages
         * articles
         * teams
         * players
         * broadcastTalents
         * tournaments
         * matches
         * specialPages
         */
        Type?: EnumSitemapType | null;
        /**
         * Year
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Year?: number | null;
        /**
         * Quarter
         * @format byte
         * @min 1
         * @max 4
         */
        Quarter?: number | null;
        /**
         * Page no
         * @format int32
         * @min 1
         * @max 2147483647
         */
        Page?: number | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<File, any>({
        path: `/sitemap.xml`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),
  };
  newsSitemapXml = {
    /**
     * No description
     *
     * @tags Sitemap
     * @name SitemapGetNewsSiteMap
     * @summary Get news sitemap
     * @request GET:/news-sitemap.xml
     * @secure
     */
    sitemapGetNewsSiteMap: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/news-sitemap.xml`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
}
