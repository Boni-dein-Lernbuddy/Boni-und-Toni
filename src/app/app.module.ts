import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FoldersMockService} from './commons/service/folders-mock.service';
import {CommonModule} from '@angular/common';
import {StudentComponent} from './student/student/student.component';
import {FeedItemComponent} from "./student/student/feed-item/feed-item.component";
import {HttpClientModule} from '@angular/common/http'
import {LinkPreviewService} from './commons/service/link-preview.service';

@NgModule({
    declarations: [AppComponent, StudentComponent, FeedItemComponent],
    entryComponents: [],
    imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, CommonModule, HttpClientModule],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        FoldersMockService,
        LinkPreviewService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
