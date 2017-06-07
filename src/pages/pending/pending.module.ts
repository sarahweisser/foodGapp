import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PendingPage } from './pending';

@NgModule({
  declarations: [
    PendingPage,
  ],
  imports: [
    IonicPageModule.forChild(PendingPage),
  ],
  exports: [
    PendingPage
  ]
})
export class PendingPageModule {}
