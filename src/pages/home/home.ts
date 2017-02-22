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
minusItemCount(itemId, itemCount){
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

addItemCount(itemId, itemCount){
      this.listItems.update(itemId, {
        itemCount: itemCount + 1
      });
  }

   addItem(){    
    let prompt = this.alertCtrl.create({
    title: 'Shopping List Item',
    message: "Add a new item.",
    inputs: [
      {
        name: 'item',
        placeholder: 'Item'
      },
      {
        name: 'itemCount',
        placeholder: `0`
      }
    ],
    buttons: [
       {
         text: 'Cancel',
         handler: data => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Save',
         handler: data => {
           this.listItems.push({
             item: data.item,
             itemCount: parseInt(data.itemCount)
           });
         }
       }
     ]
   });
   prompt.present();
  }  
}
