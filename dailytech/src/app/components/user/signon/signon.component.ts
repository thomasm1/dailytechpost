import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import {  UntypedFormGroup, UntypedFormControl, Validators, NgForm } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AdminAuthenticationService } from '../../../service/auth/admin-authentication.service';
import { JwtAuthService } from '../../../service/auth/jwt-auth.service';
import { UiService } from 'src/app/service/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers/app.reducer';

@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrls: ['./signon.component.scss']
})
export class SignonComponent implements OnInit { //, OnDestroy {
  maxDate;

  loginForm: UntypedFormGroup;
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  authLogin = false;

  adminFlag: boolean = false
  // isLoading = false;
  isLoading$ : Observable<boolean>; // $ at end of variable ngrx convention
  private loadingSubs: Subscription;

  constructor(
    private router: Router,
    private adminAuthService: AdminAuthenticationService,
    private jwtAuthService: JwtAuthService,
    private uiService: UiService,
    // private store: Store<{ ui: fromApp.State }>,
    private store: Store< fromRoot.State >
  ) { }

  ngOnInit() {
    // this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
    //   this.isLoading = isLoading;
    // });

    // this.store.subscribe(data => console.log(data));Ver
    // this.isLoading$ = this.store.pipe(map(state => state.ui.isLoading));
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    this.loginForm = new UntypedFormGroup({
      email: new UntypedFormControl('', {
        validators: [Validators.required, Validators.email]

      }),
      password: new UntypedFormControl('', {
        validators: [Validators.required] })
    });
  }
   // USER AUTHENTICATION
   handleJwtLogin( ){
    console.log(this.loginForm);

    this.jwtAuthService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });

  }

    // USER REGISTER (TABS)
  onRegister(form:NgForm) {
    console.log(form);

    // USER REGISTER (SIDENAV --temporary)
    this.jwtAuthService.registerUser({
      username: form.value.username,
      email: form.value.email,
      password: form.value.password
    });
  }


    // ADMIN AUTHENTICATION ////////////////////////

  adminOpen() {
    this.adminFlag = (this.adminFlag===true)?false:true;
  }

  handleAdminAuthLogin(form:NgForm) {
    console.log(form);

    // this.adminAuthService.executeAuthenticationService(form.value.username, form.value.password)
      this.adminAuthService.executeAuthJwtService(form.value.username, form.value.password)
    .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['admin', form.value.username])
          this.invalidLogin = false
          this.authLogin = true
        },
        error => {
          console.log(error)
          this.invalidLogin = true
          this.authLogin = false
        }
      )
  }


  // ngOnDestroy() {
  //   if (this.loadingSubs) {
  //     this.loadingSubs.unsubscribe();
  //   }
  // }

}
