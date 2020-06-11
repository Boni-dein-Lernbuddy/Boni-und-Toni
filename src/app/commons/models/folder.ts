import { FeedItem } from './feed-item';

export interface Folder {
    name: string;
    isUpdated?: boolean;
    /** Friendly message from Boni regarding this "folder". (*Safe* HTML elements are allowed.) */
    msg?: string;

    parent?: Folder;
    children: Folder[];
    feedItems?: FeedItem[];
}
