import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ViewEncapsulationComponent } from './view-encapsulation/view-encapsulation.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEncapsulationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
