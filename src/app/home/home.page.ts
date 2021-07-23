import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact={
    name:"ENSAF",
    email:"zeinabou.issaka-nouhou@usmba.ac.ma",
    logo:"assets/images/logoEnsaf.jpg",
    tel: "+212681139936",
    location:"assets/images/portait2.jpg"
  };


  constructor(private storage:Storage) {}

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }

}
