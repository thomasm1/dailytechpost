import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
// import { Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { Store } from '@ngrx/store';

import { AuthData } from '../../models/auth-data.model';
import { WritingService } from '../../components/writing/writing.service';
import { UiService } from '../ui.service';
import * as fromRoot from '../../reducers/app.reducer';
import * as UI from '../../reducers/ui.actions';
import * as AuthReducer from '../../reducers/auth.actions';
import { map } from 'rxjs/internal/operators/map';
 

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  // private user: User;
  // authChange = new Subject<boolean>();
  // private isAuthenticated = false;

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
          // this.isAuthenticated = true;
          // this.authChange.next(true);
          console.log('USER LOGGED IN    initAuthListener');
          this.store.dispatch(new AuthReducer.SetAuthenticated());
          this.router.navigate(['/writing']);
        } else {
          this.writingService.cancelSubscriptions();
          console.log('USER NOT LOGGED IN    initAuthListener');
          // this.isAuthenticated = false;
          // this.authChange.next(false);
          this.store.dispatch(new AuthReducer.SetUnauthenticated());
          this.router.navigate(['/']);
        }
      });
    }
 

  registerUser(authData: AuthData) {
    // this.uiService.loadingStateChanged.next(true);
                // DISPATCHING THE ACTION WHEN START LOADING
    // this.store.dispatch({ type: 'START_LOADING' });
    this.store.dispatch(new UI.StartLoading());

    this.afAuth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    )
    .then(result => {
      console.log("registered user");
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
    this.afAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        // this.uiService.loadingStateChanged.next(false);
        // this.store.dispatch({ type: 'STOP_LOADING' });
        this.store.dispatch(new UI.StopLoading());
        console.log("logged in" );
        console.dir(result);
        console.log("hey")
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
    this.afAuth.signOut().then(() => {
      this.store.dispatch(new AuthReducer.SetUnauthenticated());
    }).catch(error => {
      console.log('LOGOUT FAILED', error);
    });
    // this.writingService.cancelSubscriptions();
    // this.authChange.next(false);
    // this.router.navigate(['/login'])
    // this.isAuthenticated = false;
  }

  // private authSuccessful() {
  //   this.isAuthenticated = true;
  //   this.authChange.next(true);
  //   this.router.navigate(['/writing'])
  // }

  // isAuth() {
  //   return this.isAuthenticated;
  // }
}
