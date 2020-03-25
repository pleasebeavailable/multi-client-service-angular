import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TokenStorage} from './token.storage';
import {Purchase} from '../models/Purchase';
import {Observable} from 'rxjs';
import {AppConstants} from '../AppConstants';
import {AppMethods} from '../AppMethods';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient: HttpClient, private tokenStorage: TokenStorage) {
  }

  getAllUserPurchases(): Observable<Purchase[]> {
    return this.httpClient.get<Purchase[]>(AppConstants.BACKEND_URL + 'customer/purchase/' + this.tokenStorage.getUser().id);
  }

  purchaseJob(purchase: Purchase): Observable<{}> {
    return this.httpClient.post(AppConstants.BACKEND_URL + 'customer/purchase', purchase);
  }

}
