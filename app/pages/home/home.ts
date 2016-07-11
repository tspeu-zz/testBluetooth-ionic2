import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {BluethoothComponentPage} from '../bluethooth-component/bluethooth-component';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(private navController: NavController) {

  }

  gotoBlue(){
  	this.navController.push(BluethoothComponentPage);

  }
}
