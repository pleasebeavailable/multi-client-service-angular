import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConstants} from '../AppConstants';
import {Category} from '../models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  async getCategories(): Promise<Category[]> {
    return this.httpClient.get<Category[]>(AppConstants.BACKEND_URL + 'category/getCategories', AppConstants.apiHttpOptions).toPromise();
  }
}
