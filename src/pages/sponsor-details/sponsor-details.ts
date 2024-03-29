import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SponsorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsor-details',
  templateUrl: 'sponsor-details.html',
})
export class SponsorDetailsPage {

  xx;
  company;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.xx = navParams.get('speaker');
    this.company = navParams.get('company');
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorDetailsPage');
  }

}
