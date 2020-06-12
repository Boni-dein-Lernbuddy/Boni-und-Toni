import { Injectable } from '@angular/core';

import { Folder } from '../models/folder';

@Injectable({
    providedIn: 'root'
})
export class FoldersMockService {
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
            { id: 4, name: 'Französisch', parent: root, children: [] },
            { id: 5, name: 'Kunst', parent: root, children: [] },
            { id: 6, name: 'Physik', parent: root, children: [] },
        ];
        return root;
    }

    private getMathFolderStructure(parent: Folder): Folder {
        const root: Folder = { id: 3, name: 'Mathe', parent, isUpdated: true, children: [] };
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
                        type: 'picture',
                        content: 'Unser Tafelbild vom Ende der Stunde',
                        attachmentPath: '/assets/images/tafelbild_mathe.png',
                        createDate: now(-144)
                    }, {
                        id: 12,
                        type: 'task',
                        title: 'Aufgabe',
                        content: 'Eure Aufgabe für zu Hause ist es, erste Entdeckungen für den Zusammenhang zwischen Graph und Funktionsgleichung (rot im Tafelbild) zu machen.<br>Öffnet dazu die GeoGebra-Datei <em>"Lineare Funktionen.gbb"</em> und bearbeitet die Aufgaben vom Arbeitsblatt <em>"Entdecke den Funktionsgraphen einer linearen Funktion"</em>.',
                        createDate: now(-43)
                    }, {
                        id: 13,
                        type: 'document',
                        title: 'Aufgabenblatt',
                        attachmentPath: '/assets/documents/aufgabe_funktionen.pdf',
                        createDate: now(-40)
                    }, {
                        id: 14,
                        type: 'document',
                        title: 'GeoGebra-Datei',
                        attachmentPath: '/assets/documents/Lineare Funktion.ggb',
                        createDate: now(-39)
                    }
                ]
            }
        ];
        return root;
    }

    private getGeoFolderStructure(parent: Folder): Folder {
        const root: Folder = { id: 1, name: 'Erdkunde', parent, isUpdated: true, children: [] };
        root.children = [
            {
                id: 8,
                name: 'Allgemeines',
                parent: root,
                isUpdated: true,
                children: [],
                feedItems: [{
                    id: 9,
                    type: 'info',
                    title: 'Bekanntmachung',
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
                        type: 'text',
                        content: 'Guten Morgen! Heute wollen wir uns mit dem Thema "Entstehung und Aufbau von Gletschern" beschäftigen.',
                        createDate: now(-44)
                    }, {
                        id: 12,
                        type: 'picture',
                        title: 'Was sind Gletscher?',
                        content: 'lorem ipsum',
                        attachmentPath: '/assets/images/ice-min.jpg',
                        createDate: now(-43)
                    }, {
                        id: 13,
                        type: 'video',
                        title: 'Videomaterial',
                        content: 'Ein kurzes Video zu Gletschern',
                        attachmentPath: '/assets/videos/Glacier.mp4',
                        createDate: now(-37)
                    }, {
                        id: 14,
                        type: 'link',
                        title: 'Weitere Links',
                        content: 'Wikipedia-Artikel zu Gletschern',
                        attachmentPath: 'https://de.wikipedia.org/wiki/Gletscher',
                        createDate: now(-15)
                    }, {
                        id: 15,
                        type: 'task',
                        title: 'Aufgabe',
                        content: 'Unter diesem Link findet ihr Aufgaben zu diesem Thema: <a href="https://link-zur-aufgabe.de">link-zur-aufgabe.de</a>',
                        createDate: now(-10)
                    }, {
                        id: 16,
                        type: 'info',
                        title: 'Ankündigung',
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
        const root: Folder = { id: 2, name: 'Deutsch als Fremdsprache', parent, isUpdated: true, children: [] };
        root.children = [
            {
                id: 8,
                name: 'Spielerischer Zugang zum Anfangsvokabular',
                parent: root,
                isUpdated: true,
                children: [],
                feedItems: [{
                    id: 9,
                    type: 'info',
                    title: 'Einführung',
                    content: 'Liebe Schüler, <br> hier könnt ihr das Tafelbild von der letzten Woche sehen.',
                    createDate: now(-256)

                }, {
                    id: 10,
                    type: 'task',
                    title: 'Aufgabe 1',
                    content: '<b>Male</b> nun bis zur nächsten Stunde folgende Wörter: <br>- gehen<br>- riechen<br>- schmecken<br>- radfahren<br>- stehen<br>- schlafen',
                    createDate: now(-128)
                }, {
                    id: 11,
                    type: 'task',
                    title: 'Aufgabe 2',
                    content: 'Schreibe die Wörter in Deutsch und in deiner Herkunftssprache daneben.',
                    createDate: now(-64)
                }, {
                    id: 12,
                    type: 'picture',
                    title: 'Auflösung',
                    content: 'Hier seht ihr eine erste Lösungen.',
                    attachmentPath: '/assets/images/tafelbild-min.jpg',
                    createDate: now(32)
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
