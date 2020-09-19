import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpIntercepterBasicAuthService } from './service/auth/http-intercepter-basic-auth.service';
import { JwtAuthService } from './service/auth/jwt-auth.service';
import { WritingService } from './service/writing.service';
import { UiService } from './service/ui.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';  
import { PostComponent } from './components/post-dir/post/post.component';  
import { AnimationComponent } from './components/util/animation/animation.component';
import { PostsViewerComponent } from './components/post-dir/posts-viewer/posts-viewer.component';
import { BlogComponent } from './components/blogs-public/blog/blog.component'; 
import { BlogsListComponent } from './components/blogs-public/blogs-list/blogs-list.component';

import { SidenavListComponent } from './components/layout/sidenav-list/sidenav-list.component';
import { FooterComponent } from './components/layout/footer.component';
import { MenuComponent } from './components/layout/menu.component';
import { PostCancelComponent } from './components/post-dir/post-cancel/post-cancel.component'; 
// import { CurrentWritingComponent } from './components/writing/current-writing/current-writing.component';
// import { NewWritingComponent } from './components/writing/new-writing/new-writing.component';
// import { PastWritingsComponent } from './components/writing/past-writings/past-writings.component';
// import { StopWritingComponent } from './components/writing/current-writing/stop-writing.component';
// import { WritingComponent } from './components/writing/writing.component';
import { WritingModule } from './writing.module';
import { AuthModule } from './auth.module';
import { WritingRoutingModule } from './writing-routing.module';

@NgModule({
  declarations: [
    AppComponent,  
    AnimationComponent,
    FooterComponent,
    SidenavListComponent,
    MenuComponent,
    PostComponent,
    // AdminComponent,
    // PostsListComponent,
    PostsViewerComponent,
    BlogComponent,
    // RegisterComponent,
    // SignonComponent,
    // TitleBarComponent,
    BlogsListComponent,
    PostCancelComponent,
          // CurrentWritingComponent,
          // NewWritingComponent,
          // PastWritingsComponent,
          // StopWritingComponent,
          // WritingComponent 
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
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,

    WritingModule,
    AuthModule,
    WritingRoutingModule,
    
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    JwtAuthService,
    WritingService,
    UiService,
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent],
  entryComponents: [PostCancelComponent, MatDialogModule]
})
export class AppModule { }
