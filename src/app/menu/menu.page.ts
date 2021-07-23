import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenService} from "../services/authen.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public menus=[
    {title:"Acceuil", url:"/menu/home", icon: 'home-outline'},
    {title:"Galerie", url:"/menu/gallery", icon: 'images-outline'},
    {title:"Meteo", url:"/menu/meteo", icon: 'thunderstorm-outline'},
    {title:"Locations", url:"/menu/locations", icon: 'location-outline'},
    {title:"Déconnexion", url:"logout", icon: 'log-out-outline'},
  ]
  constructor(private router:Router, private authenService:AuthenService) { }

  ngOnInit() {
  }

  onMenuItem(m) {
    if(m.url=='logout'){
      this.authenService.logout();
      this.router.navigateByUrl('/login');

    }
    else{
      this.router.navigateByUrl(m.url);

    }

  }
}
