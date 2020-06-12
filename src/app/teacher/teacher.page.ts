import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import {
    AbstractMenuBaseComponent, TEACHER_MENU_ID
} from '../commons/components/AbstractMenuBase.component';

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.page.html',
    styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage extends AbstractMenuBaseComponent {

    readonly menuId = TEACHER_MENU_ID;

    constructor(menu: MenuController) {
        super(menu, TEACHER_MENU_ID);
    }
}
