import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { HardcodedAuthService } from '../../service/hardcoded-auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username = '';
password = '';
errorMessage = 'Invalid Credentials';
invalidLogin = false;

  constructor(private router: Router, public authHardcode: HardcodedAuthService) { }

  ngOnInit(): void {
  }

handleLogin() { 
  if(this.authHardcode.authenticate(this.username, this.password)) {
    this.router.navigate(['admin', this.username])
    this.invalidLogin = false;
  } else {
    this.invalidLogin = true;
  }
}

}
