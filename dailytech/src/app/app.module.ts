import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component'; 
import { AdminComponent } from './components/user/admin.component';
import { FooterComponent } from './components/layout/footer.component';
import { PostsListComponent } from './components/post-dir/posts-list/posts-list.component';
import { MenuComponent } from './components/layout/menu.component';
import { PostComponent } from './components/post-dir/post/post.component'; 
import { HttpIntercepterBasicAuthService } from './service/http-intercepter-basic-auth.service';
import { AnimationComponent } from './components/util/animation/animation.component';
import { PostsViewerComponent } from './components/post-dir/posts-viewer/posts-viewer.component';
import { BlogComponent } from './components/post-dir/blog/blog.component';
import { RegisterComponent } from './components/user/register/register.component';
import { SignonComponent } from './components/user/signon/signon.component';
import { BlogsListComponent } from './components/post-dir/blogs-list/blogs-list.component';

@NgModule({
  declarations: [
    AppComponent,  
    AdminComponent,
    FooterComponent,
    PostsListComponent,
    MenuComponent,
    PostComponent,
    AnimationComponent,
    PostsViewerComponent,
    BlogComponent,
    RegisterComponent,
    SignonComponent,
    BlogsListComponent, 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
