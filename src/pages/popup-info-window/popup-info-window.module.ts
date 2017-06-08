import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopupInfoWindowPage } from './popup-info-window';

@NgModule({
  declarations: [
    PopupInfoWindowPage,
  ],
  imports: [
    IonicPageModule.forChild(PopupInfoWindowPage),
  ],
  exports: [
    PopupInfoWindowPage
  ]
})
export class PopupInfoWindowPageModule {}
