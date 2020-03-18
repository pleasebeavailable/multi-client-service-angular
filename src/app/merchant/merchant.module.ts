import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AuthGuard} from '../shared/services/_guard/auth-guard.service';
import {JobFormComponent} from './components/job-form/job-form.component';
import {SharedModule} from '../shared/shared.module';
import { MerchantJobsComponent } from './components/merchant-jobs/merchant-jobs.component';

const MERCHANT_ROUTES: Routes = [
  {
    path: 'job-form',
    component: JobFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'merchant-jobs',
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
