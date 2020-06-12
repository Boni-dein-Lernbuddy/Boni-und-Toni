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
            this.getGermanFolderStructure(root),
            this.getMathFolderStructure(root),
            {id: 4, name: '7c - Französisch', parent: root, children: []},
            {id: 5, name: '5d - Kunst', parent: root, children: []},
            {id: 6, name: '5a - Physik', parent: root, children: []},
        ];
        return root;
    }

    private getMathFolderStructure(parent: Folder): Folder {
        const root: Folder = {id: 3, name: '7a - Mathe', parent, isUpdated: true, children: []};
        root.children = [
            {
                id: 8,
                name: 'Allgemeines',
                parent: root,
                isUpdated: true,
                children: [],
                feedItems: []
            },
            {
                id: 8,
                name: 'Zuordnungen',
                parent: root,
                isUpdated: true,
                children: [],
                feedItems: []
            },
            {
                id: 10,
                name: 'Der Funktionsgraph',
                parent: root,
                isUpdated: true,
                children: [],
                feedItems: [
                    {
                        id: 11,
                        headline: 'Begrüßung',
                        type: 'picture',
                        content: 'Unser Tafelbild vom Ende der Stunde',
                        attachmentPath: '../../../assets/images/tafelbild_mathe.png',
                        createDate: now(-44)
                    }, {
                        id: 12,
                        headline: 'Aufgabe 1',
                        type: 'task',
                        content: 'Eure Aufgabe für zu Hause ist es, erste Entdeckungen für den Zusammenhang zwischen Graph und Funktionsgleichung (rot im Tafelbild) zu machen',
                        createDate: now(-43)
                    }, {
                        id: 13,
                        headline: 'Aufgabe',
                        type: 'task',
                        content: 'Öffnet dazu die GeoGebra-Datei "LineareFunktionen.gbb und bearbeitet die Aufgaben vom Arbeitsblatt "Entdecke den Funktionsgraphen einer linearen Funktion"',
                        createDate: now(-37)
                    }, {
                        id: 13,
                        headline: 'Aufgabe',
                        type: 'document',
                        attachmentPath: '../../../assets/documents/aufgabe_funktionen.png',
                        content: 'Öffnet dazu die GeoGebra-Datei "LineareFunktionen.gbb und bearbeitet die Aufgaben vom Arbeitsblatt "Entdecke den Funktionsgraphen einer linearen Funktion"',
                        createDate: now(-37)
                    }
                ]
            }
        ];
        return root;
    }

    private getGeoFolderStructure(parent: Folder): Folder {
        const root: Folder = {id: 1, name: '6b - Erdkunde', parent, isUpdated: true, children: []};
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

    private getGermanFolderStructure(parent: Folder): Folder {
        const root: Folder = {id: 2, name: 'Deutsch als Fremdsprache', parent, isUpdated: true, children: []};
        root.children = [
            {
                id: 8,
                name: 'Spielerischer Zugang zum Anfangsvokabular',
                parent: root,
                isUpdated: true,
                children: [],
                feedItems: [{
                    id: 9,
                    headline: 'Einführung',
                    type: 'info',
                    content: 'Liebe Schüler, <br> hier könnt ihr das Tafelbild von der letzten Woche sehen',
                    createDate: now(-256)

                },{
                    id: 10,
                    headline: 'Aufgabe 1',
                    type: 'task',
                    content: '<b>Male</b> nun bis zur nächsten Stunde folgende Wörter: <br>- gehen<br>- riechen<br>- schmecken<br>- radfahren<br>- stehen<br>- schlafen',
                    createDate: now(-256)
                },{
                    id: 11,
                    headline: 'Aufgabe 2',
                    type: 'task',
                    content: 'Schreibe die Wörter in Deutsch und in deiner Herkunftssprache daneben.',
                    createDate: now(-256)
                },{
                    id: 12,
                    headline: 'Auflösung',
                    type: 'picture',
                    content: 'Hier seht ihr eine erste Lösungen.',
                    attachmentPath: '../../../assets/images/tafelbild-min.jpg',
                    createDate: now(0)
                }]
            }
        ];

        return root;
    }
}

function now(modifyMinutes = 0): Date {
    const date = new Date();
    return new Date(date.setMinutes(date.getMinutes() + modifyMinutes));
}
