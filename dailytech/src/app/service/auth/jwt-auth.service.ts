import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';

import { AuthData } from '../../models/auth-data.model';
import { WritingService } from '../writing.service';
import { UiService } from '../ui.service';
import * as fromApp from '../../app.reducer';

@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  // private user: User;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private writingService: WritingService,
    private uiService: UiService,
    private store: Store<{ ui: fromApp.State }>
    ) { }


    initAuthListener() {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.isAuthenticated = true;
          this.authChange.next(true);
          this.router.navigate(['/writing']);
        } else {
          this.writingService.cancelSubscriptions();
          this.authChange.next(false);
          this.router.navigate(['/login']);
          this.isAuthenticated = false;
        }
      });
    }
  registerUser(authData: AuthData) {
    // this.store.dispatch({ type: 'START_LOADING' });
    this.uiService.loadingStateChanged.next(true);

    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    )
    .then(result => {
      console.log(result);
      // this.store.dispatch({ type: 'STOP_LOADING' });
      this.uiService.loadingStateChanged.next(false);
      // this.authSuccessful();
    })
    .catch(error => {
      console.log(error);
      // this.store.dispatch({ type: 'STOP_LOADING' });
      this.uiService.loadingStateChanged.next(false);
      this.uiService.showSnackBar(error.message, null, 2500  );
    });
  }

  login(authData: AuthData) {
    // this.store.dispatch({ type: 'START_LOADING' });
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        // this.store.dispatch({ type: 'STOP_LOADING' });
        this.uiService.loadingStateChanged.next(false);
        console.log("logged in" + result);
        // this.authSuccessful();
      })
      .catch(error => {
        console.log(error);
        // this.store.dispatch({ type: 'STOP_LOADING' });
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackBar(error.message, null, 2500  );
      });
  }

  logout() {
    this.afAuth.auth.signOut();
    // this.writingService.cancelSubscriptions();
    // this.authChange.next(false);
    // this.router.navigate(['/login'])
    // this.isAuthenticated = false;
  }


  isAuth() {
    return this.isAuthenticated;
  }

  // private authSuccessful() {
  //   this.isAuthenticated = true;
  //   this.authChange.next(true);
  //   this.router.navigate(['/writing'])
  // }
}
