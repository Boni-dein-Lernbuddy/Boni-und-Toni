export interface FeedItem {
    title?: string;
    imagesrc?: string;
    createDate: Date;
    content: string;
    type: 'text' | 'aufgabe' | 'bildtext';
}
