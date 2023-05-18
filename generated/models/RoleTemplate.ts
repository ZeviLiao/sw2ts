/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Int16Item } from './Int16Item';
import type { SimpleBackOfficePermissionItem } from './SimpleBackOfficePermissionItem';

export type RoleTemplate = {
    /**
     * Role template id
     */
    templateId?: number;
    /**
     * Role template name
     */
    name?: string | null;
    /**
     * Frontend permissions
     */
    frontendPermissions?: Array<Int16Item> | null;
    /**
     * Backoffice permissions
     */
    backofficePermissions?: Array<SimpleBackOfficePermissionItem> | null;
};
