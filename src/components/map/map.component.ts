import { Component, ElementRef, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { LoadingController } from 'ionic-angular';

declare var google: any;

@Component({
    selector: 'map-component',
    template: '<div #map id="map"></div>',
})
export class MapComponent {

  @ViewChild('map') mapElement: ElementRef;
  zoom: number = 13;
  loader: any;
  map: any;
  wp: any;

  @Input('destination') destination: Object;
  @Input('waypoint') waypoint: Object;
  @Input('s') s: string;

  constructor(public loadingCtrl: LoadingController) {
 
  }

  printSomething() {
      console.log("Somethinf at least")
      console.log(this.destination);
  }

  getLoader() {
    let loader = this.loadingCtrl.create({
      content: "Loading. . ."
    });
    return loader;
  }

  loadMap() {
      //console.log("Map loading")
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log("POsition")
           console.log(position)
           console.log(new google.maps.LatLng)

               console.log("MAP ELEMENR")
console.log(this.mapElement)
           
        let currentPosition = new google.maps.LatLng(
            position.coords.latitude, position.coords.longitude);

        let mapOptions = {
        center: currentPosition,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    

        var icons = {
        start: new google.maps.MarkerImage(
        // URL
        'start.png',
        // (width,height)
        new google.maps.Size( 44, 32 ),
        // The origin point (x,y)
        new google.maps.Point( 0, 0 ),
        // The anchor point (x,y)
        new google.maps.Point( 22, 32 )
        ),
        end: new google.maps.MarkerImage(
        // URL
        'end.png',
        // (width,height)
        new google.maps.Size( 44, 32 ),
        // The origin point (x,y)
        new google.maps.Point( 0, 0 ),
        // The anchor point (x,y)
        new google.maps.Point( 22, 32 )
      )
    };

      let directionsService = new google.maps.DirectionsService;
      let directionsDisplay = new google.maps.DirectionsRenderer({
        suppressMarkers: true
      });

      directionsDisplay.setMap(this.map);
      //directionsDisplay.setPanel(this.directionsPanel.nativeElement);

      directionsService.route({
        origin: currentPosition,
        destination: this.destination,
        waypoints: [{
          location: this.waypoint,
          stopover: true
        }],
        travelMode: google.maps.TravelMode['DRIVING']
      }, (res, status) => {
          
          if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(res);
            this.makeMarker(currentPosition, 'You are here')
            this.makeMarker(this.destination, 'Pickup Location')
            this.makeMarker(this.waypoint, 'Dropoff Location')
            this.loader.dismiss();
          } else {
            console.warn(status);
          }
      })

        })
    }
  }

  makeMarker(position, title) {
    new google.maps.Marker({
      position: position,
      map: this.map,
      //icon: icon,
      title: title
    });
    }

  ngAfterViewInit() {
      console.log("THIS>WAYPOINT")
      console.log(this.waypoint);
    this.loader = this.getLoader();
    this.loader.present();
    this.loadMap();

    //this.loadMap();
  }
}