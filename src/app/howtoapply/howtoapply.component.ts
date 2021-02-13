import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-howtoapply',
  templateUrl: './howtoapply.component.html',
  styleUrls: ['./howtoapply.component.css']
})
export class HowtoapplyComponent implements OnInit {
  
  
   getuserValue(form: NgForm)
   {
   console.log(form.value)
   }


  constructor() { }
  
  ngOnInit(): void {
    
  }

}
