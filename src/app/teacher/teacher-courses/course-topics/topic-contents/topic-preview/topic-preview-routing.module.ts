import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicPreviewPage } from './topic-preview.page';

const routes: Routes = [
  {
    path: '',
    component: TopicPreviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopicPreviewPageRoutingModule {}
