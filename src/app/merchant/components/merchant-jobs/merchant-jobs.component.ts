import {Component, OnInit} from '@angular/core';
import {Job} from '../../../shared/models/Job';
import {TokenStorage} from '../../../shared/services/token.storage';
import {JobService} from '../../../shared/services/job.service';
import {User} from "../../../shared/models/User";

@Component({
  selector: 'app-merchant-jobs',
  templateUrl: './merchant-jobs.component.html',
  styleUrls: ['./merchant-jobs.component.css']
})
export class MerchantJobsComponent implements OnInit {

  jobs: Job[] = [];
  currentUser: User;
  private merchantId: number;


  constructor(private tokenStorage: TokenStorage, private jobService: JobService) {
  }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    this.merchantId = this.currentUser.id;
    this.jobService.getMerchantJobs(this.merchantId).subscribe(jobs => this.jobs = jobs);
  }

}
