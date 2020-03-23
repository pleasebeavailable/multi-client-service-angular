import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegisterComponent} from './components/register/register.component';
import {LoginComponent} from './components/login/login.component';
import {NavbarComponent} from './components/web-layout/navbar/navbar.component';
import {WebLayoutComponent} from './components/web-layout/web-layout.component';
import {SharedModule} from '../shared/shared.module';

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
