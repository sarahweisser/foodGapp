import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PendingPage } from '../pages/pending/pending';
import { PostPage } from '../pages/post/post';
import { ProgressPage } from '../pages/progress/progress';
import { SignupPage } from '../pages/signup/signup';
import { VolStartScreenPage } from '../pages/vol-start-screen/vol-start-screen';
import { WayPointMapPage } from '../pages/way-point-map/way-point-map';
import { SignupTypePage } from '../pages/signup-type/signup-type';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PendingPage,
    PostPage,
    ProgressPage,
    SignupPage,
    VolStartScreenPage,
    WayPointMapPage,
    SignupTypePage
  ],
  imports: [
    BrowserModule,
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
    WayPointMapPage,
    SignupTypePage

  ],
  providers: [
    LaunchNavigator,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
