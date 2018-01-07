import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {FoodPage} from "../pages/food/food";
import {TablePage} from "../pages/table/table";
import {DataService} from "./services/data";
import {TablesPipe} from "./pipes/tables";
import {DetailsPage} from "../pages/details/details";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        FoodPage,
        TablePage,
        DetailsPage,
        TablesPipe
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        FoodPage,
        TablePage,
        DetailsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        DataService,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
