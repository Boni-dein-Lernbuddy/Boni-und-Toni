import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

import {
  AbstractMenuBaseComponent, TEACHER_MENU_ID
} from '../../../../../commons/components/AbstractMenuBase.component';
import { Folder } from '../../../../../commons/models/folder';
import { FoldersMockService } from '../../../../../commons/service/folders-mock.service';

@Component({
  selector: 'app-topic-preview',
  templateUrl: './topic-preview.page.html',
  styleUrls: ['./topic-preview.page.scss'],
})
export class TopicPreviewPage extends AbstractMenuBaseComponent implements OnInit {

  course: Folder;
  topic: Folder;

  constructor(
    menu: MenuController,
    private route: ActivatedRoute,
    private mock: FoldersMockService) {
    super(menu, TEACHER_MENU_ID);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const courseId = +params['courseId'];
      const topicId = +params['topicId'];
      this.course = this.topic = this.mock.getFolderStructure().children.filter(child => child.id == courseId)[0];
      this.topic = this.course.children.filter(child => child.id == topicId)[0];
    });
  }

}
