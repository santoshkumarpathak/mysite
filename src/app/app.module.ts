import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { HowtoapplyComponent } from './howtoapply/howtoapply.component';
import { HomeComponent } from './home/home.component';
import {Photoservice} from './photoservice.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CommiteComponent } from './commite/commite.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { DownloadComponent } from './download/download.component'
@NgModule({
  declarations: [
    AppComponent,
  
    HeaderComponent,
  
    NavbarComponent,
  
    AboutComponent,
  
    ContactusComponent,
  
    PhotogalleryComponent,
  
    HowtoapplyComponent,
  
    HomeComponent,
  
    FooterComponent,
  
    CommiteComponent,
  
    LoginComponent,
  
    EventComponent,
  
    DownloadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    YouTubePlayerModule

    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
