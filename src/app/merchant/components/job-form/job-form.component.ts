import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {JobService} from '../../../shared/services/job.service';
import {TokenStorage} from '../../../shared/services/token.storage';
import {User} from '../../../shared/models/User';
import {Job} from '../../../shared/models/Job';

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  jobForm: FormGroup;
  submitted = false;
  user: User;

  constructor(
    private jobService: JobService,
    private tokenStorage: TokenStorage,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();

    this.initForm();
  }

  get f() {
    return this.jobForm.controls;
  }

  get value() {
    return this.jobForm.value;
  }

  onSubmit() {
    this.submitted = true;

    if (this.jobForm.invalid) {
      return;
    }

    this.jobService.createJob(new Job(this.value.name, this.user.id))
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }

  initForm() {
    this.jobForm = this.formBuilder.group({
      name: ['', Validators.required],
      userId: [this.tokenStorage.getUser().id]
    });
  }
}
