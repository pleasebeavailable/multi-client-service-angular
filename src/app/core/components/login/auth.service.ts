import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AppConstants} from "../../../shared/AppConstants";
import {User} from "../../../shared/models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  register(user: User): Observable<any> {
    return this.httpClient.post(AppConstants.BACKEND_URL + 'api/signup', user, AppConstants.apiHttpOptions);
  }
}
