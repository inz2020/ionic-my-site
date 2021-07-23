import { Component, OnInit } from '@angular/core';
import {LocationService} from "../services/location.service";
import {Place} from "../model/place.model";
import {Router} from "@angular/router";
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  private locations:Array<Place>;
  constructor(private locationService:LocationService,
              private router:Router, private storage:Storage) { }

  ngOnInit() {}

  //permet de rechercher à chaque fois les données
  ionViewWillEnter(){
    this.locationService.getLocation().then(
      data=>{
        this.locations=data;
      });

  }

  onNewLocation() {
    this.router.navigateByUrl("/menu/new-location");

  }
}
