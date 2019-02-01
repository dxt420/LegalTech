import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireDatabaseModule, AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs-compat';
// import { map } from 'rxjs-compat/operators';
import { GoldSponsor } from '../../models/sponsorGold';
import { DataProvider } from '../../providers/data/data';

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


  sponsors:Observable<GoldSponsor[]>;
  // sponsorsListRef: AngularFireList<GoldSponsor>;

  item: any;
  company;
  platinum;
  gold;
  silver;


  picG;
  picP;
  picS;
  constructor(public navCtrl: NavController, public navParams: NavParams, private goldSponsorList: DataProvider) {
    // this.sponsors = afDatabase.list('sponsors/gold').valueChanges();
    this.item = navParams.get('item');
    this.platinum = navParams.get('platinum');
    // this.gold = navParams.get('gold');
    // this.sponsors = afDatabase.list('/sponsors/gold').valueChanges();
    this.silver = navParams.get('silver');


    this.sponsors = this.goldSponsorList.getSponsorList()
      .snapshotChanges()
      .map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      });



    console.log( this.sponsors );
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
