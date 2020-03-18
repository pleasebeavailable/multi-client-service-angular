import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../models/Job';
import {JobService} from "../../services/job.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  @Input('job') job: Job;
  @Input('role') role?: string;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
  }

  deleteJob(id: number) {
    this.jobService.deleteJob(id).subscribe(response => {
      window.location.reload();
    });
  }
}
