import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipientEditComponent } from './recipient/recipient-edit/recipient-edit.component';
import { RecipientListComponent } from './recipient/recipient-list/recipient-list.component';

import { AppRoutingModule } from './app-routing.module';
import { OrderModule } from './order/order.module';

import Api from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    RecipientEditComponent,
    RecipientListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    OrderModule
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
