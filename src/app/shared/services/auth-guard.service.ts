import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TokenStorage} from './token.storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private tokenStorage: TokenStorage) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.tokenStorage.getUser() && this.tokenStorage.getToken()) {
      return true;
    } else {
      this.router.navigate(['/login'], {queryParams: {returnUrl: state.url}})
      return false;
    }
  }
}
