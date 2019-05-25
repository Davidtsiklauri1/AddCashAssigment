import { Component, OnInit,Input } from '@angular/core';
import {FormService} from '../Services/form.service'
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
@Input() arrItems;
  constructor(private ser:FormService) { }

  ngOnInit() {
    this.arrItems = this.ser.LoadLocalStorage();
  }
  onClick(i){
this.ser.delete(this.arrItems,i);


}
}
