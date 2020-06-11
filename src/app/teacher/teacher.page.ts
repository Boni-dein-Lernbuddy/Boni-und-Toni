import {Component, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";
import {AbstractTeacherMenuBaseComponent, TEACHER_MENU_ID} from "./common/AbstractTeacherMenuBase.component";

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.page.html',
    styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage extends AbstractTeacherMenuBaseComponent implements OnInit {

    menuId = TEACHER_MENU_ID;

    constructor(menu: MenuController) {
        super(menu);
    }

    ngOnInit() {
    }
}
