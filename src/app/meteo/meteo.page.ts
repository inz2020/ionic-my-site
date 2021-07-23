import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MeteoService} from "../services/meteo.service";
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  public city:string;
  private dataMeteo;

  constructor(private meteoService:MeteoService) { }

  ngOnInit() {
  }
  onLoadMeteo(){
    //La methode get retourne un objet de type observable
    this.meteoService.getMeteoData(this.city).subscribe(
        data=>{
          this.dataMeteo=data;
        },
        error => {
          console.log(error);}
          );


  }

}
