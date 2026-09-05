import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  UntypedFormGroup, UntypedFormControl, Validators, NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { AwsAuthenticationService } from '../../../service/auth/aws-authentication.service';
import { AuthPolicyService } from '../../../service/auth/auth-policy.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers/app.reducer';
import * as AuthActions from '../../../reducers/auth.actions';

@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrls: ['./signon.component.scss']
})
export class SignonComponent implements OnInit { //, OnDestroy {
  maxDate!: Date;

  loginForm!: UntypedFormGroup;
  email = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  authLogin = false;

  adminFlag: boolean = false
  // isLoading = false;
  isLoading$ : Observable<boolean>; 
  // private loadingSubs: Subscription;

  constructor(
    private router: Router,
    private awsAuthService: AwsAuthenticationService,
    private authPolicy: AuthPolicyService,
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
   handleFirebaseLogin( ){
    console.log(this.loginForm);

    this.store.dispatch(new AuthActions.AuthLoginStart({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }));

  }

    // USER REGISTER (TABS)
  onRegister(form:NgForm) {
    console.log(form);

    // USER REGISTER (SIDENAV --temporary)
    this.store.dispatch(new AuthActions.AuthRegisterStart({ 
      email: form.value.email,
      password: form.value.password
    }));
  }


    // ADMIN AUTHENTICATION ////////////////////////

  adminOpen() {
    this.adminFlag = (this.adminFlag===true)?false:true;
  }

  handleAwsAuthLogin(form:NgForm) {
    console.log(form); 
    const credentials = {
      email: form.value.email,
      password: form.value.password
    };
    // this.adminAuthService.executeAuthenticationService(form.value.email, form.value.password)
      this.awsAuthService.executeAuthAwsService(credentials.email, credentials.password)
    .subscribe(
        data => {
          console.log(data)
          if (this.authPolicy.canAccessAdmin()) {
            this.router.navigate(['admin', credentials.email])
            this.invalidLogin = false
            this.authLogin = true
          } else {
            this.awsAuthService.logout();
            this.invalidLogin = true
            this.authLogin = false
          }
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
