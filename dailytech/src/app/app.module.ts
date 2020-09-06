import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms'

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpIntercepterBasicAuthService } from './service/http-intercepter-basic-auth.service';
import { JwtAuthService } from './service/jwt-auth.service'
import { AppComponent } from './app.component'; 
import { AdminComponent } from './components/user/admin.component';
import { PostComponent } from './components/post-dir/post/post.component'; 
import { PostsListComponent } from './components/post-dir/posts-list/posts-list.component';
import { AnimationComponent } from './components/util/animation/animation.component';
import { PostsViewerComponent } from './components/post-dir/posts-viewer/posts-viewer.component';
import { BlogComponent } from './components/post-dir/blog/blog.component';
import { RegisterComponent } from './components/user/register/register.component';
import { SignonComponent } from './components/user/signon/signon.component';
import { BlogsListComponent } from './components/post-dir/blogs-list/blogs-list.component';

import { SidenavListComponent } from './components/layout/sidenav-list/sidenav-list.component';
import { FooterComponent } from './components/layout/footer.component';
import { MenuComponent } from './components/layout/menu.component';
import { PostCancelComponent } from './components/post-dir/post-cancel/post-cancel.component';
import { TitleBarComponent } from './components/layout/title-bar/title-bar.component';
import { CurrentWritingComponent } from './components/writing/current-writing/current-writing.component';
import { NewWritingComponent } from './components/writing/new-writing/new-writing.component';
import { PastWritingsComponent } from './components/writing/past-writings/past-writings.component';
import { StopWritingComponent } from './components/writing/current-writing/stop-writing.component';
import { WritingComponent } from './components/writing/writing.component';


@NgModule({
  declarations: [
    AppComponent,  
    AnimationComponent,
    AdminComponent,
    FooterComponent,
    SidenavListComponent,
    MenuComponent,
    PostComponent,
    PostsListComponent,
    PostsViewerComponent,
    BlogComponent,
    RegisterComponent,
    SignonComponent,
    BlogsListComponent,
    TitleBarComponent,
    PostCancelComponent,
    CurrentWritingComponent,
    NewWritingComponent,
    PastWritingsComponent,
    StopWritingComponent,
    WritingComponent 
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    JwtAuthService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [PostCancelComponent, MatDialogModule]
})
export class AppModule { }
