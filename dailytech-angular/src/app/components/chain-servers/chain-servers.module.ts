import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { ChainServersComponent } from './chain-servers.component';
import { ConsoleComponent } from './console/console.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    ChainServersComponent,
    ConsoleComponent,
    ServerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule  // Import your shared Material module
  ],
  exports: [ChainServersComponent]
})
export class ChainServersModule { }