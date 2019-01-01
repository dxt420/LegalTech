import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  pages: string = "pageA";

  swipeEvent($e) {
      console.log($e.deltaX+", "+$e.deltaY);
      if($e.deltaX > 0){
        console.log("Swipe from Left to Right");
        this.pages = "pageB";
      }else{
        console.log("Swipe from Right to Left");
        this.pages = "pageA";
      }
  }

}
