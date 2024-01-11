import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// next is not an angular feature, but a typescript feature.
// import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
    // , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
