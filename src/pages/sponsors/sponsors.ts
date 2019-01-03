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


  picG;
  picP;
  picS;
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



  getPicP(a: string){
    let aa = this.platinum.find(i => i.name === a);
    console.log(aa);
    return aa.profilePic;
  }
  getPicG(a: string){
    let aa = this.gold.find(i => i.name === a);
    console.log(aa);
    return aa.profilePic;
  }
  getPicS(a: string){
    let aa = this.silver.find(i => i.name === a);
    console.log(aa);
    return aa.profilePic;
  }
  getPic2P(a: string){
    let aa = this.platinum.find(i => i.name === a);
    this.picP = aa.profilePic.toString();
  }

  getPic2G(a: string){
    let aa = this.gold.find(i => i.name === a);
    this.picG = aa.profilePic.toString();
  }

  getPic2S(a: string){
    let aa = this.silver.find(i => i.name === a);
    this.picS = aa.profilePic.toString();
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
      company: this.company,
      picG: this.picG,
      picP: this.picP,
      picS: this.picS
    });

    console.log(item);
    console.log(this.company);
  }
}
