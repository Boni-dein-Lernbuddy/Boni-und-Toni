import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { StudentRoutingModule } from './student-routing.module';
import { FeedItemComponent } from './student-subjects/feed-item/feed-item.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';
import { StudentComponent } from './student.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StudentRoutingModule
    ],
    declarations: [
        FeedItemComponent,
        StudentComponent,
        StudentOverviewComponent,
        StudentSubjectsComponent
    ]
})
export class StudentModule { }
