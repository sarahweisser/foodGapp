import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage({
})

export class HomePage {

signupPage = SignupPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
