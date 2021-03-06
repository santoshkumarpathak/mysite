import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import {ContactusComponent} from './contactus/contactus.component';
import {HowtoapplyComponent} from './howtoapply/howtoapply.component';
import {PhotogalleryComponent} from './photogallery/photogallery.component';
import {HomeComponent} from './home/home.component'
import { CommiteComponent } from './commite/commite.component';
import { LoginComponent } from './login/login.component';
import {EventComponent} from './event/event.component';
import { DownloadComponent } from './download/download.component';
const routes: Routes = [
  {
    path:"home", component:HomeComponent
  },
  {
    path:'about', component:AboutComponent 
  },
  {
    path:'contactus', component:ContactusComponent
  },
  {
    path: 'howtoapply', component:HowtoapplyComponent
  },
  {
    path: 'photogallery', component:PhotogalleryComponent

  },
  {
    path: 'commite', component:CommiteComponent

  },
  {
    path: 'login', component:LoginComponent

  },
  {
    path: 'event', component:EventComponent

  },
  {
    path: 'download', component:DownloadComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
