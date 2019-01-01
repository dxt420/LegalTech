import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers';
import { Item } from '../../models/item';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  private isOn: boolean = false;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    // this.item = navParams.get('item') || items.defaultItem;

    this.item = items.defaultItem;
  }

  // openItem(item: Item,page: string) {
  //   this.navCtrl.push(page.toString(), {
  //     item: this.item
  //   });
  // }

  toggleSearch(){
    this.isOn = !this.isOn;
  }

  openItem(item: Item,page: string) {
    this.navCtrl.push(page.toString(), {
      speakers: this.item.extra.speakers,
      exhibitors: this.item.extra.exhibitors,
      social: this.item.extra.social,
      about: this.item.extra.about,
      item: this.item,
    });
  }
  
}
