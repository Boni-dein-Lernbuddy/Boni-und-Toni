import { Injectable } from '@angular/core';
import { Folder } from '../models/folder';
import { FeedItem } from '../models/feed-item';

@Injectable({
  providedIn: 'root'
})
export class FoldersMockService {

  constructor() { }

  getFolderStructure(): Folder {
    let root: Folder = { name: 'root', children: [] };

    let geography: Folder = { name: 'Erdkunde', parent: root, children: [] };
    let maths: Folder = { name: 'Mathe', parent: root, children: [] };

    const rootChildren: Folder[] = [geography, maths];

    let geoGeneral: Folder = { name: 'Allgemeines', parent: geography, children: [] };
    let geoIceberg: Folder = { name: 'Gletscher', parent: geography, children: [] };

    const geoChildren: Folder[] = [geoGeneral, geoIceberg];

    root.children = rootChildren;
    geography.children = geoChildren;

    const now = new Date();

    const iceFeed1: FeedItem = { createDate: now, content: "Guten Morgen! Heute wollen wir uns mit dem Thema \"Entstehung und aufbau von Gletschern\" beschäftigen." }
    const iceFeed2: FeedItem = { title: "Was sind Gletscher?", createDate: now, content: "lorem ipsum" };

    const iceFeedItems = [iceFeed1, iceFeed2];

    geoIceberg.childFeed = iceFeedItems;

    return root;
  }
}
