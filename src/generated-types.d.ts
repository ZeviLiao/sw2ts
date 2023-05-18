declare namespace Components {
    namespace Schemas {
        export interface AddArticleResp {
            /**
             * Article id
             */
            articleId?: number; // int32
        }
        export interface AddArticleRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddArticleResp;
        }
        export interface AddBroadcastTalentResp {
        }
        export interface AddBroadcastTalentRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddBroadcastTalentResp;
        }
        export interface AddFileResp {
        }
        export interface AddFileRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddFileResp;
        }
        export interface AddFolderResp {
            id?: number; // int32
            name?: string | null;
        }
        export interface AddFolderRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddFolderResp;
        }
        export interface AddFrontendSiteSectionsReq {
            /**
             * New site sections
             */
            newSiteSections?: FrontendSiteSection[] | null;
        }
        export interface AddFrontendSiteSectionsResp {
        }
        export interface AddFrontendSiteSectionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddFrontendSiteSectionsResp;
        }
        export interface AddFuncResp {
            /**
             * Backoffice func id
             */
            funcId?: number; // int32
        }
        export interface AddFuncRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddFuncResp;
        }
        export interface AddGameAccountResp {
        }
        export interface AddGameAccountRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddGameAccountResp;
        }
        export interface AddGameRegionReq {
            /**
             * Region name
             */
            regionName: string;
            /**
             * Game id
             */
            gameId: number; // int32
            /**
             * Country Ids
             */
            countryIds: number /* int32 */[];
        }
        export interface AddGameRegionResp {
            /**
             * Region id
             */
            regionId: number; // int32
        }
        export interface AddGameResp {
            /**
             * Game id
             */
            gameId?: number; // int32
        }
        export interface AddGameRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddGameResp;
        }
        export interface AddGroupReq {
            /**
             * User group name
             */
            name: string;
            /**
             * Remark
             */
            remark?: string | null;
            /**
             * Frontend ids
             */
            frontendIds?: number /* int32 */[] | null;
            /**
             * Backoffice func ids
             */
            backofficeFuncIds?: number /* int32 */[] | null;
            /**
             * Save as template
             */
            saveAsTemplate: boolean;
        }
        export interface AddGroupResp {
            /**
             * Group id
             */
            groupId?: number | null; // int32
        }
        export interface AddGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddGroupResp;
        }
        export interface AddHeroResp {
        }
        export interface AddHeroRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddHeroResp;
        }
        export interface AddMapResp {
        }
        export interface AddMapRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddMapResp;
        }
        export interface AddMediaItemsResp {
        }
        export interface AddMediaItemsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddMediaItemsResp;
        }
        export interface AddMediaVodReq {
            /**
             * Vod title
             */
            title: string;
            /**
             * Site section ids
             */
            siteSectionIds: number /* int32 */[];
            /**
             * Host id
             */
            hostId: number; // int32
            /**
             * Host video id
             */
            hostVideoId: string;
            /**
             * Start time
             */
            startTime: number; // int32
            /**
             * Description
             */
            description?: string | null;
            /**
             * Tags
             */
            tags?: string[] | null;
            /**
             * Is in game
             */
            isInGame: boolean;
            /**
             * Is featured
             */
            isFeatured: boolean;
            /**
             * Related players
             */
            playerIds?: number /* int32 */[] | null;
            /**
             * Related teams
             */
            teamIds?: number /* int32 */[] | null;
        }
        export interface AddMediaVodResp {
            /**
             * Vod id
             */
            vodId: number; // int32
        }
        export interface AddMediaVodRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddMediaVodResp;
        }
        export interface AddModeReq {
            /**
             * Game Map Name
             */
            name: string;
            /**
             * Modes Abbreviation
             */
            abbreviation?: string | null;
            /**
             * Map Game Id
             */
            gameId: number; // int32
        }
        export interface AddModeResp {
        }
        export interface AddModeRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddModeResp;
        }
        export interface AddNotificationTemplateReq {
            frontEndId: number; // int32
            messagingNotificationTypeId: number; // int32
            webTitle: string;
            webBody: string;
            pushTitle?: string | null;
            pushBody?: string | null;
            emailSubject?: string | null;
            emailTextBody?: string | null;
            emailHtmlBody?: string | null;
        }
        export interface AddNotificationTemplateResp {
            /**
             * Notification Template Id
             */
            notificationTemplateId?: number; // int32
        }
        export interface AddNotificationTemplateRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddNotificationTemplateResp;
        }
        export interface AddOneSignalAppReq {
            /**
             * App Id
             */
            appId: string;
            /**
             * Api Key
             */
            apiKey: string;
            /**
             * Safari Web Id
             */
            safariWebId: string;
            /**
             * Player Match Starting Notification Android Channel Id
             */
            playerMatchStartingNotificationAndroidChannelId?: string | null;
            /**
             * Team Match Starting Notification Android Channel Id
             */
            teamMatchStartingNotificationAndroidChannelId?: string | null;
            /**
             * Player Article Notification Android Channel Id
             */
            playerArticleNotificationAndroidChannelId?: string | null;
            /**
             * Team Article Notification Android Channel Id
             */
            teamArticleNotificationAndroidChannelId?: string | null;
            /**
             * Player Match Resulted Notification Android Channel Id
             */
            playerMatchResultedNotificationAndroidChannelId?: string | null;
            /**
             * Team Match Resulted Notification Android Channel Id
             */
            teamMatchResultedNotificationAndroidChannelId?: string | null;
            /**
             * Team Transfer Notification Android Channel Id
             */
            teamTransferNotificationAndroidChannelId?: string | null;
            /**
             * Player Transfer Notification Android Channel Id
             */
            playerTransferNotificationAndroidChannelId?: string | null;
        }
        export interface AddOneSignalAppResp {
            /**
             * One Signal App Id
             */
            oneSignalAppId?: number; // int32
        }
        export interface AddOneSignalAppRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddOneSignalAppResp;
        }
        export interface AddPageReq {
            /**
             * Title
             */
            title: string;
            /**
             * Content
             */
            content: string;
            /**
             * Frontend id
             */
            frontendId: number; // int32
            /**
             * Extra css
             */
            extraCss?: string | null;
        }
        export interface AddPageResp {
            /**
             * Page id
             */
            pageId?: number; // int32
        }
        export interface AddPageRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddPageResp;
        }
        export interface AddPlayerMediaItemResp {
        }
        export interface AddPlayerMediaItemRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddPlayerMediaItemResp;
        }
        export interface AddPlayerResp {
        }
        export interface AddPlayerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddPlayerResp;
        }
        export interface AddRoleReq {
            /**
             * Group Id
             */
            groupId: number; // int32
            /**
             * Role name
             */
            name: string;
            /**
             * Remark
             */
            remark?: string | null;
            /**
             * Func Ids
             */
            funcIds?: number /* int32 */[] | null;
            /**
             * Frontend Ids
             */
            frontendIds?: number /* int32 */[] | null;
            /**
             * Save as template
             */
            saveAsTemplate: boolean;
        }
        export interface AddRoleResp {
        }
        export interface AddRoleRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddRoleResp;
        }
        export interface AddServerResp {
        }
        export interface AddServerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddServerResp;
        }
        export interface AddSideResp {
        }
        export interface AddSideRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddSideResp;
        }
        export interface AddSiteSectionsResp {
            id?: number | null; // int32
        }
        export interface AddSiteSectionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddSiteSectionsResp;
        }
        export interface AddSponsorResp {
        }
        export interface AddSponsorRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddSponsorResp;
        }
        export interface AddStreamResp {
        }
        export interface AddStreamRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddStreamResp;
        }
        export interface AddTeamPlayerResp {
        }
        export interface AddTeamPlayerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddTeamPlayerResp;
        }
        export interface AddTeamResp {
        }
        export interface AddTeamRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddTeamResp;
        }
        export interface AddUserResp {
        }
        export interface AddUserRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddUserResp;
        }
        export interface AddVenueResp {
        }
        export interface AddVenueRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AddVenueResp;
        }
        export interface ApiLogDetail {
            id?: number; // int64
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
            responseCode?: number; // int32
            executeTimeMs?: number; // int32
            recordedAt?: number; // int64
        }
        export interface ApiLogListItem {
            /**
             * Id
             */
            id?: number; // int64
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
            responseCode?: number; // int32
            /**
             * Response Length
             */
            responseLen?: number; // int32
            /**
             * Execute Time MilliSeconds
             */
            executeTimeMs?: number; // int32
            /**
             * Record at
             */
            recordedAt?: number; // int64
        }
        export interface ArticleDetail {
            /**
             * Article Id
             */
            id: number; // int32
            /**
             * Article subtype id
             */
            subTypeId: number; // int32
            /**
             * Title
             */
            title: string;
            /**
             * Redirect url
             */
            redirectUrl?: string | null;
            /**
             * Teaser
             */
            teaser: string;
            /**
             * Content
             */
            content: string;
            /**
             * Frontend id
             */
            frontendId: number; // int32
            /**
             * Local id
             */
            localeId: number; // int32
            /**
             * Site sections
             */
            siteSections?: SiteSection[] | null;
            /**
             * Headline image url
             */
            headlineImagePath?: string | null;
            /**
             * Headline image text
             */
            headlineImageText?: string | null;
            /**
             * Square image url
             */
            squareHeadlineImageUrl?: string | null;
            /**
             * Is published
             */
            isPublished: boolean;
            /**
             * Published At
             */
            publishedAt?: number | null; // int64
            /**
             * Is sticky
             */
            isSticky: boolean;
            /**
             * Is featured
             */
            isFeatured: boolean;
            /**
             * Time spent
             */
            timeSpent: number; // int32
            /**
             * Proofread state
             */
            isProofread: boolean;
            /**
             * Time spent for proofreading article
             */
            timeSpentProofreading: number; // int32
            /**
             * Proofread datetime
             */
            proofreadAt?: number | null; // int64
        }
        export interface ArticleListItem {
            /**
             * Article id
             */
            id: number; // int32
            /**
             * Frontend Name
             */
            feName: string;
            /**
             * Article title
             */
            title: string;
            /**
             * Article url
             */
            url?: string | null;
            /**
             * Published state
             */
            isPublished: boolean;
            /**
             * Proofread state
             */
            isProofread: boolean;
            /**
             * Author
             */
            author: string;
            /**
             * Created At
             */
            createdAt: number; // int64
            /**
             * Updater
             */
            updater?: string | null;
            /**
             * Update At
             */
            updateAt?: number; // int64
            type: EnumArticleType /* int32 */;
            /**
             * Article Type Name
             */
            typeName: string;
            /**
             * View counts
             */
            views: number; // int32
        }
        export interface AssignGroupReq {
            /**
             * Group id
             */
            groupId: number; // int32
            /**
             * Add user ids
             */
            userIds: number /* int32 */[];
        }
        export interface AssignGroupResp {
            /**
             * Add users
             */
            addUsers?: Int32Item[] | null;
        }
        export interface AssignGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AssignGroupResp;
        }
        export interface AssignRoleReq {
            /**
             * Role id
             */
            roleId: number; // int32
            /**
             * Add user ids
             */
            userIds: number /* int32 */[];
        }
        export interface AssignRoleResp {
            /**
             * Assign users
             */
            addUsers?: Int32Item[] | null;
        }
        export interface AssignRoleRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: AssignRoleResp;
        }
        export interface BroadcastTalentCountry {
            id?: number; // int32
            name?: string | null;
            code?: string | null;
            flagImageUrl?: string | null;
        }
        export interface BroadcastTalentGame {
            id?: number | null; // int32
            name?: string | null;
            urlSafeName?: string | null;
        }
        export interface BroadcastTalentLanguage {
            id?: number; // int32
            name?: string | null;
            code?: string | null;
        }
        export interface BroadcastTalentPlayer {
            id?: number; // int32
            name?: string | null;
        }
        export interface BroadcastTalentStream {
            id?: number; // int32
            title?: string | null;
        }
        export interface ByteItem {
            id?: number; // int32
            name?: string | null;
        }
        export interface CountryOption {
            /**
             * Country id
             */
            id?: number; // int32
            /**
             * Country name
             */
            name?: string | null;
            /**
             * Country code
             */
            code?: string | null;
            /**
             * Flag image url
             */
            flagImageUrl?: string | null;
        }
        export interface CrewFile {
            /**
             * File Id
             */
            id?: number; // int32
            name?: string | null;
            url?: string | null;
            uploadedAt?: number; // int64
            size?: number; // int32
            mineType?: string | null;
            folderId?: number; // int32
            userId?: number; // int32
            userName?: string | null;
            url_Safe_UserName?: string | null;
            path?: string | null;
        }
        export interface DelArticleResp {
            /**
             * Backoffice func id
             */
            funcId?: number; // int32
        }
        export interface DelArticleRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelArticleResp;
        }
        export interface DelBroadcastTalentResp {
        }
        export interface DelBroadcastTalentRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelBroadcastTalentResp;
        }
        export interface DelFileResp {
        }
        export interface DelFileRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelFileResp;
        }
        export interface DelFolderResp {
        }
        export interface DelFolderRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelFolderResp;
        }
        export interface DelFrontendSiteSectionReq {
            /**
             * Frontend id
             */
            frontendId: number; // int32
            /**
             * Site section id
             */
            siteSectionId: number; // int32
        }
        export interface DelFrontendSiteSectionResp {
            /**
             * Frontend id
             */
            frontendId?: number; // int32
            /**
             * Site section id
             */
            siteSectionId?: number; // int32
        }
        export interface DelFrontendSiteSectionRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelFrontendSiteSectionResp;
        }
        export interface DelFuncResp {
            /**
             * Backoffice func id
             */
            funcId?: number; // int32
        }
        export interface DelFuncRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelFuncResp;
        }
        export interface DelGameAccountResp {
        }
        export interface DelGameAccountRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelGameAccountResp;
        }
        export interface DelGameRegionResp {
            /**
             * Region id
             */
            regionId: number; // int32
        }
        export interface DelGameResp {
            /**
             * Game id
             */
            gameId?: number; // int32
        }
        export interface DelGameRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelGameResp;
        }
        export interface DelGroupResp {
            /**
             * Group id
             */
            groupId?: number | null; // int32
        }
        export interface DelGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelGroupResp;
        }
        export interface DelHeroResp {
        }
        export interface DelHeroRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelHeroResp;
        }
        export interface DelMapResp {
        }
        export interface DelMapRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelMapResp;
        }
        export interface DelMediaItemResp {
        }
        export interface DelMediaItemRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelMediaItemResp;
        }
        export interface DelMediaVodResp {
            /**
             * Vod id
             */
            vodId: number; // int32
        }
        export interface DelMediaVodRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelMediaVodResp;
        }
        export interface DelModeResp {
        }
        export interface DelModeRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelModeResp;
        }
        export interface DelNotificationTemplateResp {
            /**
             * Notification Template Id
             */
            notificationTemplateId?: number; // int32
        }
        export interface DelNotificationTemplateRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelNotificationTemplateResp;
        }
        export interface DelOneSignalAppResp {
            /**
             * One Signal App Id
             */
            oneSignalAppId?: number; // int32
        }
        export interface DelOneSignalAppRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelOneSignalAppResp;
        }
        export interface DelPageReq {
            pageIds: number /* int32 */[];
        }
        export interface DelPageResp {
            /**
             * Page id
             */
            pageId?: number /* int32 */[] | null;
        }
        export interface DelPageRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelPageResp;
        }
        export interface DelPlayerMediaItemResp {
        }
        export interface DelPlayerMediaItemRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelPlayerMediaItemResp;
        }
        export interface DelPlayerResp {
        }
        export interface DelPlayerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelPlayerResp;
        }
        export interface DelRoleResp {
            /**
             * Role id
             */
            roleId?: number | null; // int32
        }
        export interface DelRoleRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelRoleResp;
        }
        export interface DelServerResp {
        }
        export interface DelServerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelServerResp;
        }
        export interface DelSideResp {
        }
        export interface DelSideRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelSideResp;
        }
        export interface DelSiteSectionsResp {
        }
        export interface DelSiteSectionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelSiteSectionsResp;
        }
        export interface DelSponsorResp {
        }
        export interface DelSponsorRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelSponsorResp;
        }
        export interface DelStreamResp {
        }
        export interface DelStreamRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelStreamResp;
        }
        export interface DelTeamPlayerResp {
        }
        export interface DelTeamPlayerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelTeamPlayerResp;
        }
        export interface DelTeamResp {
        }
        export interface DelTeamRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelTeamResp;
        }
        export interface DelUserResp {
        }
        export interface DelUserRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelUserResp;
        }
        export interface DelVenueResp {
        }
        export interface DelVenueRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: DelVenueResp;
        }
        export type EnumArticleState = 1 | 2 | 3 | 4; // int32
        export type EnumArticleType = 1 | 2 | 3; // int32
        export type EnumBroadcastTalentType = 1 | 2 | 3 | 4 | 5 | 99; // int32
        export type EnumFieldSort = 0 | 1; // int32
        export type EnumFuncType = 1 | 2; // int32
        export type EnumGender = 0 | 1 | 2 | 3; // int32
        export type EnumPlatform = 1 | 10 | 11 | 99; // int32
        export type EnumRet = 0 | 10001 | 10002 | 20000 | 20001 | 20002 | 20003 | 20004 | 20005 | 20006 | 20007 | 20008 | 20009 | 20010 | 20011 | 20012 | 20013 | 20014 | 20015 | 20016 | 20017 | 20018 | 20019 | 20020 | 20021 | 20022 | 20023 | 20024 | 20025 | 20026 | 20027 | 20028 | 20029 | 20030 | 20031 | 20032 | 29999 | 30000 | 30001 | 30002 | 30003 | 30004 | 30005 | 39999 | 40000 | 40001 | 40999 | 50000 | 50001 | 50002 | 50003 | 50004 | 50005 | 59999 | 60000 | 60001 | 69999; // int32
        export type EnumState = 0 | 1 | 2; // int32
        export interface FolderDetail {
            /**
             * Folder id
             */
            id?: number; // int32
            /**
             * Folder name
             */
            name?: string | null;
            /**
             * Folder path
             */
            path?: string | null;
        }
        export interface FrontendSiteSection {
            /**
             * Frontend id
             */
            frontendId?: number; // int32
            /**
             * Site section id
             */
            siteSectionId?: number; // int32
            state?: EnumState /* int32 */;
            /**
             * Position
             */
            position?: number; // int32
        }
        export interface FrontendSiteSectionListItem {
            /**
             * Frontend id
             */
            frontendId?: number; // int32
            /**
             * Site section id
             */
            siteSectionId?: number; // int32
            /**
             * Site section name
             */
            name?: string | null;
            /**
             * Game name
             */
            gameName?: string | null;
        }
        export interface FuncItem {
            /**
             * Backoffice func id
             */
            funcId?: number; // int32
            /**
             * Parent id
             */
            parentId?: number; // int32
            /**
             * Func name
             */
            name?: string | null;
            /**
             * Func code
             */
            code?: string | null;
            type?: EnumFuncType /* int32 */;
            /**
             * Func type name
             */
            typeName?: string | null;
            /**
             * Func position
             */
            position?: number; // int32
            state?: EnumState /* int32 */;
            /**
             * State name
             */
            stateName?: string | null;
            /**
             * Func url
             */
            url?: string | null;
            /**
             * Func icon
             */
            icon?: string | null;
            /**
             * Sub funcs
             */
            subFuncs?: FuncItem[] | null;
        }
        export interface FuzzyFolderDetail {
            id?: number; // int32
            path?: string | null;
        }
        export interface GameListItem {
            /**
             * Game id
             */
            id?: number; // int32
            /**
             * Game name
             */
            name?: string | null;
            /**
             * Has player rankings
             */
            hasPlayerRankings?: boolean;
            /**
             * Has team rankings
             */
            hasTeamRankings?: boolean;
            /**
             * Has streams
             */
            hasStreams?: boolean;
            /**
             * Grid id
             */
            gridId?: number | null; // int32
            /**
             * Is legacy
             */
            isLegacy?: boolean;
            /**
             * Icon image url
             */
            iconImageUrl?: string | null;
            /**
             * Translation
             */
            translations?: Translation[] | null;
        }
        export interface GameRegionListItem {
            /**
             * Region id
             */
            regionId: number; // int32
            /**
             * Region name
             */
            regionName: string;
            /**
             * Game name
             */
            gameName: string;
            /**
             * Translations
             */
            translations: Translation[];
        }
        export interface GenderOption {
            id?: number; // int32
            name?: string | null;
        }
        export interface GetApiLogResp {
            log?: ApiLogDetail;
        }
        export interface GetApiLogRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetApiLogResp;
        }
        export interface GetApiLogsResp {
            /**
             * Api Logs
             */
            logs?: ApiLogListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetApiLogsRespApiRespBase {
            ret?: EnumRet /* int32 */;
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
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetArticleResp;
        }
        export interface GetArticleTypesResp {
            types?: Int16ItemWithSubItem[] | null;
        }
        export interface GetArticleTypesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetArticleTypesResp;
        }
        export interface GetArticlesResp {
            /**
             * Articles
             */
            articles?: ArticleListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetArticlesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetArticlesResp;
        }
        export interface GetBroadcastTalentResp {
            id?: number; // int32
            name?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            type?: number; // int32
            gender?: number; // int32
            isActive?: boolean | null;
            about?: string | null;
            dateOfBirth?: string | null; // date
            headerImagePath?: string | null;
            imagePath?: string | null;
            socialFacebook?: string | null;
            socialTwitter?: string | null;
            socialYoutube?: string | null;
            website?: string | null;
            primaryGame?: BroadcastTalentGame;
            country?: BroadcastTalentCountry;
            language?: BroadcastTalentLanguage;
            player?: BroadcastTalentPlayer;
            personalStream?: BroadcastTalentStream;
        }
        export interface GetBroadcastTalentRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetBroadcastTalentResp;
        }
        export interface GetBroadcastTalents {
            id?: number; // int32
            name?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            urlSafeName?: string | null;
            type?: number; // int32
            gender?: number; // int32
            isActive?: boolean;
            primaryGame?: BroadcastTalentGame;
            country?: BroadcastTalentCountry;
            language?: BroadcastTalentLanguage;
        }
        export interface GetBroadcastTalentsResp {
            broadcastTalents?: GetBroadcastTalents[] | null;
            paging?: PagingRespBase;
        }
        export interface GetBroadcastTalentsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetBroadcastTalentsResp;
        }
        export interface GetContactTypesResp {
            /**
             * Contact types
             */
            contactTypes?: ByteItem[] | null;
        }
        export interface GetContactTypesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetContactTypesResp;
        }
        export interface GetCountryOptionsResp {
            countries?: CountryOption[] | null;
        }
        export interface GetCountryOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetCountryOptionsResp;
        }
        export interface GetCrewFilesResp {
            files?: CrewFile[] | null;
            paging?: PagingRespBase;
        }
        export interface GetCrewFilesRespApiRespBase {
            ret?: EnumRet /* int32 */;
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
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetCrewFoldersResp;
        }
        export interface GetFrontendLocaleOptionsResp {
            localeOptions?: {
                [name: string]: Int16Item[];
            } | null;
        }
        export interface GetFrontendLocaleOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFrontendLocaleOptionsResp;
        }
        export interface GetFrontendOptionsResp {
            frontendOptions?: Int16Item[] | null;
        }
        export interface GetFrontendOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFrontendOptionsResp;
        }
        export interface GetFrontendSiteSectionsResp {
            /**
             * Frontend site sections
             */
            frontendSiteSections?: FrontendSiteSectionListItem[] | null;
        }
        export interface GetFrontendSiteSectionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFrontendSiteSectionsResp;
        }
        export interface GetFuncOptionsResp {
            /**
             * Func options
             */
            funcOptions?: UInt16Item[] | null;
        }
        export interface GetFuncOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuncOptionsResp;
        }
        export interface GetFuncResp {
            /**
             * Func id
             */
            funcId?: number; // int32
            /**
             * Func name
             */
            name?: string | null;
            /**
             * Func code
             */
            code?: string | null;
            type?: EnumFuncType /* int32 */;
            /**
             * Type name
             */
            typeName?: string | null;
            /**
             * Func position
             */
            position?: number; // int32
            state?: EnumState /* int32 */;
            /**
             * State name
             */
            stateName?: string | null;
            /**
             * Func url
             */
            url?: string | null;
            /**
             * Func icon
             */
            icon?: string | null;
            /**
             * Created At
             */
            createdAt?: number; // int64
            /**
             * Updated At
             */
            updatedAt?: number; // int64
        }
        export interface GetFuncRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuncResp;
        }
        export interface GetFuncTypesResp {
            /**
             * Func types
             */
            funcTypes?: ByteItem[] | null;
        }
        export interface GetFuncTypesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuncTypesResp;
        }
        export interface GetFuncsResp {
            /**
             * Funcs
             */
            funcs?: FuncItem[] | null;
        }
        export interface GetFuncsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuncsResp;
        }
        export interface GetFuzzyFoldersResp {
            folders?: FuzzyFolderDetail[] | null;
        }
        export interface GetFuzzyFoldersRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuzzyFoldersResp;
        }
        export interface GetFuzzyGameRaceResp {
            fuzzyGames?: Int32Item[] | null;
        }
        export interface GetFuzzyGameRaceRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuzzyGameRaceResp;
        }
        export interface GetFuzzyGamesResp {
            fuzzyGames?: Int32Item[] | null;
        }
        export interface GetFuzzyGamesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuzzyGamesResp;
        }
        export interface GetFuzzyMediaStreamsResp {
            fuzzyMediaItems?: Int32Item[] | null;
        }
        export interface GetFuzzyMediaStreamsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuzzyMediaStreamsResp;
        }
        export interface GetFuzzyMediaVideosResp {
            fuzzyMediaItems?: Int32Item[] | null;
        }
        export interface GetFuzzyMediaVideosRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuzzyMediaVideosResp;
        }
        export interface GetFuzzyPlayersResp {
            fuzzyPlayers?: Int32Item[] | null;
        }
        export interface GetFuzzyPlayersRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuzzyPlayersResp;
        }
        export interface GetFuzzyTeamsResp {
            fuzzyTeams?: Int32Item[] | null;
        }
        export interface GetFuzzyTeamsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuzzyTeamsResp;
        }
        export interface GetFuzzyTournamentsResp {
            fuzzyTournaments?: Int32Item[] | null;
        }
        export interface GetFuzzyTournamentsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuzzyTournamentsResp;
        }
        export interface GetFuzzyUsersByGroupResp {
            /**
             * Fuzzy users
             */
            users?: GroupUserListItem[] | null;
        }
        export interface GetFuzzyUsersByGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuzzyUsersByGroupResp;
        }
        export interface GetFuzzyUsersResp {
            fuzzyUsers?: Int32Item[] | null;
        }
        export interface GetFuzzyUsersRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetFuzzyUsersResp;
        }
        export interface GetGameAccountDetail {
            gameAccountId?: number; // int32
            playerId?: number; // int32
            gameAccountName?: string | null;
            gameId?: number; // int32
            gameName?: string | null;
            gameUrlSafeName?: string | null;
            serverId?: number; // int32
            serverName?: string | null;
            isDeleted?: boolean;
        }
        export interface GetGameAccountResp {
            gameAccountId?: number; // int32
            playerId?: number; // int32
            gameAccountName?: string | null;
            gameId?: number; // int32
            serverId?: number | null; // int32
        }
        export interface GetGameAccountRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGameAccountResp;
        }
        export interface GetGameAccountsResp {
            gameAccounts?: GetGameAccountDetail[] | null;
            paging?: PagingRespBase;
        }
        export interface GetGameAccountsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGameAccountsResp;
        }
        export interface GetGameOptionsResp {
            /**
             * Games
             */
            games?: Int16Item[] | null;
        }
        export interface GetGameOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGameOptionsResp;
        }
        export interface GetGameRegionResp {
            /**
             * Region id
             */
            regionId: number; // int32
            /**
             * Region name
             */
            regionName: string;
            /**
             * Countries
             */
            countries: Int16Item[];
        }
        export interface GetGameRegionTranslationResp {
            /**
             * Region id
             */
            regionId: number; // int32
            /**
             * Region name
             */
            regionName: string;
            /**
             * Translations
             */
            translations: Translation[];
        }
        export interface GetGameRegionsResp {
            /**
             * Game regions
             */
            gameRegions?: GameRegionListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetGameResp {
            /**
             * Game id
             */
            id?: number; // int32
            /**
             * Game name
             */
            name?: string | null;
            /**
             * Has player rankings
             */
            hasPlayerRankings?: boolean;
            /**
             * Has team rankings
             */
            hasTeamRankings?: boolean;
            /**
             * Has streams
             */
            hasStreams?: boolean;
            /**
             * Grid id
             */
            gridId?: number | null; // int32
            /**
             * Steam app id
             */
            steamAppId?: number | null; // int32
            /**
             * Twitch game id
             */
            twitchGameId?: number | null; // int32
            /**
             * Game icon image url
             */
            iconImageUrl?: string | null;
            /**
             * Is legacy
             */
            isLegacy?: boolean;
            /**
             * Replay count
             */
            replayCount?: number; // int32
            /**
             * Recommended replay count
             */
            recommendedReplayCount?: number; // int32
        }
        export interface GetGameRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGameResp;
        }
        export interface GetGamesResp {
            /**
             * Games
             */
            games?: GameListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetGamesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGamesResp;
        }
        export interface GetGenderOptionsResp {
            genders?: GenderOption[] | null;
        }
        export interface GetGenderOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGenderOptionsResp;
        }
        export interface GetGgCodeInfoResp {
            type?: string | null;
            version?: string | null;
            providerName?: string | null;
            providerUrl?: string | null;
            width?: number; // int32
            height?: number; // int32
            html?: string | null;
        }
        export interface GetGgCodeInfoRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGgCodeInfoResp;
        }
        export interface GetGroupBlankPermissionsResp {
            /**
             * Frontend permissions
             */
            frontendPermissions?: Int16Item[] | null;
            /**
             * Backoffice permissions
             */
            backofficePermissions?: SimpleBackOfficePermissionItem[] | null;
        }
        export interface GetGroupBlankPermissionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGroupBlankPermissionsResp;
        }
        export interface GetGroupOptionsResp {
            /**
             * Groups
             */
            groups?: UInt32Item[] | null;
        }
        export interface GetGroupOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGroupOptionsResp;
        }
        export interface GetGroupResp {
            /**
             * Group id
             */
            groupId: number; // int32
            /**
             * User group name
             */
            name: string;
            /**
             * Remark
             */
            remark: string;
            /**
             * Frontend permissions
             */
            frontendPermissions: Int16Item[];
            /**
             * Backoffice permissions
             */
            backofficePermissions: SimpleBackOfficePermissionItem[];
        }
        export interface GetGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGroupResp;
        }
        export interface GetGroupTemplatesResp {
            /**
             * Templates
             */
            templates?: GroupTemplate[] | null;
        }
        export interface GetGroupTemplatesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGroupTemplatesResp;
        }
        export interface GetGroupsResp {
            /**
             * Groups
             */
            groups?: GroupListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetGroupsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetGroupsResp;
        }
        export interface GetHero {
            /**
             * Hero Id
             */
            id?: number; // int32
            /**
             * Hero Name
             */
            name?: string | null;
            /**
             * Referred To By
             */
            referredToBy?: number; // int32
            /**
             * Title
             */
            title?: string | null;
            gameName?: string | null;
            translations?: GetHeroesTranslation[] | null;
        }
        export interface GetHeroLocale {
            id?: number; // int32
            bcp47Identifier?: string | null;
            displayName?: string | null;
        }
        export interface GetHeroResp {
            /**
             * Hero Id
             */
            id?: number; // int32
            gameId?: number; // int32
            name?: string | null;
            title?: string | null;
            referredToBy?: number; // int32
            tagline?: string | null;
            description?: string | null;
            imageFileName?: string | null;
            iconFileName?: string | null;
        }
        export interface GetHeroRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetHeroResp;
        }
        export interface GetHeroTranslation {
            name?: string | null;
            /**
             * Title
             */
            title?: string | null;
            /**
             * Tagline
             */
            tagline?: string | null;
            /**
             * Description
             */
            description?: string | null;
            status?: string | null;
            locale?: GetHeroLocale;
        }
        export interface GetHeroTranslationsResp {
            /**
             * Hero Id
             */
            id?: number; // int32
            /**
             * Hero Name
             */
            name?: string | null;
            /**
             * Title
             */
            title?: string | null;
            /**
             * Tagline
             */
            tagline?: string | null;
            /**
             * Description
             */
            description?: string | null;
            translations?: GetHeroTranslation[] | null;
        }
        export interface GetHeroTranslationsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetHeroTranslationsResp;
        }
        export interface GetHeroesResp {
            heroes?: GetHero[] | null;
            paging?: PagingRespBase;
        }
        export interface GetHeroesRespApiRespBase {
            ret?: EnumRet /* int32 */;
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
            languageOptions?: LanguageOption[] | null;
        }
        export interface GetLanguagesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetLanguagesResp;
        }
        export interface GetLocaleOptionsResp {
            /**
             * Locales
             */
            locales?: Int16Item[] | null;
        }
        export interface GetLocaleOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetLocaleOptionsResp;
        }
        export interface GetMap {
            /**
             * Map Id
             */
            id?: number; // int32
            name?: string | null;
            gameName?: string | null;
            translations?: GetMapTranslation[] | null;
        }
        export interface GetMapLocale {
            id?: number; // int32
            bcp47Identifier?: string | null;
            displayName?: string | null;
        }
        export interface GetMapResp {
            /**
             * Map Id
             */
            id?: number; // int32
            gameId?: number; // int32
            name?: string | null;
            imageFileName?: string | null;
        }
        export interface GetMapRespApiRespBase {
            ret?: EnumRet /* int32 */;
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
            id?: number; // int32
            name?: string | null;
            translations?: GetMapTranslation[] | null;
        }
        export interface GetMapTranslationsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetMapTranslationsResp;
        }
        export interface GetMapsResp {
            maps?: GetMap[] | null;
            paging?: PagingRespBase;
        }
        export interface GetMapsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetMapsResp;
        }
        export interface GetMediaItems {
            broadcastTalentId?: number; // int32
            mediaItemId?: number; // int32
            title?: string | null;
            type?: string | null;
            urlSafeTitle?: string | null;
            viewCount?: number; // int32
        }
        export interface GetMediaItemsResp {
            mediaItems?: GetMediaItems[] | null;
            paging?: PagingRespBase;
        }
        export interface GetMediaItemsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetMediaItemsResp;
        }
        export interface GetMediaVodHostOptionsResp {
            /**
             * Hosts
             */
            hosts?: Int16Item[] | null;
        }
        export interface GetMediaVodResp {
            /**
             * Vod id
             */
            vodId: number; // int32
            /**
             * Vod title
             */
            title: string;
            /**
             * Related site sections
             */
            siteSections: Int16Item[];
            /**
             * Host id
             */
            hostId: number; // int32
            /**
             * Host name
             */
            hostName: string;
            /**
             * Host video id
             */
            hostVideoId: string;
            /**
             * Start time
             */
            startTime: number; // int32
            /**
             * Description
             */
            description?: string | null;
            /**
             * Tags
             */
            tags?: Int32Item[] | null;
            /**
             * Is in game
             */
            isInGame: boolean;
            /**
             * Is featured
             */
            isFeatured: boolean;
            /**
             * Related players
             */
            players?: Int32Item[] | null;
            /**
             * Related teams
             */
            teams?: Int32Item[] | null;
        }
        export interface GetMediaVodRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetMediaVodResp;
        }
        export interface GetMediaVodsResp {
            /**
             * Vods
             */
            vods?: MediaVodListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetMediaVodsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetMediaVodsResp;
        }
        export interface GetMode {
            /**
             * Mode Id
             */
            id?: number; // int32
            name?: string | null;
            abbreviation?: string | null;
            gameName?: string | null;
            translations?: GetModeTranslation[] | null;
        }
        export interface GetModeLocale {
            id?: number; // int32
            bcp47Identifier?: string | null;
            displayName?: string | null;
        }
        export interface GetModeResp {
            /**
             * Mode Id
             */
            id?: number; // int32
            gameId?: number; // int32
            name?: string | null;
            abbreviation?: string | null;
        }
        export interface GetModeRespApiRespBase {
            ret?: EnumRet /* int32 */;
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
            id?: number; // int32
            name?: string | null;
            abbreviation?: string | null;
            translations?: GetModeTranslation[] | null;
        }
        export interface GetModeTranslationsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetModeTranslationsResp;
        }
        export interface GetModesResp {
            modes?: GetMode[] | null;
            paging?: PagingRespBase;
        }
        export interface GetModesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetModesResp;
        }
        export interface GetNotificationTemplateResp {
            detail?: NotificationTemplateDetail;
            arguments?: NotificationTemplateArgument[] | null;
        }
        export interface GetNotificationTemplateRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetNotificationTemplateResp;
        }
        export interface GetNotificationTemplatesResp {
            /**
             * Notification Templates
             */
            notificationTemplates?: NotificationTemplateListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetNotificationTemplatesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetNotificationTemplatesResp;
        }
        export interface GetNotificationTypeOptionsResp {
            /**
             * Notification Type Options
             */
            notificationTypeOptions?: Int16Item[] | null;
        }
        export interface GetNotificationTypeOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetNotificationTypeOptionsResp;
        }
        export interface GetOneSignalAppResp {
            oneSignalAppDetail?: OneSignalAppListItem;
        }
        export interface GetOneSignalAppRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetOneSignalAppResp;
        }
        export interface GetOneSignalAppsResp {
            /**
             * Messaging One Signal Apps
             */
            onesignalApps?: OneSignalAppListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetOneSignalAppsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetOneSignalAppsResp;
        }
        export interface GetPageResp {
            /**
             * Page id
             */
            pageId?: number; // int32
            /**
             * Frontend id
             */
            frontendId?: number; // int32
            /**
             * Title
             */
            title?: string | null;
            /**
             * Content
             */
            content?: string | null;
            /**
             * Extra css
             */
            extraCss?: string | null;
            /**
             * Time spent
             */
            timeSpent?: number; // int32
            /**
             * Comments enabled
             */
            commentsEnabled?: boolean;
        }
        export interface GetPageRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetPageResp;
        }
        export interface GetPagesResp {
            /**
             * Pages
             */
            pages?: PageListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetPagesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetPagesResp;
        }
        export interface GetPlayerMediaItems {
            playerId?: number; // int32
            mediaItemId?: number; // int32
            title?: string | null;
            type?: string | null;
            urlSafeTitle?: string | null;
            viewCount?: number; // int32
        }
        export interface GetPlayerMediaItemsResp {
            mediaItems?: GetPlayerMediaItems[] | null;
            paging?: PagingRespBase;
        }
        export interface GetPlayerMediaItemsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetPlayerMediaItemsResp;
        }
        export interface GetPlayerResp {
            playerId?: number; // int32
            userId?: number | null; // int32
            nickName?: string | null;
            isActive?: boolean;
            firstName?: string | null;
            lastName?: string | null;
            gender?: EnumGender /* int32 */;
            genderName?: string | null;
            dateOfBirth?: string; // date
            countryId?: number | null; // int32
            country?: string | null;
            initialRating?: number | null; // int32
            primaryGameId?: number | null; // int32
            primaryGame?: string | null;
            description?: string | null;
            imageFileName?: string | null;
            facebook?: string | null;
            twitter?: string | null;
            youtube?: string | null;
        }
        export interface GetPlayerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetPlayerResp;
        }
        export interface GetPlayersDetail {
            playerId?: number; // int32
            nickName?: string | null;
            name?: string | null;
            urlSafeName?: string | null;
            countryName?: string | null;
            countryCode?: string | null;
            primaryGameId?: number | null; // int32
            primaryGame?: string | null;
            primaryGameUrlSafeName?: string | null;
            isActive?: boolean;
            createdAt?: number; // int64
        }
        export interface GetPlayersResp {
            players?: GetPlayersDetail[] | null;
            paging?: PagingRespBase;
        }
        export interface GetPlayersRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetPlayersResp;
        }
        export interface GetRoleBlankPermissionsResp {
            /**
             * Frontend permissions
             */
            frontendPermissions?: Int16Item[] | null;
            /**
             * Backoffice permissions
             */
            backofficePermissions?: SimpleBackOfficePermissionItem[] | null;
        }
        export interface GetRoleBlankPermissionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetRoleBlankPermissionsResp;
        }
        export interface GetRoleOptionsByGroupResp {
            /**
             * Roles
             */
            roles?: UInt32Item[] | null;
        }
        export interface GetRoleOptionsByGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetRoleOptionsByGroupResp;
        }
        export interface GetRoleResp {
            /**
             * Group id
             */
            groupId: number; // int32
            /**
             * Role id
             */
            roleId: number; // int32
            /**
             * Role name
             */
            name: string;
            /**
             * Group Name
             */
            groupName: string;
            /**
             * Remark
             */
            remark: string;
            /**
             * Role frontend permissions
             */
            frontendPermissions: Int16Item[];
            /**
             * Role backoffice permissions
             */
            backofficePermissions: SimpleBackOfficePermissionItem[];
        }
        export interface GetRoleRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetRoleResp;
        }
        export interface GetRoleTemplatesByGroupResp {
            /**
             * Templates
             */
            templates?: RoleTemplate[] | null;
        }
        export interface GetRoleTemplatesByGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetRoleTemplatesByGroupResp;
        }
        export interface GetRolesByGroupResp {
            /**
             * Roles
             */
            roles?: RoleListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetRolesByGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetRolesByGroupResp;
        }
        export interface GetServerOptionsResp {
            serverId?: number; // int32
            gameId?: number; // int32
            name?: string | null;
            isFrozen?: boolean;
        }
        export interface GetServerOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetServerOptionsResp;
        }
        export interface GetServerResp {
            id?: number; // int32
            name?: string | null;
            isFrozen?: boolean;
            accountNameFormat?: string | null;
            accountNameRegex?: string | null;
            gameId?: number; // int32
        }
        export interface GetServerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetServerResp;
        }
        export interface GetServers {
            id?: number; // int32
            name?: string | null;
            gameId?: number; // int32
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
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetServersResp;
        }
        export interface GetSide {
            /**
             * Side Id
             */
            id?: number; // int32
            name?: string | null;
            gameName?: string | null;
            translations?: GetSideTranslation[] | null;
        }
        export interface GetSideLocale {
            id?: number; // int32
            bcp47Identifier?: string | null;
            displayName?: string | null;
        }
        export interface GetSideResp {
            /**
             * Side Id
             */
            id?: number; // int32
            gameId?: number; // int32
            name?: string | null;
            iconFileName?: string | null;
        }
        export interface GetSideRespApiRespBase {
            ret?: EnumRet /* int32 */;
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
            id?: number; // int32
            name?: string | null;
            translations?: GetSideTranslation[] | null;
        }
        export interface GetSideTranslationsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetSideTranslationsResp;
        }
        export interface GetSidesResp {
            sides?: GetSide[] | null;
            paging?: PagingRespBase;
        }
        export interface GetSidesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetSidesResp;
        }
        export interface GetSiteSectionResp {
            id?: number; // int32
            gameId?: number | null; // int32
            name?: string | null;
            hidden?: boolean;
            urlSafeName?: string | null;
            position?: number; // int32
            headerImageUrl?: string | null;
            backGroundImageUrl?: string | null;
            iconImageUrl?: string | null;
            logoImageUrl?: string | null;
        }
        export interface GetSiteSectionRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetSiteSectionResp;
        }
        export interface GetSiteSections {
            id?: number; // int32
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
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetSiteSectionsOptionsResp;
        }
        export interface GetSiteSectionsResp {
            siteSections?: GetSiteSections[] | null;
            paging?: PagingRespBase;
        }
        export interface GetSiteSectionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetSiteSectionsResp;
        }
        export interface GetSponsorResp {
            id?: number; // int32
            name?: string | null;
            imageFileName?: string | null;
            description?: string | null;
            url?: string | null;
        }
        export interface GetSponsorRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetSponsorResp;
        }
        export interface GetSponsors {
            id?: number; // int32
            name?: string | null;
            imageFileName?: string | null;
            urlSafeName?: string | null;
            url?: string | null;
            createdAt?: number; // int64
            updatedAt?: number | null; // int64
            createdBy?: number; // int32
            userName?: string | null;
        }
        export interface GetSponsorsResp {
            sponsors?: GetSponsors[] | null;
            paging?: PagingRespBase;
        }
        export interface GetSponsorsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetSponsorsResp;
        }
        export interface GetStateOptionsResp {
            /**
             * Func states
             */
            states?: ByteItem[] | null;
        }
        export interface GetStateOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetStateOptionsResp;
        }
        export interface GetStreamResp {
            id?: number; // int32
            platform?: number; // int32
            streamId?: string | null;
            streamUrl?: string | null;
            screenCapUrl?: string | null;
            gameId?: number; // int32
            languageId?: number; // int32
            isEventStream?: boolean;
            isProPlayer?: boolean;
            isCelebCaster?: boolean;
            nextBroadcastAt?: number | null; // int64
            title?: string | null;
            isFeatured?: boolean;
            description?: string | null;
            tags?: MediaTag[] | null;
        }
        export interface GetStreamRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetStreamResp;
        }
        export interface GetStreams {
            id?: number; // int32
            title?: string | null;
            platform?: number; // int32
            streamId?: string | null;
            streamUrl?: string | null;
            gameId?: number; // int32
            isLive?: boolean;
            userId?: number; // int32
            createdAt?: number; // int64
            gameName?: string | null;
            gameUrlSafeName?: string | null;
            userName?: string | null;
        }
        export interface GetStreamsResp {
            streams?: GetStreams[] | null;
            paging?: PagingRespBase;
        }
        export interface GetStreamsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetStreamsResp;
        }
        export interface GetSystemLogResp {
            log?: SystemLogDetail;
        }
        export interface GetSystemLogRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetSystemLogResp;
        }
        export interface GetSystemLogsResp {
            /**
             * Api Logs
             */
            logs?: SystemLogListItem[] | null;
            paging?: PagingRespBase;
        }
        export interface GetSystemLogsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetSystemLogsResp;
        }
        export interface GetTeamPlayer {
            teamPlayerId?: number; // int32
            playerId?: number; // int32
            teamId?: number; // int32
            playerName?: string | null;
            playerUrlSafeName?: string | null;
            joinDate?: number; // int64
            leaveDate?: number | null; // int64
            isHidden?: boolean;
            position?: string | null;
        }
        export interface GetTeamPlayerResp {
            teamPlayerId?: number; // int32
            playerId?: number; // int32
            teamId?: number; // int32
            joinDate?: number; // int64
            leaveDate?: number | null; // int64
            isHidden?: boolean;
        }
        export interface GetTeamPlayerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetTeamPlayerResp;
        }
        export interface GetTeamPlayersResp {
            players?: GetTeamPlayer[] | null;
            paging?: PagingRespBase;
        }
        export interface GetTeamPlayersRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetTeamPlayersResp;
        }
        export interface GetTeamResp {
            teamId?: number; // int32
            teamName?: string | null;
            teamTag?: string | null;
            ownerId?: number | null; // int32
            ownerName?: string | null;
            captainId?: number | null; // int32
            captainName?: string | null;
            manageId?: number | null; // int32
            manageName?: string | null;
            excludedRankings?: boolean;
            imageFileName?: string | null;
            gameId?: number; // int32
            gameName?: string | null;
            countryId?: number | null; // int32
            countryName?: string | null;
            description?: string | null;
            facebook?: string | null;
            twitter?: string | null;
            youtube?: string | null;
        }
        export interface GetTeamRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetTeamResp;
        }
        export interface GetTeamsDetail {
            teamId?: number; // int32
            teamName?: string | null;
            teamTag?: string | null;
            countryId?: number | null; // int32
            countryName?: string | null;
            countryCode?: string | null;
            gameId?: number | null; // int32
            gameName?: string | null;
            gameUrlSafeName?: string | null;
            isRanked?: boolean;
            updatedAt?: number | null; // int64
            updatedBy?: number | null; // int32
        }
        export interface GetTeamsResp {
            teams?: GetTeamsDetail[] | null;
            paging?: PagingRespBase;
        }
        export interface GetTeamsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetTeamsResp;
        }
        export interface GetUserForPlayerResp {
            userId?: number; // int32
            userName?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            countryId?: number | null; // int32
            countryName?: string | null;
            dateOfBirth?: string | null; // date
            gender?: EnumGender /* int32 */;
            primaryGameId?: number | null; // int32
            primaryGame?: string | null;
        }
        export interface GetUserForPlayerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetUserForPlayerResp;
        }
        export interface GetUserFrontEnd {
            frontendId?: number; // int32
            name?: string | null;
        }
        export interface GetUserGroup {
            groupId?: number; // int32
            name?: string | null;
        }
        export interface GetUserResp {
            userId?: number; // int32
            userName?: string | null;
            password?: string | null;
            firstName?: string | null;
            lastName?: string | null;
            email?: string | null;
            city?: string | null;
            userTypeId?: number | null; // int32
            userType?: string | null;
            countryId?: number | null; // int32
            countryName?: string | null;
            dateOfBirth?: string | null; // date
            gender?: EnumGender /* int32 */;
            aboutMe?: string | null;
            avatarImagePath?: string | null;
            userGroups?: GetUserGroup[] | null;
            userRoles?: GetUserRole[] | null;
            userFrontEnds?: GetUserFrontEnd[] | null;
        }
        export interface GetUserRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetUserResp;
        }
        export interface GetUserRole {
            roleId?: number; // int32
            name?: string | null;
        }
        export interface GetUserSessionResp {
            userProfile?: UserProfile;
            menuList?: MenuItem[] | null;
            funcItem?: {
                [name: string]: {
                    [name: string]: number; // int32
                };
            } | null;
        }
        export interface GetUserSessionRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetUserSessionResp;
        }
        export interface GetUserTypeOptionsResp {
            userTypeOptions?: UserType[] | null;
        }
        export interface GetUserTypeOptionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetUserTypeOptionsResp;
        }
        export interface GetUsers {
            userId?: number; // int32
            userName?: string | null;
            updatedAt?: number; // int64
            updatedUserName?: string | null;
        }
        export interface GetUsersByGroupResp {
            /**
             * Users
             */
            users?: GroupUserListItem[] | null;
        }
        export interface GetUsersByGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetUsersByGroupResp;
        }
        export interface GetUsersByRoleResp {
            /**
             * Users
             */
            users?: RoleUserListItem[] | null;
        }
        export interface GetUsersByRoleRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetUsersByRoleResp;
        }
        export interface GetUsersResp {
            users?: GetUsers[] | null;
            paging?: PagingRespBase;
        }
        export interface GetUsersRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetUsersResp;
        }
        export interface GetVenueResp {
            id?: number; // int32
            city?: string | null;
            coordinates?: string | null;
            name?: string | null;
            imageFileName?: string | null;
            countryId?: number; // int32
            address?: string | null;
        }
        export interface GetVenueRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetVenueResp;
        }
        export interface GetVenues {
            id?: number; // int32
            city?: string | null;
            coordinates?: string | null;
            hasCoordinates?: boolean;
            name?: string | null;
            imageFileName?: string | null;
            hasImage?: boolean;
            createdAt?: number; // int64
            updatedAt?: number | null; // int64
            countryName?: string | null;
            username?: string | null;
        }
        export interface GetVenuesResp {
            venues?: GetVenues[] | null;
            paging?: PagingRespBase;
        }
        export interface GetVenuesRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: GetVenuesResp;
        }
        export interface GroupListItem {
            /**
             * Group id
             */
            groupId?: number; // int32
            /**
             * User group name
             */
            name?: string | null;
            /**
             * Remark
             */
            remark?: string | null;
            /**
             * Updated At
             */
            updatedAt?: number; // int64
            /**
             * User name
             */
            updatedUserName?: string | null;
            /**
             * Frontend names
             */
            frontendNames?: string[] | null;
        }
        export interface GroupTemplate {
            /**
             * Group template id
             */
            templateId?: number; // int32
            /**
             * Group template name
             */
            name?: string | null;
            /**
             * Frontend permissions
             */
            frontendPermissions?: Int16Item[] | null;
            /**
             * Backoffice permissions
             */
            backofficePermissions?: SimpleBackOfficePermissionItem[] | null;
        }
        export interface GroupUserListItem {
            /**
             * User id
             */
            userId?: number; // int32
            /**
             * User name
             */
            userName?: string | null;
        }
        export interface Int16Item {
            id?: number; // int32
            name?: string | null;
        }
        export interface Int16ItemWithSubItem {
            id?: number; // int32
            name?: string | null;
            subItems?: Int16Item[] | null;
        }
        export interface Int32Item {
            id?: number; // int32
            name?: string | null;
        }
        export interface Int32StringDictionaryApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: {
                [name: string]: string | null;
            } | null;
        }
        export interface LanguageOption {
            id?: number; // int32
            name?: string | null;
        }
        export type LogLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6; // int32
        export interface LogoutResp {
        }
        export interface LogoutRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: LogoutResp;
        }
        export interface MediaTag {
            /**
             * Media Tag Id
             */
            id?: number; // int32
            /**
             * Media Item Id
             */
            mediaItemId?: number; // int32
            /**
             * Media Item Name
             */
            name?: string | null;
        }
        export interface MediaVodListItem {
            /**
             * Vod id
             */
            vodId: number; // int32
            /**
             * Vod title
             */
            title: string;
            /**
             * Host name
             */
            hostName: string;
            /**
             * Host video id
             */
            hostVideoId: string;
            /**
             * Creator
             */
            creator: string;
            /**
             * Create at
             */
            createdAt: number; // int64
            /**
             * Update at
             */
            updateAt: number; // int64
            /**
             * Is in game
             */
            isInGame: boolean;
            /**
             * Host view count
             */
            hostViewCount: number; // int32
        }
        export interface MenuItem {
            /**
             * Backoffice func id
             */
            funcId?: number; // int32
            /**
             * Backoffice func name
             */
            name?: string | null;
            /**
             * Parent func id
             */
            parentId?: number; // int32
            /**
             * Func level
             */
            level?: number; // int32
            /**
             * Func position
             */
            position?: number; // int32
            /**
             * Api url
             */
            url?: string | null;
            /**
             * Sub Menus
             */
            subMenus?: MenuItem[] | null;
        }
        export interface ModArticleResp {
        }
        export interface ModArticleRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModArticleResp;
        }
        export interface ModBroadcastTalentResp {
        }
        export interface ModBroadcastTalentRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModBroadcastTalentResp;
        }
        export interface ModFileResp {
            fileId?: number; // int32
            folderId?: number; // int32
            fileName?: string | null;
        }
        export interface ModFileRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModFileResp;
        }
        export interface ModFolderResp {
            id?: number; // int32
            name?: string | null;
        }
        export interface ModFolderRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModFolderResp;
        }
        export interface ModFrontendSiteSectionReq {
            /**
             * Frontend id
             */
            frontendId: number; // int32
            /**
             * Site section id
             */
            siteSectionId: number; // int32
        }
        export interface ModFrontendSiteSectionResp {
            /**
             * Frontend id
             */
            frontendId?: number; // int32
            /**
             * Site section id
             */
            siteSectionId?: number; // int32
        }
        export interface ModFrontendSiteSectionRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModFrontendSiteSectionResp;
        }
        export interface ModFuncResp {
            /**
             * Backoffice func id
             */
            funcId?: number; // int32
        }
        export interface ModFuncRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModFuncResp;
        }
        export interface ModGameAccountReq {
            /**
             * GameAccount Id
             */
            gameAccountId: number; // int32
            /**
             * PlayerId
             */
            playerId: number; // int32
            /**
             * GameAccount Name
             */
            gameAccountName: string;
        }
        export interface ModGameAccountResp {
        }
        export interface ModGameAccountRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModGameAccountResp;
        }
        export interface ModGameRegionReq {
            /**
             * RegionId
             */
            regionId: number; // int32
            /**
             * Region name
             */
            regionName: string;
            /**
             * Game id
             */
            gameId: number; // int32
            /**
             * Country Ids
             */
            countryIds: number /* int32 */[];
        }
        export interface ModGameRegionResp {
            /**
             * Region id
             */
            regionId: number; // int32
        }
        export interface ModGameRegionTranslationReq {
            /**
             * Region id
             */
            regionId: number; // int32
            /**
             * Locale Id
             */
            localeId: number; // int32
            /**
             * Map translations Name
             */
            regionName: string;
        }
        export interface ModGameRegionTranslationResp {
        }
        export interface ModGameRegionTranslationRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModGameRegionTranslationResp;
        }
        export interface ModGameResp {
            /**
             * Game id
             */
            gameId?: number; // int32
        }
        export interface ModGameRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModGameResp;
        }
        export interface ModGameTranslationsReq {
            /**
             * Game id
             */
            gameId: number; // int32
            /**
             * Locale Id
             */
            localeId: number; // int32
            /**
             * Side translations Name
             */
            name: string;
        }
        export interface ModGameTranslationsResp {
        }
        export interface ModGameTranslationsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModGameTranslationsResp;
        }
        export interface ModGroupReq {
            /**
             * Group id
             */
            groupId: number; // int32
            /**
             * User group name
             */
            name: string;
            /**
             * Remark
             */
            remark?: string | null;
            /**
             * Frontend ids
             */
            frontendIds?: number /* int32 */[] | null;
            /**
             * Backoffice func ids
             */
            backofficeFuncIds?: number /* int32 */[] | null;
        }
        export interface ModGroupResp {
            /**
             * Group id
             */
            groupId?: number | null; // int32
        }
        export interface ModGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModGroupResp;
        }
        export interface ModHeroResp {
        }
        export interface ModHeroRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModHeroResp;
        }
        export interface ModHeroTranslationsReq {
            /**
             * game hero Id
             */
            id: number; // int32
            /**
             * Locale Id
             */
            localeId: number; // int32
            /**
             * Map translations Name
             */
            name: string;
            /**
             * Title
             */
            title: string;
            /**
             * Tagline
             */
            tagline: string;
            /**
             * Description
             */
            description: string;
        }
        export interface ModHeroTranslationsResp {
        }
        export interface ModHeroTranslationsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModHeroTranslationsResp;
        }
        export interface ModMapResp {
        }
        export interface ModMapRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModMapResp;
        }
        export interface ModMapTranslationsReq {
            /**
             * game maps Id
             */
            id: number; // int32
            /**
             * Locale Id
             */
            localeId: number; // int32
            /**
             * Map translations Name
             */
            name: string;
        }
        export interface ModMapTranslationsResp {
        }
        export interface ModMapTranslationsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModMapTranslationsResp;
        }
        export interface ModMediaVodReq {
            /**
             * Vod id
             */
            vodId: number; // int32
            /**
             * Vod title
             */
            title: string;
            /**
             * Site section ids
             */
            siteSectionIds: number /* int32 */[];
            /**
             * Host id
             */
            hostId: number; // int32
            /**
             * Host video id
             */
            hostVideoId: string;
            /**
             * Start time
             */
            startTime: number; // int32
            /**
             * Description
             */
            description?: string | null;
            /**
             * Tags
             */
            tags?: string[] | null;
            /**
             * Is in game
             */
            isInGame: boolean;
            /**
             * Is featured
             */
            isFeatured: boolean;
            /**
             * Related players
             */
            playerIds?: number /* int32 */[] | null;
            /**
             * Related teams
             */
            teamIds?: number /* int32 */[] | null;
        }
        export interface ModMediaVodResp {
            /**
             * Vod id
             */
            vodId: number; // int32
        }
        export interface ModMediaVodRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModMediaVodResp;
        }
        export interface ModModeReq {
            /**
             * Modes Id
             */
            id: number; // int32
            /**
             * Modes Name
             */
            name: string;
            /**
             * Modes Abbreviation
             */
            abbreviation?: string | null;
            /**
             * Modes Game Id
             */
            gameId: number; // int32
        }
        export interface ModModeResp {
        }
        export interface ModModeRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModModeResp;
        }
        export interface ModModeTranslationsReq {
            /**
             * game modes Id
             */
            id: number; // int32
            /**
             * Locale Id
             */
            localeId: number; // int32
            /**
             * Map translations Name
             */
            name: string;
            /**
             * Map translations Abbreviation
             */
            abbreviation?: string | null;
        }
        export interface ModModeTranslationsResp {
        }
        export interface ModModeTranslationsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModModeTranslationsResp;
        }
        export interface ModNotificationTemplateReq {
            /**
             * Notification Template Id
             */
            notificationTemplateId: number; // int32
            webTitle: string;
            webBody: string;
            pushTitle?: string | null;
            pushBody?: string | null;
            emailSubject?: string | null;
            emailTextBody?: string | null;
            emailHtmlBody?: string | null;
        }
        export interface ModNotificationTemplateResp {
            /**
             * Notification Template Id
             */
            notificationTemplateId?: number; // int32
        }
        export interface ModNotificationTemplateRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModNotificationTemplateResp;
        }
        export interface ModOneSignalAppReq {
            /**
             * One Signal App Id
             */
            oneSignalAppId: number; // int32
            /**
             * App Id
             */
            appId: string;
            /**
             * Api Key
             */
            apiKey: string;
            /**
             * Safari Web Id
             */
            safariWebId: string;
            /**
             * Player Match Starting Notification Android Channel Id
             */
            playerMatchStartingNotificationAndroidChannelId?: string | null;
            /**
             * Team Match Starting Notification Android Channel Id
             */
            teamMatchStartingNotificationAndroidChannelId?: string | null;
            /**
             * Player Article Notification Android Channel Id
             */
            playerArticleNotificationAndroidChannelId?: string | null;
            /**
             * Team Article Notification Android Channel Id
             */
            teamArticleNotificationAndroidChannelId?: string | null;
            /**
             * Player Match Resulted Notification Android Channel Id
             */
            playerMatchResultedNotificationAndroidChannelId?: string | null;
            /**
             * Team Match Resulted Notification Android Channel Id
             */
            teamMatchResultedNotificationAndroidChannelId?: string | null;
            /**
             * Team Transfer Notification Android Channel Id
             */
            teamTransferNotificationAndroidChannelId?: string | null;
            /**
             * Player Transfer Notification Android Channel Id
             */
            playerTransferNotificationAndroidChannelId?: string | null;
        }
        export interface ModOneSignalAppResp {
            /**
             * One Signal App Id
             */
            oneSignalAppId?: number | null; // int32
        }
        export interface ModOneSignalAppRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModOneSignalAppResp;
        }
        export interface ModPageReq {
            /**
             * Page id
             */
            pageId: number; // int32
            /**
             * Title
             */
            title: string;
            /**
             * Content
             */
            content: string;
            /**
             * Frontend id
             */
            frontendId: number; // int32
            /**
             * Extra css
             */
            extraCss?: string | null;
        }
        export interface ModPageResp {
            /**
             * Page id
             */
            pageId?: number | null; // int32
        }
        export interface ModPageRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModPageResp;
        }
        export interface ModPlayerResp {
        }
        export interface ModPlayerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModPlayerResp;
        }
        export interface ModRoleReq {
            /**
             * Role id
             */
            roleId: number; // int32
            /**
             * Role name
             */
            name: string;
            /**
             * Remark
             */
            remark: string;
            /**
             * Backoffice Func Ids
             */
            backofficeFuncIds?: number /* int32 */[] | null;
            /**
             * Frontend ids
             */
            frontendIds?: number /* int32 */[] | null;
        }
        export interface ModRoleResp {
            /**
             * Role id
             */
            roleId?: number | null; // int32
        }
        export interface ModRoleRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModRoleResp;
        }
        export interface ModServerResp {
        }
        export interface ModServerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModServerResp;
        }
        export interface ModSideResp {
        }
        export interface ModSideRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModSideResp;
        }
        export interface ModSideTranslationsReq {
            /**
             * game side Id
             */
            id: number; // int32
            /**
             * Locale Id
             */
            localeId: number; // int32
            /**
             * Side translations Name
             */
            name: string;
        }
        export interface ModSideTranslationsResp {
        }
        export interface ModSideTranslationsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModSideTranslationsResp;
        }
        export interface ModSiteSectionsResp {
        }
        export interface ModSiteSectionsRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModSiteSectionsResp;
        }
        export interface ModSponsorResp {
        }
        export interface ModSponsorRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModSponsorResp;
        }
        export interface ModStreamResp {
        }
        export interface ModStreamRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModStreamResp;
        }
        export interface ModStreamTag {
            /**
             * Media Tag Id
             */
            id?: number | null; // int32
            /**
             * Media Item Name
             */
            name?: string | null;
        }
        export interface ModTeamPlayerResp {
        }
        export interface ModTeamPlayerRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModTeamPlayerResp;
        }
        export interface ModTeamResp {
        }
        export interface ModTeamRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModTeamResp;
        }
        export interface ModUserResp {
        }
        export interface ModUserRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: ModUserResp;
        }
        export interface ModVenueResp {
        }
        export interface ModVenueRespApiRespBase {
            ret?: EnumRet /* int32 */;
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
            id: number; // int32
            frontEndId: number; // int32
            messagingNotificationTypeId?: number | null; // int32
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
            createdAt: number; // int64
            updatedAt: number; // int64
        }
        export interface NotificationTemplateListItem {
            /**
             * Notification Template Id
             */
            id: number; // int32
            /**
             * Messaging Notification Type Id
             */
            messagingNotificationTypeId: number; // int32
            /**
             * Frontend Name
             */
            feName: string;
            /**
             * Notification Template Name
             */
            name: string;
            /**
             * Notification Template Description
             */
            desc: string;
            /**
             * Is Web Set
             */
            webSupported: boolean;
            /**
             * Is Email Set
             */
            emailSupported: boolean;
            /**
             * Is Push Set
             */
            pushSupported: boolean;
        }
        export interface OneSignalAppListItem {
            id?: number; // int32
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
             */
            id: number; // int32
            /**
             * Option order
             */
            order: number; // int32
            /**
             * Option text
             */
            text: string;
        }
        export interface PageListItem {
            /**
             * Page id
             */
            pageId?: number; // int32
            /**
             * Frontend name
             */
            feName?: string | null;
            /**
             * Title
             */
            title?: string | null;
            /**
             * Url
             */
            url?: string | null;
            /**
             * Author
             */
            author?: string | null;
            /**
             * Edited At
             */
            updatedAt?: number | null; // int64
            /**
             * View count
             */
            viewCount?: number; // int32
        }
        export interface PagingRespBase {
            pageNo: number; // int32
            pageSize: number; // int32
            totalPages: number; // int32
            totalRows: number; // int32
        }
        export interface ParentFolder {
            /**
             * Folder Id
             */
            id?: number; // int32
            /**
             * ParentId
             */
            parentId?: number | null; // int32
            /**
             * Folder name
             */
            name?: string | null;
            /**
             * Folder path
             */
            path?: string | null;
        }
        export interface RelatedQuickPoll {
            /**
             * Poll id
             */
            pollId: number; // int32
            /**
             * Quick poll question
             */
            question: string;
            /**
             * Quick poll options
             */
            options?: Option[] | null;
        }
        export interface RoleListItem {
            /**
             * Role id
             */
            roleId?: number; // int32
            /**
             * Role name
             */
            name?: string | null;
            /**
             * Group id
             */
            groupId?: number; // int32
            /**
             * Group Name
             */
            groupName?: string | null;
            /**
             * Remark
             */
            remark?: string | null;
            /**
             * Updated At
             */
            updatedAt?: number; // int64
            /**
             * User name
             */
            updatedUserName?: string | null;
            /**
             * Frontend names
             */
            frontendNames?: string[] | null;
        }
        export interface RoleTemplate {
            /**
             * Role template id
             */
            templateId?: number; // int32
            /**
             * Role template name
             */
            name?: string | null;
            /**
             * Frontend permissions
             */
            frontendPermissions?: Int16Item[] | null;
            /**
             * Backoffice permissions
             */
            backofficePermissions?: SimpleBackOfficePermissionItem[] | null;
        }
        export interface RoleUserListItem {
            /**
             * User id
             */
            userId?: number; // int32
            /**
             * User name
             */
            userName?: string | null;
            /**
             * User Type Name
             */
            userTypeName?: string | null;
        }
        export interface SimpleBackOfficePermissionItem {
            /**
             * Backoffice func id
             */
            funcId?: number; // int32
            /**
             * Backoffice func name
             */
            name?: string | null;
            /**
             * Checked
             */
            checked?: boolean;
            /**
             * Sub
             */
            subFuncs?: SimpleBackOfficePermissionItem[] | null;
        }
        export interface SiteSection {
            /**
             * Site section id
             */
            id?: number; // int32
            /**
             * Site section name
             */
            name?: string | null;
        }
        export interface SystemLogDetail {
            id?: number; // int64
            traceId?: string | null;
            prefix?: string | null;
            serverName?: string | null;
            level?: LogLevel /* int32 */;
            logger?: string | null;
            method?: string | null;
            message?: string | null;
            messagePayload?: string | null;
            exception?: string | null;
            recordedAt?: number; // int64
        }
        export interface SystemLogListItem {
            /**
             * Id
             */
            id?: number; // int64
            /**
             * Trace Id
             */
            traceId?: string | null;
            /**
             * Prefix
             */
            prefix?: string | null;
            /**
             * Server Name
             */
            serverName?: string | null;
            level?: LogLevel /* int32 */;
            /**
             * Logger
             */
            logger?: string | null;
            /**
             * Method
             */
            method?: string | null;
            /**
             * Message
             */
            message?: string | null;
            /**
             * Record At
             */
            recordedAt?: number; // int64
        }
        export interface Translation {
            name?: string | null;
            status?: string | null;
            locale?: TranslationLocale;
        }
        export interface TranslationLocale {
            id?: number; // int32
            bcp47Identifier?: string | null;
            displayName?: string | null;
        }
        export interface UInt16Item {
            id?: number; // int32
            name?: string | null;
        }
        export interface UInt32Item {
            id?: number; // int32
            name?: string | null;
        }
        export interface UnAssignGroupReq {
            /**
             * Group id
             */
            groupId: number; // int32
            /**
             * Add user ids
             */
            userIds: number /* int32 */[];
        }
        export interface UnAssignGroupResp {
            /**
             * UnAssign user ids
             */
            userIds?: number /* int32 */[] | null;
        }
        export interface UnAssignGroupRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: UnAssignGroupResp;
        }
        export interface UnAssignRoleReq {
            /**
             * Role id
             */
            roleId: number; // int32
            /**
             * Add user ids
             */
            userIds: number /* int32 */[];
        }
        export interface UnAssignRoleResp {
            /**
             * UnAssign user ids
             */
            userIds?: number /* int32 */[] | null;
        }
        export interface UnAssignRoleRespApiRespBase {
            ret?: EnumRet /* int32 */;
            msg?: string | null;
            traceId?: string | null;
            data?: UnAssignRoleResp;
        }
        export interface UserProfile {
            userName?: string | null;
            avatarImage?: string | null;
        }
        export interface UserType {
            id?: number; // int32
            name?: string | null;
        }
    }
}
declare namespace Paths {
    namespace ApiToolsClearAllMemoryCache {
        namespace Post {
            namespace Parameters {
                export type ApiVersion = string;
            }
            export interface QueryParameters {
                "api-version"?: Parameters.ApiVersion;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ApiV4Articles {
        namespace Get {
            namespace Parameters {
                export type ArticleId = number; // int32
                export type Author = string;
                export type CreatedFrom = number; // int64
                export type CreatedTo = number; // int64
                export type FrontendId = number; // int32
                export type IsProofread = boolean;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type SiteSectionId = number; // int32
                export type State = Components.Schemas.EnumArticleState /* int32 */;
                export type Title = string;
            }
            export interface QueryParameters {
                ArticleId?: Parameters.ArticleId /* int32 */;
                FrontendId?: Parameters.FrontendId /* int32 */;
                Title?: Parameters.Title;
                IsProofread?: Parameters.IsProofread;
                SiteSectionId?: Parameters.SiteSectionId /* int32 */;
                CreatedFrom?: Parameters.CreatedFrom /* int64 */;
                CreatedTo?: Parameters.CreatedTo /* int64 */;
                Author?: Parameters.Author;
                State?: Parameters.State;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetArticlesRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * Article SubtypeId
                 */
                SubTypeId: number; // int32
                /**
                 * Article frontend id
                 */
                FrontendId: number; // int32
                /**
                 * Article locale id
                 */
                LocaleId: number; // int32
                /**
                 * Article site sections
                 */
                SiteSectionIds: number /* int32 */[];
                /**
                 * Article title
                 */
                Title: string;
                /**
                 * Article Teaser
                 */
                Teaser: string;
                /**
                 * Article content
                 */
                Content: string;
                /**
                 * Headline image file
                 */
                HeadlineImgFile?: string; // binary
                /**
                 * Headline image text
                 */
                HeadlineImageText?: string;
                /**
                 * Square headline image file
                 */
                SquareHeadlineImgFile?: string; // binary
                /**
                 * Is published
                 */
                IsPublished?: boolean;
                /**
                 * Published At
                 */
                PublishedAt?: number; // int64
                /**
                 * Is featured
                 */
                IsFeatured: boolean;
                /**
                 * Is section sticky
                 */
                IsSectionSticky: boolean;
                /**
                 * Time spent
                 */
                TimeSpent: number; // int32
                /**
                 * Related players
                 */
                PlayerIds?: number /* int32 */[];
                /**
                 * Related teams
                 */
                TeamIds?: number /* int32 */[];
                /**
                 * Related tournaments
                 */
                TournamentIds?: number /* int32 */[];
                /**
                 * Questions
                 */
                "QuickPoll.Question"?: string;
                /**
                 * Options
                 */
                "QuickPoll.Options"?: string[];
            }
            namespace Responses {
                export type Default = Components.Schemas.AddArticleRespApiRespBase;
            }
        }
    }
    namespace ApiV4Articles$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelArticleRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetArticleRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Article id
                 */
                Id: number; // int32
                /**
                 * Article SubtypeId
                 */
                SubTypeId?: number; // int32
                /**
                 * Article frontend id
                 */
                FrontendId?: number; // int32
                /**
                 * Article locale id
                 */
                LocaleId?: number; // int32
                /**
                 * Article site sections
                 */
                SiteSectionIds?: number /* int32 */[];
                /**
                 * Article title
                 */
                Title?: string;
                /**
                 * Article teaser
                 */
                Teaser?: string;
                /**
                 * Article content
                 */
                Content?: string;
                /**
                 * Headline image file
                 */
                HeadlineImgFile?: string; // binary
                /**
                 * Headline image text
                 */
                HeadlineImageText?: string;
                /**
                 * Square headline image file
                 */
                SquareHeadlineImgFile?: string; // binary
                /**
                 * Is published
                 */
                IsPublished?: boolean;
                /**
                 * Published At
                 */
                PublishedAt?: number; // int64
                /**
                 * Is proofread
                 */
                IsProofread?: boolean;
                /**
                 * Time spent for proofreading
                 */
                TimeSpentProofreading?: number; // int32
                /**
                 * Is featured
                 */
                IsFeatured?: boolean;
                /**
                 * Is section sticky
                 */
                IsSectionSticky?: boolean;
                /**
                 * Time spent
                 */
                TimeSpent?: number; // int32
                /**
                 * Is Clear All Players
                 */
                IsClearAllPlayers?: boolean;
                /**
                 * Related players
                 */
                PlayerIds?: number /* int32 */[];
                /**
                 * Is Clear All Teams
                 */
                IsClearAllTeams?: boolean;
                /**
                 * Related teams
                 */
                TeamIds?: number /* int32 */[];
                /**
                 * Is Clear All Tournaments
                 */
                IsClearAllTournaments?: boolean;
                /**
                 * Related tournaments
                 */
                TournamentIds?: number /* int32 */[];
                /**
                 * Questions
                 */
                "QuickPoll.Question"?: string;
                /**
                 * Options
                 */
                "QuickPoll.Options"?: string[];
            }
            namespace Responses {
                export type Default = Components.Schemas.ModArticleRespApiRespBase;
            }
        }
    }
    namespace ApiV4ArticlesTypes {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetArticleTypesRespApiRespBase;
            }
        }
    }
    namespace ApiV4Broadcasttalents {
        namespace Get {
            namespace Parameters {
                export type CountryId = number; // int32
                export type GameId = number; // int32
                export type LanguageId = number; // int32
                export type Name = string;
                export type NickName = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                NickName?: Parameters.NickName;
                Name?: Parameters.Name;
                GameId?: Parameters.GameId /* int32 */;
                LanguageId?: Parameters.LanguageId /* int32 */;
                CountryId?: Parameters.CountryId /* int32 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetBroadcastTalentsRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * Name
                 */
                Name: string;
                /**
                 * First Name
                 */
                FirstName?: string;
                /**
                 * Last Name
                 */
                LastName?: string;
                /**
                 * Country Id
                 */
                CountryId: number; // int32
                /**
                 * Language Id
                 */
                LanguageId: number; // int32
                Type: Components.Schemas.EnumBroadcastTalentType /* int32 */;
                /**
                 * IsActive
                 */
                IsActive: boolean;
                /**
                 * About
                 */
                About?: string;
                /**
                 * Gender (Male=0/Female=1)
                 */
                Gender: number; // int32
                /**
                 * DateOfBirth (ex:2022-12-01)
                 */
                DateOfBirth?: string; // date
                /**
                 * Primary Game Id
                 */
                PrimaryGameId?: number; // int32
                /**
                 * Profile Image
                 */
                ProfileImage?: string; // binary
                /**
                 * Header Image
                 */
                HeaderImage?: string; // binary
                /**
                 * Player Id
                 */
                PlayerId?: number; // int32
                /**
                 * Person Stream Id
                 */
                PersonalStreamId?: number; // int32
                /**
                 * WebSite
                 */
                Website?: string; // uri
                /**
                 * Facebook
                 */
                Facebook?: string;
                /**
                 * Twitter
                 */
                Twitter?: string;
                /**
                 * Youtube
                 */
                Youtube?: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.AddBroadcastTalentRespApiRespBase;
            }
        }
    }
    namespace ApiV4Broadcasttalents$BroadcastidMediaItems$Mediaitemid {
        namespace Delete {
            namespace Parameters {
                export type Broadcastid = number; // int32
                export type Mediaitemid = number; // int32
            }
            export interface PathParameters {
                broadcastid: Parameters.Broadcastid /* int32 */;
                mediaitemid: Parameters.Mediaitemid /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelMediaItemRespApiRespBase;
            }
        }
    }
    namespace ApiV4Broadcasttalents$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelBroadcastTalentRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetBroadcastTalentRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Broadcast Talent Id
                 */
                Id: number; // int32
                /**
                 * Name
                 */
                Name: string;
                /**
                 * First Name
                 */
                FirstName?: string;
                /**
                 * Last Name
                 */
                LastName?: string;
                /**
                 * Country Id
                 */
                CountryId: number; // int32
                /**
                 * Language Id
                 */
                LanguageId: number; // int32
                Type: Components.Schemas.EnumBroadcastTalentType /* int32 */;
                /**
                 * IsActive
                 */
                IsActive: boolean;
                /**
                 * About
                 */
                About?: string;
                /**
                 * Gender (Male=0/Female=1)
                 */
                Gender: number; // int32
                /**
                 * DateOfBirth (ex:2022-12-01)
                 */
                DateOfBirth?: string; // date
                /**
                 * Primary Game Id
                 */
                PrimaryGameId?: number; // int32
                /**
                 * Profile Image
                 */
                ProfileImage?: string; // binary
                /**
                 * Header Image
                 */
                HeaderImage?: string; // binary
                /**
                 * Player Id
                 */
                PlayerId?: number; // int32
                /**
                 * Person Stream Id
                 */
                PersonalStreamId?: number; // int32
                /**
                 * Website
                 */
                Website?: string; // uri
                /**
                 * Facebook
                 */
                Facebook?: string;
                /**
                 * Twitter
                 */
                Twitter?: string;
                /**
                 * Youtube
                 */
                Youtube?: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.ModBroadcastTalentRespApiRespBase;
            }
        }
    }
    namespace ApiV4BroadcasttalentsMediaItems {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                Id?: Parameters.Id /* int32 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetMediaItemsRespApiRespBase;
            }
        }
        namespace Post {
            namespace Parameters {
                export type BroadcastTalentId = number; // int32
                export type MediaItems = number /* int32 */[];
            }
            export interface QueryParameters {
                BroadcastTalentId: Parameters.BroadcastTalentId /* int32 */;
                MediaItems: Parameters.MediaItems;
            }
            namespace Responses {
                export type Default = Components.Schemas.AddMediaItemsRespApiRespBase;
            }
        }
    }
    namespace ApiV4FilesCrewFiles {
        namespace Get {
            namespace Parameters {
                export type FileName = string;
                export type FolderId = number; // int32
                export type NameSort = Components.Schemas.EnumFieldSort /* int32 */;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type SizeSort = Components.Schemas.EnumFieldSort /* int32 */;
                export type UploadedFrom = number; // int64
                export type UploadedSort = Components.Schemas.EnumFieldSort /* int32 */;
                export type UploadedTo = number; // int64
                export type Uploader = string;
                export type UploaderSort = Components.Schemas.EnumFieldSort /* int32 */;
            }
            export interface QueryParameters {
                FolderId: Parameters.FolderId /* int32 */;
                FileName?: Parameters.FileName;
                Uploader?: Parameters.Uploader;
                UploadedFrom?: Parameters.UploadedFrom /* int64 */;
                UploadedTo?: Parameters.UploadedTo /* int64 */;
                NameSort?: Parameters.NameSort;
                UploadedSort?: Parameters.UploadedSort;
                UploaderSort?: Parameters.UploaderSort;
                SizeSort?: Parameters.SizeSort;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetCrewFilesRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                FolderId: number; // int32
                FileName: string;
                File: string; // binary
            }
            namespace Responses {
                export type Default = Components.Schemas.AddFileRespApiRespBase;
            }
        }
    }
    namespace ApiV4FilesCrewFiles$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelFileRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                FileId: number; // int32
                FolderId: number; // int32
                FileName: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.ModFileRespApiRespBase;
            }
        }
    }
    namespace ApiV4FilesCrewFolders {
        namespace Get {
            namespace Parameters {
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type ParentId = number; // int32
                export type Sort = Components.Schemas.EnumFieldSort /* int32 */;
                export type UploadType = string;
            }
            export interface QueryParameters {
                ParentId?: Parameters.ParentId /* int32 */;
                UploadType?: Parameters.UploadType;
                Sort?: Parameters.Sort;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetCrewFoldersRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                ParentId: number; // int32
                FolderName: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.AddFolderRespApiRespBase;
            }
        }
    }
    namespace ApiV4FilesCrewFolders$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelFolderRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                Id?: number; // int32
                ParentId?: number; // int32
                Name?: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.ModFolderRespApiRespBase;
            }
        }
    }
    namespace ApiV4FilesFuzzyFolders {
        namespace Get {
            namespace Parameters {
                export type FolderId = number; // int32
                export type FuzzyName = string;
                export type MaxCount = number; // int32
            }
            export interface QueryParameters {
                FolderId: Parameters.FolderId /* int32 */;
                FuzzyName: Parameters.FuzzyName;
                MaxCount?: Parameters.MaxCount /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuzzyFoldersRespApiRespBase;
            }
        }
    }
    namespace ApiV4FrontendSiteSections {
        namespace Delete {
            export type RequestBody = Components.Schemas.DelFrontendSiteSectionReq;
            namespace Responses {
                export type Default = Components.Schemas.DelFrontendSiteSectionRespApiRespBase;
            }
        }
        namespace Patch {
            export type RequestBody = Components.Schemas.ModFrontendSiteSectionReq;
            namespace Responses {
                export type Default = Components.Schemas.ModFrontendSiteSectionRespApiRespBase;
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.AddFrontendSiteSectionsReq;
            namespace Responses {
                export type Default = Components.Schemas.AddFrontendSiteSectionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4FrontendSiteSections$Id {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFrontendSiteSectionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4Funcs {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetFuncsRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * Func id
                 */
                FuncId: number; // int32
                /**
                 * Func name
                 */
                Name: string;
                /**
                 * Func code
                 */
                Code: string;
                Type: Components.Schemas.EnumFuncType /* int32 */;
                /**
                 * Parent func id
                 */
                ParentId: number; // int32
                /**
                 * Func position
                 */
                Position: number; // int32
                /**
                 * Func url
                 */
                Url?: string;
                /**
                 * Func icon
                 */
                Icon?: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.AddFuncRespApiRespBase;
            }
        }
    }
    namespace ApiV4Funcs$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelFuncRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuncRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Func id
                 */
                FuncId: number; // int32
                /**
                 * Func name
                 */
                Name?: string;
                /**
                 * Func code
                 */
                Code?: string;
                Type?: Components.Schemas.EnumFuncType /* int32 */;
                /**
                 * Parent func id
                 */
                ParentId?: number; // int32
                /**
                 * Func position
                 */
                Position?: number; // int32
                State?: Components.Schemas.EnumState /* int32 */;
                /**
                 * Func url
                 */
                Url?: string;
                /**
                 * Func icon
                 */
                Icon?: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.ModFuncRespApiRespBase;
            }
        }
    }
    namespace ApiV4FuncsOptions {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetFuncOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4FuncsTypes {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetFuncTypesRespApiRespBase;
            }
        }
    }
    namespace ApiV4GameRegions {
        namespace Get {
            namespace Parameters {
                export type GameId = number; // int32
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type RegionName = string;
            }
            export interface QueryParameters {
                GameId?: Parameters.GameId /* int32 */;
                RegionName?: Parameters.RegionName;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetGameRegionsResp;
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.AddGameRegionReq;
            namespace Responses {
                export type Default = Components.Schemas.AddGameRegionResp;
            }
        }
    }
    namespace ApiV4GameRegions$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelGameRegionResp;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetGameRegionResp;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModGameRegionReq;
            namespace Responses {
                export type Default = Components.Schemas.ModGameRegionResp;
            }
        }
    }
    namespace ApiV4GameRegions$IdTranslations {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetGameRegionTranslationResp;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModGameRegionTranslationReq;
            namespace Responses {
                export type Default = Components.Schemas.ModGameRegionTranslationRespApiRespBase;
            }
        }
    }
    namespace ApiV4GameracesFuzzy {
        namespace Get {
            namespace Parameters {
                export type FuzzyPrefix = string;
                export type MaxCount = number; // int32
            }
            export interface QueryParameters {
                FuzzyPrefix?: Parameters.FuzzyPrefix;
                MaxCount?: Parameters.MaxCount /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuzzyGameRaceRespApiRespBase;
            }
        }
    }
    namespace ApiV4Games {
        namespace Get {
            namespace Parameters {
                export type GameName = string;
                export type HasPlayerRankings = boolean;
                export type HasTeamRankings = boolean;
                export type IsLegacy = boolean;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                GameName?: Parameters.GameName;
                IsLegacy?: Parameters.IsLegacy;
                HasPlayerRankings?: Parameters.HasPlayerRankings;
                HasTeamRankings?: Parameters.HasTeamRankings;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetGamesRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * Game name
                 */
                Name: string;
                /**
                 * Has player rankings
                 */
                HasPlayerRankings: boolean;
                /**
                 * Has team rankings
                 */
                HasTeamRankings: boolean;
                /**
                 * Has streams
                 */
                HasStreams: boolean;
                /**
                 * Grid id
                 */
                GridId?: number; // int32
                /**
                 * Steam app id
                 */
                SteamAppId?: number; // int32
                /**
                 * Twitch game id
                 */
                TwitchGameId?: number; // int32
                /**
                 * Icon image file
                 */
                IconImageFile?: string; // binary
                /**
                 * Is legacy
                 */
                IsLegacy: boolean;
                /**
                 * Recommended replay count
                 */
                RecommendedReplayCount: number; // int32
            }
            namespace Responses {
                export type Default = Components.Schemas.AddGameRespApiRespBase;
            }
        }
    }
    namespace ApiV4Games$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelGameRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetGameRespApiRespBase;
            }
        }
    }
    namespace ApiV4Games$IdTranslations {
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModGameTranslationsReq;
            namespace Responses {
                export type Default = Components.Schemas.ModGameTranslationsRespApiRespBase;
            }
        }
    }
    namespace ApiV4GamesFuzzy {
        namespace Get {
            namespace Parameters {
                export type FuzzyPrefix = string;
                export type MaxCount = number; // int32
            }
            export interface QueryParameters {
                FuzzyPrefix?: Parameters.FuzzyPrefix;
                MaxCount?: Parameters.MaxCount /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuzzyGamesRespApiRespBase;
            }
        }
    }
    namespace ApiV4GamesId {
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface QueryParameters {
                id?: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Game id
                 */
                GameId: number; // int32
                /**
                 * Game name
                 */
                Name: string;
                /**
                 * Has player rankings
                 */
                HasPlayerRankings: boolean;
                /**
                 * Has team rankings
                 */
                HasTeamRankings: boolean;
                /**
                 * Has streams
                 */
                HasStreams: boolean;
                /**
                 * Grid id
                 */
                GridId?: number; // int32
                /**
                 * Steam app id
                 */
                SteamAppId?: number; // int32
                /**
                 * Twitch game id
                 */
                TwitchGameId?: number; // int32
                /**
                 * Icon image file
                 */
                IconImageFile?: string; // binary
                /**
                 * Is legacy
                 */
                IsLegacy: boolean;
                /**
                 * Recommended replay count
                 */
                RecommendedReplayCount: number; // int32
            }
            namespace Responses {
                export type Default = Components.Schemas.ModGameRespApiRespBase;
            }
        }
    }
    namespace ApiV4Gamesides {
        namespace Get {
            namespace Parameters {
                export type GameId = number; // int32
                export type Name = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                Name?: Parameters.Name;
                GameId?: Parameters.GameId /* int32 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetSidesRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * Game Side Name
                 */
                Name: string;
                /**
                 * Icon file
                 */
                IconFile?: string; // binary
                /**
                 * Side Game Id
                 */
                GameId: number; // int32
            }
            namespace Responses {
                export type Default = Components.Schemas.AddSideRespApiRespBase;
            }
        }
    }
    namespace ApiV4Gamesides$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelSideRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetSideRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Side Id
                 */
                Id: number; // int32
                /**
                 * Game Side Name
                 */
                Name: string;
                /**
                 * Icon file
                 */
                IconFile?: string; // binary
                /**
                 * Side Game Id
                 */
                GameId: number; // int32
            }
            namespace Responses {
                export type Default = Components.Schemas.ModSideRespApiRespBase;
            }
        }
    }
    namespace ApiV4Gamesides$IdTranslations {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetSideTranslationsRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModSideTranslationsReq;
            namespace Responses {
                export type Default = Components.Schemas.ModSideTranslationsRespApiRespBase;
            }
        }
    }
    namespace ApiV4Groups {
        namespace Get {
            namespace Parameters {
                export type FrontendIds = number /* int32 */[];
                export type GroupIds = number /* int32 */[];
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type Remark = string;
            }
            export interface QueryParameters {
                GroupIds?: Parameters.GroupIds;
                Remark?: Parameters.Remark;
                FrontendIds?: Parameters.FrontendIds;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetGroupsRespApiRespBase;
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.AddGroupReq;
            namespace Responses {
                export type Default = Components.Schemas.AddGroupRespApiRespBase;
            }
        }
    }
    namespace ApiV4Groups$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelGroupRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetGroupRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModGroupReq;
            namespace Responses {
                export type Default = Components.Schemas.ModGroupRespApiRespBase;
            }
        }
    }
    namespace ApiV4Groups$IdFuzzyUsers {
        namespace Get {
            namespace Parameters {
                export type FuzzyPrefix = string;
                export type Id = number; // int32
                export type MaxCount = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface QueryParameters {
                FuzzyPrefix: Parameters.FuzzyPrefix;
                MaxCount?: Parameters.MaxCount /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuzzyUsersByGroupRespApiRespBase;
            }
        }
    }
    namespace ApiV4Groups$IdUsers {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetUsersByGroupRespApiRespBase;
            }
        }
    }
    namespace ApiV4GroupsAssignGroup {
        namespace Patch {
            export type RequestBody = Components.Schemas.AssignGroupReq;
            namespace Responses {
                export type Default = Components.Schemas.AssignGroupRespApiRespBase;
            }
        }
    }
    namespace ApiV4GroupsBlankPermissions {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetGroupBlankPermissionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4GroupsGroupOptions {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetGroupOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4GroupsGroupOptionsByUser {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetGroupOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4GroupsTemplates {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetGroupTemplatesRespApiRespBase;
            }
        }
    }
    namespace ApiV4GroupsUnassignGroup {
        namespace Delete {
            export type RequestBody = Components.Schemas.UnAssignGroupReq;
            namespace Responses {
                export type Default = Components.Schemas.UnAssignGroupRespApiRespBase;
            }
        }
    }
    namespace ApiV4Heroes {
        namespace Get {
            namespace Parameters {
                export type GameId = number; // int32
                export type Name = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type Title = string;
            }
            export interface QueryParameters {
                Name?: Parameters.Name;
                Title?: Parameters.Title;
                GameId?: Parameters.GameId /* int32 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetHeroesRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * Game Hero Name
                 */
                Name: string;
                /**
                 * Hero Game Id
                 */
                GameId: number; // int32
                /**
                 * Title
                 */
                Title: string;
                /**
                 * ReferredToBy
                 */
                ReferredToBy: number; // int32
                /**
                 * Tagline
                 */
                Tagline: string;
                /**
                 * Description
                 */
                Description: string;
                /**
                 * Image file
                 */
                ImageFile?: string; // binary
                /**
                 * Icon file
                 */
                IconFile?: string; // binary
            }
            namespace Responses {
                export type Default = Components.Schemas.AddHeroRespApiRespBase;
            }
        }
    }
    namespace ApiV4Heroes$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelHeroRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetHeroRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Game Hero Id
                 */
                Id: number; // int32
                /**
                 * Game Hero Name
                 */
                Name: string;
                /**
                 * Hero Game Id
                 */
                GameId: number; // int32
                /**
                 * Title
                 */
                Title: string;
                /**
                 * ReferredToBy
                 */
                ReferredToBy: number; // int32
                /**
                 * Tagline
                 */
                Tagline: string;
                /**
                 * Description
                 */
                Description: string;
                /**
                 * Image file
                 */
                ImageFile?: string; // binary
                /**
                 * Icon file
                 */
                IconFile?: string; // binary
            }
            namespace Responses {
                export type Default = Components.Schemas.ModHeroRespApiRespBase;
            }
        }
    }
    namespace ApiV4Heroes$IdTranslations {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetHeroTranslationsRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModHeroTranslationsReq;
            namespace Responses {
                export type Default = Components.Schemas.ModHeroTranslationsRespApiRespBase;
            }
        }
    }
    namespace ApiV4Logout {
        namespace Post {
            namespace Parameters {
                export type RefreshToken = string;
            }
            export interface QueryParameters {
                refreshToken?: Parameters.RefreshToken;
            }
            namespace Responses {
                export type Default = Components.Schemas.LogoutRespApiRespBase;
            }
        }
    }
    namespace ApiV4LogsApiLogs {
        namespace Get {
            namespace Parameters {
                export type Content = string;
                export type From = number; // int64
                export type HttpStatusCode = number; // int32
                export type Ip = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type Path = string;
                export type Prefix = string;
                export type ServerName = string;
                export type To = number; // int64
                export type TraceId = string;
            }
            export interface QueryParameters {
                From?: Parameters.From /* int64 */;
                To?: Parameters.To /* int64 */;
                Prefix?: Parameters.Prefix;
                HttpStatusCode?: Parameters.HttpStatusCode /* int32 */;
                Ip?: Parameters.Ip;
                Path?: Parameters.Path;
                Content?: Parameters.Content;
                ServerName?: Parameters.ServerName;
                TraceId?: Parameters.TraceId;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetApiLogsRespApiRespBase;
            }
        }
    }
    namespace ApiV4LogsApiLogs$Id {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int64
            }
            export interface PathParameters {
                id: Parameters.Id /* int64 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetApiLogRespApiRespBase;
            }
        }
    }
    namespace ApiV4LogsLogLevels {
        namespace Get {
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ApiV4LogsSystemLogs {
        namespace Get {
            namespace Parameters {
                export type From = number; // int64
                export type Keyword = string;
                export type LogLevel = Components.Schemas.LogLevel /* int32 */;
                export type Logger = string;
                export type Method = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type Prefix = string;
                export type ServerName = string;
                export type To = number; // int64
                export type TraceId = string;
            }
            export interface QueryParameters {
                From?: Parameters.From /* int64 */;
                To?: Parameters.To /* int64 */;
                Prefix?: Parameters.Prefix;
                ServerName?: Parameters.ServerName;
                Logger?: Parameters.Logger;
                Method?: Parameters.Method;
                LogLevel?: Parameters.LogLevel;
                TraceId?: Parameters.TraceId;
                Keyword?: Parameters.Keyword;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetSystemLogsRespApiRespBase;
            }
        }
    }
    namespace ApiV4LogsSystemLogs$Id {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int64
            }
            export interface PathParameters {
                id: Parameters.Id /* int64 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetSystemLogRespApiRespBase;
            }
        }
    }
    namespace ApiV4Maps {
        namespace Get {
            namespace Parameters {
                export type GameId = number; // int32
                export type Name = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                Name?: Parameters.Name;
                GameId?: Parameters.GameId /* int32 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetMapsRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * Game Map Name
                 */
                Name: string;
                /**
                 * Image file
                 */
                ImageFile?: string; // binary
                /**
                 * Map Game Id
                 */
                GameId: number; // int32
            }
            namespace Responses {
                export type Default = Components.Schemas.AddMapRespApiRespBase;
            }
        }
    }
    namespace ApiV4Maps$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelMapRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetMapRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Game Map Id
                 */
                Id: number; // int32
                /**
                 * Game Map Name
                 */
                Name: string;
                /**
                 * Image file
                 */
                ImageFile?: string; // binary
                /**
                 * Map Game Id
                 */
                GameId: number; // int32
            }
            namespace Responses {
                export type Default = Components.Schemas.ModMapRespApiRespBase;
            }
        }
    }
    namespace ApiV4Maps$IdTranslations {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetMapTranslationsRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModMapTranslationsReq;
            namespace Responses {
                export type Default = Components.Schemas.ModMapTranslationsRespApiRespBase;
            }
        }
    }
    namespace ApiV4MediaFuzzyStreams {
        namespace Get {
            namespace Parameters {
                export type FuzzyPrefix = string;
                export type MaxCount = number; // int32
            }
            export interface QueryParameters {
                FuzzyPrefix?: Parameters.FuzzyPrefix;
                MaxCount?: Parameters.MaxCount /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuzzyMediaStreamsRespApiRespBase;
            }
        }
    }
    namespace ApiV4MediaFuzzyVideos {
        namespace Get {
            namespace Parameters {
                export type FuzzyPrefix = string;
                export type MaxCount = number; // int32
            }
            export interface QueryParameters {
                FuzzyPrefix?: Parameters.FuzzyPrefix;
                MaxCount?: Parameters.MaxCount /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuzzyMediaVideosRespApiRespBase;
            }
        }
    }
    namespace ApiV4MediaStreams {
        namespace Get {
            namespace Parameters {
                export type CreatedFrom = number; // int64
                export type CreatedTo = number; // int64
                export type Creator = string;
                export type GameId = number; // int32
                export type IsLive = boolean;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type PlatformId = Components.Schemas.EnumPlatform /* int32 */;
                export type StreamId = string;
                export type Title = string;
            }
            export interface QueryParameters {
                Title?: Parameters.Title;
                Creator?: Parameters.Creator;
                PlatformId?: Parameters.PlatformId;
                StreamId?: Parameters.StreamId;
                GameId?: Parameters.GameId /* int32 */;
                IsLive?: Parameters.IsLive;
                CreatedFrom?: Parameters.CreatedFrom /* int64 */;
                CreatedTo?: Parameters.CreatedTo /* int64 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetStreamsRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                Platform: Components.Schemas.EnumPlatform /* int32 */;
                /**
                 * StreamId
                 */
                StreamId?: string;
                /**
                 * Stream Url
                 */
                StreamUrl?: string;
                /**
                 * Screen Cap file
                 */
                ScreenCapFile?: string; // binary
                /**
                 * GameId
                 */
                GameId: number; // int32
                /**
                 * LanguageId
                 */
                LanguageId: number; // int32
                /**
                 * Is Event Stream
                 */
                IsEventStream: boolean;
                /**
                 * Is Pro Player
                 */
                IsProPlayer: boolean;
                /**
                 * Is Celeb Caster
                 */
                IsCelebCaster: boolean;
                /**
                 * Next Broadcast At
                 */
                NextBroadcastAt?: number; // int64
                /**
                 * Title
                 */
                Title: string;
                /**
                 * Is Featured
                 */
                IsFeatured: boolean;
                /**
                 * Description
                 */
                Description?: string;
                /**
                 * Tags : Maximum of 5 tags(25 characters maximum per tag)
                 */
                Tags?: string[];
            }
            namespace Responses {
                export type Default = Components.Schemas.AddStreamRespApiRespBase;
            }
        }
    }
    namespace ApiV4MediaStreams$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelStreamRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetStreamRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Media Item Id
                 */
                Id: number; // int32
                Platform: Components.Schemas.EnumPlatform /* int32 */;
                /**
                 * StreamId
                 */
                StreamId?: string;
                /**
                 * Stream Url
                 */
                StreamUrl?: string;
                /**
                 * Screen Cap file
                 */
                ScreenCapFile?: string; // binary
                /**
                 * GameId
                 */
                GameId: number; // int32
                /**
                 * LanguageId
                 */
                LanguageId: number; // int32
                /**
                 * Is Event Stream
                 */
                IsEventStream: boolean;
                /**
                 * Is Pro Player
                 */
                IsProPlayer: boolean;
                /**
                 * Is Celeb Caster
                 */
                IsCelebCaster: boolean;
                /**
                 * Next Broadcast At
                 */
                NextBroadcastAt?: number; // int64
                /**
                 * Title
                 */
                Title: string;
                /**
                 * Is Featured
                 */
                IsFeatured: boolean;
                /**
                 * Description
                 */
                Description?: string;
                /**
                 * Tags : Maximum of 5 tags(25 characters maximum per tag)
                 */
                Tags?: Components.Schemas.ModStreamTag[];
            }
            namespace Responses {
                export type Default = Components.Schemas.ModStreamRespApiRespBase;
            }
        }
    }
    namespace ApiV4MediaVods {
        namespace Get {
            namespace Parameters {
                export type CreatedFrom = number; // int64
                export type CreatedTo = number; // int64
                export type Creator = string;
                export type HostId = number; // int32
                export type HostVideoId = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type SiteSectionIds = number /* int32 */[];
                export type Title = string;
                export type VodId = number; // int32
            }
            export interface QueryParameters {
                VodId?: Parameters.VodId /* int32 */;
                Title?: Parameters.Title;
                HostId?: Parameters.HostId /* int32 */;
                HostVideoId?: Parameters.HostVideoId;
                SiteSectionIds?: Parameters.SiteSectionIds;
                CreatedFrom?: Parameters.CreatedFrom /* int64 */;
                CreatedTo?: Parameters.CreatedTo /* int64 */;
                Creator?: Parameters.Creator;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetMediaVodsRespApiRespBase;
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.AddMediaVodReq;
            namespace Responses {
                export type Default = Components.Schemas.AddMediaVodRespApiRespBase;
            }
        }
    }
    namespace ApiV4MediaVods$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelMediaVodRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetMediaVodRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModMediaVodReq;
            namespace Responses {
                export type Default = Components.Schemas.ModMediaVodRespApiRespBase;
            }
        }
    }
    namespace ApiV4MediaVodsDownloadCsv {
        namespace Get {
            namespace Parameters {
                export type CreatedFrom = number; // int64
                export type CreatedTo = number; // int64
                export type Creator = string;
                export type HostId = number; // int32
                export type HostVideoId = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type SiteSectionIds = number /* int32 */[];
                export type Title = string;
                export type VodId = number; // int32
            }
            export interface QueryParameters {
                PageSize?: Parameters.PageSize /* int32 */;
                VodId?: Parameters.VodId /* int32 */;
                Title?: Parameters.Title;
                HostId?: Parameters.HostId /* int32 */;
                HostVideoId?: Parameters.HostVideoId;
                SiteSectionIds?: Parameters.SiteSectionIds;
                CreatedFrom?: Parameters.CreatedFrom /* int64 */;
                CreatedTo?: Parameters.CreatedTo /* int64 */;
                Creator?: Parameters.Creator;
                PageNo?: Parameters.PageNo /* int32 */;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace ApiV4MediaVodsHostOptions {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetMediaVodHostOptionsResp;
            }
        }
    }
    namespace ApiV4MessagingNotificationTemplates {
        namespace Get {
            namespace Parameters {
                export type FrontendId = number; // int32
                export type NotificationTemplateType = number; // int32
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                FrontendId?: Parameters.FrontendId /* int32 */;
                NotificationTemplateType?: Parameters.NotificationTemplateType /* int32 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetNotificationTemplatesRespApiRespBase;
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.AddNotificationTemplateReq;
            namespace Responses {
                export type Default = Components.Schemas.AddNotificationTemplateRespApiRespBase;
            }
        }
    }
    namespace ApiV4MessagingNotificationTemplates$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelNotificationTemplateRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetNotificationTemplateRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModNotificationTemplateReq;
            namespace Responses {
                export type Default = Components.Schemas.ModNotificationTemplateRespApiRespBase;
            }
        }
    }
    namespace ApiV4MessagingOnesignalApps {
        namespace Get {
            namespace Parameters {
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetOneSignalAppsRespApiRespBase;
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.AddOneSignalAppReq;
            namespace Responses {
                export type Default = Components.Schemas.AddOneSignalAppRespApiRespBase;
            }
        }
    }
    namespace ApiV4MessagingOnesignalApps$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelOneSignalAppRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetOneSignalAppRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModOneSignalAppReq;
            namespace Responses {
                export type Default = Components.Schemas.ModOneSignalAppRespApiRespBase;
            }
        }
    }
    namespace ApiV4Modes {
        namespace Get {
            namespace Parameters {
                export type Abbreviation = string;
                export type GameId = number; // int32
                export type Name = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                Name?: Parameters.Name;
                Abbreviation?: Parameters.Abbreviation;
                GameId?: Parameters.GameId /* int32 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetModesRespApiRespBase;
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.AddModeReq;
            namespace Responses {
                export type Default = Components.Schemas.AddModeRespApiRespBase;
            }
        }
    }
    namespace ApiV4Modes$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelModeRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetModeRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModModeReq;
            namespace Responses {
                export type Default = Components.Schemas.ModModeRespApiRespBase;
            }
        }
    }
    namespace ApiV4Modes$IdTranslations {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetModeTranslationsRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModModeTranslationsReq;
            namespace Responses {
                export type Default = Components.Schemas.ModModeTranslationsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsContactTypes {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetContactTypesRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsCountries {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetCountryOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsFrontendLocales {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetFrontendLocaleOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsFrontends {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetFrontendOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsFrontendsByUser {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetFrontendOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsGames {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetGameOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsGenders {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetGenderOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsLanguages {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetLanguagesRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsLocales {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetLocaleOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsNotificationTypes {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetNotificationTypeOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsProxy {
        namespace Get {
            namespace Parameters {
                export type Url = string;
            }
            export interface QueryParameters {
                url?: Parameters.Url;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetGgCodeInfoRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsServers {
        namespace Get {
            namespace Parameters {
                export type GameId = number; // int32
            }
            export interface QueryParameters {
                gameId?: Parameters.GameId /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetServerOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsSiteSections {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetSiteSectionsOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsStates {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetStateOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4OptionsUserTypes {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetUserTypeOptionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4Pages {
        namespace Delete {
            export type RequestBody = Components.Schemas.DelPageReq;
            namespace Responses {
                export type Default = Components.Schemas.DelPageRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Author = string;
                export type FrontendId = number; // int32
                export type PageId = number; // int32
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type Title = string;
                export type UpdatedFrom = number; // int64
                export type UpdatedTo = number; // int64
            }
            export interface QueryParameters {
                Title?: Parameters.Title;
                FrontendId?: Parameters.FrontendId /* int32 */;
                Author?: Parameters.Author;
                PageId?: Parameters.PageId /* int32 */;
                UpdatedFrom?: Parameters.UpdatedFrom /* int64 */;
                UpdatedTo?: Parameters.UpdatedTo /* int64 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetPagesRespApiRespBase;
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.AddPageReq;
            namespace Responses {
                export type Default = Components.Schemas.AddPageRespApiRespBase;
            }
        }
    }
    namespace ApiV4Pages$Id {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetPageRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModPageReq;
            namespace Responses {
                export type Default = Components.Schemas.ModPageRespApiRespBase;
            }
        }
    }
    namespace ApiV4Players {
        namespace Get {
            namespace Parameters {
                export type CountryId = number; // int32
                export type CreatedAtFrom = number; // int64
                export type CreatedAtTo = number; // int64
                export type FirstName = string;
                export type GameAccount = string;
                export type Id = number; // int32
                export type LastName = string;
                export type NickName = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type PrimaryGameId = number; // int32
            }
            export interface QueryParameters {
                Id?: Parameters.Id /* int32 */;
                NickName?: Parameters.NickName;
                FirstName?: Parameters.FirstName;
                LastName?: Parameters.LastName;
                PrimaryGameId?: Parameters.PrimaryGameId /* int32 */;
                CountryId?: Parameters.CountryId /* int32 */;
                CreatedAtFrom?: Parameters.CreatedAtFrom /* int64 */;
                CreatedAtTo?: Parameters.CreatedAtTo /* int64 */;
                GameAccount?: Parameters.GameAccount;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetPlayersRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                UserId?: number; // int32
                IsActive: boolean;
                NickName: string;
                FirstName?: string;
                LastName?: string;
                Gender: Components.Schemas.EnumGender /* int32 */;
                /**
                 * ex:2022-12-01
                 */
                DateOfBirth?: string; // date
                CountryId: number; // int32
                InitialRating: number; // int32
                PrimaryGameId?: number; // int32
                Image?: string; // binary
                Descriptions?: string;
                FaceBook?: string;
                Twitter?: string;
                Youtube?: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.AddPlayerRespApiRespBase;
            }
        }
    }
    namespace ApiV4Players$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelPlayerRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetPlayerRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                PlayerId: number; // int32
                UserId?: number; // int32
                IsActive: boolean;
                NickName: string;
                FirstName?: string;
                LastName?: string;
                Gender: Components.Schemas.EnumGender /* int32 */;
                /**
                 * ex:2022-12-01
                 */
                DateOfBirth?: string; // date
                CountryId: number; // int32
                PrimaryGameId?: number; // int32
                Image?: string; // binary
                /**
                 * if IsRemoveImage = true will remove Image and set ImageFilePath = null
                 */
                IsRemoveImage?: boolean;
                Descriptions?: string;
                FaceBook?: string;
                Twitter?: string;
                Youtube?: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.ModPlayerRespApiRespBase;
            }
        }
    }
    namespace ApiV4Players$PlayeridMediaItems {
        namespace Get {
            namespace Parameters {
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type Playerid = number; // int32
            }
            export interface PathParameters {
                playerid: Parameters.Playerid /* int32 */;
            }
            export interface QueryParameters {
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetPlayerMediaItemsRespApiRespBase;
            }
        }
        namespace Post {
            namespace Parameters {
                export type MediaItems = number /* int32 */[];
                export type Playerid = number; // int32
            }
            export interface PathParameters {
                playerid: Parameters.Playerid /* int32 */;
            }
            export interface QueryParameters {
                MediaItems: Parameters.MediaItems;
            }
            namespace Responses {
                export type Default = Components.Schemas.AddPlayerMediaItemRespApiRespBase;
            }
        }
    }
    namespace ApiV4Players$PlayeridMediaItems$Mediaitemid {
        namespace Delete {
            namespace Parameters {
                export type Mediaitemid = number; // int32
                export type Playerid = number; // int32
            }
            export interface PathParameters {
                playerid: Parameters.Playerid /* int32 */;
                mediaitemid: Parameters.Mediaitemid /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelPlayerMediaItemRespApiRespBase;
            }
        }
    }
    namespace ApiV4PlayersFuzzy {
        namespace Get {
            namespace Parameters {
                export type FuzzyPrefix = string;
                export type MaxCount = number; // int32
            }
            export interface QueryParameters {
                FuzzyPrefix: Parameters.FuzzyPrefix;
                MaxCount?: Parameters.MaxCount /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuzzyPlayersRespApiRespBase;
            }
        }
    }
    namespace ApiV4PlayersUsers$Id {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetUserForPlayerRespApiRespBase;
            }
        }
    }
    namespace ApiV4Roles {
        namespace Get {
            namespace Parameters {
                export type FrontendIds = number /* int32 */[];
                export type GroupIds = number /* int32 */[];
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type Remark = string;
                export type RoleIds = number /* int32 */[];
            }
            export interface QueryParameters {
                RoleIds?: Parameters.RoleIds;
                GroupIds?: Parameters.GroupIds;
                FrontendIds?: Parameters.FrontendIds;
                Remark?: Parameters.Remark;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetRolesByGroupRespApiRespBase;
            }
        }
        namespace Post {
            export type RequestBody = Components.Schemas.AddRoleReq;
            namespace Responses {
                export type Default = Components.Schemas.AddRoleRespApiRespBase;
            }
        }
    }
    namespace ApiV4Roles$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelRoleRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetRoleRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModRoleReq;
            namespace Responses {
                export type Default = Components.Schemas.ModRoleRespApiRespBase;
            }
        }
    }
    namespace ApiV4RolesAssignRole {
        namespace Patch {
            export type RequestBody = Components.Schemas.AssignRoleReq;
            namespace Responses {
                export type Default = Components.Schemas.AssignRoleRespApiRespBase;
            }
        }
    }
    namespace ApiV4RolesBlankPermissions {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetRoleBlankPermissionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4RolesRoleOptions {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetRoleOptionsByGroupRespApiRespBase;
            }
        }
    }
    namespace ApiV4RolesTemplates$Id {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetRoleTemplatesByGroupRespApiRespBase;
            }
        }
    }
    namespace ApiV4RolesUnassignRole {
        namespace Delete {
            export type RequestBody = Components.Schemas.UnAssignRoleReq;
            namespace Responses {
                export type Default = Components.Schemas.UnAssignRoleRespApiRespBase;
            }
        }
    }
    namespace ApiV4RolesUsers$Id {
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetUsersByRoleRespApiRespBase;
            }
        }
    }
    namespace ApiV4Servers {
        namespace Get {
            namespace Parameters {
                export type GameId = number; // int32
                export type Name = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                Name?: Parameters.Name;
                GameId?: Parameters.GameId /* int32 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetServersRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * Server Name
                 */
                Name: string;
                /**
                 * Game Id
                 */
                GameId: number; // int32
            }
            namespace Responses {
                export type Default = Components.Schemas.AddServerRespApiRespBase;
            }
        }
    }
    namespace ApiV4Servers$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelServerRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetServerRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Server Id
                 */
                Id: number; // int32
                /**
                 * Server Name
                 */
                Name: string;
                /**
                 * Is Frozen
                 */
                IsFrozen: boolean;
                /**
                 * Game Id
                 */
                GameId: number; // int32
            }
            namespace Responses {
                export type Default = Components.Schemas.ModServerRespApiRespBase;
            }
        }
    }
    namespace ApiV4SitesectionsSiteSections {
        namespace Get {
            namespace Parameters {
                export type FiltersGameName = string;
                export type FiltersHidden = boolean;
                export type FiltersId = number; // int32
                export type FiltersName = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type SortsGameName = Components.Schemas.EnumFieldSort /* int32 */;
                export type SortsHidden = Components.Schemas.EnumFieldSort /* int32 */;
                export type SortsId = Components.Schemas.EnumFieldSort /* int32 */;
                export type SortsName = Components.Schemas.EnumFieldSort /* int32 */;
            }
            export interface QueryParameters {
                "Filters.Id"?: Parameters.FiltersId /* int32 */;
                "Filters.Name"?: Parameters.FiltersName;
                "Filters.GameName"?: Parameters.FiltersGameName;
                "Filters.Hidden"?: Parameters.FiltersHidden;
                "Sorts.Id"?: Parameters.SortsId;
                "Sorts.GameName"?: Parameters.SortsGameName;
                "Sorts.Name"?: Parameters.SortsName;
                "Sorts.Hidden"?: Parameters.SortsHidden;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetSiteSectionsRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                GameId?: number; // int32
                Name: string;
                Hidden: boolean;
                Position: number; // int32
                HeaderImage?: string; // binary
                BackGroundImage?: string; // binary
                IconImage?: string; // binary
                LogoImage?: string; // binary
            }
            namespace Responses {
                export type Default = Components.Schemas.AddSiteSectionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4SitesectionsSiteSections$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelSiteSectionsRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetSiteSectionRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                Id: number; // int32
                GameId?: number; // int32
                Name?: string;
                Hidden?: boolean;
                Position?: number; // int32
                HeaderImage?: string; // binary
                BackGroundImage?: string; // binary
                IconImage?: string; // binary
                LogoImage?: string; // binary
            }
            namespace Responses {
                export type Default = Components.Schemas.ModSiteSectionsRespApiRespBase;
            }
        }
    }
    namespace ApiV4Sponsors {
        namespace Get {
            namespace Parameters {
                export type Creator = string;
                export type Name = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type UpdatedFrom = number; // int64
                export type UpdatedTo = number; // int64
                export type Website = string;
            }
            export interface QueryParameters {
                Name?: Parameters.Name;
                Website?: Parameters.Website;
                Creator?: Parameters.Creator;
                UpdatedFrom?: Parameters.UpdatedFrom /* int64 */;
                UpdatedTo?: Parameters.UpdatedTo /* int64 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetSponsorsRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * Sponsor Name
                 */
                Name: string;
                /**
                 * Sponsor Description
                 */
                Description: string;
                /**
                 * Sponsor Logo
                 */
                ImageFile?: string; // binary
                /**
                 * Sponsor website url
                 */
                Url: string; // uri
            }
            namespace Responses {
                export type Default = Components.Schemas.AddSponsorRespApiRespBase;
            }
        }
    }
    namespace ApiV4Sponsors$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelSponsorRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetSponsorRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Sponsor Id
                 */
                Id: number; // int32
                /**
                 * Sponsor Name
                 */
                Name: string;
                /**
                 * Sponsor Description
                 */
                Description: string;
                /**
                 * Sponsor Logo
                 */
                ImageFile?: string; // binary
                /**
                 * Sponsor website url
                 */
                Url: string; // uri
            }
            namespace Responses {
                export type Default = Components.Schemas.ModSponsorRespApiRespBase;
            }
        }
    }
    namespace ApiV4Teams {
        namespace Get {
            namespace Parameters {
                export type CountryId = number; // int32
                export type GameId = number; // int32
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type PlayerId = number; // int32
                export type TeamId = number; // int32
                export type TeamName = string;
                export type UpdatedAtFrom = number; // int64
                export type UpdatedAtTo = number; // int64
            }
            export interface QueryParameters {
                TeamName?: Parameters.TeamName;
                TeamId?: Parameters.TeamId /* int32 */;
                PlayerId?: Parameters.PlayerId /* int32 */;
                GameId?: Parameters.GameId /* int32 */;
                CountryId?: Parameters.CountryId /* int32 */;
                UpdatedAtFrom?: Parameters.UpdatedAtFrom /* int64 */;
                UpdatedAtTo?: Parameters.UpdatedAtTo /* int64 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetTeamsRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                TeamName: string;
                TeamTag: string;
                GameId: number; // int32
                CountryId?: number; // int32
                Image?: string; // binary
                Description?: string;
                InitialRating?: number; // int32
                ExcludeRankings?: boolean;
                Facebook?: string;
                Twitter?: string;
                Youtube?: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.AddTeamRespApiRespBase;
            }
        }
    }
    namespace ApiV4Teams$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelTeamRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetTeamRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                TeamId: number; // int32
                TeamName: string;
                TeamTag: string;
                /**
                 * OwnerId
                 */
                OwnerId?: number; // int32
                /**
                 * CaptainId
                 */
                CaptainId?: number; // int32
                /**
                 * ManageId
                 */
                ManageId?: number; // int32
                ExcludedRankings?: boolean;
                Image?: string; // binary
                /**
                 * if IsRemoveImage = true will remove Image and set ImageFilePath = null
                 */
                IsRemoveImage?: boolean;
                GameId: number; // int32
                CountryId?: number; // int32
                Description?: string;
                Facebook?: string;
                Twitter?: string;
                Youtube?: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.ModTeamRespApiRespBase;
            }
        }
    }
    namespace ApiV4Teams$TeamidTeamPlayers {
        namespace Get {
            namespace Parameters {
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type Teamid = number; // int32
            }
            export interface PathParameters {
                teamid: Parameters.Teamid /* int32 */;
            }
            export interface QueryParameters {
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetTeamPlayersRespApiRespBase;
            }
        }
        namespace Post {
            namespace Parameters {
                export type Teamid = number; // int32
            }
            export interface PathParameters {
                teamid: Parameters.Teamid /* int32 */;
            }
            export interface RequestBody {
                PlayerId?: number; // int32
                JoinedAt?: number; // int64
                IsHidden?: boolean;
            }
            namespace Responses {
                export type Default = Components.Schemas.AddTeamPlayerRespApiRespBase;
            }
        }
    }
    namespace ApiV4Teams$TeamidTeamPlayers$Teamplayerid {
        namespace Delete {
            namespace Parameters {
                export type Teamid = number; // int32
                export type Teamplayerid = number; // int32
            }
            export interface PathParameters {
                teamid: Parameters.Teamid /* int32 */;
                teamplayerid: Parameters.Teamplayerid /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelTeamPlayerRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Teamid = number; // int32
                export type Teamplayerid = number; // int32
            }
            export interface PathParameters {
                teamid: Parameters.Teamid /* int32 */;
                teamplayerid: Parameters.Teamplayerid /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetTeamPlayerRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Teamid = number; // int32
                export type Teamplayerid = number; // int32
            }
            export interface PathParameters {
                teamid: Parameters.Teamid /* int32 */;
                teamplayerid: Parameters.Teamplayerid /* int32 */;
            }
            export interface RequestBody {
                /**
                 * TeamPlayerId
                 */
                TeamPlayerId: number; // int32
                /**
                 * TeamId
                 */
                TeamId: number; // int32
                /**
                 * JoinDate
                 */
                JoinDate: number; // int64
                /**
                 * LeaveDate
                 */
                LeaveDate?: number; // int64
                /**
                 * IsHidden
                 */
                IsHidden: boolean;
            }
            namespace Responses {
                export type Default = Components.Schemas.ModTeamPlayerRespApiRespBase;
            }
        }
    }
    namespace ApiV4TeamsFuzzy {
        namespace Get {
            namespace Parameters {
                export type FuzzyPrefix = string;
                export type MaxCount = number; // int32
            }
            export interface QueryParameters {
                FuzzyPrefix: Parameters.FuzzyPrefix;
                MaxCount?: Parameters.MaxCount /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuzzyTeamsRespApiRespBase;
            }
        }
    }
    namespace ApiV4TournamentsFuzzy {
        namespace Get {
            namespace Parameters {
                export type FuzzyPrefix = string;
                export type MaxCount = number; // int32
            }
            export interface QueryParameters {
                FuzzyPrefix: Parameters.FuzzyPrefix;
                MaxCount?: Parameters.MaxCount /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuzzyTournamentsRespApiRespBase;
            }
        }
    }
    namespace ApiV4TournamentsGameAccounts {
        namespace Get {
            namespace Parameters {
                export type PageNo = number; // int32
                export type PageSize = number; // int32
                export type PlayerId = number; // int32
            }
            export interface QueryParameters {
                PlayerId: Parameters.PlayerId /* int32 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetGameAccountsRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * PlayerId
                 */
                PlayerId: number; // int32
                /**
                 * GameId
                 */
                GameId: number; // int32
                /**
                 * Server Id
                 */
                ServerId?: number; // int32
                /**
                 * GameAccount Name
                 */
                GameAccountName: string;
            }
            namespace Responses {
                export type Default = Components.Schemas.AddGameAccountRespApiRespBase;
            }
        }
    }
    namespace ApiV4TournamentsGameAccounts$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelGameAccountRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetGameAccountRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export type RequestBody = Components.Schemas.ModGameAccountReq;
            namespace Responses {
                export type Default = Components.Schemas.ModGameAccountRespApiRespBase;
            }
        }
    }
    namespace ApiV4Users {
        namespace Get {
            namespace Parameters {
                export type FiltersFrontEndIds = number /* int32 */[];
                export type FiltersGroups = number /* int32 */[];
                export type FiltersRoles = number /* int32 */[];
                export type FiltersUserName = string;
                export type FiltersUserTypeId = number; // int32
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                "Filters.UserName"?: Parameters.FiltersUserName;
                "Filters.UserTypeId"?: Parameters.FiltersUserTypeId /* int32 */;
                "Filters.FrontEndIds"?: Parameters.FiltersFrontEndIds;
                "Filters.Groups"?: Parameters.FiltersGroups;
                "Filters.Roles"?: Parameters.FiltersRoles;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetUsersRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                UserName: string;
                Email: string;
                Password: string;
                LastName?: string;
                FirstName?: string;
                UserTypeId: number; // int32
                GroupIds?: number /* int32 */[];
                RoleIds?: number /* int32 */[];
                Gender?: Components.Schemas.EnumGender /* int32 */;
                DateOfBirth?: string; // date
                City?: string;
                CountryId?: number; // int32
                AboutMe?: string;
                AvatarImage?: string; // binary
            }
            namespace Responses {
                export type Default = Components.Schemas.AddUserRespApiRespBase;
            }
        }
    }
    namespace ApiV4Users$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelUserRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetUserRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                UserId: number; // int32
                UserName?: string;
                Email?: string; // email
                Password?: string;
                LastName?: string;
                FirstName?: string;
                UserTypeId?: number; // int32
                /**
                 * 未變更帶null，變更後帶完整資料
                 */
                GroupIds?: number /* int32 */[];
                /**
                 * 未變更帶null，變更後帶完整資料
                 */
                RoleIds?: number /* int32 */[];
                Gender?: Components.Schemas.EnumGender /* int32 */;
                DateOfBirth?: string; // date
                City?: string;
                CountryId?: number; // int32
                AboutMe?: string;
                AvatarImage?: string; // binary
            }
            namespace Responses {
                export type Default = Components.Schemas.ModUserRespApiRespBase;
            }
        }
    }
    namespace ApiV4UsersFuzzy {
        namespace Get {
            namespace Parameters {
                export type FuzzyPrefix = string;
                export type MaxCount = number; // int32
            }
            export interface QueryParameters {
                FuzzyPrefix: Parameters.FuzzyPrefix;
                MaxCount?: Parameters.MaxCount /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetFuzzyUsersRespApiRespBase;
            }
        }
    }
    namespace ApiV4Usersession {
        namespace Get {
            namespace Responses {
                export type Default = Components.Schemas.GetUserSessionRespApiRespBase;
            }
        }
    }
    namespace ApiV4Venues {
        namespace Get {
            namespace Parameters {
                export type CountryId = number; // int32
                export type Name = string;
                export type PageNo = number; // int32
                export type PageSize = number; // int32
            }
            export interface QueryParameters {
                Name?: Parameters.Name;
                CountryId?: Parameters.CountryId /* int32 */;
                PageNo?: Parameters.PageNo /* int32 */;
                PageSize?: Parameters.PageSize /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetVenuesRespApiRespBase;
            }
        }
        namespace Post {
            export interface RequestBody {
                /**
                 * Venues Name
                 */
                Name: string;
                /**
                 * Venues Country Id
                 */
                CountryId: number; // int32
                /**
                 * Venues City
                 */
                City: string;
                /**
                 * Venues Address
                 */
                Address?: string;
                /**
                 * Venues Coordinates
                 */
                Coordinates?: string;
                /**
                 * Image file
                 */
                ImageFile?: string; // binary
            }
            namespace Responses {
                export type Default = Components.Schemas.AddVenueRespApiRespBase;
            }
        }
    }
    namespace ApiV4Venues$Id {
        namespace Delete {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.DelVenueRespApiRespBase;
            }
        }
        namespace Get {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            namespace Responses {
                export type Default = Components.Schemas.GetVenueRespApiRespBase;
            }
        }
        namespace Patch {
            namespace Parameters {
                export type Id = number; // int32
            }
            export interface PathParameters {
                id: Parameters.Id /* int32 */;
            }
            export interface RequestBody {
                /**
                 * Venue Id
                 */
                Id: number; // int32
                /**
                 * Venues Name
                 */
                Name: string;
                /**
                 * Venues Country Id
                 */
                CountryId: number; // int32
                /**
                 * Venues City
                 */
                City: string;
                /**
                 * Venues Address
                 */
                Address?: string;
                /**
                 * Venues Coordinates
                 */
                Coordinates?: string;
                /**
                 * Image file
                 */
                ImageFile?: string; // binary
            }
            namespace Responses {
                export type Default = Components.Schemas.ModVenueRespApiRespBase;
            }
        }
    }
    namespace Enumret {
        namespace Get {
            namespace Parameters {
                export type ApiVersion = string;
            }
            export interface QueryParameters {
                "api-version"?: Parameters.ApiVersion;
            }
            namespace Responses {
                export type $200 = Components.Schemas.Int32StringDictionaryApiRespBase;
            }
        }
    }
    namespace Login {
        namespace Get {
            namespace Parameters {
                export type ApiVersion = string;
            }
            export interface QueryParameters {
                "api-version"?: Parameters.ApiVersion;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace Logout {
        namespace Get {
            namespace Parameters {
                export type ApiVersion = string;
            }
            export interface QueryParameters {
                "api-version"?: Parameters.ApiVersion;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace OauthCallback {
        namespace Get {
            namespace Parameters {
                export type ApiVersion = string;
                export type Code = string;
                export type Locale = string;
                export type State = string;
                export type UserState = string;
            }
            export interface QueryParameters {
                Code?: Parameters.Code;
                Locale?: Parameters.Locale;
                State?: Parameters.State;
                UserState?: Parameters.UserState;
                "api-version"?: Parameters.ApiVersion;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
    namespace Register {
        namespace Get {
            namespace Parameters {
                export type ApiVersion = string;
            }
            export interface QueryParameters {
                "api-version"?: Parameters.ApiVersion;
            }
            namespace Responses {
                export interface $200 {
                }
            }
        }
    }
}
