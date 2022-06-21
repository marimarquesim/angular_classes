
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WarningAlertComponent } from './warning-alert/warning-alert.component'
import { AppComponent } from './app.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';


@NgModule({
  declarations: [
    AppComponent,
    SucessAlertComponent,
    WarningAlertComponent
  
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
