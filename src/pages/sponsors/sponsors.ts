import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';

/**
 * Generated class for the SponsorsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html',
})
export class SponsorsPage {

  item: any;
  company;
  platinum;
  gold;
  silver;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.get('item');
    this.platinum = navParams.get('platinum');
    this.gold = navParams.get('gold');
    this.silver = navParams.get('silver');
    // console.log( this.xx );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SponsorsPage');
  }


  getCompanyP(a: string){
    let aa = this.platinum.find(i => i.name === a);
    this.company = aa.info.toString();
   
  }

  getCompanyG(a: string){
    let aa = this.gold.find(i => i.name === a);
    this.company = aa.info.toString();
   
  }

  getCompanyS(a: string){
    let aa = this.silver.find(i => i.name === a);
    this.company = aa.info.toString();
   
  }

  openItem(item: Item,page: string) {
    this.navCtrl.push(page.toString(), {
      speaker: item,
      company: this.company
    });

    console.log(item);
    console.log(this.company);
  }
}
