import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MainPageModule } from './mainpage/mainpage.module';


import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentComponent,
    CustomerComponent,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule, MainPageModule, FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
