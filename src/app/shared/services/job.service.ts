import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Job} from '../models/Job';
import {AppConstants} from '../AppConstants';
import {TokenStorage} from './token.storage';
import {User} from '../models/User';
import {catchError, tap} from 'rxjs/operators';

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
    return this.httpClient.get<Job[]>(AppConstants.BACKEND_URL + 'merchant/allJobs', AppConstants.apiHttpOptions);
  }

  getMerchantJobs(merchantId: number): Observable<Job[]> {
    return this.httpClient.get<Job[]>(AppConstants.BACKEND_URL + 'merchant/allMerchantJobs/' + merchantId, this.httpOptions);
  }

  createJob(job: Job): Observable<{}> {
    return this.httpClient.post<Job>(AppConstants.BACKEND_URL + 'merchant/addNewJob', job, this.httpOptions);
  }

  deleteJob(id: number): Observable<{}> {
    return this.httpClient.delete(AppConstants.BACKEND_URL + 'merchant/deleteJob/' + id, this.httpOptions)
      .pipe(
        tap(_ => console.log('Job is deleted!')),
        catchError(_ => {
          return throwError('Job is not deleted!');
        })
      );
  }
}
