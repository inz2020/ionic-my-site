import { Injectable } from '@angular/core';
import {Place} from "../model/place.model";
import {Storage} from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locations:Array<Place>=[];
  private _storage: Storage | null = null;

  constructor(private storage:Storage) {
    this.locations.push(
      {title: "placeA",
      country:"France",
        city:"rouen",
      keywords:"rouen",
      selected:true,
      timestamp:2}
      );

    this.locations.push(
      {title: "placeB",
        country:"Maroc",
        city:"fes",
        keywords:"fes",
        selected:false,
        timestamp:2}
    );

    this.locations.push(
      {title: "placeC",
        country:"Niger",
        city:"niamey",
        keywords:"niamey",
        selected:true,
        timestamp:2}
    );
    this.init();
  }
  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this._storage?.set(key, value);
  }

  public getLocation(){
    return   this.storage.get("locations").then(
      data=>{
        this.locations=data!=null?data:[];
        return this.locations.slice();
      }
    );
    // return this.storage.get("locations").then(value => {this.locations=value;});
  }

  //Add location
  public addLocation(place:Place){
    this.locations.push(place);
    //enregistrer les données dans la BD myLocation
  this.storage.set("locations", this.locations);
  }
}
