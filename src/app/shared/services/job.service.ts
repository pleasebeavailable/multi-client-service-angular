import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Job} from '../models/Job';
import {AppConstants} from '../AppConstants';
import {TokenStorage} from './token.storage';
import {catchError, tap} from 'rxjs/operators';
import {AppMethods} from '../AppMethods';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorage) {}

  getAllJobs(): Observable<Job[]> {
    return this.httpClient.get<Job[]>(AppConstants.BACKEND_URL + 'merchant/allJobs');
  }

  getMerchantJobs(merchantId: number): Observable<Job[]> {
    return this.httpClient.get<Job[]>(AppConstants.BACKEND_URL + 'merchant/allMerchantJobs/' + merchantId);
  }

  createJob(job: Job): Observable<{}> {
    return this.httpClient.post<Job>(AppConstants.BACKEND_URL + 'merchant/addNewJob', job);
  }

  editJob(id: number, job: Job): Observable<Job> {
    return this.httpClient.put<Job>(AppConstants.BACKEND_URL + 'merchant/editJob/' + id, job, AppMethods.getOptions(this.tokenStorage.getToken()));
  }

  deleteJob(id: number): Observable<{}> {
    return this.httpClient.delete(AppConstants.BACKEND_URL + 'merchant/deleteJob/' + id, AppMethods.getOptions(this.tokenStorage.getToken()))
      .pipe(
        tap(_ => console.log('Job is deleted!')),
        catchError(_ => {
          return throwError('Job is not deleted!');
        })
      );
  }

  getJob(id: number): Observable<Job> {
    return this.httpClient.get<Job>(AppConstants.BACKEND_URL + 'merchant/getJob/' + id, AppMethods.getOptions());
  }
}
