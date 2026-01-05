import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import {  NgForm } from '@angular/forms';

import { FirebaseAuthService } from '../../../service/auth/firebase-auth.service';
import { UiService } from '../../../service/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers/app.reducer';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  maxDate;
  // isLoading = false;
  isLoading$ : Observable<boolean>; // $ at end of variable ngrx convention
  private loadingSubs: Subscription;

  constructor(
    private firebaseAuthService: FirebaseAuthService,
    private uiService: UiService,
    // private store: Store<{ ui: fromApp.State }>,
    private store: Store< fromRoot.State > ) {
  }

  ngOnInit()  {
    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
    //   this.isLoading = isLoading;
    // });

    // this.store.subscribe(data => console.log(data));Ver
    // this.isLoading$ = this.store.pipe(map(state => state.ui.isLoading));
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);


    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  };

  onFirebaseRegister(form:NgForm) {
    console.log(form);

    // USER REGISTER (SIDENAV --temporary)
    this.firebaseAuthService.registerUser({
      username: form.value.email,
      email: form.value.email,
      password: form.value.password
    });
  }

  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }
}
