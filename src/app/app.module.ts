import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './shared/component/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductCardComponent } from './shared/component/product-card/product-card.component';
import { ProductFormComponent } from './shared/component/product-form/product-form.component'
import { FormsModule } from '@angular/forms';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog } from '@angular/material/dialog';
// import {MatDialog}  from '@angular/material/dialog'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCardComponent,
    ProductFormComponent,
    GetConfirmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule ,
    MatDialog
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
