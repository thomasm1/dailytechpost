import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { LoginComponent } from './components/user/login.component'; 
import { AdminComponent } from './components/user/admin.component';
import { PostsListComponent } from './components/post-dir/posts-list/posts-list.component'; 
import { PostComponent } from './components/post-dir/post/post.component'; 
import { RouteGuardService } from './service/route-guard.service';
import { PostsViewerComponent } from './components/post-dir/posts-viewer/posts-viewer.component';

const routes: Routes = [
  { path: '', component: PostsViewerComponent },
  { path: 'login', component: LoginComponent },
  { path: 'posts', component: PostsViewerComponent },
  { path: 'admin/posts', component: PostsListComponent },
  { path: 'admin/post/:id', component: PostComponent, canActivate:[RouteGuardService]},
  { path: 'admin/:name', component: AdminComponent, canActivate:[RouteGuardService]},
  { path: '**', component: PostsViewerComponent },
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
