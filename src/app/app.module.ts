import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Deeplinks } from '@ionic-native/deeplinks';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { PendingPage } from '../pages/pending/pending';
import { WaitingPage } from '../pages/waiting/waiting';
import { DeliveredPage } from '../pages/delivered/delivered';
import { CompletePage } from '../pages/complete/complete';
import { PostPage } from '../pages/post/post';
import { ProgressPage } from '../pages/progress/progress';
import { SignupPage } from '../pages/signup/signup';
import { Geolocation } from '@ionic-native/geolocation';
import { VolStartScreenPage } from '../pages/vol-start-screen/vol-start-screen';
import { WayPointMapPage } from '../pages/way-point-map/way-point-map';
import { PopupInfoWindowPage } from '../pages/popup-info-window/popup-info-window';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SignupTypePage } from '../pages/signup-type/signup-type';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    PendingPage,
    WaitingPage,
    CompletePage,
    DeliveredPage,
    PostPage,
    ProgressPage,
    SignupPage,
    VolStartScreenPage,
    PopupInfoWindowPage,
    WayPointMapPage,
    SignupTypePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
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
    WaitingPage,
    CompletePage,
    DeliveredPage,
    PostPage,
    ProgressPage,
    SignupPage,
    VolStartScreenPage,
    PopupInfoWindowPage,
    WayPointMapPage,
    SignupTypePage
  ],
  providers: [
    StatusBar,
    Geolocation,
    GoogleMaps,
    SplashScreen,
    Deeplinks,
    LaunchNavigator,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
