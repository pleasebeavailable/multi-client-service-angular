import {RouterModule, Routes} from '@angular/router';
import {AvailableJobsComponent} from './available-jobs/available-jobs.component';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';

const CUSTOMER_ROUTES: Routes = [

  {
    path: 'available-jobs',
    component: AvailableJobsComponent,
  }
];

@NgModule({
  declarations: [AvailableJobsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(CUSTOMER_ROUTES),
  ]
})
export class CustomerModule {
}
