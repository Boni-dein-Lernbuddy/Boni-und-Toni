import {Component, OnInit} from '@angular/core';
import {AbstractTeacherMenuBaseComponent} from "../common/AbstractTeacherMenuBase.component";
import {MenuController} from "@ionic/angular";
import {Course} from "./model/Course";
import {FoldersMockService} from "../../commons/service/folders-mock.service";

@Component({
    selector: 'app-teacher-courses',
    templateUrl: './teacher-courses.page.html',
    styleUrls: ['./teacher-courses.page.scss'],
})
export class TeacherCoursesPage extends AbstractTeacherMenuBaseComponent implements OnInit {

    courses: Course[];

    constructor(menu: MenuController, private mock: FoldersMockService) {
        super(menu);
    }

    ngOnInit() {
        this.courses = this.mock.getFolderStructure().children;
    }

    addCourse() {
        //TODO implement
    }
}
