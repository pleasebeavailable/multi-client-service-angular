import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../models/Job';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  @Input('jobs') jobs: Job[] = [];
  @Input('role') role?: string;
  filteredJobs: Job[] = [];
  categoryId: number;


  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.categoryId = params.category;
      this.filteredJobs = (this.categoryId) ? this.jobs.filter(job => job.category.id == this.categoryId) : this.jobs;
    });

  }

}
