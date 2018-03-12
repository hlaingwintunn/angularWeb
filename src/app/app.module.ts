import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainPageModule } from './mainpage/mainpage.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
