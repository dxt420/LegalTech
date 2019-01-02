import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from '../../models/item';



@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

  xx;
  speakers;
  groupedSpeakers = [];
  item;
  details = [];
  company;



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.xx = navParams.get('speakers');
    this.item = navParams.get('item');

    this.speakers = this.xx.map(a => a.name);
    

    console.log(this.xx);

    this.groupSpeakers(this.speakers);

  }


  getCompany(a: string){
    let aa = this.xx.find(i => i.name === a);
    console.log(aa);
    return aa.company;
  }

  getCompany2(a: string){
    let aa = this.xx.find(i => i.name === a);
    this.company = aa.company.toString();
   
  }

  getDetails(a: string){
    let aa = this.xx.find(i => i.name === a);
    console.log(aa);
    this.details = aa;
  }
  groupSpeakers(speakers){
    let sortedSpeakers = speakers.sort();
    let currentLetter = false;
    let currentSpeakers = [];

    // console.log(sortedSpeakers);

    sortedSpeakers.forEach((value, index) => {
        if (value.charAt(0) != currentLetter) {
            currentLetter = value.charAt(0);
            
            let newGroup = {
              letter: currentLetter,
              speakers: []
            };

            currentSpeakers = newGroup.speakers;
            this.groupedSpeakers.push(newGroup);


        }

        currentSpeakers.push(value);
    });
  }


  openItem(item: Item,page: string) {
    this.navCtrl.push(page.toString(), {
      speaker: item,
      company: this.company
    });

    console.log(item);
    console.log(this.company);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakersPage');
  }

}
