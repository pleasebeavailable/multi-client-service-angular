import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AppConstants} from '../AppConstants';
import {User} from '../models/User';
import {LoginData} from '../models/LoginData';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) {
  }

  register(user: User): Observable<User> {
    return this.httpClient.post<User>(AppConstants.BACKEND_URL + 'api/signup', user, AppConstants.apiHttpOptions);
  }

  login(loginData: LoginData): Observable<User> {
    return this.httpClient.post<User>(AppConstants.BACKEND_URL + 'api/authenticate', loginData, AppConstants.apiHttpOptions);
  }
}
