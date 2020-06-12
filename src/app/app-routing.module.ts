import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { HomeViewComponent } from './home-view/home-view/home-view.component';

const routes: Routes = [
    {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
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
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
