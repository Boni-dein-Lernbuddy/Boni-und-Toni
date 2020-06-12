import { FeedItem } from './feed-item';

export interface Folder {

    id: number;
    name: string;
    isUpdated?: boolean;
    /** Friendly message from Boni regarding this "folder". (See `MsgFromBoniComponent` for more details.) */
    msg?: string;

    parent?: Folder;
    children: Folder[];
    feedItems?: FeedItem[];
}
