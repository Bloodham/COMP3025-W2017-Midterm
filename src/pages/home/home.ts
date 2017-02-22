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
    this.listItems = af.database.list('/');
  }

}
