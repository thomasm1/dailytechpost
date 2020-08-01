import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthService {

  constructor() { }

  authenticate(username, password) {
    if (username === "user" && password === "pass") {
      sessionStorage.setItem('AuthenticatedUser', username);
      return true;
    }
    return false;
  }

  isAdminLoggedIn() {
    let user = sessionStorage.getItem('AuthenticatedUser');
    return !(user === null);
  }
  logout() {
      sessionStorage.removeItem('AuthenticatedUser');
  }
}
