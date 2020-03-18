import {Component, Input, OnInit} from '@angular/core';
import {Job} from '../../models/Job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  @Input('job') job: Job;
  @Input('role') role?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
