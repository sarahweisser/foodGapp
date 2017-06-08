import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { Deeplinks } from '@ionic-native/deeplinks';
import 'rxjs/add/operator/map';

// import {
//   GoogleMap,
//   GoogleMaps,
//   GoogleMapsEvent,
//   LatLng,
//   MarkerOptions,
//   CameraPosition,
//   Marker
// } from '@ionic-native/google-maps';

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
  // position:any;

  constructor(public navCtrl: NavController,
    private http: Http,
    public geolocation: Geolocation,
    private deeplinks: Deeplinks) {
    this.infoWindows = [];
  }

  ionViewWillEnter() {
    this.displayGoogleMap();
  }


  displayGoogleMap() {



    this.geolocation.getCurrentPosition().then(position => {

      // let zipCode = new google.maps.LatLng(39.749391, -75.561390);
      let home = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);


      // console.log(latLng);
      // console.log(home);
      // console.log("above");
      let mapOptions = {
        center: home,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

      this.myMarker(home);
      const markers = function () {
        this.getMarkers();
      }

      setTimeout(markers.bind(this), 3000);

    }).catch((error) => {
      console.log('Error getting location', error);
    });




this.deeplinks.routeWithNavController(this.navCtrl, {
  '/home': HomePage
}).subscribe((match) => {
    // match.$route - the route we matched, which is the matched entry from the arguments to route()
    // match.$args - the args passed in the link
    // match.$link - the full link data
    console.log('Successfully matched route', match);
  }, (nomatch) => {
    // nomatch.$link - the full link data
    console.error('Got a deeplink that didn\'t match', nomatch);
  });




  }
  myMarker(position) {
    //var position = new google.maps.LatLng(marker.latitude, marker.longitude);
    var currentPositionIcon = new google.maps.Marker({
      position: position,
      icon: new google.maps.MarkerImage('//maps.gstatic.com/mapfiles/mobile/mobileimgs2.png',
        new google.maps.Size(22, 22),
        new google.maps.Point(0, 18),
        new google.maps.Point(11, 11))
    });
    currentPositionIcon.setMap(this.map);

  }

  getMarkers() {
    this.http.get('../../assets/data/markers.json')
      .map((res) => res.json())
      .subscribe(data => {
        this.addMarkersToMap(data);
      });

  }


  markerInfo(marker) {

    var infoWindowContent = '<div id="restaurantMapDiv"><h1 id="header" class="header">' + marker.title + '</h1></div>' +
      '<a href="https://www.google.com">Hello</a><button ion-button round>Click me </button>';
    var infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });
    marker.addListener('click', () => {
      this.navCtrl.push('HomePage')
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