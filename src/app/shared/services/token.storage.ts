import {Injectable} from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USER_KEY = 'AuthUser';

@Injectable()
export class TokenStorage {

  constructor() {
  }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, 'Bearer ' + token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user) {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    const tokenUser = JSON.parse(sessionStorage.getItem(USER_KEY));
    const user = tokenUser;
    user.role = tokenUser.roles[0];
    return user;
  }
}
