import {Component, OnInit} from '@angular/core';
import {DataService} from "../../app/services/data";
import {PopoverController} from "ionic-angular";
import {DetailsPage} from "../details/details";


@Component({
    selector: 'page-food',
    templateUrl: 'food.html',
})
export class FoodPage implements OnInit {

    foods = [];
    search ="";

    ngOnInit(): void {
        this.foods=this.data.getFood()
    }

    constructor(private data: DataService, private popoverCtrl: PopoverController) {
        let self=this;
        this.data.foodEmit.subscribe(
            res => {
                self.foods=res;
            }
        )
    }
    select(id, name){
        const popover = this.popoverCtrl.create(DetailsPage, {
            id,
            name
        });
        popover.present();
    }
}
