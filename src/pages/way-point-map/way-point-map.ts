import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { WaypointMap2Page } from '../waypoint-map2/waypoint-map2';
import { MapComponent } from '../../components/map/map.component';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { PickupService } from '../../app/services/pickup.service';

declare var google: any;

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
              private mapComponent: MapComponent, 
              private pickupService: PickupService) {
  }

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
    this.navCtrl.push(WaypointMap2Page)
    this.navigate('Philadelphia, PA', 'Baltimore, MD');
     
  }

  pickupConfirmed() {
    //TODO: update pickup object to indicate the pickup was successfully made

    // navigate to dropoff location
    this.navigate('Wilmington, DE', 'Philadelphia, PA')
  }

  ionViewDidLoad() {
    this.mapComponent;
    
    navigator.geolocation.getCurrentPosition((position) => {

      let pickups = this.pickupService.retrieveData((data) => {
            console.log("PICKUPS")
      console.log(data);
      });
  
    })
  }
}
