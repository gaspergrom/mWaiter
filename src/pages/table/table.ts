import { Component } from '@angular/core';
import {NavParams} from "ionic-angular";

@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {
  data;
  constructor(public navParms: NavParams){
    this.data=navParms.data;
    console.log(navParms.data);
  }
}
