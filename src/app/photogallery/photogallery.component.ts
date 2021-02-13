import { Component, OnInit } from '@angular/core';
import { Photoservice} from '../photoservice.service';
import {photogallery} from '../model/photogallery';
@Component({
  selector: 'app-photogallery',
  templateUrl: './photogallery.component.html',
  styleUrls: ['./photogallery.component.css']
})
export class PhotogalleryComponent implements OnInit {
  photo: photogallery;
  constructor(private photoservice: Photoservice ) { }

  ngOnInit(){
    this.photoservice.getphotos().subscribe( response => {
      console.log(`ts file ${response}`);
      this.photo = response;
    }, error => {
      console.log(`error===>1 ${error}`);
    });
  }

}
