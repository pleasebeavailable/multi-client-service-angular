import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Job} from '../../shared/models/Job';
import {JobService} from '../../shared/services/job.service';

@Component({
  selector: 'app-purchase-page',
  templateUrl: './purchase-page.component.html',
  styleUrls: ['./purchase-page.component.css']
})
export class PurchasePageComponent implements OnInit {

  job: Job;

  constructor(private route: ActivatedRoute, private jobService: JobService) {

  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.jobService.getJob(id).subscribe(job => this.job = job);
  }

}
