import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExhibitorsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exhibitors-details',
  templateUrl: 'exhibitors-details.html',
})
export class ExhibitorsDetailsPage {

  xx;
  company;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.xx = navParams.get('exhibitor');
    this.company = navParams.get('company');
    console.log(this.xx);
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExhibitorsDetailsPage');
  }

}
