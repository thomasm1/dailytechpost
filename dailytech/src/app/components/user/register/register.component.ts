import { Component, OnInit, OnDestroy  } from '@angular/core'; 
import { Subscription } from 'rxjs';
import {  NgForm } from '@angular/forms'; 

import { JwtAuthService } from '../../../service/auth/jwt-auth.service';
import { UiService } from '../../../service/ui.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {
  maxDate;
  isLoading = false;
  private loadingSubs: Subscription;

  constructor( 
    private jwtAuthService: JwtAuthService, private uiService: UiService ) { 
  }

  ngOnInit()  {
    this.loadingSubs = this.uiService.loadingStateChanged.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
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
  
  ngOnDestroy() {
    if (this.loadingSubs) {
      this.loadingSubs.unsubscribe();
    }
  }
}
