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
  @ViewChild('map') mapContainer: any;
  title: string;
  quantity: string;
  perishable: string;

  button: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    console.log(navParams);
    this.title = navParams.data.marker.title;
    this.quantity = navParams.data.marker.quantity;
    this.perishable = navParams.data.marker.perishable;
    this.button = '<button ion-button id="volunteerButton">Volunteer!</button>';
  }

  ionViewDidLoad() {
  }






}
