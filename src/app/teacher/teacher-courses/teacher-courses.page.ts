import {Component, OnInit} from '@angular/core';
import {AbstractTeacherMenuBaseComponent} from "../common/AbstractTeacherMenuBase.component";
import {MenuController} from "@ionic/angular";
import {Course} from "./model/Course";

@Component({
    selector: 'app-teacher-courses',
    templateUrl: './teacher-courses.page.html',
    styleUrls: ['./teacher-courses.page.scss'],
})
export class TeacherCoursesPage extends AbstractTeacherMenuBaseComponent implements OnInit {

    courses: Course[] = [
        new Course(1, 'Erdkunde'),
        new Course(2, 'Mathe'),
        new Course(3, 'Englisch'),
        new Course(4, 'Deutsch'),
        new Course(5, 'Französisch'),
        new Course(6, 'Latein')
    ];

    constructor(menu: MenuController) {
        super(menu);
    }

    ngOnInit() {
    }

}
