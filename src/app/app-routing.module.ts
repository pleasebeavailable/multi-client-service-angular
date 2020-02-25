import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JobsComponent} from './merchant/components/jobs/jobs.component';
import {MerchantGuard} from './shared/services/_guard/merchant.guard';

const appRoutes: Routes = [
  {
    path: 'merchant',
    loadChildren: 'src/app/merchant/merchant.module#MerchantModule',
    canActivate: [MerchantGuard]
  },
  {
    path: '',
    component: JobsComponent
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
