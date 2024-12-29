import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignonComponent } from './components/user/signon/signon.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AdminComponent } from './components/user/admin.component';
import { PostsListComponent } from './components/post-dir/posts-list/posts-list.component';
import { PostComponent } from './components/post-dir/post/post.component';
import { PostsViewerComponent } from './components/post-dir/posts-viewer/posts-viewer.component';
import { BlogsListComponent } from './components/blogs-public/blogs-list/blogs-list.component';
import { BlogComponent } from './components/blogs-public/blog/blog.component';
import { WritingComponent } from './components/writing/writing.component';

import { AdminGuardService } from './service/auth/admin-guard.service';
import { UserGuardService } from './service/auth/user-guard.service';
import { BlogsComponent } from './components/blogs-public/blogs/blogs.component';
import { BlogsGridComponent } from './components/blogs-public/blogs-grid/blogs-grid.component';
import { NasaComponent } from './components/nasa/nasa.component';
import { NewsPageComponent } from './components/news/news-page/news-page.component';
import { NewsArticleSearchComponent } from './components/news/news-article-search/news-article-search.component';
 
const routes: Routes = [ 
  { path: '', component: BlogsListComponent },
  { path: 'home', component: HomeComponent },
  
  { path: 'blogs', component: BlogsListComponent }, 
  { path: 'stats', component: BlogsGridComponent }, 
  { path: 'blogs/:cat', component: BlogsComponent},
  { path: 'blog/:id', component: BlogComponent },
  
  { path: 'posts', component: PostsViewerComponent },
  { path: 'writing', component: WritingComponent}, // canActivate:[UserGuardService]},
  { path: 'nasa', component: NasaComponent }, 
  { path: 'news', component: NewsPageComponent },
  { path: 'search', component: NewsArticleSearchComponent },

  { path: 'admin/posts', component: PostsListComponent},
  { path: 'admin/post/:id', component: PostComponent, canActivate:[AdminGuardService]},
  { path: 'admin/:name', component: AdminComponent, canActivate:[AdminGuardService]},


  { path: 'login', component: SignonComponent },
  { path: 'register', component: RegisterComponent },
  // { path: 'writing', loadChildren: './writing.module#WritingModule', canLoad: [UserGuardService] },
  { path: '**', component: HomeComponent },
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
