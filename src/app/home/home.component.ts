import {Component, OnInit} from '@angular/core';
import {Job} from '../shared/models/Job';
import {JobService} from '../shared/services/job.service';
import {TokenStorage} from "../shared/services/token.storage";
import {User} from "../shared/models/User";
import {AppMethods} from "../shared/AppMethods";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  jobs: Job[] = [];
  currentUser: User;

  constructor(private jobService: JobService, private tokenStorage: TokenStorage) {
  }

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe(jobs => {
      if (jobs) {
        this.jobs = jobs;
      }
    });
    this.currentUser = this.tokenStorage.getUser();
  }

}
