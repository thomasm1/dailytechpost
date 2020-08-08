import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../../service/basic-authentication.service';
// import { HardcodedAuthService } from '../../service/hardcoded-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .welcome { 
      text-align: center;
      color:whitesmoke;
      background-color: rgba(100,100,100,.1);
    }`
  ]
})
export class LoginComponent implements OnInit {

username = '';
password = '';
errorMessage = 'Invalid Credentials';
invalidLogin = false;

  constructor(
    private router: Router, 
    // private authHardcode: HardcodedAuthService,
    private authBasicService: BasicAuthenticationService 
    ) { }

  ngOnInit()  {
  }

handleBasicAuthLogin() { 
 this.authBasicService.executeAuthenticationService(this.username, this.password)
 .subscribe(
   data => {
     console.log(data)
    this.router.navigate(['admin', this.username])
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
