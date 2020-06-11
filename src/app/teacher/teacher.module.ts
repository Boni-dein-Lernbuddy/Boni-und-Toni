import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {TeacherPageRoutingModule} from './teacher-routing.module';

import {TeacherPage} from './teacher.page';
import {TeacherOverviewComponent} from "./teacher-overview/teacher-overview.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TeacherPageRoutingModule
    ],
    declarations: [TeacherPage, TeacherOverviewComponent]
})
export class TeacherPageModule {
}
