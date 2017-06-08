import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Location } from '../../shared/location';

declare var google: any;
/**
 * Generated class for the WayPointMapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'way-point-map',
  templateUrl: 'way-point-map.html',
})
export class WayPointMapPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('directionsPanel') directionsPanel: ElementRef;
  map: any;

  title: string = 'Pickup Details';
  buttonText: string = 'Accept';

  currentLocation:any;
  pickupLocation: any;
  dropOffLocation: Location;
  zoom: number = 13;
  loader: any;
  lat: number;
  lng: number;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController) {
  

  }

  getLoader() {
    let loader = this.loadingCtrl.create({
      content: "Loading. . ."
    });
    return loader;
  }

  confirm() {
    this.navCtrl.push(WayPointMapPage, {
      title: 'In Progress',
      buttonText: 'Complete'
    });
  }

  loadMap() {
    let LatLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: LatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  }

  startNavigating() {
      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer;

      directionsDisplay.setMap(this.map);
      directionsDisplay.setPanel(this.directionsPanel.nativeElement);

      directionsService.route({
        origin: 'adelaide',
        destination: 'adelaide oval',
        travelMode: google.maps.TravelMode['DRIVING']
      }, (res, status) => {
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(res);
            this.loader.dismiss();
          } else {
            console.warn(status);
          }
      })
  }

  

  ionViewDidLoad() {
    this.loader = this.getLoader();
    this.loader.present();

    this.loadMap();
    this.startNavigating();
}
  }
