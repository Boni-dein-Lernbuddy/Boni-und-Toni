import { FeedItem } from './feed-item';

export interface Folder {

    name: string;
    isUpdated?: boolean;

    parent?: Folder;
    children: Folder[];
    childFeed?: FeedItem[];
}
