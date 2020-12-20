import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SearchInSelectComponent} from './search-in-select/search-in-select.component';
import {FormsModule} from "@angular/forms";
import { SelectMultipleCheckboxComponent } from './select-multiple-checkbox/select-multiple-checkbox.component';

@NgModule({
  declarations: [
    AppComponent, SearchInSelectComponent, SelectMultipleCheckboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
