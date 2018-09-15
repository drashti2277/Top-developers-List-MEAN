import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http'


import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { DevsComponent } from './devs/devs.component';
import {DevsService} from "./devs.service"; 

// Define the routes
//We are simply telling our router that whenever the root route / is visited, the IntroComponent is used which displays an Intro screen.
const ROUTES = [
  {
    path: '',
    component: IntroComponent
  },
  
  {
    path:'devs/:language',
    component:DevsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DevsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
   
  ],
  providers: [DevsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
