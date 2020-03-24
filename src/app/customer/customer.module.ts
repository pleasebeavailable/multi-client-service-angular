import {RouterModule, Routes} from '@angular/router';
import {AvailableJobsComponent} from './available-jobs/available-jobs.component';
import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { PurchasePageComponent } from './purchase-page/purchase-page.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PurchaseFormComponent } from './purchase-page/purchase-form/purchase-form.component';

const CUSTOMER_ROUTES: Routes = [

  {
    path: 'available-jobs',
    component: AvailableJobsComponent,
  },
  {
    path: 'purchase/:id',
    component: PurchasePageComponent
  },
  {
    path: 'purchase/:id/purchase-form/:id',
    component: PurchaseFormComponent
  }
];

@NgModule({
  declarations: [AvailableJobsComponent, PurchasePageComponent, PurchaseFormComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(CUSTOMER_ROUTES),
    MatTabsModule,
  ]
})
export class CustomerModule {
}
