import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-howtoapply',
  templateUrl: './howtoapply.component.html',
  styleUrls: ['./howtoapply.component.css']
})
export class HowtoapplyComponent implements OnInit {
  
  //console.log(`howtoapply===> ${ form.value }`);
   getuserValue(form: NgForm)
   {
   console.log(form.value)
   }


  constructor() { }
  
  ngOnInit(): void {
    
  }

}
