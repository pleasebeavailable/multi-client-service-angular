import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Job} from '../models/Job';
import {AppConstants} from '../AppConstants';
import {TokenStorage} from './token.storage';
import {User} from '../models/User';
import {log} from "util";

@Injectable({
  providedIn: 'root'
})
export class JobService {
  user: User;
  httpOptions = AppConstants.apiHttpOptions;

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorage) {
    this.httpOptions.headers = AppConstants.apiHttpOptions.headers.append('Authorization', this.tokenStorage.getToken());
    this.user = tokenStorage.getUser();
  }

  getAllJobs(): Observable<Job[]> {
    //console.log(this.httpClient.get<Job[]>(AppConstants.BACKEND_URL + 'merchant/allJobs', AppConstants.apiHttpOptions).subscribe(jobs => console.log(jobs)))
    return this.httpClient.get<Job[]>(AppConstants.BACKEND_URL + 'merchant/allJobs', AppConstants.apiHttpOptions);
  }

  getMerchantJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(AppConstants.BACKEND_URL + 'merchant/allMerchantJobs/' + this.user.id, this.httpOptions);
  }

  createJob(job: Job): Observable<{}> {
    return this.httpClient.post<Job>(AppConstants.BACKEND_URL + 'merchant/addNewJob', this.httpOptions);
  }
}
