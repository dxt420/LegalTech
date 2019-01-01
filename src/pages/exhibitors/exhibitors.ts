import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ExhibitorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exhibitors',
  templateUrl: 'exhibitors.html',
})
export class ExhibitorsPage {

  exhibitors: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.exhibitors = navParams.get('exhibitors');

   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExhibitorsPage');
  }

}
