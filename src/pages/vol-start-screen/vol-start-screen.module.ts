import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolStartScreenPage } from './vol-start-screen';

@NgModule({
  declarations: [
    VolStartScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(VolStartScreenPage),
  ],
  exports: [
    VolStartScreenPage
  ]
})
export class VolStartScreenPageModule {}
