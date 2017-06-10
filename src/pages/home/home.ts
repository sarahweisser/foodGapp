import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, NavParams, AlertController} from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SignupTypePage } from '../signup-type/signup-type';
import { AuthServiceProvider } from '../../app/services/auth-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage({
})

export class HomePage {
signupPage: SignupPage;
signupTypePage: SignupTypePage;
loading: Loading;
registerCredentials = {email: '', password: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider,
  private alertCtrl: AlertController, private loadingCtrl: LoadingController){}

  public createAccount(){
      this.navCtrl.push(SignupPage);
  }

  public login(){
    this.showLoading();
    this.auth.login(this.registerCredentials).subscribe(allowed => {
        if(allowed){
          this.navCtrl.setRoot(SignupTypePage);
        }else {
        this.showError("Access Denied");
        }
    },
    error =>{
      this.showError(error);
    });
  }

  showLoading(){
    this.loading = this.loadingCtrl.create({
      content: 'Please wait..',
      dismissOnPageChange: true
    })
  }

  showError(text){
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
