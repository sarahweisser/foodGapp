import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WayPointMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-way-point-map',
  templateUrl: 'way-point-map.html',
    styles: [`
    .sebm-google-map-container {
  height: 300px;
}
`
  ]
})
export class WayPointMapPage {

  title: string;
  lat: number;
  lng: number;
  zoom: number = 13;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getCurrentLocation();
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude,
        this.lng = position.coords.longitude
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WayPointMapPage');
  }



}
