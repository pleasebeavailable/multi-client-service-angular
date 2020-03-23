import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {User} from "../../../../shared/models/User";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navStateSource = new Subject<User>();
  userState$ = this.navStateSource.asObservable();

  constructor() { }

  setNavState( state: User) {
    this.navStateSource.next(state);
  }

}
