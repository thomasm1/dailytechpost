import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../models/user.model';
import { AuthData } from '../models/auth-data.model';


@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {
  public authChange = new Subject<boolean>();
  private user: User;

  constructor(private router: Router) { }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    };
    this.authChange.next(true);
    this.router.navigate(['/writing'])
  }

  login(authData: AuthData) {
    this.user = { 
      email: authData.email,
      userId: Math.round(Math.random() * 10000).toString()
    }
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    // returning new object with da spread operator
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }
}
