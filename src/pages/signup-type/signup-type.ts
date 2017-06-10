import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostPage } from '../post/post';
import { VolStartScreenPage } from '../vol-start-screen/vol-start-screen';
import { SetAvailabilityPage } from '../set-availability/set-availability';

/**
 * Generated class for the SignupTypePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup-type',
  templateUrl: 'signup-type.html',
})
export class SignupTypePage {

  postPage = PostPage;
  volStart = VolStartScreenPage;
  setAvailabilityPage = SetAvailabilityPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupTypePage');
  }
  volunteer: boolean;
  donate: boolean;
  acceptDonate: boolean;

 continue() {
    if (this.volunteer) {
      this.navCtrl.push(VolStartScreenPage);
    }
    else if(this.donate)
    {
      this.navCtrl.push(PostPage);
    }
    else if(this.acceptDonate)
    {
      this.navCtrl.push(SetAvailabilityPage);
    }
  }

  volunteerTrue(){
    this.volunteer =true;
    this.donate = false;
    this.acceptDonate=false;
  }

  donateTrue(){
    this.donate =true;
    this.volunteer = false;
    this.acceptDonate=false;
  }
  partnerTrue(){
    this.acceptDonate=true;
    this.volunteer = false;
    this.donate = false;
  }

}
