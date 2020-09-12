import { Component, OnInit } from '@angular/core'; 
import { JwtAuthService } from '../../../service/auth/jwt-auth.service';
import {  NgForm } from '@angular/forms'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  maxDate;

  constructor( 
    private jwtAuthService: JwtAuthService, ) { 
  }

  ngOnInit()  {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  };

  onRegister(form:NgForm) {
    console.log(form);
    
    // USER REGISTER (SIDENAV --temporary)
    this.jwtAuthService.registerUser({
      username: form.value.username, 
      email: form.value.email, 
      password: form.value.password
    }); 
  }
}
