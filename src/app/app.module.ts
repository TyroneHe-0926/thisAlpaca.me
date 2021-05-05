import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SuccessMsg } from './success/success.component';
import { WarningMsg } from './warning/warning.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SuccessMsg,
    WarningMsg
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }