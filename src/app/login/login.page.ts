import { Component, OnInit } from '@angular/core';
import {AuthenService} from "../services/authen.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

//private user=(username:'', password:'')
  constructor(private authenService:AuthenService, private router:Router) {

  }

  ngOnInit() {
   /* this.authenService.loadToken();
    // @ts-ignore
    if(this.authenService.saveToken()){
      this.router.navigateByUrl('/menu/home')
    }*/
  }

  onLogin(f) {
    console.log(f);
    let res=this.authenService.login(f.username, f.password);

    if(res==true){
      this.router.navigateByUrl('menu/home');
    }
    else{
      this.router.navigateByUrl('login');
    }


  }
}
