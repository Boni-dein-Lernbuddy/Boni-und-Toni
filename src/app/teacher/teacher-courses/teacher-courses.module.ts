import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeacherCoursesPageRoutingModule } from './teacher-courses-routing.module';

import { TeacherCoursesPage } from './teacher-courses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeacherCoursesPageRoutingModule
  ],
  declarations: [TeacherCoursesPage]
})
export class TeacherCoursesPageModule {}
