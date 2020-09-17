import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TitleBarComponent } from './components/layout/title-bar/title-bar.component';
import { MaterialModule } from './material.module';


import { PostsListComponent } from './components/post-dir/posts-list/posts-list.component';
import { AdminComponent } from './components/user/admin.component';
import { RegisterComponent } from './components/user/register/register.component';
import { SignonComponent } from './components/user/signon/signon.component'; 
// import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [RegisterComponent, SignonComponent, TitleBarComponent,  AdminComponent, PostsListComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireAuthModule, 
    // AuthRoutingModule
  ], 
  exports: [ 
    CommonModule, 
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireAuthModule, 
  ]
})
export class AuthModule {}
