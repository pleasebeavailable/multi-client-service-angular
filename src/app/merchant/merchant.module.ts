import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {JobsComponent} from './components/jobs/jobs.component';
import {AuthGuard} from '../shared/services/_guard/auth-guard.service';
import {JobFormComponent} from './components/job-form/job-form.component';
import {SharedModule} from '../shared/shared.module';

const MERCHANT_ROUTES: Routes = [
  {
    path: 'job-form',
    component: JobFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: JobsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [JobFormComponent, JobsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(MERCHANT_ROUTES),
  ]
})
export class MerchantModule {
}
