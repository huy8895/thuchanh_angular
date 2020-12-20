import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SearchInSelectComponent} from './search-in-select/search-in-select.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent, SearchInSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
