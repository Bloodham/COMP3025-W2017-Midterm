import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
    apiKey: "AIzaSyBhUmW7SLFM-T3wmZc5CxnefgGcpIU3lLk",
    authDomain: "midterm-ryanjameson.firebaseapp.com",
    databaseURL: "https://midterm-ryanjameson.firebaseio.com",
    storageBucket: "midterm-ryanjameson.appspot.com",
    messagingSenderId: "328313388229"
  };
  
@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
