import {Component, OnInit} from '@angular/core';
import {TokenStorage} from '../../../../shared/services/token.storage';
import {Router} from '@angular/router';
import {User} from '../../../../shared/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;

  constructor(private tokenStorage: TokenStorage, private router: Router) {
  }

  ngOnInit(): void {
      this.user = this.tokenStorage.getUser();
  }

  signOut() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }

}
