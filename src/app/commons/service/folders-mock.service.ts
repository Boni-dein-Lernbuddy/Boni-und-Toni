import {Injectable} from '@angular/core';
import {Folder} from '../models/folder';

@Injectable({
    providedIn: 'root'
})
export class FoldersMockService {

    constructor() {
    }

    getFolderStructure(): Folder {
        const root: Folder = {
            id: 0,
            name: 'Deine Fächer',
            msg: 'Hier findest du eine Übersicht über all deine Fächer.',
            children: []
        };
        root.children = [
            this.getGeoFolderStructure(root),
            {id: 1, name: 'Mathe', parent: root, isUpdated: true, children: []},
            {id: 2, name: 'Englisch', parent: root, children: []},
            {id: 3, name: 'Deutsch', parent: root, children: []},
            {id: 4, name: 'Französisch', parent: root, children: []},
            {id: 5, name: 'Kunst', parent: root, children: []},
            {id: 6, name: 'Physik', parent: root, children: []}
        ];
        return root;
    }

    private getGeoFolderStructure(parent: Folder): Folder {
        const root: Folder = {id: 7, name: 'Erdkunde', parent, isUpdated: true, children: []};
        root.children = [
            {
                id: 8,
                name: 'Allgemeines',
                parent: root,
                isUpdated: true,
                children: [],
                feedItems: [{
                    id: 9,
                    headline: 'Bekanntmachung',
                    type: 'info',
                    content: 'Die Videokonferenz findet heute erst 15 Minuten später statt. Start ist um <b>15:15 Uhr</b>.'
                }]
            }, {
                id: 10,
                name: 'Gletscher',
                parent: root,
                isUpdated: true,
                children: [],
                feedItems: [
                    {
                        id: 11,
                        headline: 'Begrüßung',
                        type: 'text',
                        content: 'Guten Morgen! Heute wollen wir uns mit dem Thema "Entstehung und Aufbau von Gletschern" beschäftigen.',
                        createDate: now(-44)
                    }, {
                        id: 12,
                        headline: 'Einführung',
                        type: 'picture',
                        title: 'Was sind Gletscher?',
                        content: 'lorem ipsum',
                        attachmentPath: '../../../assets/images/ice-min.jpg',
                        createDate: now(-43)
                    }, {
                        id: 13,
                        headline: 'Videomaterial',
                        type: 'video',
                        content: 'Ein kurzes Video zu Gletschern',
                        attachmentPath: '../../../assets/videos/Glacier.mp4',
                        createDate: now(-37)
                    }, {
                        id: 14,
                        headline: 'Weitere Links',
                        type: 'link',
                        content: 'Wikipedia-Artikel zu Gletschern',
                        attachmentPath: 'https://de.wikipedia.org/wiki/Gletscher',
                        createDate: now(-15)
                    }, {
                        id: 15,
                        headline: 'Aufgabenblock 1',
                        type: 'task',
                        content: 'Unter diesem Link findet ihr Aufgaben zu diesem Thema: <a href="https://link-zur-aufgabe.de">link-zur-aufgabe.de</a>',
                        createDate: now(-10)
                    }, {
                        id: 16,
                        headline: 'Ankündigung',
                        type: 'info',
                        content: 'Eine Videokonferenz zum Thema findet morgen um <b>15:00 Uhr</b> statt.',
                        createDate: now()
                    }
                ]
            }, {
                id: 17,
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
