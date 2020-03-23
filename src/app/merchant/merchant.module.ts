import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../shared/services/_guard/auth-guard.service';
import {JobFormComponent} from './components/job-form/job-form.component';
import {SharedModule} from '../shared/shared.module';
import { MerchantJobsComponent } from './components/merchant-jobs/merchant-jobs.component';
import {MerchantGuard} from '../shared/services/_guard/merchant.guard';

const MERCHANT_ROUTES: Routes = [
  {
    path: 'job-form',
    component: JobFormComponent,
    canActivate: [MerchantGuard]
  },
  {
    path: 'job-form/:id',
    component: JobFormComponent,
    canActivate: [MerchantGuard]
  },
  {
    path: 'merchant-jobs', // customer can see merchants jobs
    component: MerchantJobsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [JobFormComponent, MerchantJobsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(MERCHANT_ROUTES),
  ]
})
export class MerchantModule {
}
