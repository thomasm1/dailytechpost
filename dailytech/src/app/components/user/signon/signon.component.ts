import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../../../service/basic-authentication.service';
import {  NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrls: ['./signon.component.css']
})
export class SignonComponent implements OnInit {

  username = '';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(
    private router: Router,
    // private authHardcode: HardcodedAuthService,
    private authBasicService: BasicAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleBasicAuthLogin(form:NgForm) {
    this.authBasicService.executeAuthenticationService(form.value.username, form.value.password)
      .subscribe(
        data => {
          console.log(data)
          this.router.navigate(['admin', form.value.username])
          this.invalidLogin = false
        },
        error => {
          console.log(error)
          this.invalidLogin = true
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
