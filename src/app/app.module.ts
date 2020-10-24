import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AsyncObservablePipeComponentComponent } from './async-observable-pipe-component/async-observable-pipe-component.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncObservablePipeComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
