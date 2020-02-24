import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JobsComponent} from './components/jobs/jobs.component';
import {AuthGuard} from '../shared/services/auth-guard.service';
import {JobFormComponent} from './components/job-form/job-form.component';

const MERCHANT_ROUTES: Routes = [
  {
    path: 'job-form',
    component: JobFormComponent,
    canActivate: [AuthGuard] // MerchantGuard
  },
  {
    path: '',
    component: JobsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [JobFormComponent, JobsComponent],
  imports: [CommonModule,
    RouterModule.forChild(MERCHANT_ROUTES),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class MerchantModule {
}
