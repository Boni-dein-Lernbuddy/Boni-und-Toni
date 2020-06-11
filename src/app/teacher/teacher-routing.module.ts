import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherOverviewComponent} from "./teacher-overview/teacher-overview.component";
import {TeacherPage} from "./teacher.page";

const routes: Routes = [
    {
        path: '',
        component: TeacherPage,
        children: [
            {
                path: 'overview',
                component: TeacherOverviewComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TeacherPageRoutingModule {
}
