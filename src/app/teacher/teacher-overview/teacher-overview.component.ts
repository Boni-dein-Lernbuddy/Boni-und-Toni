import {Component, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";
import {TEACHER_MENU_ID} from "../teacher.page";

@Component({
    selector: 'app-teacher-overview',
    templateUrl: './teacher-overview.component.html',
    styleUrls: ['./teacher-overview.component.scss'],
})
export class TeacherOverviewComponent implements OnInit {

    constructor(private menu: MenuController) {
    }

    ngOnInit() {
    }

    openMenu() {
        this.menu.open(TEACHER_MENU_ID)
            .then(() => {})
            .catch(error => console.error(error));
    }
}
