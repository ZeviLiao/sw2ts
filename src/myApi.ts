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

export type ApiRespBaseOfObject = ApiRespBase & {
  data?: any;
};

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
  ForbiddenErrorsEnd = 68999,
  TooManyRequestsErrorsStart = 69000,
  ResendVerificationCodeCooldown = 69001,
  TooManyRequestsErrorsEnd = 69999,
}

export type ApiRespBaseOfLogoutResp = ApiRespBase & {
  data?: LogoutResp | null;
};

export type LogoutResp = object;

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
  /** Country */
  country: GetUserCountry;
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

export interface UserPermission {
  /** Can edit article */
  canEditArticle: boolean;
  /** Can edit tournament */
  canEditTournament: boolean;
  /** Can edit match */
  canEditMatch: boolean;
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

export type ApiRespBaseOfGetArticlesResp = ApiRespBase & {
  data?: GetArticlesResp | null;
};

export interface GetArticlesResp {
  /** Articles */
  articles: GetArticlesItem[];
  /** Paging */
  paging: PagingRespBase;
}

export interface GetArticlesItem {
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
  /** Section Id */
  sectionId: number;
  /**
   * section url safe name
   * @minLength 1
   */
  sectionUrlSafeName: string;
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
  /**
   * Author username
   * @minLength 1
   */
  authorUserName: string;
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

export type ApiRespBaseOfGetArticleDetailResp = ApiRespBase & {
  data?: GetArticleDetailResp | null;
};

export interface GetArticleDetailResp {
  /** Article */
  articleDetail: ArticleDetail;
  /** MetaTags */
  metaTags: Record<string, string>;
  /** Seo meta data */
  seoMetaData: Record<string, string>;
}

export interface ArticleDetail {
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
  /**
   * Article teaser for short content
   * @minLength 1
   */
  teaser: string;
  /**
   * Processed article content
   * @minLength 1
   */
  contentProcessed: string;
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
  /** Section Id */
  sectionId: number;
  /**
   * section url safe name
   * @minLength 1
   */
  sectionUrlSafeName: string;
  sectionName?: string;
  siteSectionIds?: string;
  /** Section Ids */
  sectionIds: number[];
  /** Authors */
  authors: UserDetail[];
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
  /** Related Articles */
  relatedArticles: RelatedArticle[];
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
  /** Article id */
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
  sectionUrlSafeName: string;
  /** @minLength 1 */
  sectionName: string;
  sectionId: number;
  /** Top article order */
  order: number;
  /** @minLength 1 */
  authorUserName: string;
  authorFirstName?: string | null;
  authorLastName?: string | null;
  authors?: number;
  isMultipleAuthors?: boolean;
}

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
  /** Section Id */
  sectionId: number;
  /**
   * Display section url safe name
   * @minLength 1
   */
  sectionUrlSafeName: string;
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
   * Author username
   * @minLength 1
   */
  authorUserName: string;
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

export type ApiRespBaseOfGetSiteSettingsResp = ApiRespBase & {
  data?: GetSiteSettingsResp | null;
};

export interface GetSiteSettingsResp {
  /** Frontend Setting */
  frontendSetting: FrontendSetting;
  /** Other Frontends */
  frontends: FrontendBasicInfo[];
  /** Menus */
  menus: SiteMenu[];
  /** Mobile menu */
  mobileMenus: SiteMenu[];
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
  /** site section ids */
  siteSectionIds: number[];
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

export interface SiteMenu {
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
  subMenus: SiteMenu[];
  isUseCustomUrl: boolean;
  customUrl?: string | null;
  /** 0: None 1: All-SiteSection */
  menuType: EnumMenuType;
}

export enum EnumMenuType {
  None = 0,
  All = 1,
  Articles = 2,
}

export type ApiRespBaseOfGetSectionsUrlSafeNamesResp = ApiRespBase & {
  data?: GetSectionsUrlSafeNamesResp | null;
};

export interface GetSectionsUrlSafeNamesResp {
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
  SpecialPages = 3,
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
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export enum EnumPlatform {
  PLATFORM_TWITCHTV = 1,
  PLATFORM_YOUTUBE_CHANNEL = 10,
  PLATFORM_YOUTUBE_STREAM = 11,
  PLATFORM_FACEBOOK = 12,
  PLATFORM_OTHER = 99,
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
   * Created at
   * @format int64
   */
  createdAt: number;
  /** @format int32 */
  startTime: number;
  /**
   * Url
   * @minLength 1
   */
  url: string;
}

export enum EnumVideoHost {
  Youtube = 0,
  Dailymotion = 2,
  Vimeo = 3,
  TwitchTv = 4,
  Facebook = 7,
}

export type ApiRespBaseOfGetVodResp = ApiRespBase & {
  data?: GetVodResp | null;
};

export interface GetVodResp {
  /** Vod detail */
  vodDetail: VodItem;
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
  public baseUrl: string = "https://ga-portal-api-staging.gosu.com";
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
 * @title PortalApi v1
 * @version v1
 * @baseUrl https://ga-portal-api-staging.gosu.com
 *
 * This is a JWT authentication/authorization portal api for GosuAnime's frontend
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  api = {
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

    /**
     * No description
     *
     * @tags Account
     * @name AccountLogout
     * @summary Logout
     * @request POST:/api/v1/account/logout
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
        path: `/api/v1/account/logout`,
        method: "POST",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Account
     * @name AccountGetUserProfile
     * @summary Get user profile
     * @request GET:/api/v1/account/setting-profile
     * @secure
     */
    accountGetUserProfile: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetUserProfileResp>({
        path: `/api/v1/account/setting-profile`,
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
     * @request PATCH:/api/v1/account/setting-profile
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
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfModUserProfileResp>({
        path: `/api/v1/account/setting-profile`,
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
     * @request DELETE:/api/v1/account/setting-profile
     * @secure
     */
    accountDelUserAccount: (data: DelUserAccountReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfDelUserAccountResp>({
        path: `/api/v1/account/setting-profile`,
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
     * @request PATCH:/api/v1/account/password
     * @secure
     */
    accountModUserPassword: (data: ModPasswordReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfModPasswordResp>({
        path: `/api/v1/account/password`,
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
     * @name AccountGetUserStreamOptions
     * @summary Get user stream options
     * @request GET:/api/v1/account/stream-options
     * @secure
     */
    accountGetUserStreamOptions: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfListOfGetUserStreamOptionsResp>({
        path: `/api/v1/account/stream-options`,
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
     * @request GET:/api/v1/account/setting-stream
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
        path: `/api/v1/account/setting-stream`,
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
     * @request POST:/api/v1/account/setting-stream
     * @secure
     */
    accountAddUserStream: (data: AddStreamReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfAddStreamResp>({
        path: `/api/v1/account/setting-stream`,
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
     * @request GET:/api/v1/account/setting-stream/{id}
     * @secure
     */
    accountGetUserStreamDetail: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetUserStreamDetailResp>({
        path: `/api/v1/account/setting-stream/${id}`,
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
     * @request PATCH:/api/v1/account/setting-stream/{id}
     * @secure
     */
    accountModUserStream: (id: number, data: ModStreamReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfModStreamResp>({
        path: `/api/v1/account/setting-stream/${id}`,
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
     * @request DELETE:/api/v1/account/setting-stream/{id}
     * @secure
     */
    accountDelUserStream: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfDelStreamResp>({
        path: `/api/v1/account/setting-stream/${id}`,
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
     * @request PATCH:/api/v1/account/complete-registration
     * @secure
     */
    accountCompleteRegistration: (data: CompleteRegistrationReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBase>({
        path: `/api/v1/account/complete-registration`,
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
     * @summary Get articles by condition
     * @request GET:/api/v1/articles
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
      this.request<any, ApiRespBaseOfGetArticlesResp>({
        path: `/api/v1/articles`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticleDetail
     * @summary Get article details
     * @request GET:/api/v1/articles/{id}
     * @secure
     */
    articlesGetArticleDetail: (
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
      this.request<any, ApiRespBaseOfGetArticleDetailResp>({
        path: `/api/v1/articles/${id}`,
        method: "GET",
        query: query,
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetArticleDetail2
     * @summary Get article details
     * @request GET:/api/v1/articles/detail/{id}
     * @secure
     */
    articlesGetArticleDetail2: (
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
      this.request<any, ApiRespBaseOfGetArticleDetailResp>({
        path: `/api/v1/articles/detail/${id}`,
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
     * @request GET:/api/v1/articles/{id}/meta-tags
     * @secure
     */
    articlesGetArticleDetailMetaTags: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetArticleDetailMetaTagsResp>({
        path: `/api/v1/articles/${id}/meta-tags`,
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
     * @request GET:/api/v1/articles/{id}/json-ld
     * @secure
     */
    articlesGetArticleDetailJsonLd: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetArticleJsonLDResp>({
        path: `/api/v1/articles/${id}/json-ld`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetTopArticles
     * @summary Get top articles by condition
     * @request GET:/api/v1/articles/top-articles
     * @secure
     */
    articlesGetTopArticles: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetTopArticlesResp>({
        path: `/api/v1/articles/top-articles`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Articles
     * @name ArticlesGetTopArticles2
     * @summary Get top articles by condition
     * @request GET:/api/v1/articles/{siteSectionName}/top-articles
     * @secure
     */
    articlesGetTopArticles2: (siteSectionName: string, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetTopArticlesResp>({
        path: `/api/v1/articles/${siteSectionName}/top-articles`,
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
     * @request GET:/api/v1/events/{id}
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
        path: `/api/v1/events/${id}`,
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
     * @request GET:/api/v1/frontends/banners
     * @secure
     */
    frontendsGetSiteSectionBanners: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetSiteSectionBannersResp>({
        path: `/api/v1/frontends/banners`,
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
     * @request POST:/api/v1/log
     * @secure
     */
    logAddLog: (data: AddLogReq, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfAddLogResp>({
        path: `/api/v1/log`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Members
     * @name MembersGetMember
     * @summary Get member detail
     * @request GET:/api/v1/members/{userId}
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
        path: `/api/v1/members/${userId}`,
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
     * @request GET:/api/v1/members/{userId}/articles
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
        path: `/api/v1/members/${userId}/articles`,
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
     * @request GET:/api/v1/options/countries
     * @secure
     */
    optionsGetCountryOptions: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetCountryOptionsResp>({
        path: `/api/v1/options/countries`,
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
     * @request GET:/api/v1/options/languages
     * @secure
     */
    optionsGetLanguageOptions: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetLanguagesResp>({
        path: `/api/v1/options/languages`,
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
     * @request GET:/api/v1/options/platforms
     * @secure
     */
    optionsGetPlatformOptions: (params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetPlatformOptionsResp>({
        path: `/api/v1/options/platforms`,
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
     * @request GET:/api/v1/pages/{id}
     * @secure
     */
    pagesGetPage: (id: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetPageResp>({
        path: `/api/v1/pages/${id}`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Site
     * @name SiteGetSiteSettings
     * @summary Get Site Settings
     * @request GET:/api/v1/site/settings
     * @secure
     */
    siteGetSiteSettings: (
      query?: {
        /**
         * @minLength 1
         * @maxLength 32
         */
        tk?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetSiteSettingsResp>({
        path: `/api/v1/site/settings`,
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
     * @summary Get site sections url safe names
     * @request GET:/api/v1/site/sections-url-safe-names
     * @secure
     */
    siteGetESportsUrlSafeNames: (
      query?: {
        /**
         * @minLength 1
         * @maxLength 32
         */
        tk?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetSectionsUrlSafeNamesResp>({
        path: `/api/v1/site/sections-url-safe-names`,
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
     * @summary Get ad settings
     * @request GET:/api/v1/site/ad-settings
     * @secure
     */
    siteGetSiteAdSettingsByLocale: (
      query?: {
        tk?: string | null;
      },
      params: RequestParams = {},
    ) =>
      this.request<any, ApiRespBaseOfGetSiteAdSettingsResp>({
        path: `/api/v1/site/ad-settings`,
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
     * @request GET:/api/v1/sitemap.xml
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
        path: `/api/v1/sitemap.xml`,
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
     * @request GET:/api/v1/news-sitemap.xml
     * @secure
     */
    sitemapGetNewsSiteMap2: (params: RequestParams = {}) =>
      this.request<File, any>({
        path: `/api/v1/news-sitemap.xml`,
        method: "GET",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Streams
     * @name StreamsGetStream
     * @summary Get stream detail
     * @request GET:/api/v1/streams/{streamMediaId}
     * @secure
     */
    streamsGetStream: (streamMediaId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetStreamResp>({
        path: `/api/v1/streams/${streamMediaId}`,
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
     * @request GET:/api/v1/vods
     * @secure
     */
    vodsGetVods: (
      query?: {
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
        path: `/api/v1/vods`,
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
     * @request GET:/api/v1/vods/{vodId}
     * @secure
     */
    vodsGetVod: (vodId: number, params: RequestParams = {}) =>
      this.request<any, ApiRespBaseOfGetVodResp>({
        path: `/api/v1/vods/${vodId}`,
        method: "GET",
        secure: true,
        ...params,
      }),
  };
  articles = {
    /**
     * No description
     *
     * @tags ArticlesRss
     * @name ArticlesRssGetArticlesRssFeed
     * @summary Get article rss feed
     * @request GET:/articles/rss
     * @secure
     */
    articlesRssGetArticlesRssFeed: (
      query?: {
        /**
         * Site section name
         * @minLength 1
         * @maxLength 40
         */
        siteSectionName?: string | null;
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
