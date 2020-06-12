import { Component, HostBinding } from '@angular/core';
import { MenuController } from '@ionic/angular';

import {
    AbstractMenuBaseComponent, STUDENT_MENU_ID
} from '../commons/components/AbstractMenuBase.component';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html'
})
export class StudentComponent extends AbstractMenuBaseComponent {
    @HostBinding('class') private className = 'student-view';

    readonly menuId = STUDENT_MENU_ID;

    constructor(menu: MenuController) {
        super(menu, STUDENT_MENU_ID);
    }
}
