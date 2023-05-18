/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Option } from './Option';

export type RelatedQuickPoll = {
    /**
     * Poll id
     */
    pollId: number;
    /**
     * Quick poll question
     */
    question: string;
    /**
     * Quick poll options
     */
    options?: Array<Option> | null;
};
