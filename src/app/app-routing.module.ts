import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: '', redirectTo: 'menu', pathMatch: 'full'},
  {
    path: 'menu', loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  /*{
    path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then( m => m.GalleryPageModule)
  },

  {
    path: 'locations', loadChildren: () => import('./locations/locations.module').then( m => m.LocationsPageModule)
  },
  {
    path: 'new-location',
    loadChildren: () => import('./new-location/new-location.module').then( m => m.NewLocationPageModule)
  }*/

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
