export interface FeedItem {
    title?: string;

    /** URI to picture, external website etc. depending on `type`. */
    attachmentPath?: string;

    createDate?: Date;

    /** Textual content. (*Safe* HTML elements are allowed.) */
    content: string;

    type: 'text' | 'task' | 'picture' | 'video' | 'audio' | 'link' | 'document' | 'info';
}
