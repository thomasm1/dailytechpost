import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

import { AuthData } from '../../models/auth-data.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  constructor(private afAuth: AngularFireAuth) {}

  authState$(): Observable<any> {
    return this.afAuth.authState;
  }

  registerUser(authData: AuthData): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(authData.email, authData.password);
  }

  login(authData: AuthData): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(authData.email, authData.password);
  }

  logout(): Promise<void> {
    return this.afAuth.signOut();
  }
}
