import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { AppComponent } from './app.component';
import { Navigator } from './navigator/navigator.component';
import { RouterModule } from '@angular/router';
import { HomePage } from './home/home.component';
import { IntroPage } from './intro/intro.component'
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
    Navigator,
    HomePage,
    IntroPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    RouterModule.forRoot([
      { path: 'home', component: HomePage },
      { path: 'intro', component: IntroPage },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ], { useHash: true })
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
