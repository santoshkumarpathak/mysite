import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {photogallery} from './model/photogallery';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Photoservice {
  photoUrl = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1'

  constructor(private http: HttpClient) {
    
   }
  getphotos(): Observable<photogallery> {
      console.log(`Respond==> ${this.photoUrl}`)
    return this.http.get<photogallery>(this.photoUrl);
  }
  
}
