import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {JobService} from '../../../shared/services/job.service';
import {TokenStorage} from '../../../shared/services/token.storage';
import {User} from '../../../shared/models/User';
import {Job} from '../../../shared/models/Job';
import {CategoryService} from '../../../shared/services/category.service';
import {Category} from '../../../shared/models/Category';
import {SelectOption} from '../../../shared/models/SelectOption';


@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {
  jobForm: FormGroup;
  submitted = false;
  user: User;
  categories$: Category[] = [];
  categorySelect: Array<SelectOption>;
  job: Job;
  id = +this.route.snapshot.paramMap.get('id');

  constructor(
    private jobService: JobService,
    private tokenStorage: TokenStorage,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) {


  }

  async ngOnInit() {

    this.categorySelect = [];
    this.categories$ = await this.categoryService.getCategories();
    this.categories$.forEach(category => this.categorySelect.push(new SelectOption(category.name, category.name)));
    this.initForm();


  }

  initForm() {
    if (this.id) {
      this.jobForm = this.createFormGroup(this.formBuilder);
      this.jobService.getJob(this.id).subscribe((job: Job) => this.patchJob(job));
    } else {
      this.jobForm = this.createFormGroup(this.formBuilder);
    }
  }

  createFormGroup(formBuilder: FormBuilder) {
    return formBuilder.group({
      name: ['', Validators.required],
      userId: this.tokenStorage.getUser().id,
      category: ['', Validators.required]
    });
  }

  patchJob(job: Job) {
    this.jobForm.patchValue({
      name: job.name,
      category: job.category.name
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.jobForm.invalid) {
      return;
    }

    if (this.id) {
      this.jobService.editJob(this.id, this.createJob())
        .subscribe(() => this.router.navigate(['/merchant/merchant-jobs']));
    } else {
      this.jobService.createJob(this.createJob())
        .subscribe(() => this.router.navigate(['/merchant/merchant-jobs']));
    }
  }

  createJob(): Job {
    const formValue = this.value;
    this.job = new Job(formValue.name, formValue.userId, formValue.category);
    return this.job;
  }

  get f() {
    return this.jobForm.controls;
  }

  get value() {
    return this.jobForm.value;
  }

  refreshCategoryValue(value: Job) {
    this.f.category.patchValue(value.category);
  }

  onCategoryClear() {
    this.f.category.patchValue('');
  }
}
