import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VolStartSreenPage } from './vol-start-sreen';

@NgModule({
  declarations: [
    VolStartSreenPage,
  ],
  imports: [
    IonicPageModule.forChild(VolStartSreenPage),
  ],
  exports: [
    VolStartSreenPage
  ]
})
export class VolStartSreenPageModule {}
