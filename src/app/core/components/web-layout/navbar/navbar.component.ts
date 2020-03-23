import {Component, OnInit} from '@angular/core';
import {TokenStorage} from '../../../../shared/services/token.storage';
import {Router} from '@angular/router';
import {User} from '../../../../shared/models/User';
import {NavbarService} from "./navbar.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private tokenStorage: TokenStorage, private router: Router, private navbarService: NavbarService) {
  }

  ngOnInit(): void {
    this.navbarService.userState$.subscribe(user => this.user = user);
  }

  signOut() {
    this.tokenStorage.signOut();
    this.navbarService.setNavState(null);
    this.router.navigate(['/login']);
  }

}
