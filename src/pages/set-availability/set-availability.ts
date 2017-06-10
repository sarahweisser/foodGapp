import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WaitingPage } from '../waiting/waiting';

/**
 * Generated class for the SetAvailabilityPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-set-availability',
  templateUrl: 'set-availability.html',
})
export class SetAvailabilityPage {

  title:string = 'Set availability';
  waitingPage = WaitingPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetAvailabilityPage');
  }

}
