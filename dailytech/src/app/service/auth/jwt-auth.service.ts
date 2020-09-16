import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from '../../models/user.model';
import { AuthData } from '../../models/auth-data.model';
import { WritingService } from '../writing.service';
import { UiService } from '../ui.service';


@Injectable({
  providedIn: 'root'
})
export class JwtAuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  private user: User;

  constructor(
    private router: Router, 
    private afAuth: AngularFireAuth, 
    private writingService: WritingService,
    private uiService: UiService
    ) { }

  registerUser(authData: AuthData) { 
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth.createUserWithEmailAndPassword(
      authData.email,
      authData.password
    )
    .then(result => {
      console.log(result);
      this.uiService.loadingStateChanged.next(false);
      this.authSuccessful();
    })
    .catch(error => {
      console.log(error);
      this.uiService.loadingStateChanged.next(false);
      this.uiService.showSnackBar(error.message, null, 2500  );
    });  
  }

  login(authData: AuthData) { 
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        console.log(result);
        this.uiService.loadingStateChanged.next(false);
        this.authSuccessful();
      })
      .catch(error => {
        console.log(error);
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackBar(error.message, null, 2500  );
      });  
  }

  logout() {
    this.writingService.cancelSubscriptions(); 
    this.authChange.next(false);
    this.router.navigate(['/login'])
    this.isAuthenticated = false;
  }
 

  isAuth() {
    return this.isAuthenticated;
  }

  private authSuccessful() {
    this.isAuthenticated = true;
    this.authChange.next(true);
    this.router.navigate(['/writing'])
  }
}
