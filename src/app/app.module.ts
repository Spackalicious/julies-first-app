import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// next is not an angular feature, but a typescript feature.
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { UserNameComponent } from './user-name/user-name.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';

@NgModule({
  declarations: [
    AppComponent, 
    ServerComponent, ServersComponent, WarningAlertComponent, SuccessAlertComponent, UserNameComponent, DisplayDetailsComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // bootstrap: [AppComponent, ServerComponent, ServersComponent, WarningAlertComponent, SuccessAlertComponent]
})
export class AppModule { }
