import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {
  public isAuthen:boolean;
  public token:string;
 public secret = "0987654321nbvcxw"

  constructor() { }

  public login(username:string, password:string){
    if(username=="issakzei" && password=="1234Z"){
      this.isAuthen=true;
      this.saveToken();
    }
    else{
      this.isAuthen=false;
    }

    return this.isAuthen;
  }

  public saveToken(){
   this.token=this.secret;
    localStorage.setItem("myToken", this.token);
  }

  public loadToken(){
    this.token= localStorage.getItem("myToken");
    if(this.token==this.secret){
      this.isAuthen=true;
    }
    else{
      this.isAuthen=false;
    }
    return this.isAuthen;

  }

  logout(){
   localStorage.removeItem('myToken');
  }
}
