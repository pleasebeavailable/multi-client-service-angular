import {Component, OnInit} from '@angular/core';
import {Job} from '../../../shared/models/Job';
import {TokenStorage} from '../../../shared/services/token.storage';
import {JobService} from '../../../shared/services/job.service';

@Component({
  selector: 'app-merchant-jobs',
  templateUrl: './merchant-jobs.component.html',
  styleUrls: ['./merchant-jobs.component.css']
})
export class MerchantJobsComponent implements OnInit {

  jobs: Job[] = [];
  private merchantId: number;

  constructor(private tokenStorage: TokenStorage, private jobService: JobService) {
  }

  ngOnInit(): void {
    this.merchantId = this.tokenStorage.getUser().id;
    this.jobService.getMerchantJobs(this.merchantId).subscribe(jobs => this.jobs = jobs);
    console.log(this.jobs)
  }

}
