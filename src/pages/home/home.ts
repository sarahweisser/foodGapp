import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SignupTypePage } from '../signup-type/signup-type';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage({
})

export class HomePage {

signupPage = SignupPage;
signupTypePage = SignupTypePage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
