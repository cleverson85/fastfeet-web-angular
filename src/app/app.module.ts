import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { OrderModule } from '../app/pages/order/order.module';
import { RecipientModule } from '../app/pages/recipient/recipient.module';
import { DeliverModule } from './pages/deliver/deliver.module';
import { MenuListModule } from './components/menu-list/menu-list.module';
import { IssueModule } from './pages/issue/issue.module';
import { MenuModule } from './components/menu/menu.module';

import { AuthService } from './services/auth.service';

const modules = [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  FormsModule,
  BrowserAnimationsModule,
  NoopAnimationsModule,
  OrderModule,
  RecipientModule,
  DeliverModule,
  IssueModule,
  MenuModule
];

export function initializeApp(authService: AuthService) {
  return () => authService.setToken();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
  ],
  providers: [
    AuthService,
    { provide: APP_INITIALIZER, useFactory: initializeApp, deps: [ AuthService ], multi: true }
  ],
  bootstrap: [
    AppComponent,
  ]
})

export class AppModule { }
