import { Injectable } from '@angular/core';

import { Folder } from '../models/folder';

@Injectable({
  providedIn: 'root'
})
export class FoldersMockService {

  constructor() { }

  getFolderStructure(): Folder {
    const root: Folder = { name: 'Deine Fächer', children: [] };
    root.children = [
      this.getGeoFolderStructure(root),
      { name: 'Mathe', parent: root, isUpdated: true, children: [] },
      { name: 'Englisch', parent: root, children: [] },
      { name: 'Deutsch', parent: root, children: [] },
      { name: 'Französisch', parent: root, children: [] },
      { name: 'Kunst', parent: root, children: [] },
      { name: 'Physik', parent: root, children: [] }
    ];
    return root;
  }

  private getGeoFolderStructure(parent: Folder): Folder {
    const root: Folder = { name: 'Erdkunde', parent, isUpdated: true, children: [] };
    root.children = [
      {
        name: 'Allgemeines',
        parent: root,
        isUpdated: true,
        children: [],
        childFeed: [{
          type: 'info',
          content: 'Die Videokonferenz findet heute erst 15 Minuten später statt. Start ist um <b>15:15 Uhr</b>.'
        }]
      }, {
        name: 'Gletscher',
        parent: root,
        isUpdated: true,
        children: [],
        childFeed: [
          {
            type: 'text',
            content: 'Guten Morgen! Heute wollen wir uns mit dem Thema "Entstehung und Aufbau von Gletschern" beschäftigen.',
            createDate: now(-44)
          }, {
            type: 'picture',
            title: 'Was sind Gletscher?',
            content: 'lorem ipsum',
            attachmentPath: '../../../assets/images/ice-min.jpg',
            createDate: now(-43)
          }, {
            type: 'video',
            content: 'Ein kurzes Video zu Gletschern',
            attachmentPath: '../../../assets/videos/Glacier.mp4',
            createDate: now(-37)
          }, {
            type: 'link',
            content: 'Wikipedia-Artikel zu Gletschern',
            attachmentPath: 'https://de.wikipedia.org/wiki/Gletscher',
            createDate: now(-15)
          }, {
            type: 'task',
            content: 'Unter diesem Link findet ihr Aufgaben zu diesem Thema: <a href="https://link-zur-aufgabe.de">link-zur-aufgabe.de</a>',
            createDate: now(-10)
          }, {
            type: 'info',
            content: 'Eine Videokonferenz zum Thema findet morgen um <b>15:00 Uhr</b> statt.',
            createDate: now()
          }
        ]
      }, {
        name: 'Topographie',
        parent: root,
        children: []
      }
    ];
    return root;
  }
}

function now(modifyMinutes = 0): Date {
  const date = new Date();
  return new Date(date.setMinutes(date.getMinutes() + modifyMinutes));
}
