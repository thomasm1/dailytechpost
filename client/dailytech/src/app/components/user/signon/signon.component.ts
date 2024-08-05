import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../../../service/basic-authentication.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signon',
  templateUrl: './signon.component.html',
  styleUrls: ['./signon.component.css']
})
export class SignonComponent implements OnInit {
 
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;
  username: string;

  constructor(
    private router: Router,
   
    private authBasicService: BasicAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleBasicAuthLogin(form: NgForm) {
    console.log(form);
    this.username = form.value.username;
    console.log(this.username);

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

}
