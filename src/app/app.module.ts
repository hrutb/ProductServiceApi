import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/component/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductCardComponent } from './shared/component/product-card/product-card.component';
import { ProductFormComponent } from './shared/component/product-form/product-form.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCardComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
