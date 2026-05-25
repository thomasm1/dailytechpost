import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { SidenavListComponent } from './sidenav-list.component';
import { AwsAuthenticationService } from '../../../service/auth/aws-authentication.service';
import { FirebaseAuthService } from '../../../service/auth/firebase-auth.service';
import * as AuthActions from '../../../reducers/auth.actions';

describe('SidenavListComponent', () => {
  let component: SidenavListComponent;
  let fixture: ComponentFixture<SidenavListComponent>;
  let store: MockStore;
  let awsAuthService: jasmine.SpyObj<AwsAuthenticationService>;
  let firebaseAuthService: jasmine.SpyObj<FirebaseAuthService>;

  beforeEach(async () => {
    awsAuthService = jasmine.createSpyObj<AwsAuthenticationService>(
      'AwsAuthenticationService',
      ['isAdminLoggedIn', 'logout']
    );
    firebaseAuthService = jasmine.createSpyObj<FirebaseAuthService>(
      'FirebaseAuthService',
      ['logout']
    );

    await TestBed.configureTestingModule({
      declarations: [SidenavListComponent],
      imports: [
        RouterTestingModule,
        NoopAnimationsModule,
        MatListModule,
        MatIconModule
      ],
      providers: [
        provideMockStore({
          initialState: {
            auth: { isAuthenticated: false },
            ui: { isLoading: false }
          }
        }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                name: 'editor'
              }
            }
          }
        },
        { provide: AwsAuthenticationService, useValue: awsAuthService },
        { provide: FirebaseAuthService, useValue: firebaseAuthService }
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    awsAuthService.isAdminLoggedIn.and.returnValue(false);
  });

  function createComponent(): void {
    fixture = TestBed.createComponent(SidenavListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  function getTextContent(): string {
    return fixture.nativeElement.textContent.replace(/\s+/g, ' ').trim();
  }

  it('should create and read the route param on init', () => {
    createComponent();

    expect(component).toBeTruthy();
    expect(component.variable).toBe('editor');
  });

  it('should emit closeSidenav when the writing link is clicked', () => {
    store.setState({
      auth: { isAuthenticated: true },
      ui: { isLoading: false }
    });

    createComponent();
    spyOn(component.closeSidenav, 'emit');

    const writingLink = fixture.debugElement.query(
      By.css('a[routerLink="/writing"]')
    );
    writingLink.triggerEventHandler('click', { button: 0, ctrlKey: true, metaKey: false, shiftKey: false });

    expect(component.closeSidenav.emit).toHaveBeenCalled();
  });

  it('should show the login link when the user is not authenticated', () => {
    createComponent();

    const content = getTextContent();

    expect(content).toContain('Login');
    expect(content).not.toContain('Logout');
  });

  it('should show the logout button when the store auth state is true', () => {
    store.setState({
      auth: { isAuthenticated: true },
      ui: { isLoading: false }
    });

    createComponent();

    const content = getTextContent();

    expect(content).toContain('Logout');
    expect(content).not.toContain('Register');
    expect(content).not.toContain('Login');
  });

  it('should show the logout button when the admin is logged in', () => {
    awsAuthService.isAdminLoggedIn.and.returnValue(true);

    createComponent();

    const content = getTextContent();

    expect(content).toContain('Logout');
    expect(content).not.toContain('Register');
    expect(content).not.toContain('Login');
  });

  it('should close the sidenav and dispatch logout', () => {
    createComponent();
    spyOn(component, 'onClose').and.callThrough();
    spyOn(store, 'dispatch');

    component.onLogout();

    expect(component.onClose).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(new AuthActions.AuthLogoutStart());
  });
});
