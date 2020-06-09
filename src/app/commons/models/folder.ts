import { FeedItem } from './feed-item';

export interface Folder {

    name: string;

    parent?: Folder;
    children: Folder[];
    childFeed?: FeedItem[];
}