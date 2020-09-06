import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 
import { SignonComponent } from './components/user/signon/signon.component'; 
import { RegisterComponent } from './components/user/register/register.component';
import { AdminComponent } from './components/user/admin.component';
import { PostsListComponent } from './components/post-dir/posts-list/posts-list.component'; 
import { PostComponent } from './components/post-dir/post/post.component'; 
import { PostsViewerComponent } from './components/post-dir/posts-viewer/posts-viewer.component';
import { BlogsListComponent } from './components/post-dir/blogs-list/blogs-list.component';
import { BlogComponent } from './components/post-dir/blog/blog.component';
import { WritingComponent } from './components/writing/writing.component'; 

import { RouteGuardService } from './service/auth/route-guard.service';
import { UserGuardService } from './service/auth/user-guard.service';

const routes: Routes = [
  { path: '', component: BlogsListComponent },
  { path: 'login', component: SignonComponent },
  { path: 'register', component: RegisterComponent }, 
  { path: 'admin/posts', component: PostsListComponent},
  { path: 'admin/post/:id', component: PostComponent, canActivate:[RouteGuardService]},
  { path: 'admin/:name', component: AdminComponent, canActivate:[RouteGuardService]},
  { path: 'blogs', component: BlogsListComponent },
  { path: 'blog/:id', component: BlogComponent },
  { path: 'posts', component: PostsViewerComponent },
  { path: 'writing', component: WritingComponent,  canActivate:[UserGuardService]},
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
  providers: [UserGuardService],
  declarations: []
})
export class AppRoutingModule { }
