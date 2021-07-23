import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {SplashScreen} from "@ionic-native/splash-screen/ngx";

import {StatusBar} from "@ionic-native/status-bar/ngx";
import {AuthenService} from "./services/authen.service";
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    private plateform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router:Router,
    private authenService:AuthenService,
    private  storage:Storage)
  {
    this.initializeApp();

  }

  async ngOnInit(){
    await this.storage.create();

  }
    initializeApp(){
      this.plateform.ready().then(()=>{
       this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.login();
    });
    }
    private login(){
    let authen= this.authenService.loadToken();
    if(authen){
      this.router.navigateByUrl('/menu/home');
    }
    else{this.router.navigateByUrl('/login');}


    }
}
