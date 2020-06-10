import { Injectable } from '@angular/core';
import { Folder } from '../models/folder';
import { FeedItem } from '../models/feed-item';

@Injectable({
  providedIn: 'root'
})
export class FoldersMockService {

  constructor() { }

  getFolderStructure(): Folder {
    let root: Folder = { name: 'Boni', children: [] };

    let geography: Folder = { name: 'Erdkunde', parent: root, children: [] };
    let maths: Folder = { name: 'Mathe', parent: root, children: [] };

    const rootChildren: Folder[] = [geography, maths];

    let geoGeneral: Folder = { name: 'Allgemeines', parent: geography, children: [] };
    let geoIceberg: Folder = { name: 'Gletscher', parent: geography, children: [] };

    const geoChildren: Folder[] = [geoGeneral, geoIceberg];

    root.children = rootChildren;
    geography.children = geoChildren;

    const now = new Date();

    const iceFeed1: FeedItem = { createDate: now, content: "Guten Morgen! Heute wollen wir uns mit dem Thema \"Entstehung und Aufbau von Gletschern\" beschäftigen.", type: "text" }
    const iceFeed2: FeedItem = { title: "Was sind Gletscher?", attachmentPath: "../../../assets/images/ice-min.jpg", createDate: now, content: "lorem ipsum", type: 'picture' };
    const iceFeed3: FeedItem = { createDate: now, content: "Hier könnte eine Aufgabe stehen.", type: 'text' };
    const iceFeed4: FeedItem = { createDate: now, content: "Ein kurzes Video zu Gletschern", type: 'video', attachmentPath: '../../../assets/videos/Glacier.mp4'};
    const iceFeed5: FeedItem = { createDate: now, content: "Wikipedia Artikel zu Gletschern", type: 'link', attachmentPath: 'https://de.wikipedia.org/wiki/Gletscher'}

    const iceFeedItems = [iceFeed1, iceFeed2, iceFeed3, iceFeed4, iceFeed5];

    geoIceberg.childFeed = iceFeedItems;

    return root;
  }
}
