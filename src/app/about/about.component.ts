import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  pic1:string = "assets/image/about.jpeg";  
  constructor() { }

  ngOnInit(): void {
  }

}
