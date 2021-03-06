import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SelectModule} from 'ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobListComponent } from './components/job-list/job-list.component';
import {RouterModule} from '@angular/router';
import { JobFilterComponent } from './components/job-list/job-filter/job-filter.component';

@NgModule({
  declarations: [JobDetailsComponent, JobListComponent, JobFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    SelectModule,
    FormsModule,
    NgbModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SelectModule,
    FormsModule,
    NgbModule,
    JobDetailsComponent,
    JobListComponent,
    JobFilterComponent,
  ],
})
export class SharedModule {
}
