import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ComponentsComponent} from './core/components/components.component';
import {AppRoutingModule} from './app-routing.module';
import {TokenStorage} from './shared/services/token.storage';
import {CoreModule} from './core/core.module';
import {MerchantModule} from './merchant/merchant.module';
import {SharedModule} from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import {CustomerModule} from './customer/customer.module';
import {HeaderInterceptorService} from "./shared/services/header-interceptor.service";
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MerchantModule,
    CustomerModule
  ],
  providers: [TokenStorage, {provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
