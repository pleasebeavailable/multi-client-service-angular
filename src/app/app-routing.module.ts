import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JobsComponent} from './shared/components/jobs/jobs.component';
import {MerchantGuard} from './shared/services/_guard/merchant.guard';
import {HomeComponent} from "./home/home.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'merchant',
    loadChildren: 'src/app/merchant/merchant.module#MerchantModule',
    canActivate: [MerchantGuard]
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
