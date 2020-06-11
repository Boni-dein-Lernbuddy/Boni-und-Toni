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

    const iceFeed1: FeedItem = { createDate: now(-44), content: 'Guten Morgen! Heute wollen wir uns mit dem Thema "Entstehung und Aufbau von Gletschern" beschäftigen.', type: 'text' };
    const iceFeed2: FeedItem = { title: 'Was sind Gletscher?', attachmentPath: '../../../assets/images/ice-min.jpg', createDate: now(-43), content: 'lorem ipsum', type: 'picture' };
    const iceFeed3: FeedItem = { createDate: now(-41), content: 'Hier könnte eine Aufgabe stehen.', type: 'text' };
    const iceFeed4: FeedItem = { createDate: now(-37), content: 'Ein kurzes Video zu Gletschern', type: 'video', attachmentPath: '../../../assets/videos/Glacier.mp4' };
    const iceFeed5: FeedItem = { createDate: now(-15), content: 'Wikipedia-Artikel zu Gletschern', type: 'link', attachmentPath: 'https://de.wikipedia.org/wiki/Gletscher' };
    const iceFeed6: FeedItem = { createDate: now(-10), content: 'Unter diesem Link findet ihr Aufgaben zu diesem Thema: <a href="https://link-zur-aufgabe.de">link-zur-aufgabe.de</a>', type: 'task' };
    const iceFeed7: FeedItem = { createDate: now(), content: 'Eine Videokonferenz zum Thema findet morgen um <b>15:00 Uhr</b> statt.', type: 'info' };

    const iceFeedItems = [iceFeed1, iceFeed2, iceFeed3, iceFeed4, iceFeed5, iceFeed6, iceFeed7];

    geoIceberg.childFeed = iceFeedItems;

    return root;
  }
}

function now(modifyMinutes = 0): Date {
  const date = new Date();
  return new Date(date.setMinutes(date.getMinutes() + modifyMinutes));
}
