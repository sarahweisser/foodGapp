import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, PopoverController, Events, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';
import { PopupInfoWindowPage } from '../popup-info-window/popup-info-window';
import { Http } from '@angular/http';
import { Deeplinks } from '@ionic-native/deeplinks';
import { NgZone } from '@angular/core';
import 'rxjs/add/operator/map';
import { DataService } from '../../app/services/data.service';


export class TestPage {
  constructor(data: DataService) {
    data.retrieveData()
  }
}


declare var google;


@IonicPage()

@Component({
  providers: [DataService],
  selector: 'page-vol-start-screen',
  templateUrl: 'vol-start-screen.html',
})
export class VolStartScreenPage {

  @ViewChild('map') mapContainer: any;
  map: any;
  infoWindows: any;
  loader: any;

  constructor(public navCtrl: NavController,
    private http: Http,
    public geolocation: Geolocation,
    public ngZone: NgZone,
    public modalCtrl: ModalController,
    public popoverCtrl: PopoverController,
    public events: Events,
    public data: DataService,
    public loadingCtrl: LoadingController,
    private deeplinks: Deeplinks) {
    this.infoWindows = [];
  }

  ionViewWillEnter() {
    this.loader = this.getLoader();
    this.loader.present();
    this.displayGoogleMap();


  }


  getLoader() {
    let loader = this.loadingCtrl.create({
      content: "Loading. . ."
    });
    return loader;
  }

  displayGoogleMap() {
    this.geolocation.getCurrentPosition().then(position => {
      this.loader.dismiss();
      let zipCode = new google.maps.LatLng(39.749391, -75.561390);
      // let current = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: zipCode,
        disableDefaultUI: true,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);
      this.myMarker(zipCode);

      const markers = function () {
        this.getMarkers();
        this.loader.dismiss();
      }
      setTimeout(markers.bind(this), 1000);

    }).catch((error) => {
      console.log('Error getting location', error);
    });




  }
  myMarker(position) {
    //var position = new google.maps.LatLng(marker.latitude, marker.longitude);
    var image = {
    icon: new google.maps.MarkerImage('assets/img/ball2.gif'),
     size: new google.maps.Size(10, 8),
 
  };
    var currentPositionIcon = new google.maps.Marker({
      optimized: false,
      position: position,
      icon: image.icon
    });
    currentPositionIcon.setMap(this.map);

  }
 
  getMarkers() {

    this.http.get('assets/data/markers.json')
      .map((res) => res.json())
      .subscribe(data => {
        this.addMarkersToMap(data);
      });

  }



  markerInfo(marker) {

    marker.addListener('click', () => {
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
      let popover = this.popoverCtrl.create(PopupInfoWindowPage, { marker: marker, position: position });
      popover.present({

      });
      popover.dismiss
    });

  }



  addMarkersToMap(markers) {
    for (let marker of markers) {

      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
      var restaurantMarkerClick = new google.maps.Marker({
        position: position,
        title: marker.name,
        quantity: marker.quantity,
        perishable: marker.perishable,
        latitude: marker.latitude,
        longitude: marker.longitude,
        animation: google.maps.Animation.DROP
      });
      restaurantMarkerClick.setMap(this.map);
      this.markerInfo(restaurantMarkerClick);
    }
  }

}
