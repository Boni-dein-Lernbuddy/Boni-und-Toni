import {Component, OnInit} from '@angular/core';
import {MenuController} from "@ionic/angular";
import {AbstractTeacherMenuBaseComponent} from "../common/AbstractTeacherMenuBase.component";

@Component({
    selector: 'app-teacher-overview',
    templateUrl: './teacher-overview.component.html',
    styleUrls: ['./teacher-overview.component.scss'],
})
export class TeacherOverviewComponent extends AbstractTeacherMenuBaseComponent implements OnInit {

    constructor(menu: MenuController) {
        super(menu);
    }

    ngOnInit() {
    }
}
