/*
Ryan Jameson
Midterm
COMP3025-W2017
Typescript File
*/
import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  listItems: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    af: AngularFire, public actionSheetCtrl: ActionSheetController) {
    this.listItems = af.database.list('/shoppingList');
  }
minusItem(itemId, itemCount){
      if(itemCount >= 1){
        //itemCount = itemCount - 1;
      this.listItems.update(itemId, {
        itemCount: itemCount -1
      });
    }
    if(itemCount <= 0){
      this.listItems.update(itemId, {
        itemCount: 0
      });
    }
  }

  addItem(itemId, itemCount){
      this.listItems.update(itemId, {
        itemCount: itemCount + 1
      });
  }  
}
