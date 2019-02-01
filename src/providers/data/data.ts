// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import { AngularFireDatabase } from 'angularfire2/database';
import { GoldSponsor } from '../../models/sponsorGold';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  // constructor(public http: HttpClient) {
  //   console.log('Hello DataProvider Provider');
  // }


  public sponsorsListRef = this.db.list<GoldSponsor>('sponsors/gold');


  constructor(private db: AngularFireDatabase) { }


  getSponsorList() {
    return this.sponsorsListRef;
}

}
