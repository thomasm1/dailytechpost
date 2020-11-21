import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';

import { AuthData } from '../../models/auth-data.model';
import { WritingService } from '../writing.service';
import { UiService } from '../ui.service';
import * as fromRoot from '../../reducers/app.reducer';
import * as UI from '../../reducers/ui.actions';

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
    // private store: Store<{ ui: fromApp.State }>
    private store: Store<fromRoot.State>
    ) { }  // Dispatch actions & Listen to Changes


    initAuthListener() {
      this.afAuth.authState.subscribe(user => {
        if (user) {
          this.isAuthenticated = true;
          this.authChange.next(true);
          this.router.navigate(['/writing']);
        } else {
          this.writingService.cancelSubscriptions();
          this.authChange.next(false);
          this.router.navigate(['/']);
          this.isAuthenticated = false;
        }
      });
    }
  registerUser(authData: AuthData) {
    // this.uiService.loadingStateChanged.next(true);
                // DISPATCHING THE ACTION WHEN START LOADING
    // this.store.dispatch({ type: 'START_LOADING' });
    this.store.dispatch(new UI.StartLoading());

    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    )
    .then(result => {
      console.log(result);
      // this.authSuccessful();
      // this.uiService.loadingStateChanged.next(false);
              // DISPATCHING THE ACTION WHEN STOP LOADING
      // this.store.dispatch({ type: 'STOP_LOADING' });
      this.store.dispatch(new UI.StopLoading());

    })
    .catch(error => {
      console.log(error);
      // this.uiService.loadingStateChanged.next(false);
      // this.store.dispatch({ type: 'STOP_LOADING' });
      this.store.dispatch(new UI.StopLoading());
      this.uiService.showSnackBar(error.message, null, 2500  );
    });
  }

  login(authData: AuthData) {
    // this.uiService.loadingStateChanged.next(true);
    // this.store.dispatch({ type: 'START_LOADING' });
    this.store.dispatch(new UI.StartLoading());
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        // this.uiService.loadingStateChanged.next(false);
        // this.store.dispatch({ type: 'STOP_LOADING' });
        this.store.dispatch(new UI.StopLoading());
        console.log("logged in" + result);
        // this.authSuccessful();
      })
      .catch(error => {
        console.log(error);
        // this.uiService.loadingStateChanged.next(false);
        // this.store.dispatch({ type: 'STOP_LOADING' });
      this.store.dispatch(new UI.StopLoading());
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
