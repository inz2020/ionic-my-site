import {NgModule, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import {RouterModule, Routes} from "@angular/router";
import {GalleryPageModule} from "../gallery/gallery.module";
import {LocationsPageModule} from "../locations/locations.module";

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {path: 'home',  loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
      {path: 'meteo', loadChildren: () => import('../meteo/meteo.module').then( m => m.MeteoPageModule)},
      {path: 'gallery', loadChildren: ()=>import('../gallery/gallery.module').then(m=>GalleryPageModule)},
      {path: 'locations', loadChildren: ()=>import('../locations/locations.module').then(m=>LocationsPageModule)},
      {path: 'new-location', loadChildren: () => import('../new-location/new-location.module').then( m => m.NewLocationPageModule)}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
 [RouterModule.forChild(routes)],
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {



}
