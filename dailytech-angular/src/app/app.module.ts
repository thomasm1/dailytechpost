import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { QRCodeComponent } from 'angularx-qrcode';  // Removed library import

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatSidenavModule } from '@angular/material/sidenav';  // Removed redundant import
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { AngularFireAuthModule, provideAuth, getAuth } from '@angular/fire/auth';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'; 
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/app.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
// import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';  // Removed redundant import
import { BlogsModule } from './components/blogs-public/blogs.module';
// PIPES
import { TitleCasePipe } from '@angular/common';
import { PipeCapitalizeCategoryPipe } from './utility/pipe-capitalize-category.pipe';

// SERVICES
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpIntercepterBasicAuthService } from './service/auth/http-intercepter-basic-auth.service';
import { FirebaseAuthService } from './service/auth/firebase-auth.service';
import { WritingService } from './components/writing/writing.service';
import { KeysService } from './service/keys.service';
import { UiService } from './service/ui.service';
import { NewsService } from './components/news/news.service';
import { LoggingService } from './service/logging.service';  // Uncommented import

// COMPONENTS
import { AppComponent } from './app.component';
import { AnimationComponent } from './components/util/animation/animation.component';
import { PostEntityViewerComponent } from './components/post-dir/posts-viewer/posts-viewer.component';
import { PostEntityComponent } from './components/post-dir/post-entity/post-entity.component';
import { BlogComponent } from './components/blogs-public/blog/blog.component';
import { BlogsListComponent } from './components/blogs-public/blogs-list/blogs-list.component';

import { SidenavListComponent } from './components/layout/sidenav-list/sidenav-list.component';
import { FooterComponent } from './components/layout/footer.component';
import { MenuComponent } from './components/layout/menu.component';
import { PostCancelComponent } from './components/post-dir/post-cancel/post-cancel.component';

import { AuthModule } from './components/user/auth.module';
import { WritingModule } from './components/writing/writing.module';
import { BlogModalComponent } from './components/blogs-public/blog-modal/blog-modal.component';
import { BlogsComponent } from './components/blogs-public/blogs/blogs.component';
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

// FEATURES 
import { StarwarsComponent } from './components/features/starwars/starwars.component';
import { MarvelComponent } from './components/features/marvel/marvel.component';  // Already imported
import { GrootService } from './service/groot.service';
// import { WritingRoutingModule } from './writing-routing.module';

// CUSTOM COMPONENTS
import { QrcodeComponent } from './utility/qrcode/qrcode.component';  // Added custom QR code component

@NgModule({
    declarations: [
        AppComponent,
        AnimationComponent,
        FooterComponent,
        SidenavListComponent,
        MenuComponent,
        PostEntityComponent,
        PostEntityViewerComponent,
        // BlogComponent,
        // BlogsListComponent,
        PostCancelComponent,
        BlogModalComponent,
        BlogsComponent,
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
        StarwarsComponent,
        MarvelComponent,  // Added to declarations
        QrcodeComponent,  // Added custom QR code component
        /////// AUTH MODULE ///////
        // AdminComponent,
        // PostsListComponent,
        // RegisterComponent,
        // SignonComponent,
        // TitleBarComponent,
        ////// WRITING MODULE ///////
        // CurrentWritingComponent,
        // NewWritingComponent,
        // GridWritingsComponent,
        // PastWritingsComponent,
        // StopWritingComponent,
        // WritingComponent
    ],
    imports: [
        BlogsModule,
        // QRCodeModule,  // Removed
        // MatDialogModule,  // Removed redundant import
        BrowserModule,
        BrowserAnimationsModule,
        MaterialModule,
        // MatSidenavModule,  // Removed redundant import
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        // provideFirebaseApp(() => initializeApp(environment.firebase)),  // Moved to providers
        // provideAuth(() => getAuth()),  // Moved to providers
        // provideFirestore(() => getFirestore()),  // Moved to providers
        // StoreModule.forRoot({ui: appReducer}),
        StoreModule.forRoot(reducers, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            },
        }),
        WritingModule,
        AuthModule,
        // WritingRoutingModule,
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    ],
    providers: [
        KeysService,
        FirebaseAuthService,
        NewsService,
        WritingService,
        UiService,
        TitleCasePipe,
        GrootService,
        LoggingService,  // Uncommented provider
        // provideFirebaseApp(() => initializeApp(environment.firebase)),  // Moved from imports
        // provideAuth(() => getAuth()),  // Moved to imports
        // provideFirestore(() => getFirestore()),  // Moved from imports
        { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }