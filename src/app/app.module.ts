import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoldersMockService } from './commons/service/folders-mock.service';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student/student.component';
import { TeacherComponent } from './teacher/teacher/teacher.component';
import {FeedItemComponent} from "./student/student/feed-item/feed-item.component";

@NgModule({
    declarations: [AppComponent, StudentComponent, TeacherComponent, FeedItemComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    FoldersMockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
