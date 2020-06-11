import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import localeDe from '@angular/common/locales/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoldersMockService } from './commons/service/folders-mock.service';
import { LinkPreviewService } from './commons/service/link-preview.service';
import { FeedItemComponent } from './student/student/feed-item/feed-item.component';
import { StudentComponent } from './student/student/student.component';

registerLocaleData(localeDe);

@NgModule({
    declarations: [
        AppComponent,
        FeedItemComponent,
        StudentComponent,
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CommonModule,
        HttpClientModule,
        IonicModule.forRoot()
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'de'
        }, {
            provide: RouteReuseStrategy,
            useClass: IonicRouteStrategy
        },
        FoldersMockService,
        LinkPreviewService,
        SplashScreen,
        StatusBar
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
