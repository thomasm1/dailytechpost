import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

// PIPES
import { TitleCasePipe } from '@angular/common';
import { PipeCapitalizeCategoryPipe } from './utility/pipe-capitalize-category.pipe';
import { SafeHtmlPipe } from './utility/safe-html.pipe';

// SERVICES
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpIntercepterBasicAuthService } from './service/auth/http-intercepter-basic-auth.service';
import { JwtAuthService } from './service/auth/jwt-auth.service';
import { WritingService } from './components/writing/writing.service';
import { KeysService } from './service/keys.service';
import { UiService } from './service/ui.service';
import { NewsService } from './components/news/news.service';
// import { LoggingService } from './service/logging.service';

// COMPONENTS
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
import { BlogsGridComponent } from './components/blogs-public/blogs-grid/blogs-grid.component';
import { NasaComponent } from './components/nasa/nasa.component';

// NEWS
import { NewsPageComponent } from './components/news/news-page/news-page.component';
import { NewsArticleSearchComponent } from './components/news/news-article-search/news-article-search.component';
import { NewsArticleResultsComponent } from './components/news/news-article-results/news-article-results.component';
import { NewsToolBarComponent } from './components/news/news-tool-bar/news-tool-bar.component';
import { HomeComponent } from './components/home/home.component';

// CRYPTO
import { NftsComponent } from './components/crypto/nfts.component';
import { NftComponent } from './components/crypto/nft/nft.component';
import { NftAddComponent } from './components/crypto/nft-add/nft-add.component';
import { ChaindataComponent } from './components/crypto/chaindata/chaindata.component';
import { QrcodeComponent } from './utility/qrcode/qrcode.component';

// FEATURES 
import { StarwarsComponent } from './components/features/starwars/starwars.component';
import { MarvelComponent } from './components/features/marvel/marvel.component';
import { GrootService } from './service/groot.service';
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
    BlogsGridComponent,
    NasaComponent,
    //CRYPTO
    NftsComponent,
    NftComponent,
    NftAddComponent,
    ChaindataComponent,
    
    // TECH NEWS
    NewsPageComponent,
    NewsArticleSearchComponent,
    NewsArticleResultsComponent,
    NewsToolBarComponent,
    HomeComponent,
    
    PipeCapitalizeCategoryPipe,
    SafeHtmlPipe,
    QrcodeComponent,
    StarwarsComponent,

    /////// AUTH MODULE ///////
    // AdminComponent,
    // PostsListComponent,
    // RegisterComponent,
    // SignonComponent,
    // TitleBarComponent,

    ////// WRITING MODULE //////
    // CurrentWritingComponent,
    // NewWritingComponent,
    // GridWritingsComponent,
    // PastWritingsComponent,
    // StopWritingComponent,
    // WritingComponent
  ],
  imports: [
    NgxQRCodeModule,
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
    NewsService,
    WritingService,
    UiService,
    TitleCasePipe,
    SafeHtmlPipe,
    GrootService, 
    // LoggingService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [PostCancelComponent, MatDialogModule]
})
export class AppModule { }
