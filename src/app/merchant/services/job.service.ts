import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../../shared/models/Job';
import {AppConstants} from '../../shared/AppConstants';
import {TokenStorage} from '../../shared/services/token.storage';
import {User} from '../../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  user: User;

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorage) {
    console.log(tokenStorage.getUser())
    this.user = tokenStorage.getUser();
  }

  getMerchantJobs(): Observable<Job[]> {
    const httpOptions = AppConstants.apiHttpOptions;
    httpOptions.headers = AppConstants.apiHttpOptions.headers.append('Authorization', this.tokenStorage.getToken());
    console.log(httpOptions)
    return this.httpClient.get<Job[]>(AppConstants.BACKEND_URL + 'merchant/allMerchantJobs/' + this.user.id, httpOptions);
  }
}
