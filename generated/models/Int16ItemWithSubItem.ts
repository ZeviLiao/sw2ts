/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Int16Item } from './Int16Item';

export type Int16ItemWithSubItem = {
    id?: number;
    name?: string | null;
    subItems?: Array<Int16Item> | null;
};
