import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FARRAPPPage } from '../pages/f-arrapp/f-arrapp';
import { CartPage } from '../pages/cart/cart';
import { LoginPage } from '../pages/login/login';
import { MeuPerfilPage } from '../pages/meu-perfil/meu-perfil';
import { CloudPage } from '../pages/cloud/cloud';
import { JorgeEMateusNicoPage } from '../pages/jorge-emateus-nico/jorge-emateus-nico';


// import { MenuPage } from '../pages/menu/menu';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, alertCtrl: AlertController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let alert = alertCtrl.create({});
    });
  }
  goToFARRAPP(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FARRAPPPage);
  }goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MeuPerfilPage);
  }goToCard(params){
    if (!params) params = {};
    this.navCtrl.setRoot(JorgeEMateusNicoPage);
  }

  goLogout(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }

}
