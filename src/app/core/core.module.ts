import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {SelectModule} from 'ng-select';
import {NavbarComponent} from './components/web-layout/navbar/navbar.component';
import {WebLayoutComponent} from './components/web-layout/web-layout.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SharedModule} from "../shared/shared.module";

const CORE_ROUTES: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    WebLayoutComponent,
  ],
  exports: [
    WebLayoutComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(CORE_ROUTES),
  ]
})
export class CoreModule {
}
