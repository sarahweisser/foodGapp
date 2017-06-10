import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
//import { UserService } from ./user.service

@Injectable()
export class PickupService {

  data:any;

  constructor(private http: Http) {
    this.http = http;
    this.data = null;
  }

  retrieveData() {
    this.http.get('../../assets/data/pickups.json')
    .subscribe(data => {
      this.data = data;
    });
  }

  getPickupsForVolunteer(location: Location) {
    let self = this;
    let pickups = [];
    for(let i = 0; i < this.data.length; i++) {
      //condition for location being nearby: if yes then
    }
    return null;
  }

  getPickupByPickupid(pickupid: number) {

    return null;
  }

  getPickupByUserid(userid: number) {
    return null;
  }

  getPickupByDonorid(donorid: number) {
    return null;
  }

  getPickupByDestinationid(destinationid: number) {
    return null;
  }

}
