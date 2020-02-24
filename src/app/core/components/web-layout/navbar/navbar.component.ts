import { Component, OnInit } from '@angular/core';
import {TokenStorage} from "../../../../shared/services/token.storage";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private tokenStorage: TokenStorage, private router: Router) { }

  ngOnInit(): void {
  }

  signOut() {
    this.tokenStorage.signOut();
    this.router.navigate(['/login']);
  }

}
