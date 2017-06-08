import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the PopupInfoWindowPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-popup-info-window',
  templateUrl: 'popup-info-window.html',
})
export class PopupInfoWindowPage {
  title: string;
  // @ViewChild('title') titleHead: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  greg: string = "greg";

  ionViewDidLoad() {


    let parameter1 = this.navParams.get('param1');
    let parameter2 = this.navParams.get('param2');

this.doThis();


  }


doThis(){
      this.events.subscribe('user:created', (user: string) => {
      this.printThis(user);

    });

}

  printThis(user) {
    alert(user);
    this.title = user;
  }


  get titleName(): string {
    return this.title;
  }

  set titleName(title: string) {
    this.title = title;
  }







}
