import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';

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

  exhibitors;
  company;

  xx;
  pic;

  groupedExhibitors = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.xx = navParams.get('exhibitors');

   
    this.exhibitors = this.xx.map(a => a.name);
    

    console.log(this.xx);

    this.groupExhibitors(this.exhibitors);
  }

  getCompany(a: string){
    let aa = this.xx.find(i => i.name === a);
    //console.log(aa.company);
    return aa.company;
  }

  getCompany2(a: string){
    let aa = this.xx.find(i => i.name === a);
    this.company = aa.company.toString();
   
  }
  
  groupExhibitors(exhibitors){
    let sortedExhibitors = exhibitors.sort();
    let currentLetter = false;
    let currentExhibitors = [];

    // console.log(sortedExhibitors);

    sortedExhibitors.forEach((value, index) => {
        if (value.charAt(0) != currentLetter) {
            currentLetter = value.charAt(0);
            
            let newGroup = {
              letter: currentLetter,
              exhibitors: []
            };

            currentExhibitors = newGroup.exhibitors;
            this.groupedExhibitors.push(newGroup);


        }

        currentExhibitors.push(value);
    });
  }


  getPic(a: string){
    let aa = this.xx.find(i => i.name === a);
    console.log(aa);
    return aa.profilePic;
  }
  getPic2(a: string){
    let aa = this.xx.find(i => i.name === a);
    this.pic = aa.profilePic.toString();
  }


  openItem(item: Item,page: string) {
    this.navCtrl.push(page.toString(), {
      exhibitor: item,
      company: this.company,
      pic:this.pic
    });

    console.log(item);
    console.log(this.company);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExhibitorsPage');
  }

}
