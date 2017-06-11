import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class DataService {
    data:any;
  constructor(private http: Http) {
    this.http = http;
    this.data = null;
  }

  retrieveData() {
    this.http.get('../../assets/data/markers.json')
    .subscribe(data => {
      this.data = data;
    });
  }

  getData() {
    return this.data;
  }
}
