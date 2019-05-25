import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {FormService} from '../Services/form.service';
@Component({
  selector: 'app-form-managment',
  templateUrl: './form-managment.component.html',
  styleUrls: ['./form-managment.component.css']
})
export class FormManagmentComponent implements OnInit {
 addTags = new FormControl(' ');
 arr:Array<number> = [];
 constructor(private ser:FormService) { }

  ngOnInit() {
  }
onClick(form){

if(form.touched == false){
console.log('error');
}

else{
this.ser.get(form.value);
  form.reset();
  this.arr = this.ser.LoadLocalStorage();
}

}



}


