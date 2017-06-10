import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaypointMap2Page } from './waypoint-map2';

@NgModule({
  declarations: [
    WaypointMap2Page,
  ],
  imports: [
    IonicPageModule.forChild(WaypointMap2Page),
  ],
  exports: [
    WaypointMap2Page
  ]
})
export class WaypointMap2PageModule {}
