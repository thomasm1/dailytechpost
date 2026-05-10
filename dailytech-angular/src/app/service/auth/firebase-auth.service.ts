import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { firstValueFrom, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import { AuthData } from '../../models/auth-data.model';
import { AUTHENTICATED_USER, AUTH_STORAGE_KEY, TOKEN } from './aws-authentication.service';

export const FIREBASE_USER_INFO_STORAGE_KEY = 'userInfoFirebase'

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  private baseUrl = environment.API_URL;

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient
  ) {}

  authState$(): Observable<any> {
    return this.afAuth.authState;
  }

  registerUser(authData: AuthData): Promise<any> {
    return this.afAuth.createUserWithEmailAndPassword(authData.email, authData.password);
  }

  login(authData: AuthData): Promise<any> {
    return this.afAuth.signInWithEmailAndPassword(authData.email, authData.password);
  }

  async persistFirebaseSession(user: any): Promise<void> {
    const tokenResult = await user.getIdTokenResult();
    const email = user.email || tokenResult.claims?.email || '';
    const bearerToken = `Bearer ${tokenResult.token}`;
    const userInfoFirebase = {
      email,
      uid: user.uid,
      permissions: tokenResult.claims || {},
      claims: tokenResult.claims || {},
      expirationTime: tokenResult.expirationTime,
      issuedAtTime: tokenResult.issuedAtTime,
      signInProvider: tokenResult.signInProvider,
      signInSecondFactor: tokenResult.signInSecondFactor
    };

    sessionStorage.setItem(AUTH_STORAGE_KEY, 'true');
    sessionStorage.setItem(AUTHENTICATED_USER, email);
    sessionStorage.setItem(TOKEN, bearerToken);
    sessionStorage.setItem(FIREBASE_USER_INFO_STORAGE_KEY, JSON.stringify(userInfoFirebase));

    await this.syncFirebaseUser(bearerToken);
  }

  syncFirebaseUser(bearerToken?: string): Promise<any> {
    const token = bearerToken || sessionStorage.getItem(TOKEN);
    if (!token) {
      return Promise.reject(new Error('Firebase bearer token is required to sync the user profile'));
    }

    const headers = new HttpHeaders({
      Authorization: token,
      Accept: 'application/json'
    });

    return firstValueFrom(this.http.get<any>(`${this.baseUrl}/users/me`, { headers }));
  }

  getFirebaseUserInfo(): any | null {
    const rawValue = sessionStorage.getItem(FIREBASE_USER_INFO_STORAGE_KEY);
    if (!rawValue) {
      return null;
    }

    try {
      return JSON.parse(rawValue);
    } catch (error) {
      return null;
    }
  }

  clearFirebaseSession(): void {
    sessionStorage.removeItem(FIREBASE_USER_INFO_STORAGE_KEY);
  }

  logout(): Promise<void> {
    this.clearFirebaseSession();
    return this.afAuth.signOut();
  }
}
