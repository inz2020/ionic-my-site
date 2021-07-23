import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MeteoService {


  constructor(private httpClient:HttpClient) { }

  public  getMeteoData(city:string){
    return this.httpClient.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=9fe02be3bc2bb2dbfecb2a0d776d96e1");

  }


}
