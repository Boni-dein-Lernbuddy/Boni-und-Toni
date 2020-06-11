import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopicContentsPageRoutingModule } from './topic-contents-routing.module';

import { TopicContentsPage } from './topic-contents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopicContentsPageRoutingModule
  ],
  declarations: [TopicContentsPage]
})
export class TopicContentsPageModule {}
