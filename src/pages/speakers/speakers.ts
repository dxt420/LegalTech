import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-speakers',
  templateUrl: 'speakers.html',
})
export class SpeakersPage {

  xx;
  speakers;
  companies;
  groupedSpeakers = [];



  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.xx = navParams.get('speakers');
  
    this.speakers = this.xx.map(a => a.name);
    this.companies = this.xx.map(a => a.company);

    console.log(this.companies);

    // let sortable = [];
    // for(var a in this.xx){
    //   sortable.push([a, this.xx[a]]);
    // }

    // sortable.sort(function(a,b){
    //   return a[1] - b[1];
    // });


    // console.log(sortable);
    this.groupSpeakers(this.speakers);

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakersPage');
  }

}
