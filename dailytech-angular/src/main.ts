import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
// TODO - next ng upgrade
// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';

import { environment } from './environments/environment';
import { AllCommunityModule, ModuleRegistry } from 'ag-charts-community';

if (environment.production) {
  enableProdMode();
}
ModuleRegistry.registerModules([AllCommunityModule]);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// TODO - next ng upgrade
// bootstrapApplication(AppComponent);
