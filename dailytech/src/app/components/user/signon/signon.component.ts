import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../../../service/auth/basic-authentication.service';
import { JwtAuthService } from '../../../service/auth/jwt-auth.service';
import {  FormGroup, FormControl, Validators, NgForm } from '@angular/forms'; 
// import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrls: ['./signon.component.css']
})
export class SignonComponent implements OnInit {
  loginForm: FormGroup;
  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  authLogin = false;

  constructor(
    private router: Router,
    // private authHardcode: HardcodedAuthService,
    private authBasicService: BasicAuthenticationService,
    private jwtAuthService: JwtAuthService, 
  ) { }

  ngOnInit() { 
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]

      }),
      password: new FormControl('', { 
        validators: [Validators.required] })
    });
  }

    // USER REGISTER (TABS)
  onRegister(form:NgForm) { 
    
    this.jwtAuthService.registerUser({
      username: form.value.username, 
      email: form.value.email, 
      password: form.value.password
    }); 
  }

    // USER AUTHENTICATION 
  handleJwtLogin(form:NgForm){
    console.log(form);
    
    this.jwtAuthService.login({
      username: form.value.username,
      email: form.value.email, 
      password: form.value.password
    });
   
  }

    // ADMIN AUTHENTICATION
  handleAdminAuthLogin(form:NgForm) {
    console.log(form); 
    
    this.authBasicService.executeAuthenticationService(form.value.username, form.value.password)
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
  // handleLogin() { 
  //   if(this.authHardcode.authenticate(this.username, this.password)) {
  //     this.router.navigate(['admin', this.username])
  //     this.invalidLogin = false;
  //   } else {
  //     this.invalidLogin = true;
  //   }
  // }
}
