import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "LegalTech Conference'19",
        "profilePic": "assets/img/event/ban.png",
        "about": "Sept 16 - 20, 2018",
        "extra" : {
          "sponsors":{"platinum":[{"name":"Simpler Systems","info":"Simpler Systems"}],
                      "gold":[{"name":"IBM","info":"IBM Business"}],
                      "silver":[{"name":"Wano","info":"Sumarai"},
                                {"name":"Whole Cake","info":"Anha"},
                                {"name":"Dress","info":"High Speed"},
                                {"name":"Pinky","info":"Scheme"}],},
          "exhibitors":[{"name":"Wano","company":"Sumarai"},
                                {"name":"Whole Cake","company":"Anha"},
                                {"name":"Dress","company":"High Speed"},
                                {"name":"Pinky","company":"Scheme"}],
          "speakers":[{"name":"Ace San","company":"One Piece"},
                      {"name":"Buggy Sama","company":"New World"},
                      {"name":"Ben Beckman","company":"Red Haired"}],
          "schedule":[{"time":"09:00 - 10:00","title":"Welcome Remarks","speakers" : [{"name":"Dext Omona","info":"cool"},
                                                                          {"name":"Dext Omona","info":"cool"},
                                                                          {"name":"Dext Omona","info":"cool"},]},
                      {"time":"10:00 - 10:30","title":"Planning Phase","speakers" : [{"name":"Dext Omona","info":"cool"},
                                                                          {"name":"Dext Omona","info":"cool"},
                                                                          {"name":"Dext Omona","info":"cool"},]},
                      {"time":"10:30 - 13:00","title":"Guests Speeches","speakers" : [{"name":"Dext Omona","info":"cool"},
                                                                          {"name":"Dext Omona","info":"cool"},
                                                                          {"name":"Dext Omona","info":"cool"},]}],
          "attendees":[{"name":"Ace San","company":"One Piece"},
                      {"name":"Buggy Sama","company":"New World"},
                      {"name":"Ben Beckman","company":"Red Haired"}],
          "about":[{"name":"Meeting Attire","info":"exex"},
                    {"name":"Mt Rubidoux Run","info":"exex"},
                    {"name":"Transportation & Travel","info":"exex"},
                    {"name":"Venue Information","info":"exex"}],
          "maps":[{"name":"Meeting Attire","info":"exex"},
                    {"name":"Mt Rubidoux Run","info":"exex"},
                    {"name":"Transportation & Travel","info":"exex"},
                    {"name":"Venue Information","info":"exex"}],
          "social":[{"facebook":"xx","twitter":"exex","linkedin":"exex"}],
        }
  };


  constructor() {
    let items = [
      {
        "name": "LegalTech Conference'19",
        "profilePic": "assets/img/event/ban.png",
        "about": "Sept 16 - 20, 2018",
        "extra" : {
          "sponsors":{"platinum":[{"name":"Simpler Systems","info":"Simpler Systems"}],
                      "gold":[{"name":"IBM","info":"IBM Business"}],
                      "silver":[{"name":"Wano","info":"Sumarai"},
                                {"name":"Whole Cake","info":"Anha"},
                                {"name":"Dress","info":"High Speed"},
                                {"name":"Pinky","info":"Scheme"}],},
          "exhibitors":[{"name":"Wano","company":"Sumarai"},
                                {"name":"Whole Cake","company":"Anha"},
                                {"name":"Dress","company":"High Speed"},
                                {"name":"Pinky","company":"Scheme"}],
          "speakers":[{"name":"Ace San","company":"One Piece"},
                      {"name":"Buggy Sama","company":"New World"},
                      {"name":"Ben Beckman","company":"Red Haired"}],
          "schedule":[{"time":"09:00 - 10:00","title":"Welcome Remarks","speakers" : [{"name":"Dext Omona","info":"cool"},
                                                                                      {"name":"Dext Omona","info":"cool"},
                                                                                      {"name":"Dext Omona","info":"cool"},]},
                      {"time":"10:00 - 10:30","title":"Planning Phase","speakers" : [{"name":"Dext Omona","info":"cool"},
                                                                                      {"name":"Dext Omona","info":"cool"},
                                                                                      {"name":"Dext Omona","info":"cool"},]},
                      {"time":"10:30 - 13:00","title":"Guests Speeches","speakers" : [{"name":"Dext Omona","info":"cool"},
                                                                                      {"name":"Dext Omona","info":"cool"},
                                                                                      {"name":"Dext Omona","info":"cool"},]}],                      
          "attendees":[{"name":"Ace San","company":"One Piece"},
                      {"name":"Buggy Sama","company":"New World"},
                      {"name":"Ben Beckman","company":"Red Haired"}],
          "about":[{"name":"Meeting Attire","info":"exex"},
                    {"name":"Mt Rubidoux Run","info":"exex"},
                    {"name":"Transportation & Travel","info":"exex"},
                    {"name":"Venue Information","info":"exex"}],
          "maps":[{"name":"Meeting Attire","info":"exex"},
                    {"name":"Mt Rubidoux Run","info":"exex"},
                    {"name":"Transportation & Travel","info":"exex"},
                    {"name":"Venue Information","info":"exex"}],
          "social":[{"facebook":"xx","twitter":"exex","linkedin":"exex"}],
      }
      },
      // {
      //   "name": "Charlie Cheetah",
      //   "profilePic": "assets/img/speakers/cheetah.jpg",
      //   "about": "Charlie is a Cheetah."
      // },
      // {
      //   "name": "Donald Duck",
      //   "profilePic": "assets/img/speakers/duck.jpg",
      //   "about": "Donald is a Duck."
      // },
      // {
      //   "name": "Eva Eagle",
      //   "profilePic": "assets/img/speakers/eagle.jpg",
      //   "about": "Eva is an Eagle."
      // },
      // {
      //   "name": "Ellie Elephant",
      //   "profilePic": "assets/img/speakers/elephant.jpg",
      //   "about": "Ellie is an Elephant."
      // },
      // {
      //   "name": "Molly Mouse",
      //   "profilePic": "assets/img/speakers/mouse.jpg",
      //   "about": "Molly is a Mouse."
      // },
      // {
      //   "name": "Paul Puppy",
      //   "profilePic": "assets/img/speakers/puppy.jpg",
      //   "about": "Paul is a Puppy."
      // }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
