import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {TokenStorage} from '../token.storage';

@Injectable({
  providedIn: 'root'
})
export class MerchantGuard implements CanActivate {

  constructor(private router: Router, private tokenStorage: TokenStorage) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const role = this.tokenStorage.getUser().roles[0];
    if (role === 'ROLE_MERCHANT') {
      return true;
    } else {
      return false;
    }
  }

}
