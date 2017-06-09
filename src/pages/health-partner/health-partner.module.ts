import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HealthPartnerPage } from './health-partner';

@NgModule({
  declarations: [
    HealthPartnerPage,
  ],
  imports: [
    IonicPageModule.forChild(HealthPartnerPage),
  ],
  exports: [
    HealthPartnerPage
  ]
})
export class HealthPartnerPageModule {}
