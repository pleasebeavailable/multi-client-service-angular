import {Component, Input, OnInit} from '@angular/core';
import {Job} from "../models/Job";

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  @Input('jobs') jobs: Job[];

  constructor() { }

  ngOnInit(): void {
  }

}
