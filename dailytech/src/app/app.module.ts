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
// import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NasaComponent,
    DashboardComponent,
    LoginComponent,
    AdminComponent,
    // AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
