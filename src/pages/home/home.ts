import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, LoadingController, NavParams, AlertController} from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { SignupTypePage } from '../signup-type/signup-type';
import { AuthService } from '../../app/services/auth-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
@IonicPage({
})

export class HomePage {
loading: Loading;
registerCredentials = {email: '', password: ''};

constructor(private navCtrl: NavController, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController){}

ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public createAccount(){
      this.navCtrl.push(SignupPage);
  }

  public login() {
    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {
        this.navCtrl.setRoot(SignupTypePage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }

  showLoading() {
      this.loading = this.loadingCtrl.create({
        content: 'Please wait...',
        dismissOnPageChange: true
      });
      this.loading.present();
    }

    showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
