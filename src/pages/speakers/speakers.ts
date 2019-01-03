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
  groupedSpeakers2 = [];
  item;
  details = [];
  company;

  searchTerm: string = '';
  searchItems: any;

  private isOn: boolean = false;
  private isOn2: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    

    this.xx = navParams.get('speakers');
    this.item = navParams.get('item');

    this.speakers = this.xx.map(a => a.name);
    

    console.log(this.xx);

    this.groupSpeakers(this.speakers);

    // this.setFilteredItems();

  }


  
  
  setFilteredItems() {
    
    this.searchItems = this.filterItems(this.searchTerm);
    console.log( "set filter");
    let x = this.speakers = this.xx.map(a => a.name);
    this.groupSpeakers2(x);

}

  
  filterItems(searchTerm){
    this.isOn2 = !false;
    console.log( "filter items");
    if (searchTerm.length<1) {
      this.isOn2 = false;
      // console.log( "buddah items");
    }
    return this.xx.filter((item) => {
        return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });    

}
  getCompany(a: string){
    let aa = this.xx.find(i => i.name === a);
    console.log(aa);
    return aa.company;
  }

  getPic(a: string){
    let aa = this.xx.find(i => i.name === a);
    console.log(aa);
    return aa.profilePic;
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

  toggleSearch(){
    this.isOn = !this.isOn;
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
        // this.groupedSpeakers = [];

        currentSpeakers.push(value);
    });
  }

  groupSpeakers2(speakers){
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
            this.groupedSpeakers2.push(newGroup);


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
