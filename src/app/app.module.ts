import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MainPageModule } from './mainpage/mainpage.module';


import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule, MainPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
