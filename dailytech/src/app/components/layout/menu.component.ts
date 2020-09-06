import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { HardcodedAuthService } from 'src/app/service/hardcoded-auth.service';
import { JwtAuthService } from '../../service/jwt-auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, OnDestroy {
  
  @Output() sidenavToggle = new EventEmitter<void>();
  variable: string = '';

  // isAdminLoggedIn: boolean = false;
  isAuth: boolean = false; 
  authSubscription: Subscription;

  constructor(private route: ActivatedRoute, 
  public authService:HardcodedAuthService, 
  private jwtAuthService: JwtAuthService 
  ) { }

  ngOnInit() {
    this.variable = this.route.snapshot.params['name'];
    // this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
    this.authSubscription = this.jwtAuthService.authChange.subscribe(authStatus => {
    this.isAuth = authStatus;
    })
  }

  ngOnDestroy() {
    this.authSubscription.unsubscribe();
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
