import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export class User {
  fname: string;
  lname: string;
  email: string;
  phone: string;

  constructor(fname: string,lname: string, email: string) {
    this.fname = fname;
    this.lname = lname;
    this.email = email;
  }
}

@Injectable()
export class AuthService {
  currentUser: User;

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {//check backend


        let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Admin','Creator' ,'foodgapp@zipcode.com');
        observer.next(access);
        observer.complete();
      });
    }
  }
  public register(credentials)
  {
     if (credentials.email === null || credentials.password === null)
     {
       return Observable.throw("Please insert credentials");
     }
     else if(credentials.password !== credentials.password2)
     {
       return Observable.throw("Password doesn't match");
     }
     else
     {//ready for backend storage
       return Observable.create(observer => {
        observer.next(true);
        observer.complete();
       });
     }
   }

   public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
   return Observable.create(observer => {
     this.currentUser = null;
     observer.next(true);
     observer.complete();
   });
 }

}
