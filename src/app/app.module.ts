import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginComponent} from './core/components/login/login.component';
import {ComponentsComponent} from './core/components/components.component';
import {NavbarComponent} from './core/components/web-layout/navbar/navbar.component';
import {WebLayoutComponent} from './core/components/web-layout/web-layout.component';
import {AppRoutingModule} from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './core/components/register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SelectModule} from 'ng-select';
import {HttpClientModule} from '@angular/common/http';
import {TokenStorage} from './shared/services/token.storage';
import { JobsComponent } from './merchant/components/jobs/jobs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ComponentsComponent,
    NavbarComponent,
    WebLayoutComponent,
    RegisterComponent,
    JobsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    SelectModule,

  ],
  providers: [TokenStorage],
  bootstrap: [AppComponent]
})
export class AppModule {
}
