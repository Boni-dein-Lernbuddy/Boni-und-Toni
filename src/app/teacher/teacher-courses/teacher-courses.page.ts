import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import {
    AbstractMenuBaseComponent, TEACHER_MENU_ID
} from '../../commons/components/AbstractMenuBase.component';
import { FoldersMockService } from '../../commons/service/folders-mock.service';
import { Course } from './model/Course';

@Component({
    selector: 'app-teacher-courses',
    templateUrl: './teacher-courses.page.html',
    styleUrls: ['./teacher-courses.page.scss'],
})
export class TeacherCoursesPage extends AbstractMenuBaseComponent implements OnInit {

    courses: Course[];

    constructor(menu: MenuController, private mock: FoldersMockService) {
        super(menu, TEACHER_MENU_ID);
    }

    ngOnInit() {
        this.courses = this.mock.getFolderStructure().children;
    }

    addCourse() {
        //TODO implement
    }
}
