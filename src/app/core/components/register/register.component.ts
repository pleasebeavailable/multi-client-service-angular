import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../login/auth.service';
import {Router} from '@angular/router';
import {SelectOption} from '../../../shared/models/SelectOption';
import {Roles} from '../../../shared/models/Roles';
import {AppMethods} from '../../../shared/AppMethods';
import {Location} from '@angular/common';
import {User} from "../../../shared/models/User";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  roles: Array<SelectOption>;
  submitted: false;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private location: Location) {
  }

  ngOnInit(): void {
    this.roles = [];
    Object.keys(Roles).forEach(role => this.roles.push(new SelectOption(Roles[role], role)));

    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      // firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      // lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['',
        [
          Validators.required,
          AppMethods.matchValues('password')
        ]],
      role: ''
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  get user() {
    return this.registerForm.value;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const user = new User(this.user.username, this.user.password, this.user.email, this.user.role);
      this.authService.register(this.registerForm.value).pipe().subscribe(() => {
        // TODO alert
        this.router.navigate(['/login']);
      });
    }
  }

  refreshRoleValue(value: any) {
    this.registerForm.controls.role.patchValue(value.value);
  }

  onRoleClear() {
    this.registerForm.controls.role.patchValue('');
  }

  goBack() {
    this.location.back();
  }
}
