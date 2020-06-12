import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';

import {
    AbstractMenuBaseComponent, TEACHER_MENU_ID
} from '../../../commons/components/AbstractMenuBase.component';
import { Folder } from '../../../commons/models/folder';
import { FoldersMockService } from '../../../commons/service/folders-mock.service';

@Component({
    selector: 'app-course-topics',
    templateUrl: './course-topics.page.html',
    styleUrls: ['./course-topics.page.scss'],
})
export class CourseTopicsPage extends AbstractMenuBaseComponent implements OnInit {

    course: Folder;

    constructor(menu: MenuController, private route: ActivatedRoute, private mock: FoldersMockService) {
        super(menu, TEACHER_MENU_ID);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            const courseId = +params['courseId'];
            this.course = this.mock.getFolderStructure().children.filter(child => child.id == courseId)[0];
        });
    }

    addTopic() {
        //TODO implement
    }
}
