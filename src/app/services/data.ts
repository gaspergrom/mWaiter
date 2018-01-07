import {EventEmitter} from "@angular/core";

export class DataService {
    tables: any = [];
    food: any =[];
    public tablesEmit=new EventEmitter();
    public foodEmit=new EventEmitter();


    public init(){
        this.tables=[
            {id: 1, name: "terasa 1"},
            {id: 2, name: "terasa 2"},
            {id: 3, name: "terasa 3"},
            {id: 4, name: "notranje 1"},
            {id: 5, name: "notranje 2"},
            {id: 6, name: "notranje 3"},
        ];
        this.tablesEmit.emit(this.tables);
        this.food=[
            {id: 1, name: "banana"},
            {id: 2, name: "apple"},
            {id: 3, name: "kiwi"},
            {id: 4, name: "anananas"},
            {id: 5, name: "peach"},
        ];
        this.foodEmit.emit(this.food);
    }
    public getFood(){
        return this.food;
    }
}