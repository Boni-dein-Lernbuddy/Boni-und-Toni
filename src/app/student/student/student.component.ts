import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Folder } from 'src/app/commons/models/folder';
import { FoldersMockService } from 'src/app/commons/service/folders-mock.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss'],
})
export class StudentComponent implements OnInit {

  currentFolder: Folder;

  constructor(private foldersMockService: FoldersMockService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.changeDetector.detectChanges();
    this.currentFolder = this.foldersMockService.getFolderStructure();
    console.log(this.currentFolder);
  }

  public selectFolder(folder: Folder){
    this.currentFolder = folder;
  }

  public get navTitleFolders(): Folder[] {
    const folders: Folder[] = [];

    folders.push(this.currentFolder);
    let folder = this.currentFolder;
    while(folder.parent) {
      folder = folder.parent;
      folders.push(folder);
    }

    return folders.reverse();
  }



}
