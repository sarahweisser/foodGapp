import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Deeplinks } from '@ionic-native/deeplinks';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PendingPage } from '../pages/pending/pending';
import { PostPage } from '../pages/post/post';
import { ProgressPage } from '../pages/progress/progress';
import { SignupPage } from '../pages/signup/signup';
import { Geolocation } from '@ionic-native/geolocation';
import { VolStartScreenPage } from '../pages/vol-start-screen/vol-start-screen';
import { WayPointMapPage } from '../pages/way-point-map/way-point-map';
import { GoogleMaps } from '@ionic-native/google-maps';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PendingPage,
    PostPage,
    ProgressPage,
    SignupPage,
    VolStartScreenPage,
    WayPointMapPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PendingPage,
    PostPage,
    ProgressPage,
    SignupPage,
    VolStartScreenPage,
    WayPointMapPage
  ],
  providers: [
    StatusBar,
    Geolocation,
    GoogleMaps,
    SplashScreen,
    Deeplinks,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
