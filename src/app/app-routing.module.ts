import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {JobsComponent} from './merchant/components/jobs/jobs.component';

const appRoutes: Routes = [
  {
    path: 'merchant',
    loadChildren: 'src/app/merchant/merchant.module#MerchantModule' // merchatnguard
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
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
