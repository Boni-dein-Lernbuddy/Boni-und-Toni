import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

import {
    AbstractMenuBaseComponent, TEACHER_MENU_ID
} from '../../commons/components/AbstractMenuBase.component';

@Component({
    selector: 'app-teacher-overview',
    templateUrl: './teacher-overview.component.html',
    styleUrls: ['./teacher-overview.component.scss'],
})
export class TeacherOverviewComponent extends AbstractMenuBaseComponent {

    constructor(menu: MenuController) {
        super(menu, TEACHER_MENU_ID);
    }
}
