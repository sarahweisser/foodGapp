import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SetAvailabilityPage } from './set-availability';

@NgModule({
  declarations: [
    SetAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(SetAvailabilityPage),
  ],
  exports: [
    SetAvailabilityPage
  ]
})
export class SetAvailabilityPageModule {}
