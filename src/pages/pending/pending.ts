import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupTypePage } from '../signup-type/signup-type';
import{ ProgressPage } from '../progress/progress';
/**
 * Generated class for the PendingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html',
})
export class PendingPage {
  
  signupTypePage = SignupTypePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    setTimeout(function(){navCtrl.push(ProgressPage)},5000);
  }
  goBackHome() {
    this.navCtrl.setRoot(this.signupTypePage);
    this.navCtrl.popToRoot();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingPage');

    
  }
  

}
