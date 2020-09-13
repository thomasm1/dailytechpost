import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthData } from '../../models/auth-data.model';
import { WritingService } from '../writing.service';


@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  // private user: User;

  constructor(private router: Router, private afAuth: AngularFireAuth, private writingService: WritingService) { }

  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) { 
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/writing']) 
      } else {
        this.writingService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login'])
        this.isAuthenticated = false;
      }
    })
  };

  registerUser(authData: AuthData) {
    // this.user = {
    //   email: authData.email,
    //   userId: Math.round(Math.random() * 10000).toString()
    // };
    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    )
      .then(result => {
        console.log(result);
        // this.authSuccessful();
      })
      .catch(error => {
        console.log(error);
      });
  }

  login(authData: AuthData) {
    // this.user = { 
    //   email: authData.email,
    //   userId: Math.round(Math.random() * 10000).toString()
    // }
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        // this.authSuccessful()/;
      })
      .catch(error => {
        console.log(error);
      });
  }

  logout() {
    // this.writingService.cancelSubscriptions();
    // this.user = null;
    this.afAuth.auth.signOut();
   
  }

  // getUser() {
  // returning new object with da spread operator
  //   return { ...this.user };
  // }

  isAuth() {
    return this.isAuthenticated;
  }

  // private authSuccessful() {
  //   this.isAuthenticated = true;
  //   this.authChange.next(true);
  //   this.router.navigate(['/writing'])
  // }
}
