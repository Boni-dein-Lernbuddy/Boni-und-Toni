import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {StudentComponent} from './student/student/student.component';
import {HomeViewComponent} from "./home-view/home-view/home-view.component";

const routes: Routes = [
    {
        path: 'tabs',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'student',
        component: StudentComponent
    },
    {
        path: 'teacher',
        loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherPageModule),
    },
    {
        path: '',
        component: HomeViewComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
