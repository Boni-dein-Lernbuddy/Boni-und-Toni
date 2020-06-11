import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicContentsPage } from './topic-contents.page';

const routes: Routes = [
  {
    path: '',
    component: TopicContentsPage
  },
  {
    path: 'preview',
    loadChildren: () => import('./topic-preview/topic-preview.module').then( m => m.TopicPreviewPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicContentsPageRoutingModule {}
