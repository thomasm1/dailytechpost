import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NasaComponent } from './components/nasa/nasa.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/user/login.component';
import { AdminComponent } from './components/user/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/layout/footer.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { MenuComponent } from './components/layout/menu.component';
import { PostComponent } from './components/post/post.component'; 

@NgModule({
  declarations: [
    AppComponent,
    NasaComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    FooterComponent,
    PostsListComponent,
    MenuComponent,
    PostComponent,
    // AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
