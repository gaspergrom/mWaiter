import { Component } from '@angular/core';
import {NavParams} from "ionic-angular";


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  data;
  constructor(private navParams: NavParams){
    this.data=this.navParams.data;
  }
}
