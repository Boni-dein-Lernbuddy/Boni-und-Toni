import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseTopicsPage } from './course-topics.page';

const routes: Routes = [
  {
    path: '',
    component: CourseTopicsPage
  },
  {
    path: ':topicId/contents',
    loadChildren: () => import('./topic-contents/topic-contents.module').then( m => m.TopicContentsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseTopicsPageRoutingModule {}
