import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupTypePage } from './signup-type';
import { SetAvailabilityPage } from '../set-availability/set-availability';

@NgModule({
  declarations: [
    SignupTypePage,
  ],
  imports: [
    IonicPageModule.forChild(SignupTypePage),
  ],
  exports: [
    SignupTypePage
  ]
})
export class SignupTypePageModule {}
