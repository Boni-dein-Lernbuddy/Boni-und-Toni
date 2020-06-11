import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicPreviewPageRoutingModule } from './topic-preview-routing.module';

import { TopicPreviewPage } from './topic-preview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicPreviewPageRoutingModule
  ],
  declarations: [TopicPreviewPage]
})
export class TopicPreviewPageModule {}
