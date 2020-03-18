import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MerchantGuard} from './shared/services/_guard/merchant.guard';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'merchant',
    loadChildren: 'src/app/merchant/merchant.module#MerchantModule',
    canActivate: [MerchantGuard]
  },
  {
    path: 'customer',
    loadChildren: 'src/app/customer/customer.module#CustomerModule'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
