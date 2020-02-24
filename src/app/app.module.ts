import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ComponentsComponent} from './core/components/components.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from '@angular/forms';
import {SelectModule} from 'ng-select';
import {HttpClientModule} from '@angular/common/http';
import {TokenStorage} from './shared/services/token.storage';
import {CoreModule} from './core/core.module';
import {MerchantModule} from "./merchant/merchant.module";

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SelectModule,
    CoreModule,
    MerchantModule

  ],
  providers: [TokenStorage],
  bootstrap: [AppComponent]
})
export class AppModule {
}
