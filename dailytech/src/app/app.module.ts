import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/app.reducer';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpIntercepterBasicAuthService } from './service/auth/http-intercepter-basic-auth.service';
import { JwtAuthService } from './service/auth/jwt-auth.service';
import { WritingService } from './service/writing.service';
import { KeysService } from './service/keys.service';
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

import { AuthModule } from './auth.module';
import { WritingModule } from './writing.module';
import { BlogModalComponent } from './components/blogs-public/blog-modal/blog-modal.component';
import { BlogsComponent } from './components/blogs-public/blogs/blogs.component';
import { NasaComponent } from './components/nasa/nasa.component';
// import { WritingRoutingModule } from './writing-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent,
    FooterComponent,
    SidenavListComponent,
    MenuComponent,
    PostComponent,
    PostsViewerComponent,
    BlogComponent,
    BlogsListComponent,
    PostCancelComponent,
    BlogModalComponent,
    BlogsComponent,
    NasaComponent,

    /////// AUTH MODULE ///////
    // AdminComponent,
    // PostsListComponent,
    // RegisterComponent,
    // SignonComponent,
    // TitleBarComponent,

    ////// WRITING MODULE //////
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
    // StoreModule.forRoot({ui: appReducer}),
    StoreModule.forRoot( reducers ),


    WritingModule,
    AuthModule,
    // WritingRoutingModule,

    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    KeysService,
    JwtAuthService,
    WritingService,
    UiService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [PostCancelComponent, MatDialogModule]
})
export class AppModule { }
