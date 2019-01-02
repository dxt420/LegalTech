import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  maps;
  xx;
  groupedMaps = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.xx = navParams.get('maps');
    this.maps = this.xx.map(a => a.name);
    console.log(this.xx);

    this.groupMaps(this.maps);
  }




  groupMaps(maps){
    let sortedMaps = maps.sort();
    let currentLetter = false;
    let currentMaps = [];

    // console.log(sortedMaps);

    sortedMaps.forEach((value, index) => {
        if (value.charAt(0) != currentLetter) {
            currentLetter = value.charAt(0);
            
            let newGroup = {
              letter: currentLetter,
              maps: []
            };

            currentMaps = newGroup.maps;
            this.groupedMaps.push(newGroup);


        }

        currentMaps.push(value);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapsPage');
  }

}
