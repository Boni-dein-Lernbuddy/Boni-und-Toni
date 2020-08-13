import { Folder } from '../../commons/models/folder';
import { FoldersMockService } from '../../commons/service/folders-mock.service';

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import {
  AbstractMenuBaseComponent, STUDENT_MENU_ID
} from '../../commons/components/AbstractMenuBase.component';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.scss'],
})
export class StudentSubjectsComponent extends AbstractMenuBaseComponent implements OnInit {
  currentFolder: Folder;

  constructor(
    private menu: MenuController,
    private mock: FoldersMockService
  ) {
    super(menu, STUDENT_MENU_ID);
  }

  ngOnInit() {
    this.currentFolder = this.mock.getFolderStructure();
  }

  public selectFolder(folder: Folder) {
    this.currentFolder = folder;
  }

  public get navTitleFolders(): Folder[] {
    const folders: Folder[] = [];

    folders.push(this.currentFolder);
    let folder = this.currentFolder;
    while (folder.parent) {
      folder = folder.parent;
      folders.push(folder);
    }

    return folders.reverse();
  }

  public get isCurrentFolderEmpty(): boolean {
    return !this.currentFolder.children.length && !this.currentFolder.feedItems.length;
  }
}
