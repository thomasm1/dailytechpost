import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SignonComponent } from './components/user/signon/signon.component';
import { RegisterComponent } from './components/user/register/register.component';
import { AdminComponent } from './components/user/admin.component';
import { PostsListComponent } from './components/post-dir/posts-list/posts-list.component';
import { PostEntityComponent } from './components/post-dir/post/post-entity.component';
import { PostEntityViewerComponent } from './components/post-dir/posts-viewer/posts-viewer.component';
import { BlogsListComponent } from './components/blogs-public/blogs-list/blogs-list.component';
import { BlogComponent } from './components/blogs-public/blog/blog.component';
import { WritingComponent } from './components/writing/writing.component';

import { AwsGuardService } from './service/auth/aws-guard.service';
import { FirebaseGuardService } from './service/auth/firebase-guard.service';
import { BlogsComponent } from './components/blogs-public/blogs/blogs.component';
import { BlogsGridComponent } from './components/blogs-public/blogs-grid/blogs-grid.component';
import { NasaComponent } from './components/nasa/nasa.component';
import { NewsPageComponent } from './components/news/news-page/news-page.component';
import { NewsArticleSearchComponent } from './components/news/news-article-search/news-article-search.component';
 
const routes: Routes = [ 
  { path: '', component: BlogsListComponent, pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  
  { path: 'blogs', component: BlogsListComponent }, 
  { path: 'stats', component: BlogsGridComponent }, 
  { path: 'blogs/:cat', component: BlogsComponent},
  { path: 'blog/:id', component: BlogComponent },
  
  { path: 'posts', component: PostEntityViewerComponent },
  // { path: 'writing', loadChildren: './writing.module#WritingModule', canLoad: [FirebaseGuardService] },
  { path: 'writing', component: WritingComponent}, 
  { path: 'premium', component: WritingComponent, canActivate:[FirebaseGuardService,AwsGuardService]},  
  { path: 'nasa', component: NasaComponent }, 
  { path: 'news', component: NewsPageComponent },
  { path: 'search', component: NewsArticleSearchComponent },

  { path: 'admin/posts', component: PostsListComponent},
  { path: 'admin/post/:id', component: PostEntityComponent, canActivate:[FirebaseGuardService,AwsGuardService]},
  { path: 'admin/:name', component: AdminComponent, canActivate:[FirebaseGuardService,AwsGuardService]},


  { path: 'login', component: SignonComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: HomeComponent }  // wildcard route last},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [FirebaseGuardService, AwsGuardService],
  declarations: []
})
export class AppRoutingModule { }
