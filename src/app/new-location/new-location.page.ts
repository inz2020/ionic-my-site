import { Component, OnInit } from '@angular/core';
import {Place} from "../model/place.model";
import {Geolocation} from "@ionic-native/geolocation/ngx";
import {LocationService} from "../services/location.service";

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {

  constructor(private geolocation:Geolocation, private locationService:LocationService) { }

  ngOnInit() {
  }

  onAddLocation(data:Place) {

    data.timestamp=new Date().getTime();
    data.photos=[];

//Obtenir les coord de l'appareil
    this.geolocation.getCurrentPosition().then(
      (response)=>{
        data.coordinates={
          latitude:response.coords.latitude,
          longitude:response.coords.longitude}
          //ajout des données après récuperation
        this.locationService.addLocation(data);
      }).catch(
      (error)=>{
        console.log('Error getting location: '+ error);
      }
    );
    console.log(data);

  }
}
