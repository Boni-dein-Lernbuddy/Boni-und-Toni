export interface FeedItem {
    title?: string;
    attachmentPath?: string;
    createDate: Date;
    content: string;
    type: 'text' | 'task' | 'picture' | 'video' | 'audio' | 'link' | 'document';
}
