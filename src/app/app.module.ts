import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { FormManagmentComponent } from './form-managment/form-managment.component';
import {FormService} from './Services/form.service';
import { ItemListComponent } from './item-list/item-list.component';
import { FormEditComponent } from './form-edit/form-edit.component'
@NgModule({
  declarations: [
    AppComponent,
    FormManagmentComponent,
    ItemListComponent,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
