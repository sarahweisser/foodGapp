import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WayPointMapPage } from './way-point-map';

@NgModule({
  declarations: [
    WayPointMapPage,
  ],
  imports: [
    IonicPageModule.forChild(WayPointMapPage),
  ],
  exports: [
    WayPointMapPage
  ]
})
export class WayPointMapPageModule {}
