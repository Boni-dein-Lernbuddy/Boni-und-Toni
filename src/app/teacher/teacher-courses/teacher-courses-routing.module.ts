import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeacherCoursesPage } from './teacher-courses.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherCoursesPage
  },
  {
    path: ':courseId/topics',
    loadChildren: () => import('./course-topics/course-topics.module').then(m => m.CourseTopicsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherCoursesPageRoutingModule {}
