import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthenticationService } from '../../../service/auth/admin-authentication.service';
import { JwtAuthService } from '../../../service/auth/jwt-auth.service';
import {  FormGroup, FormControl, Validators, NgForm } from '@angular/forms'; 
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/service/ui.service';

@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrls: ['./signon.component.css']
})
export class SignonComponent implements OnInit, OnDestroy {
  maxDate;
  
  loginForm: FormGroup;
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  authLogin = false;

  adminFlag: boolean = false
  isLoading = false;
  private loadingSubs: Subscription;

  constructor(
    private router: Router, 
    private adminAuthService: AdminAuthenticationService,
    private jwtAuthService: JwtAuthService, 
    private uiService: UiService
  ) { }

  ngOnInit() { 
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]

      }),
      password: new FormControl('', { 
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
    
    this.adminAuthService.executeAuthenticationService(form.value.username, form.value.password)
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

  ngOnDestroy() {
    this.loadingSubs.unsubscribe();
  }
  
}
