import { Component, HostBinding } from '@angular/core';
import { MenuController } from '@ionic/angular';

import {
    AbstractMenuBaseComponent, TEACHER_MENU_ID
} from '../commons/components/AbstractMenuBase.component';

@Component({
    selector: 'app-teacher',
    templateUrl: './teacher.page.html'
})
export class TeacherPage extends AbstractMenuBaseComponent {
    @HostBinding('class') private className = 'teacher-view';

    readonly menuId = TEACHER_MENU_ID;

    constructor(menu: MenuController) {
        super(menu, TEACHER_MENU_ID);
    }
}
