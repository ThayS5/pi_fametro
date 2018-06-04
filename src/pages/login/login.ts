import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FARRAPPPage } from '../f-arrapp/f-arrapp';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }

  login(){
  	this.navCtrl.setRoot(FARRAPPPage);
  }
  
}
