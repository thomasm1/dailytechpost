import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { LoginComponent } from '../components/user/login.component'; 
import { AdminComponent } from '../components/user/admin.component';
import { PostsListComponent } from '../components/posts-list/posts-list.component'; 
import { PostComponent } from '../components/post/post.component';

import { RouteGuardService } from '../service/route-guard.service';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/posts', component: PostsListComponent },
  { path: 'admin/post/:id', component: PostComponent, canActivate:[RouteGuardService] },
  { path: 'admin/:name', component: AdminComponent, canActivate:[RouteGuardService]},
  { path: '**', component: DashboardComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
