import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {IonicModule, IonicRouteStrategy, Platform} from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from "@angular/forms";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";
import {StatusBar} from "@ionic-native/status-bar/ngx";
import {HttpClientModule} from "@angular/common/http";

import {IonicStorageModule} from '@ionic/storage-angular';
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {Camera} from "@ionic-native/camera/ngx";
import {LocationService } from './services/location.service';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    FormsModule,HttpClientModule,
   IonicStorageModule.forRoot({
      name: 'myLocation',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),

  ],
  providers: [
    {provide: Geolocation},
    LocationService,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: StatusBar},
    { provide: SplashScreen},
    { provide: Platform}],
  bootstrap: [AppComponent],

})
export class AppModule {}
