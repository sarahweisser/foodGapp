import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {
  GoogleMap,
  GoogleMaps,
  GoogleMapsEvent,
  LatLng,
  MarkerOptions,
  CameraPosition,
  Marker
} from '@ionic-native/google-maps';

declare var google;


@IonicPage()
@Component({
  selector: 'page-vol-start-screen',
  templateUrl: 'vol-start-screen.html',
})
export class VolStartScreenPage {

  @ViewChild('map') mapContainer: any;
  map: any;
  infoWindows: any;

  constructor(public navCtrl: NavController, private http: Http, public geolocation: Geolocation) {
    this.infoWindows = [];
  }

  ionViewWillEnter() {
    this.displayGoogleMap();
    const markers = function () {
      this.getMarkers();
    }

    setTimeout(markers.bind(this), 3000);

  }


  displayGoogleMap() {

 

    this.geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(39.749391, -75.561390);
      //let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

    }).catch((error) => {
      console.log('Error getting location', error);
    });



  }

  getMarkers() {

    this.http.get('../../assets/data/markers.json')
      .map((res) => res.json())

      .subscribe(data => {
        this.addMarkersToMap(data);
      });

  }


  markerInfo(marker) {
    var infoWindowContent = '<div id="restaurnaMapDiv"><h1 id="header" class="header">' + marker.title + '</h1></div>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      this.closeAllInfoWindows();
      infoWindow.open(this.map, marker);
    });
    this.infoWindows.push(infoWindow);
  }



  addMarkersToMap(markers) {
    for (let marker of markers) {
      var position = new google.maps.LatLng(marker.latitude, marker.longitude);
      var restaurantMarkerClick = new google.maps.Marker({
        position: position,
        title: marker.name,
        animation: google.maps.Animation.DROP
      });
      restaurantMarkerClick.setMap(this.map);
      this.markerInfo(restaurantMarkerClick);
    }
  }

  closeAllInfoWindows() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }
}