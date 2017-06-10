import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
// import { Location } from '../../shared/location';
// import { SignupPage } from '../signup/signup';
import { MapComponent } from '../../components/map/map.component';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

//declare var google: any;
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
  //map: any;

  title: string = 'Pickup Details';
  buttonText: string = 'Accept';
  buttonHandler: Function = this.confirm;

  currentLocation: Object = new google.maps.LatLng(39.7472871, -75.54704149999999);
  pickupLocation: Object = new google.maps.LatLng(39.7472871, -75.4);
  dropOffLocation: Object = new google.maps.LatLng(39.77, -75.5570417);
  zoom: number = 13;
  loader: any;
  // lat: number;
  // lng: number;
  confirmed: boolean = false;
  payload: string = this.navParams.get('quantity');
  locationName: string = this.navParams.get('title');

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private launchNavigator: LaunchNavigator, 
              private mapComponent: MapComponent) {

  }

  // getPickupLocation() {
  //   this.pickupLocation = this.navParams.get('location');
  // }

  // getLoader() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Loading. . ."
  //   });
  //   return loader;
  // }

  navigate(start, end) {
    let options: LaunchNavigatorOptions = {
        start: start
    };
    
    this.launchNavigator.navigate(end, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }

  confirm() {
    // navigate from current location to pickup
    this.navigate('Philadelphia, PA', 'Baltimore, MD');
   
    
  }

  pickupConfirmed() {
    //TODO: update pickup object to indicate the pickup was successfully made

    // navigate to dropoff location
    this.navigate('Wilmington, DE', 'Philadelphia, PA')
  }

  // loadMap() {
  //   let LatLng = this.currentLocation;

  //   let mapOptions = {
  //     center: LatLng,
  //     zoom: 15,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   }

  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  // }

  // startNavigating() {
  //   var icons = {
  //     start: new google.maps.MarkerImage(
  //     // URL
  //     'start.png',
  //     // (width,height)
  //     new google.maps.Size( 44, 32 ),
  //     // The origin point (x,y)
  //     new google.maps.Point( 0, 0 ),
  //     // The anchor point (x,y)
  //     new google.maps.Point( 22, 32 )
  //     ),
  //     end: new google.maps.MarkerImage(
  //     // URL
  //     'end.png',
  //     // (width,height)
  //     new google.maps.Size( 44, 32 ),
  //     // The origin point (x,y)
  //     new google.maps.Point( 0, 0 ),
  //     // The anchor point (x,y)
  //     new google.maps.Point( 22, 32 )
  //     )
  //   };

  //     let directionsService = new google.maps.DirectionsService;
  //     let directionsDisplay = new google.maps.DirectionsRenderer({
  //       suppressMarkers: true
  //     });

  //     directionsDisplay.setMap(this.map);
  //     directionsDisplay.setPanel(this.directionsPanel.nativeElement);

  //     directionsService.route({
  //       origin: this.currentLocation,
  //       destination: this.dropOffLocation,
  //       waypoints: [{
  //         location: this.pickupLocation,
  //         stopover: true

  //       }],
  //       travelMode: google.maps.TravelMode['DRIVING']
  //     }, (res, status) => {
  //         if (status == google.maps.DirectionsStatus.OK) {
  //           directionsDisplay.setDirections(res);
  //           this.makeMarker(this.currentLocation, 'You are here')
  //           this.makeMarker(this.pickupLocation, 'Pickup Location')
  //           this.makeMarker(this.dropOffLocation, 'Dropoff Location')
  //           this.loader.dismiss();
  //         } else {
  //           console.warn(status);
  //         }
  //     })
  // }

  // makeMarker(position, title) {
  //   new google.maps.Marker({
  //     position: position,
  //     map: this.map,
  //     //icon: icon,
  //     title: title
  //   });
  //   }

  ionViewDidLoad() {
    //this.mapComponent.loadMap();
    this.mapComponent;
    //this.getPickupLocation();
    //this.loader = this.getLoader();
    //this.loader.present();
    //this.loadMap();
    //this.startNavigating();
  }
}
