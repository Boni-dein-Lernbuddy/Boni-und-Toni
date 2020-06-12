import { Folder } from 'src/app/commons/models/folder';
import { FoldersMockService } from 'src/app/commons/service/folders-mock.service';

import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-subjects',
  templateUrl: './student-subjects.component.html',
  styleUrls: ['./student-subjects.component.scss'],
})
export class StudentSubjectsComponent implements OnInit {
  currentFolder: Folder;

  constructor(
    private foldersMockService: FoldersMockService,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.changeDetector.detectChanges();
    this.currentFolder = this.foldersMockService.getFolderStructure();
    console.log(this.currentFolder);
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
    return !this.currentFolder?.children?.length && !this.currentFolder?.feedItems?.length;
  }
}
