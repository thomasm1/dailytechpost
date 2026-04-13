import { Component, OnInit, EventEmitter , Output, OnDestroy} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { AwsAuthenticationService } from '../../../service/auth/aws-authentication.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers/app.reducer';
import * as AuthActions from '../../../reducers/auth.actions';


@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit { // }, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();

  variable = '';
  // isAdminLoggedIn: boolean = false;
  // isAuth: boolean = false;
  isAuth$!: Observable<boolean>;
  // authSubscription: Subscription;

  constructor(private route: ActivatedRoute,
    public awsAuthService: AwsAuthenticationService,
    private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.variable = this.route.snapshot.params['name'];
    // this.isAdminLoggedIn = this.authService.isAdminLoggedIn();
    // this.authSubscription = this.jwtAuthService.authChange.subscribe(authStatus => {
    //   this.isAuth = authStatus;
    // })
    this.isAuth$ = this.store.select(fromRoot.getIsAuth);
  }


  onClose() {
    this.closeSidenav.emit();
  }

  onLogout() {
    this.onClose();
    this.store.dispatch(new AuthActions.AuthLogoutStart());

  }

  // ngOnDestroy() {
  //   if (this.authSubscription) {
  //     this.authSubscription.unsubscribe();
  //   }
  // }
}
