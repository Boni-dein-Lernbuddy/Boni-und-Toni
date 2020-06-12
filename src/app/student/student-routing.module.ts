import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentOverviewComponent } from './student-overview/student-overview.component';
import { StudentSubjectsComponent } from './student-subjects/student-subjects.component';
import { StudentComponent } from './student.component';

const routes: Routes = [{
    path: '',
    component: StudentComponent,
    children: [
        {
            path: 'overview',
            component: StudentOverviewComponent
        }, {
            path: 'subjects',
            component: StudentSubjectsComponent
            // TODO Structure similarly to `TeacherRoutingModule` (with route for subjects & topics)
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StudentRoutingModule { }
