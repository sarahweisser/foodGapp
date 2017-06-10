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
  name: string;
  email: string;

  constructor(name: string, email: string){
    this.name = name;
    this.email = email;
  }
}


@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  public login(credentials){
    if(credentials.email === null || credentials.password === null){
      return Observable.throw("Not going to login myself");
    }
     else
     {
       return Observable.create(observer => { //make a request to backend to make real time check
         let access = (credentials.password === "radiojulius" && credentials.email ==="foodGapp@zipcode.com");
         this.currentUser = new User("Paco", "pacalps23@frontier.com");
         observer.next(access);
         observer.complete();
       });
     }
  }

  public register(credentials)
  {
    if(credentials.email === null || credentials.password === null)
    {
      return Observable.throw("Not going to login in myself");
    }
    else
    {
      return Observable.create(observer => {//store credentials to backend
        observer.next(true);
        observer.complete();
      })
    }
  }

  public getUserInfo(): User{
    return this.currentUser;
  }

  public logout(){
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

}
