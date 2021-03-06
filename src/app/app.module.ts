import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PendingPage } from '../pages/pending/pending';
import { PostPage } from '../pages/post/post';
import { ProgressPage } from '../pages/progress/progress';
import { SignupPage } from '../pages/signup/signup';
import { VolStartScreenPage } from '../pages/vol-start-screen/vol-start-screen';
import { WayPointMapPage } from '../pages/way-point-map/way-point-map';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgmCoreModule } from 'angular2-google-maps/core';

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
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAe7u6-rTZ3TLpwkroghe_LQSVRLfKzzoI'
    })
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
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
