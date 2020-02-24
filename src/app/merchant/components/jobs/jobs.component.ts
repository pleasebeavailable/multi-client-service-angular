import {Component, OnInit} from '@angular/core';
import {Job} from '../../../shared/models/Job';
import {JobService} from '../../services/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  private jobs: Job[];

  constructor(private jobService: JobService) {
  }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe(jobs => {
      this.jobs = jobs;
    });
  }
}
