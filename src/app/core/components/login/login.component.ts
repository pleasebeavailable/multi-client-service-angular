import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../shared/services/auth.service';
import {TokenStorage} from '../../../shared/services/token.storage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginData} from '../../../shared/models/LoginData';
import {NavbarService} from "../web-layout/navbar/navbar.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  private isLoggedIn = false;
  private returnUrl: string;
  submitted = false;
  error: string;

  constructor(
    private authService: AuthService,
    public tokenStorage: TokenStorage,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    } else {
      this.initForm();
    }
    // TODO
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  get value() {
    return this.loginForm.value;
  }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.login(new LoginData(this.value.username, this.value.password))
      .subscribe(
        user => {
          this.navbarService.setNavState(user);
          this.tokenStorage.saveUser(user);
          this.tokenStorage.saveToken(user.jwttoken);
          this.isLoggedIn = true;
          this.router.navigate(['']);
        },
        error => {
          this.error = 'Login not successful';
        }
      );
  }

  private initForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
