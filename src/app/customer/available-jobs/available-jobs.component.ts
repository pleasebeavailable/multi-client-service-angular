import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../shared/models/Job';
import {User} from '../../shared/models/User';
import {JobService} from '../../shared/services/job.service';
import {TokenStorage} from '../../shared/services/token.storage';

@Component({
  selector: 'app-available-jobs',
  templateUrl: './available-jobs.component.html',
  styleUrls: ['./available-jobs.component.css']
})
export class AvailableJobsComponent implements OnInit {

  jobs: Job[] = [];
  currentUser: User;

  constructor(private jobService: JobService, private tokenStorage: TokenStorage) {
  }

  ngOnInit(): void {
    this.currentUser = this.tokenStorage.getUser();
    this.jobService.getAllJobs().subscribe(jobs => this.jobs = jobs);
  }

}
