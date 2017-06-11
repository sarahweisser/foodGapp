import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupTypePage } from '../signup-type/signup-type';

@IonicPage()
@Component({
  selector: 'page-delivered',
  templateUrl: 'delivered.html',
})
export class DeliveredPage {
  
  signupTypePage = SignupTypePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goBackHome() {
    this.navCtrl.setRoot(this.signupTypePage);
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DeliveredPage');
  }

}