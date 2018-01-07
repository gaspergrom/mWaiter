import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DataService} from "../../app/services/data";
import {TablePage} from "../table/table";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage implements OnInit {
    tables=[];
    search = "";

    ngOnInit(): void {
        this.data.init();
    }

    constructor(public navCtrl: NavController, private data: DataService) {
        let self=this;
        this.data.tablesEmit.subscribe(
            res=> {
                self.tables=res;
            }
        )
    }
    
    find(id, name){
        this.navCtrl.push(TablePage, {id, name});
    }
}
