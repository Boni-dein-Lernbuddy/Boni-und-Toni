import { Injectable } from '@angular/core';
import { Folder } from '../models/folder';
import { FeedItem } from '../models/feed-item';

@Injectable({
  providedIn: 'root'
})
export class FoldersMockService {

  constructor() { }

  getFolderStructure(): Folder {
    const root: Folder = { name: 'Boni', children: [] };

    const geography: Folder = { name: 'Erdkunde', parent: root, children: [] };
    const maths: Folder = { name: 'Mathe', parent: root, children: [] };

    const rootChildren: Folder[] = [geography, maths];

    const geoGeneral: Folder = { name: 'Allgemeines', parent: geography, children: [] };
    const geoIceberg: Folder = { name: 'Gletscher', parent: geography, children: [] };
    const geoTopography: Folder = { name: 'Topographie', parent: geography, children: [] };

    const geoChildren: Folder[] = [geoGeneral, geoIceberg, geoTopography];

    root.children = rootChildren;
    geography.children = geoChildren;

    const now = new Date();

    const iceFeed1: FeedItem = { createDate: now, content: 'Guten Morgen! Heute wollen wir uns mit dem Thema "Entstehung und Aufbau von Gletschern" beschäftigen.', type: 'text' };
    const iceFeed2: FeedItem = { title: 'Was sind Gletscher?', attachmentPath: '../../../assets/images/ice-min.jpg', createDate: now, content: 'lorem ipsum', type: 'picture' };
    const iceFeed3: FeedItem = { createDate: now, content: 'Hier könnte eine Aufgabe stehen.', type: 'text' };
    const iceFeed4: FeedItem = { createDate: now, content: 'Ein kurzes Video zu Gletschern', type: 'video', attachmentPath: '../../../assets/videos/Glacier.mp4' };
    const iceFeed5: FeedItem = { createDate: now, content: 'Wikipedia-Artikel zu Gletschern', type: 'link', attachmentPath: 'https://de.wikipedia.org/wiki/Gletscher' };
    const iceFeed6: FeedItem = { createDate: now, content: 'Unter diesem Link findet ihr Aufgaben zu diesem Thema: <a href="https://link-zur-aufgabe.de">link-zur-aufgabe.de</a>', type: 'task' };
    const iceFeed7: FeedItem = { createDate: now, content: 'Eine Videokonferenz zum Thema findet morgen um <b>15:00 Uhr</b> statt.', type: 'info' };

    const iceFeedItems = [iceFeed1, iceFeed2, iceFeed3, iceFeed4, iceFeed5, iceFeed6, iceFeed7];

    geoIceberg.childFeed = iceFeedItems;

    return root;
  }
}
