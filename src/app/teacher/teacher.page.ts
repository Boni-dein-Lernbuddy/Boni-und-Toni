import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

export const TEACHER_MENU_ID = 'teacher-menu'

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.page.html',
    styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

    menuId = TEACHER_MENU_ID;

    constructor() {
    }

    ngOnInit() {
    }
}
