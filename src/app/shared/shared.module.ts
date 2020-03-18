import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {SelectModule} from 'ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JobDetailsComponent } from './components/job-details/job-details.component';
import { JobListComponent } from './job-list/job-list.component';


@NgModule({
  declarations: [JobDetailsComponent, JobListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
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
  ]
})
export class SharedModule {
}
